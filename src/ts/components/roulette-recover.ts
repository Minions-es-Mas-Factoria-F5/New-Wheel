let participantsList = [];
const inputAddParticipants = (<HTMLInputElement>document.getElementById('input-add-participants'));
const btnAddParticipants = (<HTMLInputElement>document.getElementById('btn-add-participants'));
inputAddParticipants.placeholder = 'Inserta un nombre';


let canvas=document.getElementById("idcanvas")as HTMLCanvasElement;
let context=canvas.getContext("2d");
let center=canvas.width/2;


let participantsNumber =  participantsList.length;// nº elementos array = nº participantes
let participantArea = 360/participantsNumber; //área (grados) que se asigna a cada participante

const startBtn=document.getElementById("start-btn");

export function addParticipants(){

    let participantsValue= inputAddParticipants.value;
    
    if (participantsValue !== '' && participantsList.includes(participantsValue) == false) {
        participantsList.push(participantsValue);
        console.log(participantsList);
		participantsNumber = participantsList.length;
		participantArea = 360/participantsNumber;
		printListInRoulette ();
		console.log(participantsNumber + ' participantes totales'); 
        inputAddParticipants.value = '';
        inputAddParticipants.placeholder = 'Inserta un nombre';
    }else{
        inputAddParticipants.value = '';
        inputAddParticipants.placeholder = 'Inserta un nombre válido';
        console.log('Not a valid name');
    }
}

export function printListInRoulette (){

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
}


export function chooseRandomParticipant () 
{ 
	let chosenParticipant = participantsList[Math.floor(Math.random()*participantsList.length)];
	console.log(chosenParticipant + ' (participante al azar)');

	let participantPosition = participantsList.indexOf(chosenParticipant)
	console.log(participantPosition + ' (su posición en el array)');

	let constantNumber = participantPosition + 1;
	console.log(constantNumber + ' (nº sig.posición array a sumar)');
	
	let participantCoordinates = (participantArea/2)*(constantNumber)+(participantArea/2)*(participantPosition);
	console.log(participantCoordinates + ' (grados que se le suman para hallar posición en ruleta)');

	let clic=0;
	let movement;
	let posIni=0;
	if (clic==0) {	
		let canvas=document.getElementById("idcanvas");
		console.log("conected")
		movement=setTimeout(function(){
			posIni+=20;
			canvas.style.transform = `rotate(${participantCoordinates}deg)`;
			console.log("_______________________")
		},20);
	}

}
export function list(){
    btnAddParticipants.addEventListener('click',addParticipants);
	startBtn.addEventListener('click', ()=> {
	chooseRandomParticipant ()
	})
}