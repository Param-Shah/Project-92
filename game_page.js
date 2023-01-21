function send() {

    number1 = document.getElementById("number1").innerHTML
    number2 = document.getElementById("number2").innerHTML
    ans = parseInt(number1) * parseInt(number2)

    question = "<h4>" + number1 + "X" + number2 + "</h4>"

    input = "<br> Answer: <input type='text' id='input_check_box'"

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"

    row = question + input + check_button


    document.getElementById("output").innerHTML = row

    document.getElementById("number1").innerHTML = ""
    document.getElementById("number2").innerHTML = ""
}