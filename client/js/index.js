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
        //Fetch a random result using the getRandomResult function
        getRandomResult();
    }
    else if (choice === "searchSpecific")
    {
        //DO SEARCH ONLY
        console.log("Search Only clicked");

        //Get value of text entered.
        let searchTerm = document.getElementById("searchBar").value;
        console.log(searchTerm);

        //check if searchTerm is empty.
        if (searchTerm === "")
        {
            //alert user they input nothing
            alert("Nothing input into search bar!")
        }
        else
        {
            //Send the term to the getSpecific function
            getSpecific(searchTerm);
        }

    }
}


//get random result
function getRandomResult ()
{
    //fetch the json
    fetch('http://localhost:3000/random')
    .then(resp => resp.json())
    //do things with the JSON
    .then(data => alert("found " + JSON.stringify(data.url) + " with tags " + JSON.stringify(data.tags)))
    .catch(error => alert("Encountered error, detail: " +error));

}


//get specific result
    function getSpecific(searchTerm)
    {
        //Create an array where we're gonna push all our found results
        let resultArr = [];

        //Create an array we can keep possible tags in
        let possibleTags=[];

        //Change our term to an array of entered words, split via spaces
        let target = searchTerm.split(" ");
        console.log("target : " +target);
        
        //Get ALL results
        fetch('http://localhost:3000/searchAll')
        .then(resp => resp.json())
        //Do a thing with the data
        .then(data =>
        {
            //Loop through our data one at a time
            data.forEach(data =>
            {
                //remake our possible tags array with split data from tags on current object in data
                console.log(data);
                possibleTags = data.tags.split(",");
                console.log("Poss tags : " + possibleTags);

                //then loop through our list of possible tags
                for (let i = 0; i < possibleTags.length; i++)
                {
                    //and if any of our possible tags are included in our target terms...
                    if (target.includes(possibleTags[i]))
                    {
                        console.log("pushing " + data + " onto array");
                        //Push it onto the array.
                        resultArr.push(data);
                    }
                }
            })
            //displayResults(resultArr);
        })
        .catch(error => alert(error));
    }