function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const textDiv = document.getElementById('text');

  toggleButton.addEventListener('click', () => {
    const isHidden = textDiv.hasAttribute('hidden');
    if (isHidden) {
      textDiv.hidden = false;
    } else {
      textDiv.hidden = true;
    }
  });
}
