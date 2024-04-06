let $ = (_) => {
  return document.querySelector(_)
}

function scroll_(identity){
  $(identity).scrollIntoView({
    behavior: "smooth"
  }, true)
}
