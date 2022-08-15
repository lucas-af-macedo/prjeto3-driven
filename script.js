var lista=[];
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
    lista=[];
    if (document.querySelector('.prato-selecionadof') !== null && document.querySelector('.bebida-selecionadof') !== null && document.querySelector('.sobremesa-selecionadof')!==null){
        const botao=document.querySelector('.selec-fechar');
        botao.classList.add('verde');
        botao.querySelector('.pinit').classList.add('desaparecer');
        botao.querySelector('.pfin').classList.remove('desaparecer');
        botao.setAttribute('onclick','cancelar()');
        let item1=document.querySelector('.prato-selecionadof h5').innerText;
        let item2=document.querySelector('.bebida-selecionadof h5').innerText;
        let item3=document.querySelector('.sobremesa-selecionadof h5').innerText;
        let valor1=document.querySelector('.prato-selecionadof p').innerText.slice(3,);
        let valor2=document.querySelector('.bebida-selecionadof p').innerText.slice(3,);
        let valor3=document.querySelector('.sobremesa-selecionadof p').innerText.slice(3,);
        let total=Number(valor1.replace(',','.'))+Number(valor2.replace(',','.'))+Number(valor3.replace(',','.'));
        total=total.toFixed(2);
        lista.push(item1,item2,item3,total);
        console.log(lista);
        total=total.replace('.',',');
        document.querySelector('.item1').innerHTML=item1;
        document.querySelector('.item2').innerHTML=item2;
        document.querySelector('.item3').innerHTML=item3;
        document.querySelector('.valor1').innerHTML=valor1;
        document.querySelector('.valor2').innerHTML=valor2;
        document.querySelector('.valor3').innerHTML=valor3;
        document.querySelector('.valor-total').innerHTML='R$ '+total;
    }
}
function cancelar(){
    const menu=document.querySelector('.menu-fechamento');
    menu.classList.toggle('desaparecer');
    menu.classList.toggle('flex');
}
function fechar(){
    const nome = prompt('Digite seu nome');
    const endereco = prompt('Digete seu endereço');
    let string = `Olá, gostaria de fazer o pedido:
    - Prato: ${lista[0]}
    - Bebida: ${lista[1]}
    - Sobremesa: ${lista[2]}
    Total: R$ ${lista[3]}
    
    Nome: ${nome}
    Endereço: ${endereco}`
    window.open('https://wa.me/5522981737527?text='+encodeURIComponent(string));
}

/*let oi4=oi.innerText.slice(4,).replace(',','.');*/