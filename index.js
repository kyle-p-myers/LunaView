const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://moon-phase.p.rapidapi.com/basic');
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
xhr.setRequestHeader('X-RapidAPI-Host', 'moon-phase.p.rapidapi.com');

xhr.send(data);