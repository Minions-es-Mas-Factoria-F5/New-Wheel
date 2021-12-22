/* import {fillRoulette} from "./roulette"; */

let participantsList = [];
let copyList = [];
let sacrifices = [];

const inputParticipants = (<HTMLInputElement>document.getElementById('input-add-participants'));
const btnAddParticipants = (<HTMLInputElement>document.getElementById('btn-add-participants'));

const startBtn=document.getElementById("start-btn"); 
const restartBtn=document.getElementById("restart-btn");///////////////////

let participantsNumber = participantsList.length;// nº elementos array = nº participantes
let participantPosition = participantsList.indexOf(''); // calcula la posición del nombre dado en el array
/* let whatNameThere = participantsList.charAt(0); / calcula nombre de la posición dada	 */ ///////////////////
let participantArea = 360/participantsNumber; // calcula el area (grados) que se asigna a cada participante
let participantCoordinates = participantArea*participantPosition; // calcula la posición del nombre dado en el canvas ruleta ///////////////////


console.log(participantsNumber + ' participantes iniciales'); 
/* console.log(participantPosition + ' posición ejemplo en el array');  */
let chosen

let canvas=document.getElementById("idcanvas") as HTMLCanvasElement; 
let context=canvas.getContext("2d");
let center=canvas.width/2;
 
let initialPosition;
let movement;
 

export function deleteChosenParticipant (chosen)
{
	if(copyList.includes(chosen) == true){
		console.log(":(((");
		let chosenSacrifice = copyList.splice(copyList.indexOf(chosen),1);
		let newSacrifice = chosenSacrifice.toString ();
	
	
			sacrifices.push(newSacrifice);
	
		console.log(copyList);
		console.log(sacrifices);
	}
		console.log(chosen + ':(');

}
/////////////
function changeVar (chosenParticipant){
    chosen = chosenParticipant;
}

function fillRoulette(participantsValue){

	/* copyList.push(participantsValue); */

	for (var i = 0; i < copyList.length; i++) {
		

        participantsNumber = copyList.length;
        participantArea = 360/participantsNumber; 

        participantPosition = participantsList.indexOf(participantsValue)
        console.log(participantPosition + ' su posición en el array');

        let constantNumber = participantPosition + 1;
        console.log(constantNumber + ' número sig.posición array. a sumar');

        participantCoordinates = (participantArea/2)*(constantNumber)+(participantArea/2)*(participantPosition);
        console.log(participantCoordinates + ' grados que se le suman para hayar posición en ruleta');



		context.beginPath();
		context.moveTo(center,center);
		context.arc(center,center,center-20,i*2*Math.PI/copyList.length, (i+1)*2*Math.PI/copyList.length);///////////////////
		context.lineTo(center,center);
		context.save();
		context.translate(center, center);
		context.rotate(participantCoordinates*Math.PI/180+i*2*Math.PI/copyList.length); ///////////////////
		context.translate(-center, -center);
		context.font = "13px Roboto";
		context.textAlign = "right";
		context.fillStyle = "black";
		context.fillText(copyList[i], canvas.width-50, center); 
		context.restore();
        context.restore();
	}

//ctx.arc(centreX, centreY, radius, startAngle, endAngle, false); 
//ctx.rotate(degrees*Math.PI/180)
} 

export function addParticipants(){

    let participantsValue= inputParticipants.value;

    if (participantsValue !== '' && participantsList.includes(participantsValue) == false) {
        copyList.push(participantsValue);
        participantsList.push(participantsValue);
        console.log(participantsList); 
        console.log(copyList);
       
    }else{
        inputParticipants.value = '';
        inputParticipants.placeholder = 'Insert a valid name';
        console.log('connected 2 - insert a valid name');
    } 
    
    let participantsNumber = participantsList.length;
    console.log(participantsNumber + ' participantes totales'); 
    choseRandomParticipant (participantsList)
}


////////////////////////////////////////////////////////////////// Btn - Añadir participantes *
export function btnCall()
{
    btnAddParticipants.addEventListener('click', addParticipants);
    console.log('¡Botón activo: Añade un participante!');
}
//////////////////////////////////////////////////////////////////


///////////

function choseRandomParticipant (participantsList) {
    let participantsValue= inputParticipants.value;
    if (participantsValue !== '' && participantsList.includes(participantsValue) == false) {
        inputParticipants.value = '';
        inputParticipants.placeholder = 'Insert a valid name';
        console.log("Insert a name");
    }else{
        participantsNumber = participantsList.length;
        participantArea = 360/participantsNumber; 
        let chosenParticipant = participantsList[Math.floor(Math.random()*participantsList.length)];
        console.log(chosenParticipant + ' participante al azar');
        /* deleteChosenParticipant (chosenParticipant); */

        participantPosition = participantsList.indexOf(chosenParticipant)
        console.log(participantPosition + ' su posición en el array');

        let constantNumber = participantPosition + 1;
        console.log(constantNumber + ' número sig.posición array. a sumar');

        participantCoordinates = (participantArea/2)*(constantNumber)+(participantArea/2)*(participantPosition);
        console.log(participantCoordinates + ' grados que se le suman para hayar posición en ruleta');
    }
        fillRoulette(participantsValue);
        changeVar (chosen)
}


///////////////////
 


function startRoulette ()
{
    let timer=15;
        let canvas=document.getElementById("idcanvas");
        let index = 0
        let player
        movement = setInterval(function(){
            initialPosition+=20;
            canvas.style.transform='rotate('+initialPosition+'deg)';///////////////////
       /*      canvas.style.transform = `rotate(${participantCoordinates}deg)`; */
            timer--;
            if(timer<=0){
                clearInterval(movement);
            } 
            
            player = copyList[index]
            index++;
            console.log(player)

            if(index>(copyList.length-1)){
                index=0;
            }
            
        },100);

        /* changeVar (chosen) */
         deleteChosenParticipant (chosen)
      }  






startBtn.addEventListener('click',startRoulette );