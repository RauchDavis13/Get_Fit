const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });


// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static("images"));

// Route to display static src images
app.get("/static", (req, res) => {
  res.render("static");
});

// Route to display dynamic src images
app.get("/dynamic", (req, res) => {
  imageList = [];
  imageList.push({ src: "public/images/workout1.jpg", name: "w1" });
  imageList.push({ src: "public/images/workout2.jpg", name: "w2" });
  imageList.push({ src: "public/images/workout3.jpg", name: "w3" });
  res.render("dynamic", { imageList: imageList });
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => (console.log(`Now listening on port ${PORT}`), console.log('----------------')));
});