import data from '../package.json' assert { type: 'json' };

var splashScreen = document.querySelector('.splash');
var version_hd = document.getElementById('version_hd');

  splashScreen.style.opacity = 0;
  version_hd.innerHTML = "versión " + data['version'];
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },3100)
