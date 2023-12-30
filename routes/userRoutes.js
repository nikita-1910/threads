import express from "express";
import {getUserProfile, followUnFollowUser, loginUser, signupUser, logoutUser, updateUser} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router=express.Router();

// router.get("/signup", (req, res)=>{
//     res.send("Signed up successfully");
// })

router.get("/profile/:query", getUserProfile);
// router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser); // Toggle state(follow/unfollow)
router.put("/update/:id", protectRoute, updateUser);
// router.put("/freeze", protectRoute, freezeAccount);


export default router;
