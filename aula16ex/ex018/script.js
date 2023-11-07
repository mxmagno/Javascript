let n = document.getElementById('strnum')
let valores = document.getElementById('selvalores')
let num = Number(n.value)
let lista = []
let res = document.getElementById('res')

function adicionar() {
    if (num < 1 ) {
    } else {
        lista.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        item.value = `valores${num}`
        valores.appendChild(item)
    }
}
function finalizar() {
    res.innerHTML = `Ao todo temos ${lista.length} elementos`
    
}