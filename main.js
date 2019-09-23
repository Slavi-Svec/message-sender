const btnSend = document.querySelector('#btnSend');
const msgIn = document.querySelector('#messageIn');
const msgOut = document.querySelector('#messageOut');

btnSend.addEventListener('click', msgSend)

function msgSend() {
   let content = msgIn.value;

    if (content === '') {
    alert('Please Enter a Message')
   }
    else {
     msgOut.innerHTML = content;
     msgIn.value = '';
   }
}




