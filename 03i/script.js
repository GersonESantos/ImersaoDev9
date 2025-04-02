function isColor(data) 
{
  const result = {
    red :"vermelho" ,
    blue : "azul",
    green : "verde",

};
 return result[data] || "não é uma cor";

 console.log(isColor("red"));
};