const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      const change = (document.body.style.backgroundColor = e.target.id);
    }
    if (e.target.id === 'white') {
      const change = (document.body.style.backgroundColor = e.target.id);
    }
    if (e.target.id === 'blue') {
      const change = (document.body.style.backgroundColor = e.target.id);
    }
    if (e.target.id === 'yellow') {
      const change = (document.body.style.backgroundColor = e.target.id);
    }
    if (e.target.id === 'purple') {
      const change = (document.body.style.backgroundColor = e.target.id);
    }
    if (e.target.id === 'red') {
      const change = (document.body.style.backgroundColor = e.target.id);
    }
  });
});
