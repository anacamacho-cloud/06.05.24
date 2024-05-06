var bntEsquerda = document.getElementById("esquerda")

var movimento = {
    
    moverParaDireita: function(){
        alert("O método do objeto foi chamado")

        leftAvatar = getLeftStyle(imgAvatar);
        if(leftAvatar > posicaoEsquerdaInicial){
            posicaoEsquerda -= parseInt(txtPixel.value);
            
        }
    }
}


bntEsquerda.addEventListener("click", movimento.moverParaDireita)



var posicaoSuperior = 250,
    posicaoEsquerda = 350,
    topAvatar,
    leftAvatar
    anguloAvatar = 0;

    const posicaoSuperiorInicial = 70,
    posicaoEsquerdaInicial = 70,
    posicaoSuperiorFinal = 100,
    posicaoEsquerdaFinal = 400,
    anguloInicial = 0,
    anguloFinal = 500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar),
    txtPixel = document.getElementById("txtPixel");

    imgAvatar.style.position = "absolute";
    imgAvatar.style.top = posicaoSuperior + "px";
    imgAvatar.style.left = posicaoEsquerda + "px";
    imgAvatar.style.transform = "rotate("+ anguloAvatar +")";