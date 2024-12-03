//ფუნქცია პაროლის ვალიდაციისთვის
const validChars = 
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._";

for (let i = 0; i<password.length; i++) {
    let isValid = false;
    for (let j = 0; j< validChars.length; j++){
        if (password[i] === validChars[j]) {
            isValid = true;
            break;
        }
    }
    //შეიცავს თუ არა პაროლი შესაბამის სიმბოლოებს
    if (!isValid) {
        MessageChannel.style.color= "red";
        MessageChannel.textContent= 
        "password must only conatin numbers, letters or -, . or _";
        return;
    }
}
// light/dark mode toggle
toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});



























































toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});