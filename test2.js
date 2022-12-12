const shape = document.querySelector('#shape');
const shapeContainer = document.querySelector('#shapeContainer');
const TopLeftToTopRight = document.querySelector('#TopLeftToTopRight');
const TopRightToBottomRight = document.querySelector('#TopRightToBottomRight');
const BottomRightToBottomLeft = document.querySelector('#BottomRightToBottomLeft');
const BottomLeftToTopLeft = document.querySelector('#BottomLeftToTopLeft');
const borderRadiusOutput = document.querySelector('#borderRadiusOutput');
const customSizeCheckBox = document.querySelector('#customSizeCheckBox');
const customSize = document.querySelector('#customSize');
const shapeWidth = document.querySelector('#shapeWidth');
const shapeHeight = document.querySelector('#shapeHeight');
const top0 = document.querySelector('#top');
const right0 = document.querySelector('#right');
const bottom0 = document.querySelector('#bottom');
const left0 = document.querySelector('#left');

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
    bottom0.style.left = `${100 -newValue}%`;
}

const BottomLeftToTopLeftRangeValue = function(){
    newValue = BottomLeftToTopLeft.value;
    borderRadius = `${TopLeftToTopRight.value}% ${100 - TopLeftToTopRight.value}% ${BottomRightToBottomLeft.value}% ${100 - BottomRightToBottomLeft.value}% / ${100 - newValue}% ${TopRightToBottomRight.value}% ${100 - TopRightToBottomRight.value}% ${newValue}%`;
    shape.style.borderRadius = borderRadius;
    borderRadiusOutput.innerHTML = borderRadius;
    left0.style.top = `${100 - newValue}%`
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