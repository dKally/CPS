let click = 0;
let millisecond = 0;
let second = 0;
let running = false;
let end = false;
let cps = 0;

const btnClick = document.querySelector('.click')
btnClick.addEventListener('click', ()=>startCPS())

const btnRestart = document.querySelector('.restart')
btnRestart.addEventListener('click', ()=>restartCPS())

function startCPS(){
    if(end === false){
        click++
        document.querySelector('.click').innerHTML = click
        if(running === false){
            timer = setInterval(() => {
                running = true;
                millisecond++
                if(millisecond == 100){
                    second++;
                    millisecond = 00;
                }
                if(second == 10){
                    endCPS()
                    end = true;
                    document.querySelector('.time').innerHTML = "10:00"
                    let resultClick =  click;
                    click = 0;
                    document.querySelector('.click').innerHTML = resultClick
                    return;
                }
                document.querySelector('.time').innerHTML = `${second}:${millisecond}`
            }, 10);
        }
}else{
    return;
}
}

function endCPS(){
    clearInterval(timer)
    document.querySelector('.box').classList.add("hide");
    document.querySelector('.result').classList.remove("hide");
    cps = click / 10;
    document.querySelector('.result-text').innerHTML = `Seu CPS é ${cps}`
}

function restartCPS(){
    document.querySelector('.result').classList.add("hide");
    document.querySelector('.box').classList.remove("hide");
    document.querySelector('.click').innerHTML = "click"
    click = 0;
    resultClick = 0;
    millisecond = 0;
    second = 0;
    running = false;
    end = false;
}