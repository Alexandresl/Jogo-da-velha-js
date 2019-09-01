let jogador = 'jogador1';
let jogada = 0;
let timeout = 20;

function chkJogo(id) {
  let src = chkSrc(id);
  let cpu = document.getElementById('cpu').checked;
  console.log(cpu);
  
  if (src === 'jogador0') {

    let image = document.getElementById(id).children[0].src = './img/' + jogador + '.png';
    document.getElementById(id).children[0].classList.add('animated', 'bounceIn', 'faster')

    if (chkVitoria()) {
      setTimeout(() => {
        alert('Fim do jogo\nVitória do jogador ' + jogador);
        location.reload();
      }, timeout);
    } else {
      setTimeout(() => {
        jogador = (jogador === 'jogador1') ? 'jogador2' : 'jogador1';
      }, timeout);
      jogada++
      if (jogada === 9) {
        setTimeout(() => {
          alert('Fim do jogo\n Esta partida empatou!');
          location.reload();
        }, timeout);
      }
    }
    
  }
  
  setTimeout(() => {
    if (cpu && jogador === 'jogador2') {
      console.log('aqui')
      chkJogo(jogadaCpu());
    }
  }, timeout * 5);
}

function chkSrc(id) {
  let src = document.getElementById(id).children[0].src;
  return src.substring(src.length - 12, src.length - 4);
}

function chkVitoria() {
  if (chkSrc('cel1') === chkSrc('cel2') && chkSrc('cel2') === chkSrc('cel3') && chkSrc('cel1') !== 'jogador0' ||
    chkSrc('cel4') === chkSrc('cel5') && chkSrc('cel5') === chkSrc('cel6') && chkSrc('cel4') !== 'jogador0' ||
    chkSrc('cel7') === chkSrc('cel8') && chkSrc('cel8') === chkSrc('cel9') && chkSrc('cel7') !== 'jogador0' ||
    chkSrc('cel1') === chkSrc('cel4') && chkSrc('cel4') === chkSrc('cel7') && chkSrc('cel1') !== 'jogador0' ||
    chkSrc('cel2') === chkSrc('cel5') && chkSrc('cel5') === chkSrc('cel8') && chkSrc('cel2') !== 'jogador0' ||
    chkSrc('cel3') === chkSrc('cel6') && chkSrc('cel6') === chkSrc('cel9') && chkSrc('cel3') !== 'jogador0' ||
    chkSrc('cel1') === chkSrc('cel5') && chkSrc('cel5') === chkSrc('cel9') && chkSrc('cel1') !== 'jogador0' ||
    chkSrc('cel3') === chkSrc('cel5') && chkSrc('cel5') === chkSrc('cel7') && chkSrc('cel3') !== 'jogador0') {
    return true;
  }
  return false;
}


/**
 * Here we will implement the machine logic
 * For now only one random box is being drawn.
 */
function jogadaCpu() {
  console.log('chegou');
  
  return 'cel' + Math.floor((Math.random() * 9) + 1);
}