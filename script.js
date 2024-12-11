//variaveis
const imagens = ['urso-1.png','urso-2.png', 'urso-3.png'];
let indice = 0;
const urso = document.getElementById('urso');
let posicaoX = 0; 
let posicaoY = 0;

//checa pra qual lado o urso vai
function moverUrso(event){
    if(event.key == 'd'){
        moverUrsodireita();
    } else if(event.key == 'a'){
        moverUrsoesquerda();
    } else if(event.key == 'w'){
        pularUrso();
    }
}
function pararurso(event){
    if(event.key == 'd' ){
        indice=0 ;
        urso.src = imagens[indice];
    } else if(event.key == 'a' ){
        indice=0 ;
        urso.src = imagens[indice];
    }
}

// anda direita

function moverUrsodireita() {
    // vorta o urso
    if(posicaoX > 1800|| posicaoX<0){
        posicaoX=0
    }
    const urso = document.getElementById('urso');
    posicaoX += 25; 

    //meche no css
    urso.style.left = `${posicaoX}px`;

    
    indice = (indice + 1) % 3; 
    urso.src = imagens[indice];
}

// anda direita do outro lado
function moverUrsoesquerda() {
    // vorta o urso
    if(posicaoX > 1800 || posicaoX<0){
        posicaoX=0
    }
    const urso = document.getElementById('urso');
    posicaoX -= 25; 

    //meche no css
    urso.style.left = `${posicaoX}px`;

    
    indice = (indice + 1) % 3; 
    urso.src = imagens[indice];
}

//voua urso
function pularUrso(){
    indice = 1; 
    urso.src = imagens[indice];
    posicaoY = 150
    urso.style.bottom = `${posicaoY}px`;
}

// ouvidoria
window.addEventListener('keydown',moverUrso);

window.addEventListener('keyup',pararurso);
