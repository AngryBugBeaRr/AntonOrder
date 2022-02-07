if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    window.location.href = 'mobileIndex.html';

}
let flag = true;
function display () {
    let block = document.getElementById('dropdown-content');
    if (flag) {
        block.classList.add('active');
        flag = !flag;
    } else {
        block.classList.remove('active');
        flag = !flag;
    }
}
window.addEventListener("load", function() {
    const carouselImages = document.querySelector('.carousel__images');
    const images = document.querySelectorAll('.carousel__images img');
    const carouselButtons = document.querySelectorAll('.carousel__button');
    const numberOfImages = document.querySelectorAll('.carousel__images img').length;
    let imageIndex = 2;
    let translateX = 0;

    console.log(carouselImages);

    carouselButtons.forEach(button => {
        button.addEventListener('click', event => {
            if (event.target.id === 'previous') {
                if (imageIndex !== 1) {
                    imageIndex--;
                    translateX += 250;
                }
            } else {
                if (imageIndex !== numberOfImages) {
                    imageIndex++;
                    translateX -= 250;
                }
            }

            carouselImages.style.transform = `translateX(${translateX}px)`;
            images.forEach((image, index) => {
                if (index === imageIndex - 1) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });
        });
    });
});