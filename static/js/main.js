var vid = document.getElementById('bgvid');
var pauseButton = document.getElementById('pauseButton');

// This auto pauses background vid when client prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute('autoplay');
    vid.pause();
}

pauseButton.addEventListener('click', function() {
    if (vid.paused) {
        pauseButton.classList.remove("fa-play");
        pauseButton.classList.add("fa-pause");

        vid.play()
    } else {
        pauseButton.classList.remove("fa-pause");
        pauseButton.classList.add("fa-play");
        vid.pause();
    }
});
