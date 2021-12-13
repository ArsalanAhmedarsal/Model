const modal = document.querySelector('.model')
const Loginbtn = document.querySelector('.btn')
const clossBtn = document.querySelector('.close')

Loginbtn.addEventListener('click', openModel)
clossBtn.addEventListener('click', CloseModel)
window.addEventListener('click', outsideClick)

function openModel () {
    modal.style.display = 'Block';
    
}

function CloseModel () {
    modal.style.display = 'none';
    
}

function outsideClick (e) {
    if(e.target ==modal) {
        CloseModel()
    }
}