import { Router } from "express"; // Router added
import * as userController from "../controllers/user.controller.js"; // User Controller
import * as userMiddleware from "../middlewares/user.middleware.js"; // User middleware

const router = Router(); // Router Vairable Created

router.post(
  "/register",
  userMiddleware.registerUserValidation,
  userController.createUserController
);

router.post(
  "/login",
  userMiddleware.loginUserValidation,
  userController.loginUserController
);

router.get("/profile", userMiddleware.authUser, (req, res) => {
  res.json(req.user);
});

// router.get(
//   "/logout",
//   userMiddleware.authUser,
//   userController.logoutUserController
// );

// router.get(
//   "/get-messages",
//   userMiddleware.authUser,
//   userController.getMessagesController
// );

export default router;
