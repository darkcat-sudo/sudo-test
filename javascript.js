{var preload = document.getElementById('loding');
function myLoad (){
    preload.style.display = 'none';
}
}
function change() {
    let gt = document.querySelector(".listr");
    gt.classList.toggle("listrtg")
}
document.querySelector('.burger').addEventListener('click',change);