var output = document.getElementById('output');
var input = document.getElementById('input');
var language = document.getElementById('language');
var size = document.getElementById('size');

function highlight() {
  output.textContent = input.value;
  output.className = language.value;
  hljs.highlightBlock(output);
}

input.addEventListener('change', highlight);
language.addEventListener('change', highlight);

size.addEventListener('change', function (e) {
  output.style.fontSize = size.value + 'px';
});
