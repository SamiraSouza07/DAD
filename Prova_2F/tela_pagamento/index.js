const dados = JSON.parse(localStorage.getItem("QntValores"))
document.getElementById("algo"). textContent = dados[0]+" "+dados[1]+" "+dados[2]+" "+dados[3]+" "+dados[4]+" "+dados[5]