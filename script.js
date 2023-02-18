//your code here
let ol = document.getElementById('data');
fetch("https://api.github.com/repositories/1296269/issues?page=${1}&per_page=5.")
    .then((response) => response.json())
    .then((product) => {
        document.getElementById('page_number').innerHTML = `Page Number 1`;
        for (let i = 0; i < 5; i++) {
            const element = product[i];
            console.log(product[i].title);
            ol.innerHTML += `<li>${product[i].title}</li>`
        }
    })

let i = 1;
let next = document.getElementById('load_next');
let prev = document.getElementById('load_prev');
next.addEventListener('click', () => {
    i = i + 1;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${i}&per_page=5.`)
        .then((response) => response.json())
        .then((product) => {
            document.getElementById('page_number').innerHTML = `Page Number ${i}`;
            ol.innerHTML = '';
            for (let j = 0; j< 5; j++) {
                const element = product[j];
                console.log(product[j].title);
                
                ol.innerHTML += `<li>${product[j].title}</li>`;
            }
        })
})
prev.addEventListener('click', () => {
    if (i === 1) i = 1;
    else i = i - 1;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${i}&per_page=5.`)
	.then((response) => response.json())
	.then((product) => {
		document.getElementById('page_number').innerHTML = `Page Number ${i}`;
		ol.innerHTML = '';
		for (let k = 0; k< 5; k++) {
			const element = product[k];
			console.log(product[k].title);
			ol.innerHTML += `<li>${product[k].title}</li>`
		}
	})
})