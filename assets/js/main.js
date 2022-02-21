'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const footerMailInput = document.querySelector('.footer__mail-input #footerMail');
    const footerMailLabel = document.querySelector('.footer__mail-input label[for="footerMail"]');

    footerMailInput.addEventListener('blur', function () {
        if (this.value.length === 0) footerMailLabel.classList.remove('label_up');
    })

    footerMailInput.addEventListener('focus', function () {
        footerMailLabel.classList.add('label_up');
    })
})