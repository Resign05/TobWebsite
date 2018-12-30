let func = () => {
  var timer = 0;
  setInterval(() => {
    timer += 1;
    if(timer === 1){
      window.location="home.html"
    }
  }, 1000) ;
}

document.addEventListener('DOMContentLoaded', function() {
    func();
}, false);
