let x = ""
setInterval(() => {
  if(x == "Developed by RyannKim327"){
    x = "Inspired from the idea of Richard Hanrick"
  }else{
    x = "Developed by RyannKim327"
  }
  document.getElementById("developer").textContent = x
}, 3000)

function $(element){
  return document.querySelector(element)
}

function show(ui){
  const divs = document.getElementsByClassName("z")
  for(let i = 0; i < divs.length; i++){
    const x = divs[i]
    if(x.id == ui){
      x.classList.add("ui")
    }else if(!x.classList.value.split(" ").includes("ui")){
      divs[i].classList.remove("ui")
    }else{
      x.classList.remove("ui")
    }
  }
}

function languages(){
  const l = $("#languages")
  const lang = () => {
    l.innerHTML = ""
    const u = [
      ["dev-html5", "dev-css3", "dev-javascript"],
      ["dev-html5", "dev-css3", "dev-javascript", "dev-php", "dev-mysql"],
      ["dev-html5", "dev-css3", "dev-javascript", "dev-django"],
      ["dev-react", "md-tailwind", "dev-django"],
      ["dev-java", "md-xml", "dev-android"],
      ["dev-react", "md-nodejs"],
      ["dev-html5", "dev-css3", "dev-javascript", "md-nodejs"],
      ["dev-git", "cod-github"]
      ["md-nodejs", "fa-npm"]
    ]
    let m = Math.floor(Math.random() * u.length)
    while(!u[m]){
      m = Math.floor(Math.random() * u.length)
    }
    const d = u[m]
    for(let i = 0; i < d.length; i++){
      const x = d[i]
      const y = document.createElement("i")
      y.classList.add("nf")
      y.classList.add(`nf-${x}`)
      y.textContent = x.match(/([\w])\-([\w]+)/i)[2]
      l.appendChild(y)
    }
  }
  lang()
  setInterval(lang, 5000)
}

function references(){
  const refs = document.getElementsByClassName("references")
  for(let i = 0; i < refs.length; i++){
    const ref = refs[i]
    ref.onclick = () => {
      window.open(ref.getAttribute("url"), "_blank").focus()
    }
  }
}

window.onload = () => {
  const navs = document.getElementById("navigation-list")
  const el = navs.children
  for(let i = 0; i < el.length; i++){
    const e = el[i]

    const to = e.getAttribute("to")
    e.onclick = () => {
      show(to)
      $("#section").textContent = to[0].toUpperCase() + to.substring(1)
      for(let i = 0; i < el.length; i++){
        el[i].classList.remove("active")
      }
      e.classList.add("active")
    }
  }

  const longitude = 121.60355963623054
  const latitude = 13.928109212658477
  const locationName = "United Landing Homeowners Association Phase 1"
  $("#maps").src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56562.28002960655!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i3000!2i1800!4f13.1!3m3!1m2!1s0x33bd4b578caf4ccd%3A0x2be1e905c862fe1!2s${encodeURIComponent(locationName)}!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sen!` 

  languages()
  references()

  // TODO: To create something that I don't know how
  const _self = $("#my-name")
  const text = _self.getAttribute("text")
  _self.textContent = text
}
