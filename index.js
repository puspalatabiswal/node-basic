var fs = require("fs")/*
var filepath = './sample.txt' ;
console.log("start reading file !!!!")
fs.readFileSync(filepath)
fs.readFile(filepath , function(err , data){
if(err){

	console.log(err)
}
console.log(data.toString())
})
console.log("done reading file")*/

/*how to create file*/

console.log("start write file")
fs.writeFile('./outputt.txt'  ,'hii' , function(err){
	if(err){
 
console.log(err)
	}
	
	})

/*read and write filesystem*/
