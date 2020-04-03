function avisarParaTomarAgua() {
    setInterval('alert("Tome agua!")', 60000);
}
window.onload = function () {
    avisarParaTomarAgua()
} 