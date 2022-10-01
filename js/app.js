const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click', () => {
    nav.classList.toggle('activo')
})

function link() {
    nav.classList.remove('activo')
}

const btn = document
    .querySelector('.read-more-btn');

const text = document
    .querySelector('.card__read-more');

const cardHolder = document
    .querySelector('.card-holder');

cardHolder.addEventListener('click', e => {
    const current = e.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if (!isReadMoreBtn)
        return;

    const currentText = e.target.parentNode.querySelector('.card__read-more');

    currentText.classList.toggle('card__read-more--open');

    current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...';

});

function sendMail()
{
    let SubjectLine = document.getElementById("subject").value;
    let body = document.getElementById("message").value;
    window.location.href = "mailto:mario.basilio.c@gmail.com?subject="+SubjectLine+"&body="+body;
}