export function notRead (){
console.log(":)");
}
/*  
 export let participantsList=['Daniel','Rubén','Emma','Ileen','Ignacio','Giacomo'];

let arrayCopy = participantsList;
let sacrifices = [];

 
let initialPosition;
let movement;
let participantsValue='';

let participantsNumber = participantsList.length;// nº elementos array = nº participantes
let participantPosition = participantsList.indexOf(''); // calcula la posición del nombre dado en el array
/* let whatNameThere = participantsList.charAt(0); / calcula nombre de la posición dada	 
let participantArea = 360/participantsNumber; // calcula el area (grados) que se asigna a cada participante
let participantCoordinates = participantArea*participantPosition; // calcula la posición del nombre dado en el canvas ruleta

console.log(participantsNumber + ' participantes totales'); 
console.log(participantPosition + ' posición ejemplo en el array'); 



let canvas=document.getElementById("idcanvas") as HTMLCanvasElement;
let context=canvas.getContext("2d");
let center=canvas.width/2;

const startBtn=document.getElementById("start-btn");
const restartBtn=document.getElementById("restart-btn");
 



export function fillRoulette(participantsValue){
	participantsList.push(participantsValue);

	for (var i = 0; i < participantsList.length; i++) {
		
		context.beginPath();
		context.moveTo(center,center);
		context.arc(center,center,center-20,i*2*participantArea, (i+1)*2*participantArea);
		context.lineTo(center,center);
		context.save();
		context.translate(center, center);
		context.rotate(-1*(1*Math.PI/participantsNumber+i*2*Math.PI/participantsNumber)); 
		context.translate(-center, -center);
		context.font = "13px Roboto";
		context.textAlign = "right";
		context.fillStyle = "black";
		context.fillText(participantsList[i], canvas.width-50, center); 
		context.restore();
	}

}  */
/* 
 
  for (var i = 0; i < participantsList.length; i++) {
	  context.beginPath();
	  context.moveTo(center,center);
	  context.arc(center,center,center-20,i*2*Math.PI/participantsList.length, (i+1)*2*Math.PI/participantsList.length);
	  context.lineTo(center,center);
	  context.save();
	  context.translate(center, center);
	  context.rotate(3*2*Math.PI/(5*participantsList.length)+i*2*Math.PI/participantsList.length); 
	  context.translate(-center, -center);
	  context.font = "15px Roboto MS";
	  context.textAlign = "right";
	  context.fillStyle = "black";
	  context.fillText(participantsList[i], canvas.width-50, center); 
	  context.restore();
  }
 */
/*    function start(){
	  let timer=15;
		  let canvas=document.getElementById("idcanvas");
		  let index = 0
		  let player
		  movement = setInterval(function(){
			  initialPosition+=20;
			  canvas.style.transform='rotate('+initialPosition+'deg)';
			  timer--;
			  if(timer<=0){
				  clearInterval(movement);
			  } 
			  
			  player = participantsList[index]
			  index++;
			  console.log(player)

			  if(index>(participantsList.length-1)){
				  index=0;
			  }
			  
		  },100);
		}  
 */



/* 
function start(){
		if (clic==0) {	
		let canvas=document.getElementById("idcanvas");
		movement=setInterval(function(){
			pos_ini+=20;
			// canvas.style.transform='rotate('+pos_ini+'deg)';
			canvas.style.transform = `rotate(${participantCoordinates}deg)`;
		
		},20);
		clic=1;
		document.getElementById("idestado").innerHTML="Detener";
	}
	
		clearInterval(movement);
		clic=0;
		document.getElementById("idestado").innerHTML="Iniciar";
	
	}  
	
	start() */
	




/*   function random_color(){
	  let ar_digit=['2','3','4','5','6','7','8','9'];
	  let color='';
	  let i=0;
	  while(i<6){
		  let pos=Math.round(Math.random()*(ar_digit.length-1));
		  color=color+''+ar_digit[pos];
		  i++;
	  }
	  return '#'+color;
  }
 */
 /*  startBtn.addEventListener('click',start ); */