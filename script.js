//your JS code here. If required.
const bands = [
            'The Plot in You', 
            'The Devil Wears Prada', 
            'Pierce the Veil', 
            'Norma Jean', 
            'The Bled', 
            'Say Anything', 
            'The Midway State', 
            'We Came as Romans', 
            'Counterparts', 
            'Oh, Sleeper', 
            'A Skylit Drive', 
            'Anywhere But Here', 
            'An Old Dog'
        ];
function removeArticles(name) {
    const articles = ['a', 'an', 'the'];
    const words = name.split(' ');
    if (articles.includes(words[0].toLowerCase())) {
        words.splice(0, 1);
    }
    return words.join(' ').trim();
}

bands.sort((a, b) => {
	const nameA = removeArticles(a).toLowerCase();
	const nameB = removeArticles(b).toLowerCase();
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}
	return 0;
});

const bandList = document.getElementById('band');
bands.forEach(band => {
	const li = document.createElement('li');
	li.textContent = band;
	bandList.appendChild(li);
});
