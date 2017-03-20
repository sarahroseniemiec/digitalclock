console.log('hello');

setInterval(function () {
  var date = new Date ()
  var hours = date.getHours ()
  var minutes = date.getMinutes ()
  var seconds = date.getSeconds ()
  if (hours < 10){
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10){
    seconds = '0' + seconds
  }
  var clock = document.getElementById('clock')
  var clockcolor = clock.innerHTML = "#" + hours + minutes + seconds
  var mainbod = document.getElementById('mainbod')
  mainbod.style.backgroundColor = clockcolor
  var title = document.getElementById('title')
  title.innerHTML = clockcolor

}, 1000)
