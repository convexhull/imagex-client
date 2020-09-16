const errorMessageGenerator = (err_msg_code) => {
    let message = "";
    switch(err_msg_code){
        case "USER_ALREADY_EXISTS":
            message = "This Email has already been taken. Please try logging in."
            break;
        case "WRONG_CREDENTIALS":
            message = "Invalid Email or password"
            break;
        case "EMAIL_DOESNOT_EXIST":
            message = "Invalid Email or password"
            break;
        default: 
            message = "Some error occurred"
    }
    return message;
}


export default errorMessageGenerator;