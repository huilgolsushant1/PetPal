const getTest = async (req, res) => {
  res.status(200).json({
    message: "Test api is working!",
  });
};

module.exports = { getTest };
