var nameErr=document.getElementById('name-err');
var emailErr=document.getElementById('email-err');
var phnErr=document.getElementById('phn-num');
var mssgErr=document.getElementById('mssg-err');
var submitErr=document.getElementById('submit-err');

function validateName(){
    var name=document.getElementById("cont-name").value;
    if(name.length==0){
        nameErr.innerHTML='Name is required';   
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErr.innerHTML='Write FUll Name';
        return false;
    }
    nameErr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhn(){
    console.log("Reached");
    var num=document.getElementById("phnNumber").value;
    if(num.length==0){
        phnErr.innerHTML='Phone no is Required';
        return false;
    }
    if(num.length!=10){
        phnErr.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(!num.match(/^[0-9]{10}$/)){
        phnErr.innerHTML='Only Digits';
    }
    phnErr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    var em=document.getElementById('emailval').value;
    if(em.length==0){
        emailErr.innerHTML='Email is required';
        return false;
    }
    if(!em.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErr.innerHTML='Inavlid Email';
        return false;
    }
    emailErr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatemssg(){
    var messg=document.getElementById('conmssg').value;
    var req=30;
    var left=req-messg.length;
    if(left>0){
        mssgErr.innerHTML=left+' more characters Long';
        return false;
    }
    mssgErr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName()||!validatePhn()||!validateEmail()||!validatemssg()){
        submitErr.style.display='block';
        submitErr.innerHTML='Please fix error to submit';
        setTimeout(function(){submitErr.style.display='none';},3000);
        return false;
    }

}