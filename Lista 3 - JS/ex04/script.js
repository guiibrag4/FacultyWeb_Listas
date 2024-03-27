function mostrarOcultar() {
    var paragrafo = document.getElementById ("paragrafo");
    if (paragrafo.style.display === "none"){
        paragrafo.style.display = "block";
    } else {
        paragrafo.style.display = "none";
    }
}