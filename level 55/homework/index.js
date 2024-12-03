 //ფუნქცია პაროლის ვალიდაციისთვის
function validatePassword(password) {
    const passwordPattern = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (password.length < 4 || password.length > 12) {
        return "password must be 4 to 12 characters long.";
    }
    if (password.test(password)) {
        return "password shouldn't contain empty spaces.";
    }
    if (!passwordPattern.test(password)) {
        return "password should contain numbers or letters, '-', '.' or '_'.";
    }
    return "password isn't valid";
}
