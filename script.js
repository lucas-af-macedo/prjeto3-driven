function marcarprato(numero){
    const elemento=document.querySelector('.caixa-prato .prato-selecionadof');
    const icone=document.querySelector('.caixa-prato .prato-selecionadof .icone');
    if (elemento!==null){
        elemento.classList.remove('prato-selecionadof');
        icone.classList.add('desaparecer');

    }
    const icone2=document.querySelector('.caixa-prato '+numero+' .icone');
    const elemento2=document.querySelector(numero);
    console.log(elemento2);
    elemento2.classList.add('prato-selecionadof');
    icone2.classList.remove('desaparecer');
}
function marcarbebida(numero){
    const elemento=document.querySelector('.caixa-bebida .bebida-selecionadof');
    const icone=document.querySelector('.caixa-bebida .bebida-selecionadof .icone');
    if (elemento!==null){
        elemento.classList.remove('bebida-selecionadof');
        icone.classList.add('desaparecer');

    }
    const icone2=document.querySelector('.caixa-bebida '+numero+' .icone');
    const elemento2=document.querySelector(numero);
    console.log(elemento2);
    elemento2.classList.add('bebida-selecionadof');
    icone2.classList.remove('desaparecer');
}

function marcarsobremesa(numero){
    const elemento=document.querySelector('.caixa-sobremesa .sobremesa-selecionadof');
    const icone=document.querySelector('.caixa-sobremesa .sobremesa-selecionadof .icone');
    if (elemento!==null){
        elemento.classList.remove('sobremesa-selecionadof');
        icone.classList.add('desaparecer');

    }
    const icone2=document.querySelector('.caixa-sobremesa '+numero+' .icone');
    const elemento2=document.querySelector(numero);
    console.log(elemento2);
    elemento2.classList.add('sobremesa-selecionadof');
    icone2.classList.remove('desaparecer');
}