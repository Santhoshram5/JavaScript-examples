add= (array_of_numbers)=>{
    total=0
   for(i=0;i<array_of_numbers.length;i++){
       total=total+array_of_numbers[i];
   }
   return total;
}
module.exports=add;