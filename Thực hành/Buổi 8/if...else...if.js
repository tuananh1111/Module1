let name= prompt('Who are you?');
if (name=='Admin'){
    let password= prompt('Password?');
    if (password=='TheMaster'){
        alert('Welcome');
    }else if (password==null){
        alert('Canceled');
    }else {
        alert('Uwrong password');
    }

}else if (name == null){
    alert('Canceled.')

}else {alert("I don't know you");

}