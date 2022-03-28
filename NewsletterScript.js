function validation(){
    var name=document.nlform.name.value;
    var email=document.nlform.email.value;
    var at=email.indexOf("@");
    var dot=email.lastIndexOf(".");
    if(name==null || name==""){
        alert("Name can't be blank");
        return false;
    }else if(email =="" || email ==null || at<1 || dot<at+2 || dot+2>email.length){
        alert("Please enter a valid email address");
        return false;
    }else{
        alert("Dear " + name +", you have successfully subscribed for the personalized newsletter");
    }
}