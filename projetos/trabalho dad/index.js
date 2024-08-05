const input = document.getElementsByTagName("input")[0];
const btn = document.getElementsByTagName("button")[0];
const tabela = document.getElementsByTagName("tbody")[0];
const tabela2 = document.getElementsByTagName('table')[0]
const p = document.getElementsByTagName("p")[0];
const p1 = document.getElementsByTagName("p")[1];
const div = document.getElementsByTagName('div')[0]
btn.addEventListener("click", () => {
  let texto = input.value.toLowerCase();
  input.value = "";
  console.log(texto)
  if (texto == "select * from pessoas") {
    p.classList.add("invisivel");
    tabela2.classList.remove("invisivel");
    p1.classList.add("invisivel");
  }
  if(texto =="insert into pessoas (nome, sobrenome, idade) values('samira','souza',17)"){
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    td1.textContent = "Samira"
    const td2 = document.createElement('td')
    td2.textContent = "Souza"
    const td3 = document.createElement('td')
    td3.textContent = "17"
    tabela.appendChild(tr)
    tabela.children[4].appendChild(td1)
    tabela.children[4].appendChild(td2)
    tabela.children[4].appendChild(td3)
    p1.classList.remove('invisivel')
    p.classList.add("invisivel");
    tabela2.classList.add("invisivel");
  }
});
