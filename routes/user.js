const express = require("express")
const router = express.Router();

const {login , signUp} = require("../controller/Auth.js")
const {auth , isStudent , isAdmin} = require("../middleware/auth")

router.post("/login" , login);
router.post("/signup" , signUp)

// testing protected route for single middleware
router.get("/test" , auth  , (req,res) => {
    res.json({
        success:true,
        message:"Welecome to the protected route for the TEST"
    })
})

// Protected Route
router.get("/student" , auth , isStudent , (req,res) => {
    res.json({
        success:true,
        message:"Welecome to the protected route for the student"
    })
})

router.get("/admin" , auth , isAdmin , (req,res) => {
    res.json({
        success:true,
        message:"Welecome to the protected route for the Admin"
    })
})

module.exports = router;