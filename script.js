// Initialize configuration
const config = window.VALENTINE_CONFIG;

function sayYes() {
    document.getElementById('yayMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('yayMessage').style.display = 'none';
    }, 3000);
    for (let i = 0; i < 40; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.innerHTML = Math.random() > 0.5 ? '🧸' : '❤️';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}
function moveNoButton() {
    let noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * 80 + 'vw';
    noButton.style.top = Math.random() * 80 + 'vh';
}
function showCelebration() {
    document.getElementById('message').style.display = 'block';
    for (let i = 0; i < 40; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.innerHTML = Math.random() > 0.5 ? '🧸' : '❤️';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
    setTimeout(() => {
        document.getElementById('gifContainer').style.display = 'block';
    }, 2000);
    setTimeout(() => {
        window.location.href = 'Gift.html';
    }, 5000);
}
// function toggleGift(element) {
//     element.classList.toggle("selected");
// }

// function pickEverything() {
//     // Select all images and toggle the "selected" class for each one
//     let gifts = document.querySelectorAll('.gift');
//     gifts.forEach(gift => {
//         if (!gift.classList.contains("selected")) {
//             gift.classList.add("selected"); // Apply the "selected" effect
//         }
//     });
// }

// function nextPage() {
//     // Function to navigate to the next page
//     window.location.href = 'next_page.html'; // Replace with the actual link to the next page
// }
// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Only show controls if music is enabled in config
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Try autoplay if enabled
    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser");
                musicToggle.textContent = config.music.startText;
            });
        }
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
} 