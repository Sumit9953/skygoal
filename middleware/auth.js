const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.auth = (req,res,next) => {
    try {

        // console.log("cookie" , req.cookies.token);
        // console.log("body" , req.body.token);
        // || req.header("Authorization").replace("Bearer ", "")

    const token = req.cookies.token || req.body.token 

    console.log("Token=>" , token);
      
      if(!token){
        return res.status(401).json({
            success:false,
            message:"Token missing"
        })
      }

      //Verify the token
      try {
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        // console.log(decode);
        req.user = decode

      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"token is invalid"
        })
      }

      //Going to next middleware
      next()

    } catch (error) {
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"something went wrong , while verifying the token"
        })
    }
}

exports.isStudent = (req,res,next) => {
    try {
        if(req.user.role !== "student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for student"
            })
        }

        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success:false,
            message:"user role cannot be verified"
        })
    }
}

exports.isAdmin = (req,res,next) => {
    try {
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin"
            })
        }

        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success:false,
            message:"user role cannot be verified"
        })
    }
}