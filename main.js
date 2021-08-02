const playSong = document.getElementsByClassName('play')
const stopSong = document.getElementsByClassName('pause')
const volume = document.querySelector('.volume')

let audio
let current = 0;

for(element of playSong){
    element.addEventListener('click', function(){
        let songs = this.getAttribute('id')
        audio = new Audio(`./songs/${songs}.mp3`)
        audio.play()
    })
}

for(element of stopSong){
    element.addEventListener('click', function pause(){
       audio.pause();
      audio.currentTime = 0;
    })
}

volume.addEventListener('click', function(){
    let vol = this.value
    audio.volume = this.value
})