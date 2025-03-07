const { z } = require("zod");

// Define the schema for Register
const registerSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email is not valid"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .trim()
    .toLowerCase(),
});

// Middleware function to validate register request
module.exports.validateRegister = (req, res, next) => {
  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }
  next();
};

// Define the schema for Login
const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Email is not valid"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

module.exports.validateLogin = (req, res, next) => {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors });
    }
    next();
  };

  
