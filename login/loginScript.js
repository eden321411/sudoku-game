//**** LOGIN PAGE *****/

//**user name & password validation**//
function loginButton() {

    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    if (username == 'abcd' && password == '1234') {
        localStorage.setItem('user_name', username);
        window.location.href = '../welcome/welcomeIndex.html'; //relative to domain
    }
    else if (username != 'abcd') {
        document.getElementById('validUserName').innerHTML = 'Please enter valid Username';
    }
    else if (password != '1234') {
        document.getElementById('validUserName').innerHTML = '';
        document.getElementById('validPassword').innerHTML = 'Please enter valid Password';
    }
}
