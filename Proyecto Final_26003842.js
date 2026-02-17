//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente? (si / no)")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}

//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0

//convirtiendo la edad del cónyuge si se esta casado/a


if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas? (si / no)")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos

/**
 * 1. convierta la cantidad de hijos a numero
 */
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = parseInt(prompt("¿Cuántos hijos o hijas tiene?"))
}else{
  cantidad_hijos = 0
}

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero >= 18 && edad_numero < 25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
}else if(edad_numero >= 25 && edad_numero < 50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}else if(edad_numero >= 50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}

/** 
 * 2. Recargo por la edad del conyuge
 */
if("SI" == casado.toUpperCase()){
  if(edad_conyuge_numero >= 18 && edad_conyuge_numero < 25){
    recargo = precio_base * casado_18
    recargo_total = recargo_total + recargo
  }else if(edad_conyuge_numero >= 25 && edad_conyuge_numero < 50){
    recargo = precio_base * casado_25
    recargo_total = recargo_total + recargo
  }else if(edad_conyuge_numero >= 50){
    recargo = precio_base * casado_50
    recargo_total = recargo_total + recargo
  }
}

/**
 * 3. Recargo por la cantidad de hijos 
 */ 
if(cantidad_hijos > 0){
  recargo = precio_base * hijos_recargo * cantidad_hijos
  recargo_total = recargo_total + recargo
}

precio_final = precio_base + recargo_total

//Resultado
alert ("Para el asegurado " + nombre)
alert ("El recargo total sera de: Q." + recargo_total)
alert ("El precio final sera de: Q." + precio_final)AlgporLaAlogokabdfkjbsdf