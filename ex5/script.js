function escrevaNumeros(inicio,fim){
    if(inicio < fim){
      setTimeout(function(){
        inicio++;
        alert(inicio);
        escrevaNumeros(inicio,fim);
      }, 1000);
    }
  }
  window.onload = function(){
    escrevaNumeros(0,5)
  }