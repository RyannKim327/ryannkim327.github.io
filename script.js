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
    submit.type = "submit"
    submit.value = "Send Email"
    submit.style.width = "100%"
    submit.style.backgroudColor = "transparent"
    submit.style.border = "1px #74c69d solid"
    submit.style.borderRadius = ".25rem"
    _parent.appendChild(submit)
  }
}

function moving_anims(){
  // TODO: Create a simple raindrop animation
  
  // INFO: Lists of some jokes and random text related to programming
  const tags = [
    "print(\"Hello World\")",
    "if(hindi_ka_nya_gusto)",
    "// Kinomment baka magamit",
    "<p>This is Paragraph</p>",
    "<marquee>Umaandar gar</marquee>",
    "DELETE * FROM past WHERE memories = 'bad';",
    "Syntax Error: Wala yong semi-color mo",
    "Indentation Error: I need some space",
    "ArrayOutOfBounce: Ikaw na ang magbounce gar."
  ]
  
  const a = $("#moving-randoms")
  for(let _ = 0; _ < 50; _++){
    const b = document.createElement("span")
    b.classList.add("raindrop")
    b.style.animationDuration = `${(Math.random() * 15) + 5}s`
    b.style.margin = Math.floor(Math.random() * window.innerWidth)
    b.textContent = tags[Math.floor(Math.random() * tags.length)]
    a.appendChild(b)
  }
}

window.onload = () => {
  scroll_("#home")
  moving_anims()
  const mgaAnak = document.querySelectorAll(".references")
  for(let i in mgaAnak){
    mgaAnak[i].onclick = () => {
      const locator = mgaAnak[i].getAttribute("data-location")
      window.open(locator, '_blank').focus()
    }
    mgaAnak[i].onmouseout = () => {
      $("#projects").style.backgroundImage = "";
    }
    mgaAnak[i].onmouseover = () => {
      const anakis = mgaAnak[i].children[0].src
      $("#projects").style.backgroundImage = `url("${anakis}")`
    }
  }

  let random = 0
  setInterval(() => {
    const stacks = [
      "HTML, CSS, JavaScript",
      "HTML, CSS, JavaScript, PHP, MySQL",
      "HTML, CSS, JavaScript, Django, SQLite",
      "Django, ReactJs, Tailwind",
      "Java (Android)",
      "Kotlin (Andriod)",
      "JavaScript (NodeJs), ReactJs, Express",
      "Python Desktop Application (GUI)",
      "Java Desktop Application",
      "Python Flask",
      "Python (PyGame)",
      "Typescript, NodeJs",
      "WebScraping (Python and NodeJs)"
    ]
    $("#stack").textContent = `Uses: ${stacks[random % stacks.length]}`
    random++
  }, 5000)

  /* TODO: I comment para magamit
   * $("#email_form").onsubmit = async () => {
    return
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
  }*/
}
