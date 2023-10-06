/*
//SELECIONANDO UM ID
document.getElementById('exemplo')

//SELECIONANDO CLASSES
document.getElementsByClassName('lista')

//SELECIONANDO TAGS
document.getElementsByTagName('button')

//SELECIONANDO QUALQUER ELEMENTO
document.querySelector('#exemplo')

//SELECIONANDO TODOS OS ELEMENTOS
document.querySelectorAll('.lista')
*/


/*

//INNERTEXT TROCA O TEXTO
document.querySelector('#exemplo').innerText = "Curso Técnico"

//INNERHTML TROCA O TEXTO COM TAG HTML
document.querySelector('button').innerHTML = "<h1>Clique aqui</h1>"

//CAPTANDO O VALOR DE ENTRADA
document.querySelector('input').value
*/
function mouse(){
    document.querySelector('#faca').innerText = "Passou o Mouse"
}

function clicou(){
    document.querySelector('#faca').innerText = "Clicou"
}

function tirou(){
    document.querySelector('#faca').innerText = "Tirou o mouse"
}


