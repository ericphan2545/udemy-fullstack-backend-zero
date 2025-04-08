
const getHomepage = (req, res) => {
  res.send("Hello World!");
};

const getHoidanit = (req, res) => {
  res.render("example.ejs");
};


module.exports = { getHomepage, getHoidanit };