function over(selector) {
    var sound;
    switch(selector) {
        case 1: sound = document.getElementById('sound1');    
            break;
        case 2: sound = document.getElementById('sound2');    
            break;
        case 4: sound = document.getElementById('sound3');    
            break;
        case 5: sound = document.getElementById('sound4');    
            break;
    }
        /*sound.load();
        sound.play();*/
}

var flag = 1;
function overV(vid, selector) {
    if(flag) {
        var bol = document.getElementById('boldog');
        bol.innerHTML = 'Boldog'
        bol.className = 'greeting';
        flag = 0;
    }
    vid.muted=true;
    vid.currentTime = 0;
    vid.play();
    switch(selector) {
        case 1: document.getElementById('boldog').style.visibility='visible';    
            break;
        case 2: document.getElementById('no').style.visibility='visible';    
            break;
        case 3: document.getElementById('napot').style.visibility='visible';    
            break;
        
    }
}

function videoEnded(selector) {
    switch(selector) {
        case 1: document.getElementById('boldog').style.visibility='hidden';    
            break;
        case 2: document.getElementById('no').style.visibility='hidden';    
            break;
        case 3: document.getElementById('napot').style.visibility='hidden';    
            break;
        
    }
}

