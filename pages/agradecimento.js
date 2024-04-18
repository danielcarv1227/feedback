function pegarnota() {
    let notas = localStorage.getItem("notas")

    let nota = document.querySelector(".nota")

    nota.innerHtml = `voce selecionou ${notas} de 5`
}

pegarnota()