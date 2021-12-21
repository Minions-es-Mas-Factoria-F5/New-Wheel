
		let participantsList=['Daniel','Rubén','Emma','Ileen','Ignacio','Giacomo'];

		let canvas=document.getElementById("idcanvas")as HTMLCanvasElement;;
		let context=canvas.getContext("2d");
		let center=canvas.width/2;

		const startBtn=document.getElementById("start-btn");
		const restartBtn=document.getElementById("restart-btn");

		let initialPosition=0;
		let clic=0;
		let movement;

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
	
		export function start(){
			let timer=25;
				let canvas=document.getElementById("idcanvas");
				let index = 0
				let player
				movement=setInterval(function(){
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

		function random_color(){
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

		startBtn.addEventListener('click',start);