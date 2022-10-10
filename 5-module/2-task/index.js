function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button');
  button.onclick = function () {
    text.hidden ? text.hidden = false : text.hidden = true;
  };
}
