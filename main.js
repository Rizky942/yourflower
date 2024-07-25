onload = () => {
  document.body.classList.remove('container');
};

window.addEventListener('load', function () {
  var audio = document.getElementById('myAudio');
  audio.play().catch(function (error) {
    // Tangani error jika pemutaran otomatis diblokir oleh browser
    console.log('Error: ' + error);
  });
});
