let currentFrame;

window.onload = function () {
    let content = document.querySelector('.contentBox');
    content.style.opacity = '1';
    setTimeout(function () {
        let  black = document.querySelector('#onLoad');
        black.style.opacity = '0';
    }, 700);
};

textBoxButton1.addEventListener('click', function () {
    transformDataBlock();
    toggleHidden('.hiddenContent.one.hidden');
});

textBoxButton2.addEventListener('click', function () {
    transformDataBlock();
    toggleHidden('.hiddenContent.two.hidden');
});

textBoxButton3.addEventListener('click', function () {
    transformDataBlock();
    toggleHidden('.hiddenContent.three.hidden');
});

textBoxButton4.addEventListener('click', function () {
    transformDataBlock();
    toggleHidden('.hiddenContent.four.hidden');
});

function buttonOffHandler(e) {
    if(e.path.indexOf(currentFrame) == -1) {
        document.removeEventListener('click', buttonOffHandler);
        currentFrame.style.animation='';
        setTimeout(function () {currentFrame.style.animationName='disappear1';},10);
        setTimeout(function () {
            currentFrame.classList.toggle('hidden');
            transformDataBlock();
            currentFrame.style.animationName = 'appear1';
            currentFrame = null;
        }, 500)
    }
}

function transformDataBlock() {
    let element = document.querySelector('.contentBox');
    element.classList.toggle('hiddenMode');
}

function toggleHidden(hidden) {
    let element = document.querySelector(hidden);
    element.classList.toggle('hidden');
    currentFrame = element;
    setTimeout(function () {
        document.addEventListener('click', buttonOffHandler);
    }, 200);
}