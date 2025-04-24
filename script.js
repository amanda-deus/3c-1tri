botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
   })

   document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumanta-fonte') ;
    const diminuiFontebotao = document.getElementById('diminui-fonte') ;

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuiFontebotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})

   const alternaContraste = document.getElementById('alterna-contraste')
   alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})