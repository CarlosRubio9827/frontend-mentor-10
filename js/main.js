const button = document.querySelector('.info-submit-container-button');

button.addEventListener('click', ()=>{
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const email = document.querySelector("#email");
    const alertIcon = document.querySelector('.info-submit-alert');
    const alertMessages = document.querySelector(".info-message");

    if(emailRegex.test(email.value)){
        alertIcon.style.display = 'none';
        alertMessages.style.display = 'none';
    }else{
        alertIcon.style.display = 'block';
        alertMessages.style.display = 'block';
        
    }
})
