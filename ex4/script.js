function escrevaNumeros(inicio,fim){
    if(inicio < fim){
      setTimeout(function(){
        inicio++
        console.log(inicio)
        escrevaNumeros(inicio,fim)
      }, 1000)
    }
  }
  window.onload = function(){
    escrevaNumeros(0,5)
  }