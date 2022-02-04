document.addEventListener('DOMSubtreeModified', function (e) {
    if(e.target.tagName === 'HTML') {
        if(e.target.className.match('translated')) {
            alert('Page has been translated.')
        }
   }
}, true);