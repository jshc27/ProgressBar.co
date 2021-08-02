const upload = () => {
    const progressBar =  document.querySelector('.progressBar1');
    progressBar.setAttribute('id', 'play-animation');
}

var inicio = 0;

function aumentar() {

    var pb2 = document.getElementById('pb2').value = ++ inicio;
    console.log('se dio clic');
}








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