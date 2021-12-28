function secondaryActive(){
    document.querySelector('.secondary').classList.add('active')
    setTimeout(()=>{
        document.querySelector('.secondary').style.transition="none"
    },500)
}

function closeWindow(){
    document.querySelector('.secondary').classList.remove('active')
    document.querySelector('.help_sec1').classList.remove('active')
    setTimeout(()=>{
        document.querySelector('.secondary').style.transition="0.5s ease-in-out"
    },500)
}

function minusWindow(){
    document.querySelector('.secondary').classList.add('minus')
}

function expandWindow(){
    document.querySelector('.secondary').classList.remove('minus')
}

function secondaryActive2(){
    document.querySelector('.secondary2').classList.add('active')
    setTimeout(()=>{
        document.querySelector('.secondary2').style.transition="none"
    },500)
}

function closeWindow2(){
    document.querySelector('.secondary2').classList.remove('active')
    document.querySelector('.help_sec2').classList.remove('active')
    setTimeout(()=>{
        document.querySelector('.secondary2').style.transition="0.5s ease-in-out"
    },500)
    
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

function helpPopUp1(){
    document.querySelector('.help_sec1').classList.toggle('active')
}

function helpPopUp2(){
    document.querySelector('.help_sec2').classList.toggle('active')
}

dragElement(document.getElementById("sec_window1"));
dragElement(document.getElementById("sec_window2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}