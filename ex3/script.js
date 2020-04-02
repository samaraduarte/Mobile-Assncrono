function chamarFrase(){
    document.getElementById("paragrafo").innerHTML = "Carregado com sucesso"
}

function carregar(){
    document.getElementById("paragrafo").innerHTML = "<img src='https://img.ibxk.com.br/2014/3/materias/4805475817181218.gif' width='300px'>"
    setTimeout(chamarFrase, 500)
}