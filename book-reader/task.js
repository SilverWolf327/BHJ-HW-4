const bookContent = document.getElementById('book');
const hrefItems = document.
    querySelector('.book__controls').
    querySelectorAll('a');

function changeFontSize () {
    
    let activeHref = this.closest('.book__control').querySelector('.font-size_active');
    
    activeHref.classList.remove('font-size_active');
    let currentFont = this.getAttribute('data-size');
    this.classList.add('font-size_active');
    activeHref = this;
    
    if ((bookContent.className.indexOf('small') !== -1)) {
        bookContent.classList.remove('font-size_small');
    };

    if ((bookContent.className.indexOf('big') !== -1)) {
        bookContent.classList.remove('font-size_big');
    };
    
    switch(currentFont) {
        case 'small':
            bookContent.classList.add('font-size_small');
            break;
        case 'big':
            bookContent.classList.add('font-size_big');
            break;
    };

    return false;
};


function changeColorText () {
    
    let activeHref = this.closest('.book__control').querySelector('.color_active');
    
    activeHref.classList.remove('color_active');
    let currentColor = this.getAttribute('data-text-color');
    this.classList.add('color_active');
    activeHref = this;
    
    if ((bookContent.className.indexOf('book_color-black') !== -1)) {
        bookContent.classList.remove('book_color-black');
    };

    if ((bookContent.className.indexOf('book_color-gray') !== -1)) {
        bookContent.classList.remove('book_color-gray');
    };

    if ((bookContent.className.indexOf('book_color-whitesmoke') !== -1)) {
        bookContent.classList.remove('book_color-whitesmoke');
    };
    
    switch(currentColor) {
        case 'black':
            bookContent.classList.add('book_color-black');
            break;
        case 'gray':
            bookContent.classList.add('book_color-gray');
            break;
        case 'whitesmoke':
                bookContent.classList.add('book_color-whitesmoke');
            break;
    };

    return false;
};

function changeBackgroundColor () {
    
    let activeHref = this.closest('.book__control').querySelector('.color_active');
    
    activeHref.classList.remove('color_active');
    let currentBgColor = this.getAttribute('data-bg-color');
    this.classList.add('color_active');
    activeHref = this;
    
    if ((bookContent.className.indexOf('book_bg-black') !== -1)) {
        bookContent.classList.remove('book_bg-black');
    };

    if ((bookContent.className.indexOf('book_bg-gray') !== -1)) {
        bookContent.classList.remove('book_bg-gray');
    };

    switch(currentBgColor) {
        case 'black':
            bookContent.classList.add('book_bg-black');
            break;
        case 'gray':
            bookContent.classList.add('book_bg-gray');
            break;
    };

    return false;
};

for (let i = 0; i < hrefItems.length; i++) {      
    
    if (hrefItems[i].classList.contains('font-size')) {
        hrefItems[i].onclick = changeFontSize;
    };

    if (hrefItems[i].outerHTML.indexOf('text_color') !== -1) {
        hrefItems[i].onclick = changeColorText;
    };

    if (hrefItems[i].outerHTML.indexOf('bg_color') !== -1) {
        hrefItems[i].onclick = changeBackgroundColor;
    };
    
};