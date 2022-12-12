const shape = document.getElementById('shape');
const shapeContainer = document.getElementById('shapeContainer');
const BottomLeftToTopLeft = document.getElementById('BottomLeftToTopLeft');
const TopRightToBottomRight = document.getElementById('TopRightToBottomRight');
const TopLeftToTopRight = document.getElementById('TopLeftToTopRight');
const BottomRightToBottomLeft = document.getElementById('BottomRightToBottomLeft');
const top0 = document.getElementById('top');
const right0 = document.getElementById('right');
const bottom0 = document.getElementById('bottom');
const left0 = document.getElementById('left');
const customSizeCheckBox = document.querySelector('#customSizeCheckBox');
const customSize = document.querySelector('#customSize');
const shapeWidth = document.querySelector('#shapeWidth');
const shapeHeight = document.querySelector('#shapeHeight');
const borderRadiusOutput = document.querySelector('#borderRadiusOutput');
dragElement(top0, 'top'); 
dragElement(bottom0, 'bottom');
dragElement(right0, 'right');
dragElement(left0, 'left');

function dragElement(elmnt, pos) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    console.log(elmnt.id);
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    var width = shapeWidth.value;
    var widDec = width / 100;
    var widMin = -(10 / widDec);
    var widMax = (100 + widMin);
    var height = shapeHeight.value;
    var heiDec = height / 100;
    var heiMin = -(10 / heiDec);
    var heiMax = (100 + heiMin);

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    if(pos === 'left'){
      newValue = valBetween(((elmnt.offsetTop - pos2) / heiDec), heiMin, heiMax);
      elmnt.style.top =  newValue + '%';
      BottomLeftToTopLeft.value =  100 - (newValue + (-1 * heiMin));
      document.getElementById('leftvalue').innerHTML = 100 - (newValue + (-1 * heiMin));
    }else if(pos === 'right'){
      newValue = valBetween(((elmnt.offsetTop - pos2) / heiDec), heiMin, heiMax);
      elmnt.style.top =  newValue + '%';
      TopRightToBottomRight.value = newValue + (-1 * heiMin);
      document.getElementById('rightvalue').innerHTML = newValue + (-1 * heiMin);
    }else if(pos === 'top'){
      newValue = valBetween(((elmnt.offsetLeft - pos1) / widDec), widMin, widMax);
      elmnt.style.left =  newValue + '%';
      TopLeftToTopRight.value = newValue + (-1 * widMin);
      document.getElementById('topvalue').innerHTML = newValue + (-1 * widMin);
    }else if(pos === 'bottom'){
      newValue = valBetween(((elmnt.offsetLeft - pos1) / widDec), widMin, widMax);
      elmnt.style.left =  newValue + '%';
      BottomRightToBottomLeft.value = 100 - (newValue + (-1 * widMin));
      document.getElementById('bottomvalue').innerHTML = 100 - (newValue + (-1 * widMin));
    }
    shape.style.borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - BottomLeftToTopLeft.value}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${BottomLeftToTopLeft.value}%`;
    borderRadiusOutput.innerHTML = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - BottomLeftToTopLeft.value}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${BottomLeftToTopLeft.value}%`;
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
  }
}

function valBetween (v, min, max) {
  return (Math.min(max, Math.max(min, v)))
}

const TopLeftToTopRightRangeValue = function(){
    var width = shapeWidth.value;
    var widDec = width / 100;
    var widMin = -(10 / widDec);
    var widMax = (100 + widMin);

    newValue = TopLeftToTopRight.value;
    borderRadius = `${newValue}% ${100 - newValue}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - BottomLeftToTopLeft.value}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${BottomLeftToTopLeft.value}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    top0.style.left = `${newValue - (-1 * widMin)}%`;
}

const TopRightToBottomRightRangeValue = function(){
    var height = shapeHeight.value;
    var heiDec = height / 100;
    var heiMin = -(10 / heiDec);
    var heiMax = (100 + heiMin);

    newValue = TopRightToBottomRight.value;
    borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - BottomLeftToTopLeft.value}% ${newValue}% ${100 - newValue}% ${BottomLeftToTopLeft.value}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    right0.style.top = `${newValue - (-1 * heiMin)}%`
}

const BottomRightToBottomLeftRangeValue = function(){
    var width = shapeWidth.value;
    var widDec = width / 100;
    var widMin = -(10 / widDec);
    var widMax = (100 + widMin);

    newValue = BottomRightToBottomLeft.value;
    borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${newValue}% ${100 - newValue}% / ${100 - BottomLeftToTopLeft.value}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${BottomLeftToTopLeft.value}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    bottom0.style.left = `${100 - (newValue - (1 * widMin))}%`;
}

const BottomLeftToTopLeftRangeValue = function(){
    var height = shapeHeight.value;
    var heiDec = height / 100;
    var heiMin = -(10 / heiDec);
    var heiMax = (100 + heiMin);

    newValue = BottomLeftToTopLeft.value;
    borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - newValue}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${newValue}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    left0.style.top = `${100 - (newValue - (1 * heiMin))}%`
}

const shapeWidthValue = function(){
    newValue = shapeWidth.value;
    shapeContainer.style.width = `${newValue}px`;
}

const shapeHeightValue = function(){
    newValue = shapeHeight.value;
    shapeContainer.style.height = `${newValue}px`;
}

const CustomSizeCheckBoxValue = function(){
    if(customSizeCheckBox.value == 'false'){
        customSizeCheckBox.value = 'true';
        customSize.classList.remove('d-none');
        shapeContainer.style.width = `${shapeWidth.value}px`;
        shapeContainer.style.height = `${shapeHeight.value}px`;
    }else{
        customSizeCheckBox.value = 'false';
        customSize.classList.add('d-none');
        shapeContainer.style.width = `190px`;
        shapeContainer.style.height = `190px`;
    }
}

TopLeftToTopRight.addEventListener('input', TopLeftToTopRightRangeValue);
TopRightToBottomRight.addEventListener('input', TopRightToBottomRightRangeValue);
BottomRightToBottomLeft.addEventListener('input', BottomRightToBottomLeftRangeValue);
BottomLeftToTopLeft.addEventListener('input', BottomLeftToTopLeftRangeValue);
customSizeCheckBox.addEventListener('input', CustomSizeCheckBoxValue);
shapeWidth.addEventListener('input', shapeWidthValue);
shapeHeight.addEventListener('input', shapeHeightValue);