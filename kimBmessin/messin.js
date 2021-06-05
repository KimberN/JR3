
var body = document.getElementByID(‘b1’);

var paragraph = document.createElement(‘p’);

paragraph.innerHtml = “New Content”;
console.log(paragraph)

var title = document.createElement(‘h1’);
title.innerHtml = “My Header”;

var container = document.createElement(‘div’);

container.appendChild(paragraph);

body .appendChild(title);

body .appendChild(container);
