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

  // TODO: To Automate things
  const current = new Date()
  const year = new Date([2001, 4, 27])
  $("#age").textContent = `Age: ${current.getFullYear() - year.getFullYear()}`
  $("#college").textContent = "College: Dalubhasaan ng Lungsod ng Lucena"
  $("#shs").textContent = "Senior High: AMA Computer Colleges"
  $("#hs").textContent = "Highschool: Calubcub 1.0 National Highschool"
  $("#elem").textContent = "Elementary: Bataan Elementary School"
}
