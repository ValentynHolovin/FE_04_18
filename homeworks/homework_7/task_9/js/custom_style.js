let elements = document.querySelectorAll("ul li");

for (let i = 0; i < elements.length; i++) {
    let color = 'background-color: ' + elements[i].innerHTML + ';';
    let width = ' width: ' + (90 - i * 10) + '%;';
    elements[i].setAttribute('style', color + width);
}