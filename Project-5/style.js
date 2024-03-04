let count=0;
const botton=document.querySelectorAll('.bttn');
const val=document.querySelector('.val');
botton.forEach(function(ele){
 ele.addEventListener('click',function(e){
    console.log(e.currentTarget.classList[1])
    if(e.currentTarget.classList[1]==="Inc"){
        count++;
        val.innerHTML=count;
    }
    if(e.currentTarget.classList[1]==="Dec"){
        count--;
        if(count<0)count=0;
        val.innerHTML=count;
    }
    if(e.currentTarget.classList[1]==="Rs"){
        count=0;
        val.innerHTML=count;
    }
    

 })
})