let gameSeq=[];
let userSeq=[];
let color=["yellow","red","green","blue"];
let highScore=0;

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
})
function flash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
    
};


function check(){
    let idx=userSeq.length-1;
    if(userSeq[idx]!==gameSeq[idx]){
        h2.innerHTML=`Game over Your score was <b>${level}</b> 
        <br/>
         press any key to restart`

         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },150)
         score();
         reset();
          return;
    }
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level${level}`
    let idx=Math.floor(Math.random()*4);
    let randomColor=color[idx];
    gameSeq.push(randomColor);
    console.log(gameSeq);


    let ranBtn=document.querySelector(`.${randomColor}`);
    flash(ranBtn);
    
};

function clicked(){
    let btn=this;
    flash(btn);
    let userColor=btn.getAttribute("id");

    userSeq.push(userColor);
    console.log(userSeq);
    check();
};

let btns=document.querySelectorAll(".btn");
for(b of btns){
    b.addEventListener("click",clicked);
};

function reset (){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
};

function score(){
    if(highScore<level){
        highScore=level;
    }
     
    let h3=document.querySelector("h3");
    if(!h3){
        h3=document.createElement("h3");
        document.body.appendChild(h3);
    }
    h3.innerText= `Your Highest Score is ${highScore}`;
}