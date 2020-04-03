async function fetchData() {
    await fetch('https://raw.githubusercontent.com/samaraduarte/Mobile-Assncrono/master/ex7/receitas.json').then(async (response) => {
        return await response.json()
        .then(data => {
            let html = ""
            for (let index = 0; index < Object.keys(data.results).length; index++) {
                html += '<div><h3>' + data.results[index].title + '</h3>'
                    + `<li><a href = "` + data.results[index].href + `">Receita</a></li>`
                    + '<div>' + data.results[index].ingredients
                    + `<li><img style=" width: 150px;height: 100px;" src = "` + data.results[index].thumbnail + `"></li>`
            }
            document.getElementById('json').innerHTML = html;
        })
        .catch(error => {
            console.log(error)
        })
    })
}
