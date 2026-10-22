const externalButton = document.querySelector('#externalButton');

externalButton.addEventListener('click', function () {
  document.querySelector('#externalMessage').textContent =
    'Hello from an external JavaScript file!';
});
