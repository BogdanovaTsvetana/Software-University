function notify(message) {
  let notificationElement = document.getElementById('notification');
  notificationElement.textContent = message;
  notificationElement.style.display = 'block'
  notificationElement.addEventListener('click', hideNotification);

  function hideNotification(e) {
    let element = e.target;
    element.style.display = 'none';
  }
}
