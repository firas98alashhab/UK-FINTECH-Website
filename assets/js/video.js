const video = document.querySelector(".theVideo"); // Select the video element

video.addEventListener("mouseenter", hoverVideo); // Listen for mouseenter event
video.addEventListener("mouseleave", hideVideo);  // Listen for mouseleave event

function hoverVideo(e) {
    video.play(); // Play the video
}

function hideVideo(e) {
    video.pause(); // Pause the video
}
