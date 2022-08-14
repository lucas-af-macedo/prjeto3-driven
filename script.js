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
        let oi4=Number(document.querySelector('.prato-selecionadof p').innerText.slice(3,).replace(',','.'))+Number(document.querySelector('.bebida-selecionadof p').innerText.slice(3,).replace(',','.'))+Number(document.querySelector('.sobremesa-selecionadof p').innerText.slice(3,).replace(',','.'));
        console.log(oi4);
        oi4=oi4.toFixed(2).replace('.',',');
        document.querySelector('.valor-total').innerHTML='R$ '+oi4;
    }
}
function cancelar(){
    const menu=document.querySelector('.menu-fechamento');
    menu.classList.toggle('desaparecer');
    menu.classList.toggle('flex');
}
/*let oi4=oi.innerText.slice(4,).replace(',','.');*/