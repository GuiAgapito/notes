function adjustHeight(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

var textareas = document.getElementsByClassName('content-note');
for (var i = 0; i < textareas.length; i++) {
  adjustHeight(textareas[i]);
}