const HomeController = {
  showHomePage: (req, res)=>{

    res.render("home.ejs");
  }
}

module.exports = HomeController;