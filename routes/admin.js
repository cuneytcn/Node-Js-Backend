const express = require("express");

const router = express.Router();

router.use("/blog/create", (req, res) => {
	res.render("admin/blog-create");
});
router.use("/blog/list/:blogID", (req, res) => {
	res.render("admin/blog-edit");
});
router.use("/blog/list", (req, res) => {
	res.render("admin/blog-list");
});

module.exports = router;
