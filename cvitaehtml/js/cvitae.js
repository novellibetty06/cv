document.getElementById('boton').onclick = function() {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "curriculum vitae";
}

document.getElementById('boton_color').addEventListener('click', function(){
    document.body.style.backgroundColor = '#f7f2a3'
});

document.getElementById('boton_default').addEventListener('click', function(){
    document.body.style.backgroundColor = '#baf6ff'
});