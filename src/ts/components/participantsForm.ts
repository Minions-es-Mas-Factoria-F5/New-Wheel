let participantsList = [];
const inputAddParticipants = (<HTMLInputElement>document.getElementById('input-add-participants'));
const btnAddParticipants = (<HTMLInputElement>document.getElementById('btn-add-participants'));

export function addParticipants(){

    let participantsValue= inputAddParticipants.value;

    if (participantsValue !== '' && participantsList.includes(participantsValue) == false) {
        participantsList.push(participantsValue);
        console.log(participantsList);
        inputAddParticipants.value = '';
    }else{
        inputAddParticipants.value = '';
        inputAddParticipants.placeholder = 'Inserta un nombre válido';
        console.log('Not a valid name');
    }
}

export function list(){
    btnAddParticipants.addEventListener('click',addParticipants);
}