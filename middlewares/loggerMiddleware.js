
const loggerMiddleware = function (req,res, next){
    console.log(`${req.method} request made to ${req.url}`);
    next();
}

export {loggerMiddleware};