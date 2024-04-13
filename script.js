let $ = (_) => {
  return document.querySelector(_)
}

function scroll_(identity){
  $(identity).scrollIntoView({
    behavior: "smooth"
  }, true)
}

window.onload = () => {
  const mgaAnak = $(".project-locators")
  mgaAnak.onclick = () => {
    const locator = mgaAnak.getAttribute("data-location")
    window.open(locator, '_blank').focus()
  }
}
