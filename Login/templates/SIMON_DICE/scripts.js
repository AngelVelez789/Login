const caja = document.querySelector('.caja');
const entrada = document.querySelector('#entrada');
const formulario = document.querySelector('#formulario');
const acciones = document.querySelector('.acciones');
const cara = document.querySelector('#rostro')
var habla = document.querySelector('#hablar')

let intervaloSaltar = null;
let intervaloMulticolor = null;

color.addEventListener('change', function Color() {
  var colores = document.getElementById('color')
  caja.style.backgroundColor = colores.value;
  });

function CambiarSombrero() {
  var seleccion = document.getElementById("seleccionar-sombrero");
  var imagen = document.getElementById("imagen");
  imagen.src = seleccion.value;
  imagen.alt = seleccion.options[seleccion.selectedIndex].text;
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const accion = entrada.value.toLowerCase();

  clearInterval(intervaloSaltar);
  clearInterval(intervaloMulticolor);

  switch (accion) {
    case 'saltar':
      caja.classList.remove('mover');
      intervaloSaltar = setInterval(() => {
        caja.classList.toggle('saltar');
      }, 500);
      cara.src="https://png.pngtree.com/png-clipart/20201208/big/pngtree-cartoon-face-creative-expression-pack-image-crying-png-image_5542108.png";
      break;

    case 'mover':
      caja.classList.remove('saltar');
      intervaloSaltar = setInterval(() => {
        caja.classList.toggle('mover');
      }, 1000);
      cara.src="https://images.vexels.com/media/users/3/158136/isolated/preview/ff25338242cb0a5a0378e716a642e191-cara-de-emoticonos-relajada.png";
      break;

      case 'crecer':
        caja.classList.add('crecer');
        cara.classList.add('cara');
        habla.classList.add('hablacre')
        break;

        case 'circular':
          caja.classList.add('circular');
          cara.src="./Imagenes/Circular.png";
          break;

          case 'multicolor':
            const colores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
            let indiceColor = 0;
            intervaloMulticolor = setInterval(() => {
              caja.style.backgroundColor = colores[indiceColor];
              indiceColor++;
              if (indiceColor >= colores.length) {
                indiceColor = 0;
              }
            }, 500);
            cara.src="https://i.pinimg.com/originals/8c/3d/60/8c3d60dd3b000bd6843a9343db1d2bfd.png";
            break;

          case 'hablar':
            habla.src="./Imagenes/Hablar.png";
            caja.classList.add('hablar');
            cara.src="https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-cute-eyes-and-mouth-cartoon-vector-png-image_6644660.png";
            break;

            case 'ir al espacio':
              document.body.classList.add('Espacio');
              acciones.classList.add('bar')
              caja.classList.add('Space')
              cara.src="./Imagenes/Espacio.png";

              break;

      case 'parar':
      caja.classList.add('Parar');
      cara.src="https://image.spreadshirtmedia.net/image-server/v1/designs/16029519,width=178,height=178,colors%5B0%5D=000000,colors%5B1%5D=E1E1E1.png";
      break;

      case 'reset':
        cara.src="https://i.pinimg.com/originals/5c/f0/5e/5cf05ef3619390107caa7e3802b87b58.png";
        habla.src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png/v1/fill/w_600,h_400/fondo_transparente_png_by_imsnowbieber_d3jme6i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvOWM2NGNmZTMtYmIzYi00YWU4LWI1YTYtZDJmMzlkMjFmZjg3XC9kM2ptZTZpLThjNzAyYWQ0LTRiN2EtNDc2My05OTAxLTk5ZjhiNGYwMzhiMC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ymv-MHRcmXXpzmL3f0xZ0mCcyU85lCLnk0jbOnCO8Zg";
        imagen.src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png/v1/fill/w_600,h_400/fondo_transparente_png_by_imsnowbieber_d3jme6i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvOWM2NGNmZTMtYmIzYi00YWU4LWI1YTYtZDJmMzlkMjFmZjg3XC9kM2ptZTZpLThjNzAyYWQ0LTRiN2EtNDc2My05OTAxLTk5ZjhiNGYwMzhiMC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ymv-MHRcmXXpzmL3f0xZ0mCcyU85lCLnk0jbOnCO8Zg";
        caja.classList.remove('saltar', 'mover', 'parar', 'crecer', 'circular', 'hablar', 'space');
        document.body.classList.remove('Espacio');
        acciones.classList.remove('bar')
              caja.classList.remove('Space')
              caja.style.backgroundColor = "cornflowerblue";
              cara.classList.remove('cara')
        break;
        default:
          alert("ACCION NO VALIDA");

  }
  
  entrada.value = '';
});
