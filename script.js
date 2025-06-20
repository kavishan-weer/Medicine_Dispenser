import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
    
  };


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function handleButtonClick(buttonId) {

    const buttonClicksRef = ref(database, 'buttonClicks');
    
    set(buttonClicksRef, {
        clickedButton: buttonId
    }).then(() => {
        console.log('Data sent to Firebase: Button ' + buttonId + ' was clicked');
        alert('Data sent to Firebase: Button ' + buttonId + ' was clicked');
    }).catch((error) => {
        console.error('Error sending data: ', error);
        alert('Error sending data: ' + error.message);
    });
}

document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.id));
});
