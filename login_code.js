function addUser() {
    player1_name = document.getElementById("player_1_login")
    localStorage.setItem("player1 name" , player1_name)

    player2_name = document.getElementById("player_2_login")
    localStorage.setItem("player2 name" , player2_name)


    window.location = "game_page.html"
}