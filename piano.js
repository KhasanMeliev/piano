var dbleep = new Audio();
dbleep.src ="sounds/040.wav";
var rbleep = new Audio();
rbleep.src ="sounds/041.wav";
var mbleep = new Audio();
mbleep.src ="sounds/042.wav";
var fbleep = new Audio();
fbleep.src ="sounds/043.wav";
var sbleep = new Audio();
sbleep.src ="sounds/044.wav";
var lbleep = new Audio();
lbleep.src ="sounds/045.wav";
var sbleep2 = new Audio();
sbleep2.src ="sounds/046.wav";
var dbleep2 = new Audio();
dbleep2.src ="sounds/047.wav";
var black = new Audio();
black.src ="sounds/040.wav";
var black2 = new Audio();
black2.src ="sounds/6.wav";
var black2 = new Audio();
black2.src ="sounds/2.wav";
var black3 = new Audio();
black3.src ="sounds/5.wav";
var black4 = new Audio();
black4.src ="sounds/3.wav";
var black5 = new Audio();
black5.src ="sounds/1.wav";
var black6 = new Audio();
black6.src ="sounds/7.wav";

document.addEventListener('keydown', function(event){
    switch(event.code){
        case 'KeyA':
            dbleep.play()
            break
        case 'KeyS':
            rbleep.play()
            break;
        case 'KeyD':
            mbleep.play()
            break
        case 'KeyF':
            fbleep.play()
            break;
        case 'KeyG':
            sbleep.play()
            break
        case 'KeyH':
            lbleep.play()
            break;
        case 'KeyJ':
            sbleep2.play()
            break
        case 'KeyK':
            dbleep2.play()
            break;
        case 'KeyQ':
            black.play()
            break
        case 'KeyW':
            black2.play()
            break;
        case 'KeyE':
            black3.play()
            break
        case 'KeyR':
            black4.play()
            break;
        case 'KeyT':
            black5.play()
            break
        case 'KeyY':
                black6.play()
                break
        case 'KeyW':
            black.play()
            break
        case 'KeyE':
            black2.play()
            break;
        case 'KeyR':
            black3.play()  
            break
        case 'KeyT':
            black4.play()
            break;
        case 'KeyY':
            black5.play()
            break
        case 'KeyU':
            black6.play()
            break;
            }
})