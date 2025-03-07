const Blog = require('../models/blog.model');

// Get all blog posts
module.exports.getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find().populate("author", "username email").sort({ createdAt: -1 });
      if(blogs.length === 0) return res.status(200).json({message : "No blog posts"});
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Create a new blog post
exports.createBlog = async (req, res) => {
    try {
      const { title, content, tags } = req.body;
      const newBlog = new Blog({
        title,
        content,
        author: req.user._id, // User from authMiddleware
        tags,
      });
  
      await newBlog.save();
      res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Get a single blog post by ID
exports.getBlogById = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id).populate("author", "username email");
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Update a blog post (only author can update)
exports.updateBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      if (blog.author.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Unauthorized to update this blog" });
      }
  
      const { title, content, tags } = req.body;
      blog.title = title || blog.title;
      blog.content = content || blog.content;
      blog.tags = tags || blog.tags;
  
      await blog.save();
      res.status(200).json({ message: "Blog updated successfully", blog });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Delete a blog post (only author can delete)
exports.deleteBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      if (blog.author.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Unauthorized to delete this blog" });
      }
  
      await blog.deleteOne();
      res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };