document.getElementsByTagName('section')[0].addEventListener('click', function(){
    document.querySelector('footer>ul').classList.toggle('none')
})

function saman() {
    alert('Saman Tofighian : Sorry this is a test')
}

setInterval(Time,1000)
function Time(){
    document.getElementById('clock').innerHTML = new Date().toLocaleTimeString()
}
Time()