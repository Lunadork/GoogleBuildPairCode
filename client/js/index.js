const form = document.querySelector('form');

form.addEventListener('submit',getAllResults)

function getAllResults (event)
{
    event.preventDefault();
    fetch('http://localhost:3000/random')
    .then(resp => resp.json())
    .then(data => alert("found " + JSON.stringify(data.url) + " with tags " + JSON.stringify(data.tags)))

}