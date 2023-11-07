function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('strano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                //Bebê
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade >= 4 && idade < 18) {
                //Criança
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade >= 18 && idade < 30) {
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade >= 30 && idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosohomem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //Bebê
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade >= 4 && idade < 18) {
                //Criança
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade >= 18 && idade < 30) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.paddingTop = '10px'
        res.appendChild(img)
    }
}