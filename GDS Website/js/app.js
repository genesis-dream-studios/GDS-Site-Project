let pageClickCount = 0;
let usingKey = false;

//Set pageClickCount
document.getElementById('pageClickDisplay').textContent = `Page Clicks: ${pageClickCount}`;

//Iterate pageClickCount
document.addEventListener('click', () => {
  clickIterate();
  usingKey = false;
});

//Iterate pageClickCount ALT with D
document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyD') {
    clickIterate();
    usingKey = true;
  }
});

function clickIterate() {
  pageClickCount++;
  document.getElementById('pageClickDisplay').textContent = `Page Clicks: ${pageClickCount}`;

  //Check for pageClickCount values
  setTimeout(function() {
    if (pageClickCount === 27) {
      alert('JohnIsDaBoi27');
      if (usingKey) pageClickCount = 28;
    }
    else if (pageClickCount === 245) {
      alert('Wow you\'re dedicated....\nMatijaThe245th.');

      if (confirm('Download Matija\'s peak game "GDS Kart"?')) {
        alert('Correct!');
        if (usingKey) pageClickCount = 246;
      }
      else {
        alert('Wrong! Page Self-Refresh in 3...\n2...\n1...');
        if (usingKey) pageClickCount = 246;
        window.location.reload();
      }
    } else if (pageClickCount === 666) {
      alert('The man who speaks in hands.');
      if (usingKey) pageClickCount = 667;
      window.location.reload();
      window.location.replace("https://youtu.be/Dnx_4k05p74");
    }
  }, 50);
}



