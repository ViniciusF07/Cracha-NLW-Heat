const LinksSocialMedia = {
	github: 'ViniciusF07',
	youtube: 'channel/UC6s9C4sEuhvYDqdbCBDVBKg/featured',
	instagram: 'vinif.07',
	facebook: 'vinicius.francelino.96',
	twitter: 'onepieceex'
}

function changeSocialMediaLinks() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute('class')

		li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
	}
}
// i = i + 1
// i++
changeSocialMediaLinks()

function getGitHubProfileInfos() {
	const url = `https://api.github.com/users/${LinksSocialMedia.github}`

	fetch(url)
		.then(response => response.json())
		.then(data => {
			userName.tectContent = data.name
			userBio.textContent = data.bio
			userLink.href = data.html_url
			userImage.src = data.avatar_url
			userLogin.textContent = data.login
		})
}

getGitHubProfileInfos()
