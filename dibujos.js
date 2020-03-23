let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick)

let d = document.getElementById("dibujito");
let ancho = d.width;
let lienzo = d.getContext("2d");

document.getElementById("texto_lineas").onkeyup = function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
    document.getElementById("botoncito").click();
}
}

function dibujoPorClick()
{
    var m = parseInt(texto.value);
    let lineas = m;
    let l = 0;
    let yi, xf;
    let espacio = ancho/lineas;
    dibujarLineas("red", 1,1,1,299);
    dibujarLineas("red", 1,299,299,299);

for(l = 0; l < lineas; l++)
{
    yi= espacio * l;
    xf= espacio * (l + 1);
    dibujarLineas("blue", 0, yi, xf, 300);
    dibujarLineas("blue", 300, yi, xf, 0);

    xi= espacio * l;
    yf= ancho - (espacio * l);
    dibujarLineas("pink", xi, 300, 300, yf);
    dibujarLineas("pink", xi, 0, 0, yf);
}
}

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}




