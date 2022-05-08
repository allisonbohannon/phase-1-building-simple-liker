// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph'); 
hearts.forEach(heart => {
  heart.addEventListener('click', (event) => {
    mimicServerCall()
    .then(() => { 
      if (event.target.textContent === EMPTY_HEART){
      event.target.textContent = FULL_HEART; 
      event.target.className = 'activated-heart'
    } else {
      event.target.textContent = EMPTY_HEART;
      event.target.classList.remove('activated-heart') 
    }; 
      
    })
    .catch((error) => {
      const errorDiv = document.getElementById('modal'); 
      errorDiv.classList.remove('hidden'); 
      document.getElementById('modal-message').textContent = error; 
      const hideError = setTimeout(() => {
        errorDiv.className = 'hidden'
      },3000); 
    })
  } ); 
})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
