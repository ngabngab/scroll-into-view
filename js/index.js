function goToElement(param) {
  let goSection = document.querySelector(`#${param}`);
  if (goSection) {
    goSection.scrollIntoView({ 
      behavior: "smooth", 
      block: "end",
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let paramElement = urlParams.get('element')
  if(paramElement === null) {
    return;
  }
  
  setTimeout(() => {
    goToElement(paramElement);
  }, 1000)
})