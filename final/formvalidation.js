let fnameNode=document.getElementById('fname');
let erroNode1=document.getElementById('error1');

let mnameNode=document.getElementById('mname');
let erroNode2=document.getElementById('error2');

let lnameNode=document.getElementById('lname');
let erroNode3=document.getElementById('error3');

let emailNode=document.getElementById('emailid');
let erroNode4=document.getElementById('error4');


let mobileNode=document.getElementById('mobile');
let erroNode5=document.getElementById('error5');





const errorBorder="2px solid red";
const successBorder="2px solid green";

function validateForm(){
let s1=validate1();
let s2=validate2();
let s3=validate3();
let s4=validate4();
let s5=validate5();

return(s1 && s2 && s3 && s4 && s5 );





}

function validate1(){
    let fname=fnameNode.value;
    erroNode1.innerHTML="";
    if(fname===''){
        erroNode1.innerHTML='name required';
        fnameNode.style.border=errorBorder;
        return false;
    }
    else{
        fnameNode.style.border=successBorder;
        return true;
    }
}

function validate2(){
    mnameNode.style.border=successBorder;
    return true;
}


function validate3(){
    let lname=lnameNode.value;
    erroNode3.innerHTML="";
    if(lname===''){
        erroNode3.innerHTML='last name required';
        lnameNode.style.border=errorBorder;
        return false;
    }
    else{
        lnameNode.style.border=successBorder;
        return true;
    }
}

function validate4(){
    let emailid=emailNode.value;
    erroNode4.innerHTML="";

    let ss1=emailid.substring(0,emailid.indexOf('@'));
    let ss2=emailid.substring(emailid.indexOf('@')+1);

    /* let index=emailid.indexOf('@')
    if(index==0 || index===emailid.length-1) */

    if(emailid===""){
        erroNode4.innerHTML="email id is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!emailid.includes('@')){
        erroNode4.innerHTML="valid email id is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(ss1==="" || ss2===""){
        erroNode4.innerHTML="valid email id ";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=successBorder;
        return true;
    }
}


function validate5(){
    let mobile=mobileNode.value;
    let regExp=new RegExp("^[0-9]{10}$");
    erroNode5.innerHTML="";


    if(mobile===""){
        erroNode5.innerHTML="mobileis required";
        mobileNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(mobile)==false){
        erroNode5.innerHTML="valid enter mobile number is required";
        mobileNode.style.border=errorBorder;
        return false;
    }
    
    else{
        mobileNode.style.border=successBorder;
        return true;
    }
}
