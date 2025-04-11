let winningpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let x=true;
let boxes=document.querySelectorAll(".box");
let reset_button=document.querySelector("#reset");
let msg=document.querySelector("#winner");


boxes.forEach((box)=>{
    box.addEventListener("click", function () {
       if(x){
        box.innerHTML="x";
        x=false;
       }else{
        box.innerHTML="o";
        x=true
       }
       box.disabled=true;
       checkwinner();
    });
});


const checkwinner=()=>{
    for(let pattern of winningpattern){

        let a=boxes[pattern[0]].innerText;
        let b=boxes[pattern[1]].innerText;
        let c=boxes[pattern[2]].innerText;

        if(a!="" && b!="" && c!=""){
            if(a===b && b===c){
                document.querySelector("#winner").innerText=`${a} win the game`;
                console.log(`${a} win the game`);

                boxes.forEach((box)=>{
                    box.disabled=true;
                });
            }
        }
        } 
}


reset_button.addEventListener("click",()=>{
    boxes.forEach(box => {
        box.innerText="";
        box.disabled=false;

    });
    msg.innerText="";
}
);
