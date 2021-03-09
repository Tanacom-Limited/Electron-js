const shell = require('electron').shell

const openBtn = document.getElementById('openBtn')

openBtn.addEventListener('click', function (event) {

  shell.showItemInFolder('/Users/mac/Desktop/DailyCodes')

  shell.openItem('/Users/mac/Desktop/FOLD/back.jpg')

  shell.openExternal('http://electron.atom.io')

})