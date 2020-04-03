
function loadJson(){

fetch('https://raw.githubusercontent.com/samaraduarte/Mobile-Assncrono/master/ex7/receitas.json')
.then(function(resp){
    return resp.json()
})

.then(function(data){
    let html = " "
   console.log(data)
    data.quotesArray.forEach(function(array){
        html += `
            <li>${array.name}</li>
        `
    })
    document.getElementById("json").innerHTML = html
})

 
}



