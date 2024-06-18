let $ = (_) => {
  return document.querySelector(_)
}

function scroll_(identity){
  $(identity).scrollIntoView({
    behavior: "smooth"
  }, true)
}

function validation(e, type){
  if(!type) type = "input"
  const _parent = $("#email_form")
  if(_parent.children.length > 3){
    _parent.removeChild(_parent.children[3])
  }
  let valid = false
  if(e.type == 'email'){
    const email_format = /^([a-z0-9]+)@([a-z]+)\.([com|net|org]+)/gi
    if(email_format.test(e.value)){
      valid = true
      e.parentElement.style.color = "#74c69d"
      e.parentElement.style.borderColor = "#74c69d"
      e.style.color = "#74c69d"
      e.previousElementSibling.style.color = "#74c69d"
    }else{
      e.parentElement.style.color = '#ef233c'
      e.parentElement.style.borderColor = "#ef233c"
      e.style.color = "#ef233c"
      e.previousElementSibling.style.color = '#ef233c'
    }
  }else{
    if(e.value.trim().length >= 10){
      valid = true
      if(type != "input"){
        e.style.borderColor = '#74c69d'
      }else{
        e.parentElement.style.color = "#74c69d"
        e.parentElement.style.borderColor = "#74c69d"
        e.previousElementSibling.style.color = "#74c69d"
      }
      e.style.color = "#74c69d"
    }else{
      if(type != "input"){
        e.style.borderColor = '#ef233c'
      }else{
        e.parentElement.style.color = '#ef233c'
        e.parentElement.style.borderColor = "#ef233c"
        e.previousElementSibling.style.color = '#ef233c'
      }
      e.style.color = "#ef233c"
    }
  }
  if(valid){
    const submit = document.createElement("input")
    submit.type = "button"
    submit.value = "Send Email"
    submit.style.width = "100%"
    submit.style.backgroudColor = "transparent"
    submit.style.border = "1px #74c69d solid"
    submit.style.borderRadius = ".25rem"
    _parent.appendChild(submit)
  }
}

window.onload = () => {
  const mgaAnak = document.querySelectorAll(".references")
  for(let i in mgaAnak){
    mgaAnak[i].onclick = () => {
      const locator = mgaAnak[i].getAttribute("data-location")
      window.open(locator, '_blank').focus()
    }
  }
  $("#email_form").onsubmit = async () => {
    const email_prii = "weryses19@gmail.com"
    await fetch(`https://formsubmit.co/${email_prii}`, {
      method: "POST",
      body: JSON.stringify({
        name: $("#name").value,
        email: $("#email").value,
        message: $("#content").value
      })
    }).then(response => {
      return response.json()
    }).then(result => {
      console.log(JSON.stringify(result))
    }).catch(error => {
      console.error(error)
    })
  }
}
