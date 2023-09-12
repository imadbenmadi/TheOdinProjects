let main_section = document.querySelector(".game");
let start_section = document.querySelector(".start_game");
let final_section = document.querySelector(".finall_result");
let loading_section = document.querySelector(".loading_section");

let user_img = document.querySelector(".user_logo img");
let computer_img = document.querySelector(".computer_logo img");

const bgMusic = document.getElementById("bg-music");
const win_sound = document.getElementById("win-music");
const lost_sound = document.getElementById("lost-music");
let choises = ['Rock', 'Paper' , 'Scissors'] ;

let sub_result = document.querySelector(".sub_result");
let sub_result_elements = sub_result.querySelectorAll("div");

let computer_score = 0;
let user_score = 0;
let computer_score_html  = document.querySelector(".computer_score")
let user_score_html  = document.querySelector(".user_score")

let rps_writer = document.querySelector(".rps_writer");


let computerChoise_img = document.querySelector(".computer_choise img")
let cmputer_choise_img_source = "logo/question-mark.png"; //default
computerChoise_img.setAttribute("src",cmputer_choise_img_source)  



start_section.style.display = "none";
final_section.style.display = "none";
main_section.style.display = "none";
window.addEventListener("load", function () {
    // hide the loading section 
    loading_section.style.display = "none"
    start_section.style.display = "flex"
    

  const logo = document.querySelector(".start_game_logo img");
    setTimeout(() => {
        logo.classList.add("show-logo");
      
  },500)
});


// work with the first section : start section 
main_section.style.display = "none";
final_section.style.display = "none";
document.querySelector(".start_game_btn div").addEventListener("click",()=>{
    start_section.style.display = "none";
    main_section.style.display = "block";
    // bgMusic.play();
    handle_rps_writer();
});

// work with the main bottons "rock" "paper" "Sceasser"
let bottons = document.querySelectorAll(".btn img")
bottons.forEach((botton)=> {
    
    botton.addEventListener("click",()=>{
        bottons.forEach((b)=>{
            b.parentElement.style.border = "none"
        })
        // botton.parentElement.style.border = "5px solid blue";
        // botton.parentElement.style.borderRadius = "10px"
        
        let playerChoise = botton.getAttribute("data-value");
        let computerChoise = getComputerChoice()
        let result = playRound(playerChoise,computerChoise);
        
        display_result(result)
        
        handle_rps_writer()
    })
})





// work with the final result  btn 
document.querySelectorAll(".play_again_botton").forEach((btn)=>{
    btn.addEventListener("click", () => {
      computer_score = 0;
      user_score = 0;
      computer_score_html.innerHTML = computer_score;
      user_score_html.innerHTML = user_score;

      final_section.style.display = "none";
      main_section.style.display = "block";
    });

})

// work with the bg music 
document.querySelector(".on img").addEventListener("click",()=>{
    document.querySelector(".on").style.display = "none";
    document.querySelector(".off").style.display="block"
    bgMusic.pause();
});
document.querySelector(".off img").addEventListener("click", () => {
  document.querySelector(".on").style.display = "block";
  document.querySelector(".off").style.display = "none";
    bgMusic.play();
});


// work with the night mood
let moon_btn= document.querySelector(".mood img")
moon_btn.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("night_mood")
    rps_writer.classList.toggle("rps_writer_night_mood");
})





// the function used in the project : 
function getComputerChoice(){
    let random_nbr = Math.floor(Math.random() * 3);
    return choises[random_nbr];
}

function handle_computer_choise_img(computer_choise ){
    if(computer_choise == "Rock")
        cmputer_choise_img_source = "logo/stone.png"
    else if (computer_choise == "Paper" )
        cmputer_choise_img_source = "logo/paper.png"
    else if (computer_choise == "Scissors") 
        cmputer_choise_img_source = "logo/scissor.png";
    computerChoise_img.setAttribute("src",cmputer_choise_img_source)  
}


function playRound(playerSelection , computerSelection){
    handle_computer_choise_img(computerSelection);
    sub_result_elements.forEach((e)=>{
        e.style.display = "none";
    })
    if (playerSelection == computerSelection){

        return 0;}
    else if ((playerSelection == choises[0] && computerSelection == choises[1]) || (playerSelection == choises[1] && computerSelection == choises[2]) || (playerSelection == choises[2] && computerSelection == choises[0]))
        return -1;
    else 
        return 1;
} 

function display_result(res){
    if(res == 0)
        document.querySelector(".Tie").style.display = "flex";
    else if(res == 1){
        document.querySelector(".Win").style.display = "flex";
        user_score++;
        user_score_html.innerHTML = user_score;
        
        // the img animation : 
        user_img.classList.toggle("hero_img_scale");
        user_img.addEventListener("transitionend", function () {
          user_img.classList.remove("hero_img_scale");
        });


        if(user_score == 5){
            winner("user")
            return;
        }
    }
    else {
        document.querySelector(".Lose").style.display = "flex";
        computer_score++;
        computer_score_html.innerHTML = computer_score;

        // the img animation : 
        computer_img.classList.toggle("hero_img_scale");
        computer_img.addEventListener("transitionend", function () {
          computer_img.classList.remove("hero_img_scale");
        });


        if (computer_score == 5) {
          winner("computer");
          return;
        }
    }
}

function winner(arg){
    main_section.style.display = "none"
    final_section.style.display="flex";
    document.querySelector(".choises").querySelectorAll("div").forEach((element)=>{
        element.style.border = "none"
    });
    sub_result_elements.forEach((element)=>{
        element.style.display = "none"
    });
    computerChoise_img.setAttribute("src", "logo/question-mark.png");  
  if (arg == "computer") {
    final_section.style.backgroundColor = "rgb(255, 0, 0)";
    final_section.querySelector(".lose").style.display = "flex";
    final_section.querySelector(".win").style.display = "none";
    document.querySelector(".winner_block").style.display = "none";
    document.querySelector(".loser_block").style.display = "block";
    lost_sound.play();
    return;
  }
  if(arg == "user"){
    final_section.style.backgroundColor = "rgb(0, 255, 0)";
    final_section.querySelector(".win").style.display = "block";
    final_section.querySelector(".lose").style.display = "none";
    document.querySelector(".winner_block").style.display = "block";
    document.querySelector(".loser_block").style.display = "none";
    win_sound.play();
    return;
  }
}


// Work With the Rps Writer
function writer (word){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(word);
      }, 500);
    });
}
async function handle_rps_writer(){
    let block = document.querySelector(".rps_writer");
    document.querySelector(".choises").style.display = "none";
    block.innerHTML = await writer("Rock");
    block.innerHTML = await writer("paper");
    block.innerHTML = await writer("seaser");
    block.innerHTML = await writer("");
    
    computerChoise_img.setAttribute("src", "logo/question-mark.png");  
    sub_result_elements.forEach((el)=>{
        el.style.display="none"
    })
    document.querySelector(".choises").style.display = "flex";
}
