/*let boroda = document.getElementById("boroda");

let player = 0;

let player1 = "X";

let player2 = "O";

boroda.addEventListener('click',function (event){
	if(player % 2 === 0){
		event.target.innerHTML = player1;
	}else{
		event.target.innerHTML = player2;
	}
	player++;
	check();
})


function check(){
	var boxes = document.getElementsByClassName('box');
	console.log(boxes);
	var arr = [[0,1,2],
               [3,4,5],
		       [6,7,8],
		       [0,3,6],
               [1,4,7],
		       [2,5,8],
		       [0,4,8],
               [2,4,6]
]
	for(var i=0;i<arr.length;i++)
	{
		if(boxes[arr[i][0]].innerHTML == player1 && boxes[arr[i][1]].innerHTML == player1 && boxes[arr[i][2]].innerHTML == player1 ){
			alert("Gracz X wygrywa!");
			location.reload();
		}else if(boxes[arr[i][0]].innerHTML == player2 && boxes[arr[i][1]].innerHTML == player2 && boxes[arr[i][2]].innerHTML == player2 ){
			alert("Gracz O wygrywa!");
			location.reload();
		}else if(player === 9){
			alert("Remis!");
			player++;
			location.reload();
		}
		
		
	}
}*/

let boroda = document.getElementById('boroda');

let player1 = "X";

let player2 = "O";

let move = 0;

boroda.addEventListener('click',function(event){
	if(move % 2 === 0){
		event.target.innerHTML=player1;
	}else{
		event.target.innerHTML=player2;
	}
	move++;
	check();
})

function check(){
	
	let boxes = document.getElementsByClassName('box');
	
	let winningComb = [[0,1,2],[3,4,5],[6,7,8],
                     [0,3,6],[1,4,7],[2,5,8],
                     [0,4,8],[6,4,2]]
	for(let i = 0;i<winningComb.length;i++)
	{
		if(boxes[winningComb[i][0]].innerHTML == player1 && boxes[winningComb[i][1]].innerHTML == player1 && boxes[winningComb[i][2]].innerHTML == player1 ){
			alert("Gracz X zwycięża");
			location.reload();
		}else if(boxes[winningComb[i][0]].innerHTML == player2 && boxes[winningComb[i][1]].innerHTML == player2 && boxes[winningComb[i][2]].innerHTML == player2){
			alert("Gracz O zwycięża");
			location.reload();
		}else if(move === 9){
			alert("Remis!");
			location.reload();
			return;
		}
	}
	
}

