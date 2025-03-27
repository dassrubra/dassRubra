const botoes = document.querySelectorAll('.coluna1 button')

botoes.forEach(botao => {
    botao.addEventListener('click', () => {

        let yellow = document.querySelector('#g1')
        let pink = document.querySelector('#g2')
        yellow.style.display = 'none'
        pink.style.display = 'none'

        document.querySelectorAll('.anota').forEach(anota => {
            anota.style.display = 'none'
        })

        const idAnota = botao.getAttribute('data-anota')
        document.getElementById(idAnota).style.display = 'block'
    })
})