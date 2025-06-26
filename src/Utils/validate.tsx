export const checkValidData = (emailOrPhoneNo, password , name , isSignInForm) =>{
    //If I press button it should show me email or password is valid or not if not then send me an error message else authenticate the user and render him to the browse page
    //lets use regex to validate email and password
    const isEmailValid = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailOrPhoneNo) || /^[6-9]\d{9}$/.test(emailOrPhoneNo);
    const isPasswordValid = /^@(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password);
    const isNameValid = /^[a-zA-Z\s]+$/.test(name);

    if (!isSignInForm && !isNameValid) {
        return "Name must contain only letters and spaces";
    }
    if (!isEmailValid) {
        return "Invalid email format or phone number";
    }
    if (!isPasswordValid) {
        return "Password must be at least 8 characters long and contain at least one letter, one number, one special character, and one uppercase letter";
    }
    return null; // No errors, return null
} 