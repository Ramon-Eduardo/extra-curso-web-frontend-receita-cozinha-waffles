function search(event) {
    if (event.key === "Enter" || event.type === "click") {
        let query = document.getElementById("searchBox").value.toLowerCase();
        let pages = {
            "chocolate quente": "chocolatequente.html",
            "panqueca": "panqueca.html",
            "waffle": "waffle.html"
        }
        if (pages[query]) {
            window.location.href = pages[query]; // Redireciona para a página correspondente
        } else {
            alert("Página não encontrada!");
        }
    }
}
