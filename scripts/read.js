function readloud() {
    let x = document.body.innerText;
    if ('speechSynthesis' in window) {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            document.getElementById("spkBtn").innerText = "Speak";
        } else {
            document.getElementById("spkBtn").innerText = "Stop";
            let speech = new SpeechSynthesisUtterance(x);
            speech.lang = 'en-US';
            window.speechSynthesis.speak(speech);
        }
    }else{
        alert("Sorry your browser doesn't support it!");
    }
}
window.addEventListener("load",function(){
    window.speechSynthesis.cancel();
})