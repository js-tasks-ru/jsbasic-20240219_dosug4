function hideSelf() {
  const hideButton = document.querySelector('.hide-self-button');
  hideButton.addEventListener('click', () => {
    hideButton.setAttribute('hidden', true);
  });
}
