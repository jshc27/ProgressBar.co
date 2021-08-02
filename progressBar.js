const upload = () => {
    const progressBar =  document.querySelector('.progressBar1');
    progressBar.setAttribute('id', 'play-animation');
}


var progressBar2 = document.querySelector('.progressBar2')

var changeProgress = (progressBar2) => {
    progressBar2.style.width = `${progressBar2}%`;
}


/* change progress after 1 second (only for showcase) */
setTimeout(() => changeProgress(22), 1000);
setTimeout(() => changeProgress(45), 2000);
setTimeout(() => changeProgress(85), 4600);
setTimeout(() => changeProgress(98), 5266);
setTimeout(() => changeProgress(100), 8000);






// function move() {

//     var pb2 = document.getElementById("pb2")
//     var width = 1;
//     .pb2.getElementById(click, function () {
//         if ( width >= 10) {
//             width++
//         } else {
//             width++;
//             pb2.style.width = width + '%';
//         }
//     })


// }