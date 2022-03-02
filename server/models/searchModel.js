const searchData = require("../data/searchData.js");

class Search {
    constructor(id, url, tags, title, description)
    {
        this.id = id;
        this.url = url;
        this.tags = tags;
        this.title = title;
        this.description = description;
    }

    //get all
    static get all() 
    {
       
        //return the data
        return searchData;
    }

	static get content() 
    {
		return this;
	}

    //find by ID, takes id number, finds it and returns.  Gives an error if it doesn't exist
    static findById(id) 
    {
		try 
        {
			let arr = searchData.filter(search => search.id === id)[0];
			console.log(searchData);
			const search = new Search(arr.id, arr.url, arr.tags, arr.title, arr.description);
			return search;
		} 
        catch (err) 
        {
			throw new Error('That search id doesn\'t exist.');
		}
	}




}

//export quote class
module.exports = Search;