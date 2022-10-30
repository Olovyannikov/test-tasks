export default () => {
    const popupBtn = document.querySelectorAll('.card__button-more');

    popupBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('card__button-more_active');
        });
    })
}