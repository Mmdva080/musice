const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const repeatBtn = document.getElementById('repeat');
const progressSlider = document.getElementById('progress');
const volumeSlider = document.getElementById('volume');
const lyricsText = document.getElementById('lyrics-text');

let isPlaying = false;
let isRepeating = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

prevBtn.addEventListener('click', () => {
    // کد برای رد کردن به آهنگ قبلی
});

nextBtn.addEventListener('click', () => {
    // کد برای رد کردن به آهنگ بعدی
});

repeatBtn.addEventListener('click', () => {
    isRepeating = !isRepeating;
    audio.loop = isRepeating;
    repeatBtn.classList.toggle('active', isRepeating);
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressSlider.value = progress;
});

progressSlider.addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// نمونه‌ای از همگام‌سازی متن موزیک
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    if (currentTime > 10 && currentTime < 20) {
        lyricsText.innerText = 'بخش اول از متن موزیک...';
    } else if (currentTime > 20 && currentTime < 30) {
        lyricsText.innerText = 'بخش دوم از متن موزیک...';
    } else {
        lyricsText.innerText = 'متن موزیک اینجا نمایش داده می‌شود...';
    }
});
