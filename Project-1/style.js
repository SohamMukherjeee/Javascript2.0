const bttns=document.querySelectorAll('.button');
const bdy=document.querySelector("body");
bttns.forEach(function(bttns){
   bttns.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target.id=='grey'||'white' ||'blue'||'yellow' ){
        bdy.style.backgroundColor=e.target.id;
    }
   })
});