

// http://api.nytimes.com/svc/search/v2/articlesearch

// Article Search API key: f00d8dbd623a99f7d310810bf38cff90:9:74629258

//http://api.nytimes.com/svc/search/v2/articlesearch.response-format?%5Bq=search

// "http://api.nytimes.com/svc/search/v2/articlesearch.response-format?[q=" + "&fq=filter-field:" +  + "&additional-params=values]&api-key=f00d8dbd623a99f7d310810bf38cff90:9:74629258"


//sample search from api console

//http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Zika&begin_date=20100501&end_date=20160301&api-key=f00d8dbd623a99f7d310810bf38cff90%3A9%3A74629258


var limit = 10; 
var searchTerm = "Zika";
var begin_date = "1900";
var begin_date_string = "&begin_date=" + begin_date +"0101";
var end_date = "2016";
var end_date_string = "&end_date=" + end_date +"1231";
var apikey = "&api-key=f00d8dbd623a99f7d310810bf38cff90%3A9%3A74629258";
var Nytsearchurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + 






// http://api.nytimes.com/svc/search/v2/articlesearch

// Article Search API key: f00d8dbd623a99f7d310810bf38cff90:9:74629258

//http://api.nytimes.com/svc/search/v2/articlesearch.response-format?%5Bq=search

// "http://api.nytimes.com/svc/search/v2/articlesearch.response-format?[q=" + "&fq=filter-field:" +  + "&additional-params=values]&api-key=f00d8dbd623a99f7d310810bf38cff90:9:74629258"


//sample search from api console

//http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Zika&begin_date=20100501&end_date=20160301&api-key=f00d8dbd623a99f7d310810bf38cff90%3A9%3A74629258

	var getStartYear = $('#startyear').val();
	var getEndYear = $('#endyear').val();
	var getRecords = $('#records').val();
	var limit = getRecords; 
	var searchTerm =  $('#searchTerm').val();
	var getStartYear = $('#startyear').val();
	var getEndYear = $('#endyear').val();

if(getStartYear == "") {
	var begin_date = "";
}
else{
	begin_date = $('#startyear').val();
}

if(getEndYear == "") {
	var end_date = "";
}
else{
	end_date = $('#startyear').val();
}
var begin_date_string = "&begin_date=" + begin_date;
var end_date = "";
var end_date_string = "&end_date=" + end_date;
var apikey = "&api-key=f00d8dbd623a99f7d310810bf38cff90%3A9%3A74629258";
var Nytsearchurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + 




