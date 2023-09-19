let num = document.querySelector('input#fnum').value
let lista = document.querySelector('input#flista')
let res = document.querySelector('input#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true 
    } else {
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        window.alert('Tudo ok!')
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}