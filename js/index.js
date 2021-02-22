const themeCookiesName = 'theme'
const themeDark = 'dark'
const themeLight = 'light'

const body = document.getElementsByTagName('body')[0]

function setCookie(cname, cvalue, exdays){
	var d = new Date()
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
	var expires  = "expires="+d.toUTCString()
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}
function getCookie(cname){
	 var name = cname + "="
	 var ca = document.cookie.split(';')
	 for(var i = 0; i < ca.length; i++){
	 	var c = ca[i]
	 	while(c.charAt(0) == ' '){
	 		c = c.substring(1)
	 	}
	 	if (c.indexOf(name) == 0){
	 		return c.substring(name.length, c.length)
	 	}
	 }
	 return ""
}

loadTheme()

function loadTheme(){
	var theme = getCookie(themeCookiesName)
	body.classList.add(theme === "" ? themeLight : theme)
}
function switchTheme(){
	if(body.classList.contains(themeLight)){
		body.classList.remove(themeLight)
		body.classList.add(themeDark)
	}else{
		body.classList.remove(themeDark)
		body.classList.add(themeLight)
	}
}

window.onclick = function(event) {
	openCloseDropdown(event)
}
function closeAllDropdown() {
	var dropdowns = document.getElementsByClassName('dropdown-expand')
	for(var i = 0; i < dropdowns.length; i++){
		dropdowns[i].classList.remove('dropdown-expand')
	}
}
function openCloseDropdown(event){
	if(!event.target.matches('.dropdown-toggle')){
		closeAllDropdown()
	}else{
		 var toggle = event.target.dataset.toggle
		 var content = document.getElementById(toggle)
		 if (content.classList.contains('dropdown-expand')){
		 		closeAllDropdown()
		 }else{
		 	closeAllDropdown()
		 	content.classList.add('dropdown-expand')
		 }
	}
}