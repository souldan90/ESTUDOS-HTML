var meuVideo = document.getElementById("video1");

function volume_mais()
{
    var volume_qtde = meuVideo.volume;
    if (volume_qtde == 1) {
        alert("Volume já está no máximo");
    } else{
        meuVideo.volume += 0.1;
    }
}

function volume_menos(){
    var volume_qtde = meuVideo.volume;
    if(volume_qtde <= 0.2){
        alert("Volume ja está no minimo");
    } else{
            meuVideo.volume -= 0.1;
        }
    } 

    function volume_mute(){
        var but = document.getElementById("som");
        if (meuVideo.muted) {
            meuVideo.muted = false;
            but.innerHTML = "MUDO";
        } else {
            but.innerHTML = "SOM";
            meuVideo.muted = true;
        }

    }

    var play_pause =() =>{
        var but = document.getElementById("play_pause");
        if (meuVideo.paused){
            meuVideo.play();
            but.innerHTML = "class='btn btn-primary'"
            but.innerHTML = "Pause";
        } else {
            meuVideo.pause();
            but.innerHTML = "Play";
        }
    }

    var changesize = (w, h) => {
        meuVideo.width = w;
        meuVideo.hight = h;
    }

    function tela_cheia() {
       
          meuVideo.requestFullscreen()
    }