botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
   })

   document.addEventListener('DOMContentLoaded', function() {
    const aumentaFonteBotao = document.getElementById('aumenta-fonte'); 
    const diminuiFonteBotao = document.getElementById('diminui-fonte'); 

    let tamanhoAtualFonte = 1;

    if (aumentaFonteBotao && diminuiFonteBotao) { 
        aumentaFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });

        diminuiFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });
    } else {
        console.error("Botões não encontrados. Verifique os IDs no HTML.");
    }
});
   const alternaContraste = document.getElementById('alterna-contraste')
   alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})