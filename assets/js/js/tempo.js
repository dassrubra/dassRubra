const tempoInicial = 2592000

let tempoRestante = localStorage.getItem('tempoRestante') 
    ? parseInt(localStorage.getItem('tempoRestante')) 
    : tempoInicial

export function formatarTempo(segundos) {
    let horas = Math.floor(segundos / 3600).toString().padStart(3, '0')
    let minutos = Math.floor((segundos % 3600) / 60).toString().padStart(2, '0')
    let segs = (segundos % 60).toString().padStart(2, '0')
    return `${horas}:${minutos}:${segs}`
}

export function atualizarContador() {
    if (tempoRestante > 0) {
        tempoRestante--
        document.getElementById('tempo').innerText = formatarTempo(tempoRestante)
        localStorage.setItem('tempoRestante', tempoRestante)
    } else {
        clearInterval(window.tempoIntervalo)
        document.getElementById('tempo').innerText = "000:00:00"
    }
}

export function iniciarContador() {
    document.getElementById('tempo').innerText = formatarTempo(tempoRestante)
    window.tempoIntervalo = setInterval(atualizarContador, 1000)
}

export function resetarContador() {
    clearInterval(window.tempoIntervalo)
    tempoRestante = tempoInicial
    localStorage.setItem('tempoRestante', tempoRestante)
    document.getElementById('tempo').innerText = formatarTempo(tempoRestante)
    window.tempoIntervalo = setInterval(atualizarContador, 1000)
}