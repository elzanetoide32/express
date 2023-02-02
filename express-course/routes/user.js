function UserRoute(app) {
  app.get("/username", (req, res) => {
    res.send("username route");
  });
  app.get("/profile", (req, res) => {
    res.send("profile page");
  });
}
module.exports=UserRoute