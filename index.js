function pularProximoEndereco() {
    // Obter a lista de endereços
    var listaEnderecos = document.getElementById("addresses").getElementsByTagName("li");

    // Encontrar o endereço atualmente selecionado
    var enderecoAtual = document.querySelector("#addresses li.selected");

    // Se não houver nenhum endereço selecionado ou se for o último endereço, selecionar o primeiro endereço
    if (!enderecoAtual || enderecoAtual === listaEnderecos[listaEnderecos.length - 1]) {
        listaEnderecos[0].classList.add("selected");
    } else {
        // Remover a classe "selected" do endereço atual
        enderecoAtual.classList.remove("selected");
        // Adicionar a classe "selected" ao próximo endereço
        enderecoAtual.nextElementSibling.classList.add("selected");
        console.log(enderecoAtual)
    }
}