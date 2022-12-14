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
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    document.getElementById(elmnt.id).ontouchstart = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    document.getElementById(elmnt.id + 'drag').classList.add('active')

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;

    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    if(typeof TouchEvent !== 'undefined' && e instanceof TouchEvent){
      var touchobj = e.changedTouches[0]
      setPos(touchobj.clientX, touchobj.clientY)
    }else{
      setPos(e.clientX, e.clientY)
    }

    shape.style.borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - BottomLeftToTopLeft.value}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${BottomLeftToTopLeft.value}%`;
    borderRadiusOutput.innerHTML = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - BottomLeftToTopLeft.value}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${BottomLeftToTopLeft.value}%`;
  }

  function setPos(_posX, _posY){
    var boxRect = elmnt.parentNode.getBoundingClientRect();
    if(pos === 'top'){
      newValue = valBetween(((_posX - 5 - boxRect['left']).toFixed(0) * 100 / boxRect['width']).toFixed(0), 0, 100);
      elmnt.style.left =  newValue + '%';
      TopLeftToTopRight.value = newValue;
      document.getElementById('topvalue').innerHTML = newValue;
    }else if(pos === 'bottom'){
      newValue = valBetween(((_posX - 5 - boxRect['left']).toFixed(0) * 100 / boxRect['width']).toFixed(0), 0, 100);
      elmnt.style.right =  (100 - newValue) + '%';
      BottomRightToBottomLeft.value = 100 - newValue;
      document.getElementById('bottomvalue').innerHTML = 100 - newValue;
    }else if(pos === 'right'){
      newValue = valBetween(((_posY - 5 - boxRect['top']).toFixed(0) * 100 / boxRect['height']).toFixed(0), 0, 100);
      elmnt.style.top =  newValue + '%';
      TopRightToBottomRight.value = newValue;
      document.getElementById('rightvalue').innerHTML = newValue;
    }else{
      newValue = valBetween(((_posY - 5 - boxRect['top']).toFixed(0) * 100 / boxRect['height']).toFixed(0), 0, 100);
      elmnt.style.bottom =  (100 - newValue) + '%';
      BottomLeftToTopLeft.value = 100 - newValue;
      document.getElementById('leftvalue').innerHTML = 100 - newValue;
    }
  }

  function closeDragElement() {
    document.getElementById(elmnt.id + 'drag').classList.remove('active')

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
    newValue = TopLeftToTopRight.value;
    borderRadius = `${newValue}% ${100 - newValue}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - BottomLeftToTopLeft.value}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${BottomLeftToTopLeft.value}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    top0.style.left = `${newValue}%`;
}

const TopRightToBottomRightRangeValue = function(){
    newValue = TopRightToBottomRight.value;
    borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - BottomLeftToTopLeft.value}% ${newValue}% ${100 - newValue}% ${BottomLeftToTopLeft.value}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    right0.style.top = `${newValue}%`
}

const BottomRightToBottomLeftRangeValue = function(){
    newValue = BottomRightToBottomLeft.value;
    borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${newValue}% ${100 - newValue}% / ${100 - BottomLeftToTopLeft.value}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${BottomLeftToTopLeft.value}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    bottom0.style.right = `${newValue}%`;
}

const BottomLeftToTopLeftRangeValue = function(){
    newValue = BottomLeftToTopLeft.value;
    borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - newValue}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${newValue}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    left0.style.bottom = `${newValue}%`
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