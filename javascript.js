
 function myLoad ()
  { let preload = document.getElementById('loding');
    let changeid = document.getElementById('ny');
      preload.style.display = 'none';
      changeid.setAttribute('id','chy');

   }
   function mui(){
    let gyo =document.querySelector("#list");
    let nj=document.querySelector(".bac");
    nj.classList.toggle("backbt");
    gyo.classList.toggle("listr");
  
  }//document.querySelector('.backbt').addEventListener('click',mui);
function nut(){
  let fut=document.querySelector(".vuj");
  let but=document.querySelector(".listtop");
  let dug=document.querySelector(".burger");
  fut.classList.toggle("buj");
  but.classList.toggle("buj");
  dug.classList.toggle("onburger");
}
  { 
function change() {
    let gt = document.querySelector("#list");
    let hyy = document.querySelector(".burger");
    let ny = document.querySelector(".bac");
    gt.classList.toggle("listr");
    hyy.classList.toggle("onburger");
    ny.classList.toggle("backbt");
    
}
document.querySelector('.burger').addEventListener('click',change);
}

function etu(){
  let bt = document.querySelector("#bbd");
  let yui=document.querySelector(".btstyle");
  bt.classList.toggle("bdpart");
  yui.classList.toggle("btstyle-active");
}
function suB(){
  window.open("https://youtu.be/oO5k-0QpxTk","_blank");
  

}