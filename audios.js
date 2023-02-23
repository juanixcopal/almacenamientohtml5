let miaudio, reproducir, progreso, maximo
maximo = 530
function comenzar() {
  miaudio = document.getElementById('miaudio')
  reproducir = document.getElementById('play')
  barra = document.getElementById('barra')
  progreso = document.getElementById('progreso')

  reproducir.addEventListener('click', clickando, false)
  barra.addEventListener('click', adelantando, false)
}

function clickando() {
  if (miaudio.paused === false && miaudio.ended == false) {
    const play = "<span class='fa fa-play-circle'></span>"
    miaudio.pause()
    reproducir.innerHTML = play
    bucle = setInterval(estado, 30)
  } else {
    const pause = "<span class='fa fa-pause-circle'></span>"
    miaudio.play()
    reproducir.innerHTML = pause
  }
}

function estado() {
  if (miaudio.ended === false) {
    var total = parseInt((miaudio.currentTime * maximo) / miaudio.duration)
    progreso.style.width = total + 'px'
  }
}

function adelantando(posicion) {
  if (miaudio.paused === false && miaudio.ended === false) {
    var ratonX = posicion.pageX - barra.offsetLeft
    var nuevoTiempo = (ratonX * mivideo.duration) / maximo
    miaudio.currentTime = nuevoTiempo
    progreso.style.width = ratonX + 'px'
  }
}
window.addEventListener('load', comenzar, false)
