function secondaryActive(){
    document.querySelector('.secondary').classList.add('active')
}

function closeWindow(){
    document.querySelector('.secondary').classList.remove('active')
}

function minusWindow(){
    document.querySelector('.secondary').classList.add('minus')
}

function expandWindow(){
    document.querySelector('.secondary').classList.remove('minus')
}

function secondaryActive2(){
    document.querySelector('.secondary2').classList.add('active')
}

function closeWindow2(){
    document.querySelector('.secondary2').classList.remove('active')
}

function minusWindow2(){
    document.querySelector('.secondary2').classList.add('minus')
}

function expandWindow2(){
    document.querySelector('.secondary2').classList.remove('minus')
}

function closePrimary(){
    document.querySelector('.primary').classList.add('close')
    setTimeout(()=>{
        document.querySelector('.reload').classList.add('active')
    },500)
}

function maxPrimary(){
    document.querySelector('.primary').classList.toggle('max')
}

function refresh(){
    window.location.reload();
}

function advice(){
    document.querySelector('.advice').classList.add('show')
}

function removeAdvice(){
    document.querySelector('.advice').classList.remove('show')
}

function openPopMenu(){
    document.querySelector('.popup_menu').classList.add('show')
}

function closePopMenu(){
    document.querySelector('.popup_menu').classList.remove('show')
}