const HomeController = {
  showHomePage: (req, res)=>{

    res.render("home.ejs");
  },
  showAboutPage: (req, res)=>{
    res.render("about.ejs");
  }
}

module.exports = HomeController;