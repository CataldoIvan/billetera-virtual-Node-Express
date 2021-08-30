
var getTimes= function(req,res,next){
    console.dir(new Date().toISOString())
    var today = new Date().toISOString().slice(0, 10);
    console.log(today);
    next();
}

module.exports={getTimes};