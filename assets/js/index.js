import { fechar, menu } from '../js/js/menu.js'
import {} from '../js/js/data.js'
import { iniciarContador, resetarContador } from '../js/js/tempo.js'

const botaoMenu = document.querySelector('#botao-menu')
botaoMenu.addEventListener('click', menu)

const botaoResetar = document.querySelector('#resetar')
botaoResetar.addEventListener('click', resetarContador)

iniciarContador()