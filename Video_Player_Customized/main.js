const vid_player = document.querySelector('.vid-player');
const video = vid_player.querySelector('.viewer');
const prog = vid_player.querySelector('.prog-bar');
const prog_bar = vid_player.querySelector('.prog-bar__filled');
const toggle = vid_player.querySelector('.toggle');
const skip_btns = vid_player.querySelectorAll('[data-skip]');
const ranges = vid_player.querySelectorAll('.vid-player__slider');
const lower_deck = vid_player.querySelector('.low-deck');

function togglePlay() {
    const play_ctrl = video.paused ? 'play' : 'pause';
    video[play_ctrl]();
}

function updateBtn() {
    if (this.paused) {
        if (toggle.classList.contains("fa-pause")) toggle.classList.remove("fa-pause");
        toggle.classList.add("fa-play");
    } else {
        toggle.classList.remove("fa-play");
        toggle.classList.add("fa-pause");
    }
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)
}

function adjustRange() {
    video[this.name] = this.value;
}

function adjustProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    prog_bar.style.width = `${percent}%`
}

function seek(e) {
    const seekTime = (e.offsetX / prog.offsetWidth) * video.duration;
    video.currentTime = seekTime;
}




video.addEventListener("mouseover", () => { lower_deck.style.display = "flex" });
video.addEventListener("mouseout", () => { lower_deck.style.display = "none" })
lower_deck.addEventListener("mouseover", () => { lower_deck.style.display = "flex" });
lower_deck.addEventListener("mouseout", () => { lower_deck.style.display = "none" });
prog.addEventListener("mouseover", () => { lower_deck.style.display = "flex" });
prog.addEventListener("mouseout", () => { lower_deck.style.display = "none" });

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", adjustProgress)
toggle.addEventListener("click", togglePlay);
skip_btns.forEach(btn => btn.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener('change', adjustRange));
ranges.forEach(range => range.addEventListener('mousemove', adjustRange));

let mousedown = false;
prog.addEventListener('click', seek);
prog.addEventListener("mousemove", (e) => mousedown && seek(e));
prog.addEventListener("mousedown", () => mousedown = true)
prog.addEventListener("mouseup", () => mousedown = false)