let userscore = 0;
let compscore = 0;

let choices= document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");



const showWinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore ++;
        userscorepara.innerText = userscore;
        msg.innerText=`you won! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore ++;
        compscorepara.innerText = compscore;
        msg.innerText=`you loss! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

}

const gencompchoice = () =>{
    const options = ["Rock", "Paper", "Scissor"];
    const randidx = Math.floor(Math.random() *3);
    return options[randidx];
}


const gamedraw = () =>{
    msg.innerText= "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31"
}


const playgame = (userchoice,)=>{
    console.log(" user choice = " , userchoice);
    //genertae comp choice
    const compchoice = gencompchoice();
    console.log(" comp choice = " , compchoice);

    if(userchoice === compchoice){
        gamedraw();
    }
    else{
        let userwin=true;
        if(userchoice ==="Rock"){
            //paper, scissor
             userwin = compchoice ==="paper" ? false : true;
        }
        else if(userchoice==="Paper") {
            //rock, scissor
            userwin =  compchoice ==="Scissor" ? false : true;
        }else {
            //rock paper
             userwin = compchoice=="rock" ? false : true;
        }
        showWinner(userwin, userchoice,compchoice);
    }
}


 choices.forEach( (choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice= choice.getAttribute("id");
        // console.log("choice was clicked", UserchoiceId); 
        playgame(userchoice);
    })
 })
