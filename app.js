'use strict';

const switcher = document.querySelector('.grey-btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});