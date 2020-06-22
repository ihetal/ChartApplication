const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE = require("./config/config");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
const sequelize = require("sequelize");
const sqldb = require("./config/sqlDB");
let user = "";

try {
  sqldb.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE.CLIENT_ID,
      clientSecret: GOOGLE.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    function (accessToken, refreshToken, profile, cb) {
      user = profile;

      return cb(null, profile);
    }
  )
);
passport.serializeUser(function (profile, done) {
  done(null, profile);
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});

//Session
app.use(
  require("express-session")({
    secret: "chart",
    resave: true,
    saveUninitialized: true,
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);
app.get("/api/logout", (req, res) => {
  user = "";
});
app.get("/api/userprofile", (req, res) => {
  if (user !== "") {
    res.status(200).send({ isAuthenticated: true, username: user.displayName });
  } else {
    res.status(403).send({ isAuthenticated: false });
  }
});
//Gets the distinct filter values
app.get("/api/filters", (req, res) => {
  const promise1 = sqldb.query("select distinct degree_t from `placements` ", {
    type: sequelize.QueryTypes.SELECT,
  });
  const promise2 = sqldb.query(
    "select distinct specialisation from `placements` ",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  Promise.all([promise1, promise2]).then(([result1, result2]) =>
    res.status(200).send({ degree: result1, specialization: result2 })
  );
});
app.get("/api/chartdata", (req, res) => {
  const promise1 = sqldb.query(
    "select round(avg(salary),0) as Avg_Salary from `placements` where salary is not null",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  const promise2 = sqldb.query(
    "select count(*) as Total_Placed from `placements` where status='Placed'",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );

  const promise3 = sqldb.query(
    "SELECT degree_t as label,count(*) as value FROM `placements` where status='Placed' group by degree_t",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  const promise4 = sqldb.query(
    "select gender,degree_t,degree_p,specialisation,mba_p,status,workex from `placements` ",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  Promise.all([promise1, promise2, promise3, promise4])
    .then(([result1, result2, result3, result4]) =>
      res.status(200).send({
        avg_salary: result1[0],
        total_placed: result2[0],
        by_degree: result3,
        tabledata: result4,
        message: "Success",
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(403).send({ message: "Something went wrong" });
    });
});

app.post("/api/datafiltered", (req, res) => {
  let { gender, degree, specialization, workex } = req.body;
  if (gender === "") gender = "%";
  if (degree === "") degree = "%";
  if (specialization === "") specialization = "%";
  if (workex === "") workex = "%";
  const promise1 = sqldb.query(
    "select round(avg(salary),0) as Avg_Salary from `placements` where salary is not null and gender like :gender and degree_t like :degree and workex like :workex and specialisation like :specialisation",
    {
      replacements: {
        gender,
        degree,
        workex,
        specialisation: specialization,
      },
      type: sequelize.QueryTypes.SELECT,
    }
  );
  const promise2 = sqldb.query(
    "select count(*) as Total_Placed from `placements` where status='Placed' and gender like :gender and degree_t like :degree and workex like :workex and specialisation like :specialisation",
    {
      replacements: {
        gender,
        degree,
        workex,
        specialisation: specialization,
      },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  const promise3 = sqldb.query(
    "SELECT degree_t as label,count(*) as value FROM `placements` where status='Placed' and gender like :gender and degree_t like :degree and workex like :workex and specialisation like :specialisation group by degree_t",
    {
      replacements: {
        gender,
        degree,
        workex,
        specialisation: specialization,
      },
      type: sequelize.QueryTypes.SELECT,
    }
  );
  const promise4 = sqldb.query(
    "select gender,degree_t,degree_p,specialisation,mba_p,status,workex from `placements` where  gender like :gender and degree_t like :degree and workex like :workex and specialisation like :specialisation",
    {
      replacements: {
        gender,
        degree,
        workex,
        specialisation: specialization,
      },
      type: sequelize.QueryTypes.SELECT,
    }
  );
  Promise.all([promise1, promise2, promise3, promise4])
    .then(([result1, result2, result3, result4]) =>
      res.status(200).send({
        avg_salary: result1[0],
        total_placed: result2[0],
        by_degree: result3,
        tabledata: result4,
        message: "Success",
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(403).send({ message: "Something went wrong" });
    });
});

if (process.env.NODE_ENV === "production") {
  //Static folder
  app.use(express.static(path.join(__dirname, "/public/")));

  //Handle single page application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
