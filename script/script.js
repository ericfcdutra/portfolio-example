document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtd").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    if (prazo > 1) {
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    } else document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    atualizarPreco()
})

function atualizarPreco() {
    const qtd = document.querySelector("#qtd").value
    const temJS = document.querySelector("#js").checked
    const layoutSim = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtd * 100

    if (temJS) preco *= 1.1
    if (layoutSim) preco += 500

    let taxaUrgencia = 1

    if (prazo <= 10) taxaUrgencia += (1 - prazo * 0.1)

    preco *= taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}