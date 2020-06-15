function here(){
    computer=Math.floor(Math.random() * Math.floor(3))
    user=document.querySelector('input[name="option"]:checked').value;
    if(user==0){
        alert((user==0&&computer==1?'Computer wins':((user==0&&computer==2)?'User wins':'Draw')))
    }
    else if(user==1){
        alert((user==1&&computer==2?'Computer wins':((user==1&&computer==0)?'User wins':'Draw')))
    }
    else{
        alert((user==2&&computer==0?'Computer wins':((user==2&&computer==1)?'User wins':'Draw')))
    }
}