// Validation

$(document).ready(() => {

    $("#loginButton").click((event) =>{
        validate( event, redirect);
    })


    function validate(event, callback){
        var isValid = false;
        
        if(($('#userName').val() === "admin") && ($('#password').val() === "12345")){
            success("userName");
            success("password");
            isValid = true;
            callback(event, isValid);
        }
        else if (($('#userName').val() !== "admin") && ($('#password').val() === "12345")){
            error("userName");
            success("password");
            isValid = false;
            callback(event, isValid);
        }
        else if (($('#userName').val() === "admin") && ($('#password').val() !== "12345")){
            success("userName");
            error("password");
            isValid = false;
            callback(event, isValid);
        }
        else if (($('#userName').val() !== "admin") && ($('#password').val() !== "12345")){
            error("password");
            error("userName");
            isValid = false;
            callback(event, isValid);
        }
    }
    
    function redirect(event, valid){
        if (valid){
            $("#loginButton").attr("formaction","profile.html");
        }
        else{
            event.preventDefault();
        }    
    }

    function error(name){
        $(`#${name}`).css({border:"3px red solid"})
        if(name==="password"){
            $("#errorPassword").text("Invalid Password")
            $("#errorPassword").css({color:"#d92027"})
        }
        if(name==="userName"){
            $("#errorUserName").text("Invalid Username")
            $("#errorUserName").css({color:"#d92027"})
        }
    }

    function success(name){
        $(`#${name}`).css({border:"3px green solid"})
        if(name==="password"){
            $("#errorPassword").text("Password Valid")
            $("#errorPassword").css({color:"green"})
        }
        if(name==="userName"){
            $("#errorUserName").text("Username Valid")
            $("#errorUserName").css({color:"green"})
        }
    }

})