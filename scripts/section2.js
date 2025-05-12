var list = document.querySelector('ol');
var items = list.querySelectorAll('li');

list.addEventListener('click', click);

function click(e) {
    // Set the correct target, we want to work with list items
    // so if the current target is a span, we take its parent
    var target = e.target;
    if (target.nodeName === 'SPAN') target = e.target.parentNode;

    // No need to continue if the target isn't
    // either a span, or a list item
    if (target.nodeName !== 'LI') return;

    // Remove all active states and apply
    // active state to the current list item
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    target.classList.add('active');
}