export function menu() {
    let menu = document.querySelector('.menu')
    let bloco1 = document.querySelector('#ciri1')
    let bloco2 = document.querySelector('#ciri2')
    let guts = document.querySelector('.guts')

    menu.style.display = 'flex'
    bloco1.style.display = 'none'
    bloco2.style.display = 'none'
    guts.style.opacity = '0.5'

    setTimeout(() => {
        menu.classList.add('open');
        document.addEventListener('click', fechar)
    }, 0)
}

export function fechar(event) {
    let menu = document.querySelector('.menu')
    let clickForaMenu = !menu.contains(event.target)

    if (clickForaMenu) {
        menu.classList.remove('open')
        setTimeout(() => {
            menu.style.display = 'none'
        }, 0);
        document.removeEventListener('click', fechar)

        let bloco1 = document.querySelector('#ciri1')
        let bloco2 = document.querySelector('#ciri2')
        let guts = document.querySelector('.guts')

        bloco1.style.display = 'flex'
        bloco2.style.display = 'flex'
        guts.style.opacity = '1'
    }
}