function verificar() {
    let data = new Date
    let ano = data.getFullYear()
    let fAno = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    if (Number(fAno.value.length) == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fSex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'HOMEM'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'assets/img/homembebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/img/homemjovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'assets/img/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/img/homemvelho.png')
            }
        } else if (fSex[1].checked) {
            genero = 'MULHER'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'assets/img/mulherbebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/img/mulherjovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'assets/img/mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/img/mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}