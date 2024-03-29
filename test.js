element.addEventListener("transitionend", (event) => {
  let propertyName = event.propertyName;
  let elapsedTime = event.elapsedTime;
  /* do something here… */
}, true);