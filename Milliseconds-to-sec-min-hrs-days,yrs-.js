convertor=(milliseconds)=>{
    return [milliseconds / 1000 , milliseconds / (1000 * 60) ,  milliseconds / (1000 * 60 * 60) , milliseconds / (1000 * 60 * 60 * 24),  milliseconds / (1000 * 60 * 60 * 24 * 365)]
     
}
module.exports=convertor;