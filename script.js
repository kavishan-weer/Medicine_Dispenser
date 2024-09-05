import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCu6rD1QUi0yUqD_iVgQyJ5yppMdZm42vU",
    authDomain: "medicine-dispenser-2cf19.firebaseapp.com",
    databaseURL: "https://medicine-dispenser-2cf19-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "medicine-dispenser-2cf19",
    storageBucket: "medicine-dispenser-2cf19.appspot.com",
    messagingSenderId: "193101438748",
    appId: "1:193101438748:web:43a20c991104c7378be4d9"
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
