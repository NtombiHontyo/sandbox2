const massaRoute = (req, res) => {
    res.send("Masande Hontyo");
  };  
const taliRoute = (req, res) => {
    res.send("Tali Hontyo");
  };

  const mvikoiRoute = (req, res) => {
    res.send("Mviko Hontyo");
  };  

  module.exports = {
    taliRoute,
    mvikoiRoute,
    massaRoute
  }