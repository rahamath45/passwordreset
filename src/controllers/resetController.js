
import jwt from "jsonwebtoken"
import { sendEmail } from "../services/sendEmail.js";
import User from "../models/User.js";
import bcrypt  from "bcryptjs";


export const forgotpassword = async (req,res) =>{
       const { email } = req.body;
       try{
         const user = await User.findOne({email});
         if(!user){
              return res.status(400).json({
                status:"error",
                message:"user not found",
            })
         }
        const token = jwt.sign(
                 { id: user._id },
                process.env.JWT_AUTH_SECRET_KEY,
                  { expiresIn: "15m" }
               );

        const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;
         await sendEmail(user.email,"password reset",`<p> you are recieving the email because you has requested a password reset for your account</p>
            <p>click <a href="${resetLink}">here</a>  to reset you password</p>`)
         res.status(200).json({
                status:"success", 
                message:"password reset link sent to email",
                token
         })
       }catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const resetpassword = async (req,res) =>{
  const { token } = req.params;
  const { password } = req.body;

 
    // ✅ Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_AUTH_SECRET_KEY);

    // Find user
    const user = await User.findById(decoded.id);
    if (!user) {
        return res.status(400).json({
          status:"error",
         message: "User not found" 
        });
    }
    // Hash new password
       const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        
        res.status(200).json({
            status:"success",
            message:"user logged in successfully",
            data:{
                token
            }
        })
 
}