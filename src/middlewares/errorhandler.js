
const errorHandler = (err,req,res,next)=>{
      console.log(err.stack);
      res.status(err.status || 500).json({
        status:"error",
        message:err.message || "Internal Server Error"
      })
      next();
}
export default errorHandler;