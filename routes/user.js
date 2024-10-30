const express = require("express");
const db = require("../data/db");

const router = express.Router();

router.use("/blog/category/:category_id", async (req, res) => {
	const category_id = req.params.category_id;

	try {
		const [blogs] = await db.query("select * from blog where category_id =?", [category_id]);
		const [categories] = await db.query("select * from categories");

		res.render("users/blog", {
			title: categories[category_id - 1].title,
			blogs: blogs,
			categories: categories,
			selectedCategory: category_id,
		});
	} catch (error) {
		console.log("Blog Category Page: " + error);
	}
});

router.use("/blog/:blogID", async (req, res) => {
	const id = req.params.blogID;

	try {
		const [blogs] = await db.query("select * from blog where blog_id = ?", [id]);

		const blog = blogs[0];

		if (!blog) {
			res.redirect("/");
		}

		res.render("users/blog-detail", {
			title: blog.title,
			blog: blog,
		});
	} catch (error) {
		console.log("Blog Detailt Page: " + error);
	}
});

router.use("/blog", async (req, res) => {
	const blogs = await db.query("select * from blog");
	const categories = await db.query("select * from categories");

	try {
		res.render("users/blog", {
			title: "Tum Kurslar",
			categories: categories[0],
			blogs: blogs[0],
			selectedCategory: null,
		});
	} catch (error) {
		console.log("Blog List Error: " + error);
	}
});

router.use("/", async (req, res) => {
	const blogs = await db.query("select * from blog");
	const categories = await db.query("select * from categories");

	try {
		res.render("users/index", {
			title: "Populer Kurslar",
			categories: categories[0],
			blogs: blogs[0],
			selectedCategory: null,
		});
	} catch (error) {
		console.log("Home Page Error: " + error);
	}
});

module.exports = router;
