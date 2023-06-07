const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thanks-container');
const errorMessage = document.querySelector('.error-message');
const emailInput = document.querySelector('.email-input');
const subscribeButton = document.querySelector('.subscribe-button');
const dismissButton = document.querySelector('.dismiss-button');
const emailInserted = document.querySelector('.email-inserted');
const subscribeForm = document.querySelector('.subscribe-form');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

subscribeForm.addEventListener('submit', function(event){
  if (emailInput.value.match(mailformat)){
    mainContainer.classList.add('hidden');
    thanksContainer.classList.remove('hidden');
    emailInserted.textContent = emailInput.value;
    event.preventDefault();
  } else{
    console.log("email incorect");
    errorMessage.classList.remove('hidden');
    event.preventDefault();
  }
});

dismissButton.addEventListener('click', () => {
  mainContainer.classList.remove('hidden');
  thanksContainer.classList.add('hidden');
  emailInput.value ='';
})


