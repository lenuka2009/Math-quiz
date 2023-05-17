function login(){
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    localStorage.setItem("p1",player1);
    localStorage.setItem("p2",player2);
    window.location="game_page.html";
}
