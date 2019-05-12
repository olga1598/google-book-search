const express = require("express");
const router = express.Router();
const booksController = require("../../controllers/bookController");


// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

// // @route            GET api/users
// // @description      Test route
// // @access           Public (if you need a token or not. Private - need one, public - not)
// router.get("/", (req, res) => res.send("User route"));


// // @route            GET api/profile/user/:user_id
// // @description      Get profile by user id
// // @access           Public (if you need a token or not. Private - need one, public - not)
// router.get("/user/:user_id", async (req, res) => {
//     try {
//         const profile = await Profile.findOne({ user: req.params.user_id }).populate("user", ["name", "avatar"]);

//         if(!profile) return res.status(400).json({ msg: "Profile not found" });

//         res.json(profile);
//     } catch (error) {
//         console.error(error.message);

//         //if the id is the wrong length
//         if(error.kind == "ObjectId") {
//             if(!profile) return res.status(400).json({ msg: "Profile not found" });
//         }
//         res.status(500).sendDate("Server Error");
//     }
// })
