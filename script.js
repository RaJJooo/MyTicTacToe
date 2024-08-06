let boxes=document.querySelectorAll('.box');
let turnX=true;
const cond=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let resetbutton=document.querySelector('.resetbtn');
const winnerdisp=document.querySelector('.winnerbox');
const outercubebtn=document.querySelector('.outercube');
const btn11=document.querySelector('.btn1');
const btn22=document.querySelector('.btn2');
const btnid11=document.getElementById('btnid1');
const btnid22=document.getElementById('btnid2');
const imgg=document.querySelector('.img');

const unfortunatebtn=document.querySelector('.unfortunate');
const drawbtn=document.querySelector('.draw');
const imgg2=document.querySelector('.img2');

let countX=0;
let countY=0;

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(box.innerHTML==='')
        {
            if(turnX)
            {
                box.innerHTML='X';
                btnid22.style.backgroundColor='#ed8b8b';
                btnid11.style.backgroundColor='white';
            }
            else
            {
                box.innerHTML='O';
                btnid11.style.backgroundColor='#ed8b8b';
                btnid22.style.backgroundColor='';
            }
            turnX=!turnX;
        }
        checkwinner();
        if(box.innerHTML==='X')
            countX++;
        if(box.innerHTML==='O')
            countY++;
        if((countX===4 && countY===5) ||(countX===5 && countY===4))
            drawcond();
    });
});

let checkwinner=()=>{
    for(i of cond)
    {
        let val1=boxes[i[0]].innerHTML;
        let val2=boxes[i[1]].innerHTML;
        let val3=boxes[i[2]].innerHTML;
        
        if(val1!='' && val2!='' && val3!='')
        {
            if(val1===val2 && val2===val3)
            {
                removeitems();
                displaywinner(val1);
            }
        }
        
    }
    
}
let drawcond=()=>{
    unfortunatebtn.classList.remove("hide");
    drawbtn.classList.remove("hide");
    imgg2.classList.remove("hide");
    resetbutton.innerText="NEW GAME";
    removeitems();
}
let removeitems=()=>{
    outercubebtn.classList.add("hide");
    btn11.classList.add("hide");
    btn22.classList.add("hide");
}
let displaywinner=(val1)=>{
    imgg.classList.remove("hide");
    winnerdisp.classList.remove("hide");
    winnerdisp.innerHTML = `CONGRATS.. Winner is ${val1}`;
    resetbutton.innerText="NEW GAME";
}
resetbutton.addEventListener("click",()=>{  
    boxes.forEach((box)=>{
        box.innerHTML='';
    })
    countX=0;
    countY=0;
});
resetbutton.addEventListener("click",()=>{
    outercubebtn.classList.remove("hide");
    btn11.classList.remove("hide");
    btn22.classList.remove("hide");
    imgg.classList.add("hide");
    winnerdisp.classList.add("hide");
    resetbutton.innerText="RESET";
    unfortunatebtn.classList.add("hide");
    drawbtn.classList.add("hide");
    imgg2.classList.add("hide");
});
