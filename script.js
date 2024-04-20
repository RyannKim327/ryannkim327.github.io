let $ = (_) => {
  return document.querySelector(_)
}

function scroll_(identity){
  $(identity).scrollIntoView({
    behavior: "smooth"
  }, true)
}

function validation(e){
  const _parent = $("#email_form")
  if(_parent.children.length > 3){
    _parent.removeChild(_parent.children[3])
  }
  let valid = false
  if(e.type == 'email'){
    const email_format = /^([a-z0-9]+)@([a-z]+)\.([com|net|org]+)/gi
    if(email_format.test(e.value)){
      valid = true
      e.parentElement.style.color = "#005000"
      e.parentElement.style.borderColor = "#005000"
      e.style.color = "#005000"
      e.previousElementSibling.style.color = "#005000"
    }else{
      e.parentElement.style.color = 'red'
      e.parentElement.style.borderColor = "red"
      e.style.color = "red"
      e.previousElementSibling.style.color = 'red'
    }
  }else{
    if(e.value.trim().length >= 10){
      valid = true
      e.parentElement.style.color = "#005000"
      e.parentElement.style.borderColor = "#005000"
      e.style.color = "#005000"
      e.previousElementSibling.style.color = "#005000"
    }else{
      e.parentElement.style.color = 'red'
      e.parentElement.style.borderColor = "red"
      e.style.color = "red"
      e.previousElementSibling.style.color = 'red'
    }
  }
  if(valid){
    const submit = document.createElement("input")
    submit.type = "button"
    submit.value = "Send Email"
    submit.style.width = "100%"
    submit.style.backgroudColor = "transparent"
    submit.style.border = "1px #005000 solid"
    submit.style.borderRadius = ".25rem"
    _parent.appendChild(submit)
  }
}

window.onload = () => {
  const mgaAnak = $(".project-locators")
  mgaAnak.onclick = () => {
    const locator = mgaAnak.getAttribute("data-location")
    window.open(locator, '_blank').focus()
  }
}
