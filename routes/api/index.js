const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./books");

// API Routes
router.use("/books", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
