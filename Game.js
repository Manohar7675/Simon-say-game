let gameseq=[];
let userseq=[];

let btns=["green","red","yellow","blue"]

let start=false;
let level=0;
let h2 =document.querySelector("h2");
let h3=document.querySelector("h3");
let score=0;

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game started")
        start=true;

        levelup();
    }

});
function buttonflash(btn){
      btn.classList.add("flash")
      setTimeout(function(){
            btn.classList.remove("flash")
      },250)
}
function userflash(btn){
    btn.classList.add("userflash")
      setTimeout(function(){
            btn.classList.remove("userflash")
      },250)
}

function levelup(){
    level++;
     userseq=[];
        h2.innerText = `level ${level}`;
    
    let randomindex=Math.floor(Math.random()*3);

    let randcolor=btns[randomindex]
   
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq)
    
    buttonflash(randbtn);
    
}
 function checkAnswer(ind)
 {
   // console.log("level",level)
    if(userseq[ind]===gameseq[ind])
        {
           if(userseq.length===gameseq.length)
            { 
                setTimeout(levelup,1000)
                score++;
            }
        }
        else{
            h2.innerText=`game over! your score ${score}  
            press any key to start the game`
            document.querySelector("body").style.background="red"
            setTimeout(function(){
                document.querySelector("body").style.background="white"   
            } ,150)
            reset();
        }
 }
function btnpress(){
    let btn =this;
    userflash(btn);
    usercolor=btn.getAttribute("id")
    userseq.push(usercolor)
    checkAnswer(userseq.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
    {
        btn.addEventListener("click",btnpress)
    }
function reset()
{
    start =false;
    gameseq=[];
    userseq=[];
    level=0;
    score=0;
}
