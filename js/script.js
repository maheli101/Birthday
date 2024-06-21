let clickCount = 0;
const cakeImage = document.getElementById('cakeImage');
const balloons = document.getElementById('balloons');
const birthdayText = document.getElementById('birthdayText');
const birthdaySong = document.getElementById('birthdaySong');
const clickText = document.getElementById('clickText');

cakeImage.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= 4) {
        cakeImage.src = `images/cake-${clickCount}.png`;
    }

    if (clickCount === 4) {
        // Show balloons
        balloons.style.display = 'block';

        // Play birthday song
        birthdaySong.play();

        // Show birthday text
        birthdayText.style.display = 'block';

        // Hide click text
        clickText.style.display = 'none';

         gallerytext.style.display = 'block';

        gallery.style.display = 'block';

       

       
        
    }
});
