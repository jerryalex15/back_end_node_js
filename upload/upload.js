const formidable = require('formidable');
const fs =require('fs');

exports.upload =  function(req , res){
    var form = new formidable.IncomingForm();

    form.parse(req,function(err,field,files){
        var oldpath = files.filetoupload.path;
        var newpath = "C:/Users/JERRY ALEX/Desktop/Images/"+files.filetoupload.name;
    
    fs.rename(oldpath,newpath,(err)=>{
        res.send("message envoyé");
    })
})
}
