init();
diceDam1=document.querySelector('.dice');
diceDam1.style.display='none';
var diceDam2=document.querySelector('.dice2');
diceDam2.style.display='none';
roundScore1=0;
document.querySelector('.btn-roll').addEventListener('click', function(){
dice=Math.floor((Math.random()*6)+1); 
dice2=Math.floor((Math.random()*6)+1); 
console.log('First dice one is '+dice);
console.log('Second dice two is '+dice2);
	diceDam1.style.display='block';
	diceDam2.style.display='block';
	diceDam1.src='dice-'+dice+'.png';
	diceDam2.src='dice-'+dice2+'.png';
	if(dice===1||dice2===1){
		roundScore1=0;
	document.getElementById('current-0').textContent=roundScore1;
}else{
	totalDice=dice+dice2;
	roundScore1+=totalDice;
	document.getElementById('current-0').textContent=roundScore1;
	
}
});


function init(){
	var score,dice,roundScore1,roundScore2,activePlayer,totalDice,diceDam1;
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
	
}






