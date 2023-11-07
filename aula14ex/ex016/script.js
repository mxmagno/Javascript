function contar() {
    var inicio = document.getElementById('numinicio')
    var fim = document.getElementById('numfim')
    var passo = document.getElementById('numpasso')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO: Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('PASSO INVÁLIDO! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        } else {
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
