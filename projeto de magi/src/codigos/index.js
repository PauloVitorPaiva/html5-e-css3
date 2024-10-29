const listaSelecaoMagidevs = document.querySelectorAll(".magidev");
console.log(listaSelecaoMagidevs)

listaSelecaoMagidevs.forEach(magidev =>{
    magidev.addEventListener("click", () => {
        esconderCartaoMagidev();

        const idMagidevSelecionado = mostrarcartaomagidev(magidev);

        desativarMagidevNaListagem();

        ativarMagidevSelecionadoNaListagem(idMagidevSelecionado);
    })
})
function ativarMagidevSelecionadoNaListagem(idMagidevSelecionado) {
    const magidevSelecionadoNaListagem = document.getElementById(idMagidevSelecionado);
    magidevSelecionadoNaListagem.classList.add("ativo");
}

function desativarMagidevNaListagem() {
    const magidevAtivoNaListagem = document.querySelector(".ativo");
    magidevAtivoNaListagem.classList.remove("ativo");
}

function mostrarcartaomagidev(magidev) {
    const idMagidevSelecionado = magidev.attributes.id.value;
    const idDoCartaoMagidevParaAbrir = "cartao-" + idMagidevSelecionado;
    const cartaoMagidevParaAbrir = document.getElementById(idDoCartaoMagidevParaAbrir);
    cartaoMagidevParaAbrir.classList.add("aberto");
    return idMagidevSelecionado;
}

function esconderCartaoMagidev() {
    const cartaoMagidevAberto = document.querySelector(".aberto");
    cartaoMagidevAberto.classList.remove("aberto");
}

