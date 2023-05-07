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
	fetch(`https://api.github.com/users/RyannKim327/repos`).then((r) => {
		return r.json()
	}).then((r) => {
		const data = r
		let o_base =  document.createElement("div")
		o_base.classList.add("my-lists")
		data.map((e, i) => {
			console.log(e)
			if(!e.fork){
				let base = document.createElement("div")
				let title = document.createElement("h3")
				let subtitle = document.createElement("h5")
				title.textContent = e.name
				subtitle.textContent = e.description
				base.classList.add("myRepo")
				base.onclick = () => {
					location.href = e.html_url
				}
				base.appendChild(title)
				base.appendChild(subtitle)
				o_base.appendChild(base)
			}	
		})
		$("#lists-projects").appendChild(o_base)
	}).catch((e) => {
		console.error(`Error [Github]: ${e}`)
		$("#projects").textContent = "Something went wrong"
	})
}