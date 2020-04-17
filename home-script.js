//JAVASCRIPT CODE
//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//<script type="text/javascript" src="./script.js">
getStats("AUS");
//Event Listener for button COVID-19
 //Event Listener

function getStats(countryCode,countryName){
    var queryURL = "https://covidapi.info/api/v1/country/"+countryCode+"/latest"           
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) 
    {   
        var output = Object.values(response.result)[0];
        var confirmCases = output.confirmed;
        var confirmDeaths = output.deaths;
        var confirmRecovered = output.recovered;
        $("#infected").text(confirmCases);
        $("#deceased").text(confirmDeaths);
        $("#recovered").text(confirmRecovered);
        $(".countryBtn").text(countryName);
    })
}

$(".dropdown-item").on("click",function(){
    var countrySelect =  $(this).attr("data-country");
    var countryName = $(this).attr('value-country')
    getStats(countrySelect,countryName);
})

$("#quizBtn").on("click",function()
{
    //API Key for news article
    apiKey = "a819d6578c28488eadd2b1297db47b15";

    var queryURL = "https://newsapi.org/v2/top-headlines?q=coronavirus&country=au&apiKey="+apiKey;
    console.log(queryURL)            
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) 
    {
        var array = response.articles
        console.log(array)


        for (var i=0;i<array.length;i++)
        {   
            currentResult = array[i];
            newDiv = $("<div>");
            title = currentResult.title;
            author = currentResult.author;
            publishDate = currentResult.publishedAt;
            link = currentResult.url;
            var p1 = $("<p>").text(title);
            var p2 = $("<p>").text(author);
            var p3 = $("<p>").text(publishDate);
            var p4 = $("<p>").text(link);
            newDiv.append(p1);
            newDiv.append(p2);
            newDiv.append(p3);
            newDiv.append(p4);
            $(".latestInfo").append(newDiv);
        }
        

    })
})
