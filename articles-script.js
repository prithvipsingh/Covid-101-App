//API Key for news article
apiKey = "a819d6578c28488eadd2b1297db47b15";
//API key to be added to API link
var queryURL = "https://newsapi.org/v2/top-headlines?q=coronavirus&country=au&apiKey="+apiKey;
//Pull request for API          

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) 
{

    var array = response.articles;
    //Loop to iterate through the latest articles
    for (var i=0;i<15;i++)
    {   
        currentResult = array[i];
        //Assign the response results into title, author, publish date, link, image
        title = currentResult.title;
        author = currentResult.author;
        publishDate = currentResult.publishedAt;
        link = currentResult.url;
        image = currentResult.urlToImage;
        //When no author is specified, displays not specified
        if (!author){
            author = "No Author Specified";
        } else if (author.length > 20){
            author = jQuery.trim(author).substring(0, 15)
            .trim(this) + "...";
        }

        //When no image is listed, display a placeholder
        if (image == null){
            image = "https://via.placeholder.com/300x150/FFFFFF?text=No+Image+Provided"
        }
        //Create HTML DOM elements for each assigned response result
        var titleDisplay = $("<p>").text(title).attr("class", "card-title");
        var authorDisplay = $("<p>").text("Authored by: " + author).attr("class", "card-bottom card-text");
        var dateDisplay = $("<p>").text("Date published: " + publishDate.split("T")[0]).attr("class", "card-text small");;
        var imgDisplay = $("<img>").attr({
            src: image,
            class: "card-img-top"
        });

        //Create a parent card element for the article
        var cardDiv = $("<div>").attr({
            class: "card animated bouncein",
            href: link,
        });
        //Click event for card
        cardDiv.on("click", function(){
            window.open($(this).attr("href"), '_blank');
        })

        //Create the body area of the card for text to sit
        var cardBody= $("<div>").attr("class", "card-body");
        
        //Assemble the card and place on the HTML page
        //1. Append the image to the top of the card
        cardDiv.append(imgDisplay);

        //2. Append all text items to the card-body and append the card-body to the card
        cardBody.append(dateDisplay);
        cardBody.append(titleDisplay);
        cardBody.append(authorDisplay);
        cardDiv.append(cardBody)

        //3. Append the parent card to the HTML page
        $(".card-deck").append(cardDiv);
    }
})

//Moment.js date display in the selected span
$("#date")[0].innerText = moment().format('D MMMM ')