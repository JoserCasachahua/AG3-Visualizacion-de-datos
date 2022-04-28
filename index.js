// Import stylesheets
import './style.css';

var data = [{"year": 1991, "name":"alpha", "value": 15},{"year": 1992,"name":"alpha", "value": 20},];

//Gráfico de columnas. Mi 1º gráfico 
var visualization = d3plus.viz()    
    .container("#viz1")    
    .data(data)    
    .type("bar")    
    .id("name")    
    .x("year")    
    .y("value")    
    .draw() 

//Gráfico de Multicolumnas. Mi 2º gráfico
 d3.json("https://raw.githubusercontent.com/JoserCasachahua/AG3-Visualizacion-de-datos/master/columnas.json", function(data) {
  var visualization = d3plus.viz()
  .container("#viz2")
  .data(data)
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .axes({ ticks: 'false' })
  .draw();
  }); 

//Gráfico de Cajas y Bigotes. Mi 3º gráfico 
d3.json("https://raw.githubusercontent.com/JoserCasachahua/AG3-Visualizacion-de-datos/master/columnas.json", function(data) {
  var visualization = d3plus.viz()
  .container("#viz3")
  .data(data)
  .type('box')
  .id('name')
  .x('year')
  .y('value')
  .axes({ ticks: 'false' })
  .draw();
  });