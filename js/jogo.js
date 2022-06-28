console.log('[startSe] Mario tap')

const sprite = new Image();
sprite.src = "../image/sprites.png";

const canvas = document.querySelector('canvas');
const contexo = canvas.getContext('2d');

// [chao]
const chao = {

    spriteX: 384,
    spriteY: 74,
    largura: 884,
    altura: 54,
    x: 0,
    y: canvas.height - 54,

    desenha() {
        contexo.drawImage(
            sprite, //arquivo de imagem
            chao.spriteX, chao.spriteY,  //SpriteX e SpriteY
            chao.largura, chao.altura,  //tamanho do recorte da imagem
            chao.x, chao.y,  // localização canvas
            chao.largura, chao.altura,  // tamanho no canvas
        );


    },
};

// [background]
const planoDeFundo = {

    spriteX: 397,
    spriteY: 144,
    largura: 932,
    altura: 435,
    x: 0,
    y: canvas.height - 485,

    desenha() {
        contexo.drawImage(
            sprite, //arquivo de imagem
            planoDeFundo.spriteX, planoDeFundo.spriteY,  //SpriteX e SpriteY
            planoDeFundo.largura, planoDeFundo.altura,  //tamanho do recorte da imagem
            planoDeFundo.x, planoDeFundo.y,  // localização canvas
            planoDeFundo.largura, planoDeFundo.altura,  // tamanho no canvas
        );


    },
};


// personagem
const mario = {
    spriteX: 5,
    spriteY: 282,
    largura: 45,
    altura: 53,
    x: 10,
    y: 50,

    atualiza() {

    },

    desenha() {
        contexo.drawImage(
            sprite, //arquivo de imagem
            mario.spriteX, mario.spriteY,  //SpriteX e SpriteY
            mario.largura, mario.altura,  //tamanho do recorte da imagem
            mario.x, mario.y,  // localização canvas
            mario.largura, mario.altura,  // tamanho no canvas
        );


    },
};

// mensagem get ready
const mensagemGetReady = {
    spriteX: 29,
    spriteY: 480,
    largura: 175,
    altura: 177,
    x: (canvas.width / 2) - 174 / 2,
    y: 50,

    desenha() {
        contexo.drawImage(
            sprite, //arquivo de imagem
            mensagemGetReady.spriteX, mensagemGetReady.spriteY,  //SpriteX e SpriteY
            mensagemGetReady.largura, mensagemGetReady.altura,  //tamanho do recorte da imagem
            mensagemGetReady.x, mensagemGetReady.y,  // localização canvas
            mensagemGetReady.largura, mensagemGetReady.altura,  // tamanho no canvas
        );


    },
};

//
// telas
//
let telaAtiva = {};
function mudaParaTela(novaTela) {
    telaAtiva = novaTela;
}
const telas = {
    INICIO: {
        desenha() {
            planoDeFundo.desenha();
            mario.desenha();
            chao.desenha();
            mensagemGetReady.desenha();
        },
        click(){
        mudaParaTela(telas.JOGO);
        },
        atualiza() {

        }
    }
};

telas.JOGO = {
    desenha() {
        planoDeFundo.desenha();
        mario.desenha();
        chao.desenha();
    },
    atualiza() { mario.atualiza(); }

};

function loop() {

    telaAtiva.desenha();
    telaAtiva.atualiza();

    requestAnimationFrame(loop);
}

window.addEventListener("click", function(){
    if(telaAtiva.click){
        telaAtiva.click(); 
    }

});
mudaParaTela(telas.INICIO);
loop();