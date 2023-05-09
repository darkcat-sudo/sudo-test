
 function myLoad ()
  { let preload = document.getElementById('loding');
    let changeid = document.getElementById('ny');
      preload.style.display = 'none';
      changeid.setAttribute('id','chy');

   }
 
function change() {
    let gt = document.querySelector(".listr");
    let hyy = document.getElementById('dut');
    gt.classList.toggle("listrtg");
    
}
document.querySelector('.burger').addEventListener('click',change);


function etu(){
  let bt = document.querySelector("#bbd");
  bt.classList.toggle("bdpart");
}
function suB(){
  window.open("https://youtu.be/oO5k-0QpxTk","_blank");
  

}