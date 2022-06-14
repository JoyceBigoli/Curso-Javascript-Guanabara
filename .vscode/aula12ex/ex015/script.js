function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex [0].checked){
           gênero = 'Homem'
           if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'homem10.jpg')
           }else if (idade < 21){
            //jovem   
            img.setAttribute('src', 'homem20.jpg')
           } else if (idade < 50){
            //adulto   
            img.setAttribute('src', 'homem30.jpg')
           } else {
            //idoso
            img.setAttribute('src', 'homem50.jpg')
           }
                 
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher10.jpg')
               }else if (idade < 21){
                //jovem 
                img.setAttribute('src', 'mulher20.jpg')  
               } else if (idade < 50){
                //adulto   
                img.setAttribute('src', 'mulher30.jpg')
               } else {
                //idoso
                img.setAttribute('src','mulher50.jpg')
               }
    }    
    res.style.textAlign='center'
    res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
}
