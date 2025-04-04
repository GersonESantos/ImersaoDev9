function isColor(data) 
{
  const result = {
    red :"vermelho" ,
    blue : "azul",
    green : "verde",

};
 return result[data] || "não é uma cor";

};
 console.log(isColor("red"));
    console.log(isColor("blue"));
    console.log(isColor("green"));
