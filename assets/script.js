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
    while(m >= u.length){
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

  languages()

  // TODO: To Automate things
  const current = new Date()
  const year = new Date([2001, 4, 27])
  $("#age").textContent = `Age: ${current.getFullYear() - year.getFullYear()}`
  $("#college").textContent = "College: Dalubhasaan ng Lungsod ng Lucena"
  $("#shs").textContent = "Senior High: AMA Computer Colleges"
  $("#hs").textContent = "Highschool: Calubcub 1.0 National Highschool"
  $("#elem").textContent = "Elementary: Bataan Elementary School"
}


