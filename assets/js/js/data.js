
let agora = new Date()
let horas = agora.getHours().toString().padStart(2, '0')
let minutos = agora.getMinutes().toString().padStart(2, '0')
document.getElementById('hora').innerText = `Horário - ${horas}:${minutos}`

let dia = agora.getDate().toString().padStart(2, '0')
let mes = (agora.getMonth() + 1).toString().padStart(2, '0')
document.getElementById('data').innerText = `Data - ${dia}/${mes}`

let ano = agora.getFullYear()
document.getElementById('ano').innerText = `Ano - ${ano}`;