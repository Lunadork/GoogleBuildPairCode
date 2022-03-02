//Older code - not use, multi buttons on one form. //
//const form = document.querySelector('form');
//form.addEventListener('submit',getAllResults)



// NEW CODE BELOW //

//Get array of all submit buttons
const buttons = document.querySelectorAll("form input[type='submit']");

//Check length -- debugging
console.log(buttons.length);


//Add event listener to each submit button in buttons array
buttons.forEach(function (thisButton)
{
    thisButton.addEventListener("click",buttonInputHandler)
});


function buttonInputHandler(submitEvent)
{
    submitEvent.preventDefault();
    //get the idea of what caused the submit event
    let choice = submitEvent.target.getAttribute("id");

    //Check to see what ID was clicked on, do stuff depending
    if (choice === "search")
    {
        //DO SEARCH
        console.log("Search clicked");
        getAllResults();
    }
    else if (choice === "searchOnly")
    {
        //DO SEARCH ONLY
        console.log("Search Only clicked");
    }
}


//get all results
function getAllResults ()
{
    //fetch the json
    fetch('http://localhost:3000/random')
    .then(resp => resp.json())
    //do things with the JSON
    .then(data => alert("found " + JSON.stringify(data.url) + " with tags " + JSON.stringify(data.tags)))
    .catch(error => alert("Encountered error, detail: " +error));

}