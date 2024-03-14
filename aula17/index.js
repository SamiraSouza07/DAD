let cont = 0;
const body = document.getElementsByTagName("body")[0];
function clicar() {
  const img = document.createElement("img");
  img.setAttribute("src", "pipi.jpg");
  img.classList.add("img");
  img.setAttribute("style", "margin:5px");
  body.appendChild(img);
  cont += 1;
}
function reset() {
    let imgs = document.getElementsByClassName("img")[cont-1];
    body.removeChild(imgs);
    cont--;

}
