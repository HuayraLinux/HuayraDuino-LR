import data from '../package.json' assert { type: 'json' };

var splashScreen = document.querySelector('.splash');
var version_hd = document.getElementById('version_hd');

  version_hd.innerHTML = "versión " + data['version'];
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },3100)
