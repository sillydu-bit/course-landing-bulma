function showError(input, message) {
   
    const oldHelp = input.parentNode.querySelector('.help');
    if (oldHelp) {
        oldHelp.remove();
    }

    const helpBlock = document.createElement('p');
    helpBlock.classList.add('help', 'is-danger'); 
    helpBlock.textContent = message;

    input.classList.add('is-danger');

    input.parentNode.appendChild(helpBlock);
}


function clearError(input) {
    input.classList.remove('is-danger');
    const helpBlock = input.parentNode.querySelector('.help');
    if (helpBlock) {
        helpBlock.remove();
    }
}

function validateForm(form) {
    let isValid = true;

    const nameInput = form.querySelector('#name');
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        showError(nameInput, 'Имя обязательно для заполнения');
        isValid = false;
    } else if (nameValue.split(' ').filter(word => word.length > 0).length < 2) {
        showError(nameInput, 'Введите фамилию и имя');
        isValid = false;
    } else {
        clearError(nameInput);
    }

    const emailInput = form.querySelector('#email');
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        showError(emailInput, 'Email обязателен');
        isValid = false;
    } else if (!emailPattern.test(emailValue)) {
        showError(emailInput, 'Введите корректный email');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    const phoneInput = form.querySelector('#phone');
    const phoneValue = phoneInput.value.trim();
    const phoneDigits = phoneValue.replace(/\D/g, '');
    if (phoneValue !== '' && phoneDigits.length < 10) {
        showError(phoneInput, 'Телефон должен содержать не менее 10 цифр');
        isValid = false;
    } else {
        clearError(phoneInput);
    }

    const messageInput = form.querySelector('#message');
    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
        showError(messageInput, 'Сообщение обязательно для заполнения');
        isValid = false;
    } else {
        clearError(messageInput);
    }

    const consentInput = form.querySelector('#consent');
    if (!consentInput.checked) {
        showError(consentInput, 'Вы должны дать согласие на обработку данных');
        isValid = false;
    } else {
        clearError(consentInput);
    }

    return isValid;
}
