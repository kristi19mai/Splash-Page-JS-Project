const body = document.body;

function changeBackground(number) {
  // Check if background is already showing, remove background
  if (body.className === `background-${number}`) {
    body.classList.remove(`background-${number}`);
    // If background isn't showing, chamge background
  } else {
    body.className = "";
    body.classList.add(`background-${number}`);
  }
}
