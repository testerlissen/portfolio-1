function randomImage(){
    let images = ['img/img-1.png', 'img/img-2.png', 'img/img-3.png', 'img/img-4.png', 'img/img-5.png', 'img/img-6.png', 'img/img-7.png', 'img/img-8.png', 'img/img-9.png', 'img/img-10.png', 'img/img-11.png', 'img/img-12.png', 'img/img-13.png', 'img/img-14.png', 'img/img-15.png', 'img/img-16.png', 'img/img-17.png', 'img/img-18.png', 'img/img-19.png', 'img/img-20.png', 'img/img-21.png', 'img/img-22.png', 'img/img-23.png', 'img/img-24.png', 'img/img-25.png', 'img/img-26.png', 'img/img-27.png', 'img/img-28.png', 'img/img-29.png'];
    let size = images.length;
    let x = Math.floor(size * Math.random());
    console.log(x);
    let element = document.getElementsByClassName('home-intro');
    console.log(element);
    element[0].style["background-image"] = "url("+ images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);