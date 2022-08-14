function marcarprato(numero,caminho,item){
    const elemento=document.querySelector(caminho);
    if (elemento!==null){
        const icone=elemento.querySelector('.icone');
        elemento.classList.remove(item);
        icone.classList.add('desaparecer');
    }
    const icone2=numero.querySelector('.icone');
    numero.classList.add(item);
    icone2.classList.remove('desaparecer');
    teste(item);
}
function teste(item){
    if (document.querySelector('.prato-selecionadof') !== null && document.querySelector('.bebida-selecionadof') !== null && document.querySelector('.sobremesa-selecionadof')!==null){
        const botao=document.querySelector('.selec-fechar');
        botao.classList.add('verde');
        botao.querySelector('.pinit').classList.add('desaparecer');
        botao.querySelector('.pfin').classList.remove('desaparecer');
        botao.setAttribute('onclick','cancelar()');
    }
}
function cancelar(){
    const menu=document.querySelector('.menu-fechamento');
    menu.classList.toggle('desaparecer');
    menu.classList.toggle('flex');
}