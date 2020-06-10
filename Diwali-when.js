var ddate = 14;
var dmonth = 11;
ans = 0;
for (var i = new Date().getMonth() + 2; i < dmonth; i++) {
     if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
          ans = ans + 31;
     } else if (i == 2) {
          ans = ans + 28;
     }
     else {
          ans = ans + 30;
     }
}
console.log('Number of days to Diwali Festivel from today is', ans + ddate + (30 - new Date().getDate()))