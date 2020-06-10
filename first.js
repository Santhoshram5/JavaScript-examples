var a=1
var b=2
var c=-3
var d=1.0
console.log(1+2-3+1.0)

var e=3
var f=5
if(e > 0 && f > 0){
    console.log(e>f?e-f:f-e)
}

var g=7
console.log(g*Math.PI)

var h='Javascript'
console.log(h.split('').reverse().join(''))

ans=1
for(var i=1;i<=f;i++){
    ans=ans*i
}
console.log(ans);

x='abc'
if(x=='ping')
  console.log('pong')
else if(x=='beep')
  console.log('boop')
else
console.log('ping pong! beep boop')

breath=5;
height=6;
console.log(0.5*breath*height);

x=5
console.log(x*x)

x=6
console.log(Math.PI*x*x)

l=4
w=5
console.log(l*w)

r=5
h=4
console.log(2*Math.PI*r*(h+r))

console.log(new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate())



console.log( (a==b?'equals':(a>b)?'a is greater':'a is smaller'))


var ddate=14;
var dmonth=11;
ans=0;
for(var i=new Date().getMonth()+2;i<dmonth;i++){
   if(i==1||i==3||i==5||i==7||i==8||i==10||i==12){
        ans=ans+31;
   }else if(i==2){
        ans=ans+28;
   }
   else{
        ans=ans+30;
   }
}
console.log(ans+ddate+(30-new Date().getDate()))

milliseconds=1
console.log(milliseconds/1000)
console.log(milliseconds/(1000*60))
console.log(milliseconds/(1000*60*60))
console.log(milliseconds/(1000*60*60*24))
console.log(milliseconds/(1000*60*60*24*365))



