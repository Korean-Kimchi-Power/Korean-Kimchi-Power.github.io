// Get the buy button element
const buyButton = document.getElementById('buyButton');

// Create a new Audio object
const sound = new Audio('apple.mp3');

// Add an event listener to play sound when mouse enters the button
buyButton.addEventListener('mouseenter', function() {
  sound.play().catch(function(error) {
    console.log("Audio playback failed: ", error);
  });
});

// Optional: Stop the sound when the mouse leaves (if you want the sound to stop when leaving)
buyButton.addEventListener('mouseleave', function() {
  sound.pause();  // Pause the sound
  sound.currentTime = 0;  // Reset sound to the beginning
});
