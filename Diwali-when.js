diwali=(date,month)=>{
ans = 0;
for (var i = new Date().getMonth() + 2; i < month; i++) {
     if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
          ans = ans + 31;
     } else if (i == 2) {
          ans = ans + 28;
     }
     else {
          ans = ans + 30;
     }
}
return ans + date + (30 - new Date().getDate());
}
module.exports=diwali;