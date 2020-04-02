function escrevaNumerosInterval(inicio,fim){
    setInterval(function(){
        if(inicio < fim){
            inicio++
            console.log(inicio)
        }
        else return
    }, 10000)
}

function escrevaNumerosAninhado(inicio,fim){
    let mostra = setTimeout(function mostrar(){
        if(inicio < fim){
            inicio++
            console.log(inicio)
        mostra = setTimeout(mostrar, 1000)    
        }
        else return
    }, 1000)
}

