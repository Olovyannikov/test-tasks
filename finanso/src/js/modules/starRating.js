export default () => {
    const ratingCounters = document.querySelectorAll('.star-rating__counter');

//Init ratings
    if (ratingCounters.length > 0) {
        initRatings();
    }

    function initRatings() {
        ratingCounters.forEach(counter => {
            let ratingCounter = +counter.querySelector('.star-rating__counter-total').innerHTML;
            let maxRating = +counter.querySelector('.star-rating__counter-of').innerHTML;
            let stars = counter.querySelector('.star-rating__stars > span');
            stars.style.width = (100 / maxRating * ratingCounter) + '%';
        });
    }
}