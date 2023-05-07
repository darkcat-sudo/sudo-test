
function myLoad ()
  { let preload = document.getElementById('loding');
    let changeid = document.getElementById('ny');
      preload.style.display = 'none';
      changeid.setAttribute('id','chy');

   }

function change() {
    let gt = document.querySelector(".listr");
    gt.classList.toggle("listrtg")
}
document.querySelector('.burger').addEventListener('click',change);