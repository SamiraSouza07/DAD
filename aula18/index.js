const ul = document.getElementById('lista-tarefas')
// let cont = 0;
// const body = document.getElementsByTagName("body")[0];
// function clicar() {
//   const img = document.createElement("img");
//   img.setAttribute("src", "pipi.jpg");
//   img.classList.add("img");
//   img.setAttribute("style", "margin:5px");
//   body.appendChild(img);
//   cont += 1;
// }
// function reset() {
//     let imgs = document.getElementsByClassName("img")[cont-1];
//     body.removeChild(imgs);
//     cont--;

// }

function criarTarefa() {
  const input = document.getElementById("tarefa")
  const conteudoTarefa = input.value;
  input.value=""
  
  //criando elemento de tarefa
  const li = document.createElement('li')
  li.textContent = conteudoTarefa
  li.classList.add("tarefas-style")
  ul.appendChild(li)
  
}
