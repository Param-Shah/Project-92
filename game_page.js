question_turn = localStorage.getItem("player1 name")
answer_turn = localStorage.getItem("player2 name")

document.getElementsById("qturn").innerHTML = question_turn
document.getElementsById("aturn").innerHTML = answer_turn

player1_score = ""
player2_score = ""


function send() {

    number1 = document.getElementById("number1").innerHTML
    number2 = document.getElementById("number2").innerHTML
    ans = parseInt(number1) * parseInt(number2)

    question = "<h4>" + " " + number1 + " " + "X" + " " + " " +  number2 + " " +  "</h4>"

    input = "<br> Answer: <input type='text' id='input_check_box'"

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"

    row = question + input + check_button


    document.getElementById("output").innerHTML = row

    document.getElementById("number1").innerHTML = ""
    document.getElementById("number2").innerHTML = ""
}



function check() {
    get_answer = document.getElementById("input_check_box").value

    if (get_answer == ans) {
        if (answer_turn == "player1") {
            update_player1_score = player1_score + 1
            document.getElementById("p1_score").innerHTML = update_player1_score
        }
        else {
            update_player2_score = player2_score + 1
            document.getElementById("p2_score").innerHTML = update_player2_score
        }
    }






    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("qturn").innerHTML = "question Turn - " + player2_name
    }
    else {
        question_turn = "player1"
        document.getElementById("qturn").innerHTML = "question Turn - " + player1_name

    }
}