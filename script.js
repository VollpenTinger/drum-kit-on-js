  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', transitionEnd);
  }

  function clickPlaySound(e) {
    const key = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
    audio.currentTime = 0;
    audio.play();
    this.classList.add('playing');
    this.addEventListener('transitionend', transitionEnd);
  }

  function transitionEnd(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => {
    key.addEventListener('click', clickPlaySound);
  });

  window.addEventListener( 'keydown', playSound);