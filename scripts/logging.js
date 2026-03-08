document.addEventListener('DOMContentLoaded', function () {

    const feedbackForm = document.getElementById('feedbackForm');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (event) {

            event.preventDefault();

            if (validateForm(feedbackForm)) {

                const formData = {
                    fullname: document.getElementById('name').value.trim(),
                    phone: document.getElementById('phone').value.trim() || '(не заполнено)',
                    email: document.getElementById('email').value.trim(),
                    message: document.getElementById('message').value.trim() || '(не заполнено)'
                };

                console.log('--- ДАННЫЕ ФОРМЫ ---');
                console.log('ФИО:', formData.fullname);
                console.log('Телефон:', formData.phone);
                console.log('Email:', formData.email);
                console.log('Сообщение:', formData.message);

                const timestamp = new Date().toLocaleString();
                console.log('Время отправки:', timestamp);

                alert('Форма отправлена! Данные записаны в консоль.');

            } else {
                
                console.warn('Ошибка валидации. Форма не отправлена.');
                alert('Пожалуйста, исправьте ошибки в форме.');
            }
        });
    } else {
        console.error('Форма с id="feedbackForm" не найдена.');
    }
});
