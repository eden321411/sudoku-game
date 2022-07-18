//**** WELCOME PAGE *****/

function getUsernameFromLocalStoreg() {
    document.getElementById('welcome').innerHTML = `Welcome ${localStorage.getItem('user_name')}`;
}

function selectLevelButton(cellsToHide) {
    localStorage.setItem('level', cellsToHide);
    window.location.href = '../sudokuGamePage2/sudokuGameIndex.html';
}

