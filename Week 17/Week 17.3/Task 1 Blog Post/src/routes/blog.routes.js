// Imports
const express = require('express');
const router = express.Router();
const {authUser} = require('../middlewares/auth.middleware');
const blogController = require('../controller/blog.controller');


// Routes

// Get all blog posts
router.get("/", blogController.getAllBlogs);

// Create a new blog post (protected)
router.post("/", authUser, blogController.createBlog);

// Get a single blog post by ID
router.get("/:id", blogController.getBlogById);

// Update a blog post (only author can update)
router.put("/:id", authUser, blogController.updateBlog);

// Delete a blog post (only author can delete)
router.delete("/:id", authUser, blogController.deleteBlog);

// Export
module.exports = router;