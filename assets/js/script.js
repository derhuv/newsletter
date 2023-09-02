let emailForm = document.querySelector('.emailForm');

let email = document.querySelector('#email');
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let errorMsg = document.querySelector('#errormsg');
let formSec = document.querySelector('#formsec');
let successSec = document.querySelector('#successsec');
let userMail = document.querySelector('#usermail');
let dismiss = document.querySelector('#dismiss');

//verifies email while typing

email.addEventListener('input', function(){

    function verify() {
        
        if (!email.value.match(regex) && email.value != '') {
         errorMsg.innerHTML ='Valid email required';
        }else{
            errorMsg.innerHTML ='';
        }
    }
    verify();

})

// process form and check for empty input field

emailForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    function emptyEmail() {
        
        if (email.value == '') {
            errorMsg.innerHTML ='Email cannot be empty';
        }else{
            errorMsg.innerHTML ='';

            formSec.classList.add('hidden');
            successSec.classList.remove('hidden');
            userMail.innerHTML = email.value;
            emailForm.reset();
        }
    }
    emptyEmail();
    
})

// close success message

dismiss.addEventListener('click', function(){

    successSec.classList.add('hidden');
    formSec.classList.remove('hidden');
   

})

