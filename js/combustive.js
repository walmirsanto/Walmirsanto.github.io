var gasolina, etanol;

function melhor(){
    etanol= parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina= parseFloat(frdados.txgasolina.value.replace(",","."));
    if (etanol < 0.7*gasolina) {
        document.getElementById("imagem").src = "imagens/combust1.jpg";

    }
    else {
        document.getElementById("imagem").src = "imagens/combust2.jpg";
    }
}
function limpar(){
    document.getElementById("imagem").src="imagens/combustive.jpg"
}