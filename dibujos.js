let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");
let lineas = 30;
let l = 0;
let raya = 0;
let arr = 0;
let yi, xf, xi, yf;


dibujarLineas("red", 1,1,1,300);
dibujarLineas("red", 1,300,300,300);
dibujarLineas("red", 300,1,1,1);
dibujarLineas("red", 300,1,300,300);

//-----------Todos los ciclos en 1 solo----//

for(l = 0; l < lineas; l++)
{
    xi = 10 * l;
    yf= 300 - (10 * l);
    dibujarLineas("green", xi, 300, 300, yf);
    dibujarLineas("green", xi, 0, 0, yf);
    yi= 10 * l;
    xf= 10 * (l + 1);
    dibujarLineas("blue", 0, yi, xf, 300);
    dibujarLineas("blue", 300, yi, xf, 0);
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

//---------ciclos por separados----------//
// while(l < lineas)
// {
//     yi= 10 * l;
//     xf= 10 * (l + 1);
//     dibujarLineas("blue", 0, yi, xf, 300);
//     dibujarLineas("blue", 300, yi, xf, 0);
//     l++;
   
// }
// l= 0;
// while(l < lineas)
// {
//     yi= 10 * l;
//     xf= 10 * (l + 1);
//     dibujarLineas("blue", 300, yi, xf, 0);
//     l++;
// }




// for(l = 0; l < lineas; l++)
// {
//     xi = 300- (10 * arr);
//     yf= 10 *  arr;
//     dibujarLineas("green", xi, 0, 0, yf);
//     console.log(l)
// }


