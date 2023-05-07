const $ = (_) => {
	// Get Element
	return document.querySelector(_)
}

window.onload = () => {
	// Home

	// Typing
	const typing = $("#typing")
	let i = 0;
	const message = typing.textContent

	typing.innerHTML = ""
	setInterval(() => {
		if(i < message.length){
			typing.textContent += message[i]
			i++
		}
	}, 75)

	// Projects on Github
	fetching()

}

function clicker(id) {
	$(id).scrollIntoView({
		behavior: 'smooth'
	}, true)
}

function fetching(){
	const colors = {
		"java": "#ffaa00",
		"javascript": "#ffff00",
		"python": "#0000ff",
		"c#": "#005000",
		"kotlin": "#ff0090",
		"css": "#ff00ff",
		"html": "#ff0000",
		"jupyter notebook": "#ffaa00"
	}
	fetch(`https://api.github.com/users/RyannKim327/repos?sort=name&per_page=150`).then((r) => {
		return r.json()
	}).then((r) => {
		const data = r
		let o_base =  document.createElement("div")
		o_base.classList.add("my-lists")
		data.map((e, i) => {
			console.log(e)
			if(!e.fork || !e.name == "RyannKim327"){
				let base = document.createElement("div")
				let title = document.createElement("h3")
				let subtitle = document.createElement("h5")
				title.textContent = e.name
				subtitle.textContent = e.description
				base.classList.add("myRepo")
				if(e.language != null){
					base.style.borderColor = colors[e.language.toLowerCase()]
					base.classList.add(`${e.language.toLowerCase().replace("#", "s").replace("+", "p").replace(/\s/, "-")}`)
				}

				if(e.private){
					alert("A private repository")
				}else{
					base.onclick = () => {
						if(e.homepage){
							location.href = e.homepage
						}else{
							location.href = e.html_url
						}
					}
				}
				base.appendChild(title)
				if(e.description){
					base.appendChild(subtitle)
				}
				o_base.appendChild(base)
			}	
		})
		$("#lists-projects").appendChild(o_base)
	}).catch((e) => {
		console.error(`Error [Github]: ${e}`)
		$("#projects").textContent = "Something went wrong"
	})
}