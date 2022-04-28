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