let player1 = "player1"
let player2 = "player2"

let player1_turn_html = document.querySelector(".player1_turn")
let player2_turn_html = document.querySelector(".player2_turn")

let player1_name_html= document.querySelector(".player1_turn .player_name")
let player2_name_html = document.querySelector(".player2_turn .player_name")
let player1_img_html = document.querySelector(".player1_turn .player_icon")
let player2_img_html = document.querySelector(".player2_turn .player_icon")


let start_game_btn = document.querySelector("button");
let return_home_btn = document.querySelector(".return_home_btn")
let input_error_message = document.querySelector(".input_error_message")

let currnet_turn;
let icons_block = document.querySelector(".icons_block")
let icons = document.querySelectorAll(".icon_item")
let input_icon_p1 = document.querySelector(".input_1 .input_icon")
let input_icon_p2 = document.querySelector(".input_2 .input_icon")

let src_p1 = "Logo/hero/batman.png";
let src_p2 = "Logo/hero/captin america.png"
player1_img_html.setAttribute("src",src_p1)
player2_img_html.setAttribute("src",src_p2)

let opener;
start_game_btn.addEventListener("click", (event) => {
    event.preventDefault()
     player1_input = document.getElementById("input1").value;
     player2_input = document.getElementById("input2").value;


    if (!document.getElementById("input1").value) { 
        player1_input = "player1"
    }
    if (!document.getElementById("input2").value) { 
        player2_input = "player2"
    }
    // error if the player names are the same | null is okk
    if (document.getElementById("input1").value == document.getElementById("input2").value &&
    document.getElementById("input1").value != "" &&  document.getElementById("input2").value != "")
        input_error_message.style.display = "block";
    else {
        input_error_message.style.display = "none";
        currnet_turn = player1_input;
        player1 = player(player1_input , src_p1)
        player2 = player(player2_input , src_p2)
        
        displayController.display_game();    
    }
    player1_name_html.innerHTML = player1.player_name;
    player2_name_html.innerHTML = player2.player_name;
    
});

input_icon_p1.addEventListener("click", ()=>{
    icons_block.style.display = "flex";
    setTimeout(() => {
        icons_block.querySelector(".icons").style.transform = "scale(1)"
    },100)
    opener = input_icon_p1;
})
input_icon_p2.addEventListener("click", ()=>{
    icons_block.style.display = "flex"
    setTimeout(() => {
        icons_block.querySelector(".icons").style.transform = "scale(1)"
    },100)
    opener = input_icon_p2;
})
icons_block.querySelector(".gray_bg").addEventListener("click", () => {
    setTimeout(() => {
        icons_block.style.display = "none"
    },230)
    icons_block.querySelector(".icons").style.transform = "scale(0)"

})

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        change_icon(icon)
        setTimeout(() => {
            icons_block.style.display = "none"
        },230)
        icons_block.querySelector(".icons").style.transform = "scale(0)"
    })
})

function change_icon(icon) {
    if (opener == input_icon_p1) {
        src_p1 = icon.getAttribute("src");
        input_icon_p1.querySelector("img").setAttribute("src", src_p1)
        player1_img_html.setAttribute("src",src_p1)
    }
    else if (opener == input_icon_p2) {
        src_p2 = icon.getAttribute("src");
        input_icon_p2.querySelector("img").setAttribute("src", src_p2)
        player2_img_html.setAttribute("src",src_p2)
    }

}




const Gameboard = (() => {
    let gameboard = [['', '', ''], ['', '', ''], ['', '', '']]
    let result_Element = document.querySelector(".Result");
    
    
    function renderGameBoard() {
        const gameContainer = document.querySelector(".gameBoard");
        gameContainer.innerHTML = ""; // Clear previous content


        return_home_btn.addEventListener("click", () => {
            displayController.display_home()   
            resetGame()
        })
        display_curent_turn(currnet_turn)


        gameboard.forEach((cell_block) => {
            let cell_block_element = document.createElement("div");
            cell_block_element.classList.add("cell_block");
            cell_block_element.classList.add("flex_center");
            cell_block.forEach((cell) => {
                let cell_element = document.createElement("div")
                cell_element.classList.add("cell");
                cell_element.classList.add("flex_center");
                
                cell_element.textContent = cell;
                if (cell_element.textContent == "O")
                    cell_element.style.color= "red"
                
                    
                cell_element.addEventListener("click", () => {
                    if (result_Element.innerHTML === '') {
                        const row = Array.from(gameContainer.children).indexOf(cell_block_element);
                        const column = Array.from(cell_block_element.children).indexOf(cell_element);
                        addMark(row,column)
                    } 
                });
                cell_block_element.appendChild(cell_element);
            })
            gameContainer.appendChild(cell_block_element)    
            
        });
        function display_curent_turn(currnet_turn) {
            player1_turn_html.style.display= "none" 
            player2_turn_html.style.display= "none" 
            player1_turn_html.style.transform = "translateX(-70px)"
            player2_turn_html.style.transform = "translateX(70px)"
            

            if (currnet_turn == player1.player_name){
                player1_turn_html.style.display = "block" 
                setTimeout(() => {
                      player1_turn_html.style.transform = "translateX(0)"
                },100)
                return
            }
            else if (currnet_turn == player2.player_name){
                player2_turn_html.style.display = "block" 
                setTimeout(() => {
                      player2_turn_html.style.transform = "translateX(0)"
                },100)
                return
            }
        }
        function addMark(row, column ) {
            if (gameboard[row][column] == "") {
                gameboard[row][column] = (currnet_turn == player1.player_name) ? "X" : "O"
                currnet_turn = (currnet_turn == player1.player_name) ? player2.player_name : player1.player_name;
                renderGameBoard()
                checkGameResult()
            }
        }

        function checkGameResult() {
            // test 1 => horsontal
            for (let row = 0; row < 3; row++) {
                if (
                    gameboard[row][0] === gameboard[row][1] &&
                    gameboard[row][1] === gameboard[row][2] &&
                    gameboard[row][0] !== ''
                ) {
                    displayWinner(gameboard[row][0]);
                    BreakGame();
                    return;
                }
            }

            // test 2 => Vertical test
            for (let col = 0; col < 3; col++) {
                if (
                    gameboard[0][col] === gameboard[1][col] &&
                    gameboard[1][col] === gameboard[2][col] &&
                    gameboard[0][col] !== ''
                ) {
                    displayWinner(gameboard[0][col]);
                    BreakGame();
                    return;
                }
            }

            // test 3 => Cross test
            if (
                gameboard[0][0] === gameboard[1][1] &&
                gameboard[1][1] === gameboard[2][2] &&
                gameboard[0][0] !== ''
                
                
            ) {
                displayWinner(gameboard[0][0]);
                BreakGame();
                return;
            } 
            if (
                gameboard[2][0] === gameboard[1][1] &&
                gameboard[1][1] === gameboard[0][2] &&
                gameboard[2][0] !== ''
            ) {
                displayWinner(gameboard[2][0]);
                BreakGame();
                return;
            }

            // test 4 => tie
            if (Array.from(document.querySelectorAll(".cell")).every((element) => element.textContent !== "")) {
                displayWinner("No");
                BreakGame();
                return;
            };
                
        }
        function displayWinner(winner) {
            if (winner == "X")
                result_Element.innerHTML = player1.player_name +" Winns!";
            else if (winner == "O")
                result_Element.innerHTML = player2.player_name + " Winns!";
            else if (winner == "No")
                result_Element.innerHTML = "Tie!";
            player2_turn_html.style.display="block"
            player1_turn_html.style.display="block"
            setTimeout(() => {
                player1_turn_html.style.transform = "translateX(0)"
            }, 100)
            setTimeout(() => {
                player2_turn_html.style.transform = "translateX(0)"
            },100)
        }
        function BreakGame() {
            document.querySelector(".play_again_btn").style.display = "flex";
            document.querySelector(".play_again_btn").addEventListener("click",resetGame)
        }
        function resetGame() {
            gameboard = [['', '', ''], ['', '', ''], ['', '', '']];
            currnet_turn = player1.player_name;
            result_Element.innerHTML = ''; // Clear the game result message
            document.querySelector(".play_again_btn").style.display = 'none'; // Hide the "Play Again" button
            renderGameBoard(); // Re-render the game board to clear the marks
        }
    }
    return{renderGameBoard}
})()



// just change between the main sections 
const displayController = (() => {
    
    function display_game() {
        document.querySelector(".input_section").style.display = "none";
        document.querySelector(".main_section").style.display = "block";
        Gameboard.renderGameBoard();
    }
    function display_home() {
        document.querySelector(".input_section").style.display = "flex";
        document.querySelector(".main_section").style.display = "none";
    }
    return{display_game,display_home}
})();



// the player Factorey 
function player(name , icon) {
    return {player_name : name , player_icon : icon}
}
window.addEventListener("load", () => {
    document.querySelector(".app").style.display = "block";
    document.querySelector(".loading_section").style.display = "none"

})