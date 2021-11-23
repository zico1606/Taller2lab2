// funcion para limpiar pantalla
function limpiar() {
    document.getElementById("result").value = "";
   }
   
   // funcion para mostrar los valores
   function display(value) {
    document.getElementById("result").value += value;
   }
   // Funcion para evaluar la expresion y retornar resultados
   function calcular() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }