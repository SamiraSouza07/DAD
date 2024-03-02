//acessando o body
const body = document.getElementsByTagName("body")[0]
//criando o img
const img = document.createElement("img");
//adicionando o img no body
body.appendChild(img)


//acessando a imagem
const img1 = document.getElementsByTagName("img")[0]

//colocar a imagem no js
img1.setAttribute("src", "pipi.jpg");

img1.setAttribute("alt","Pipi perigoso")