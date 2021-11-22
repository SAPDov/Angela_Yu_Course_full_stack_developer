$("h1").addClass("big-title margin-50");
$("h1").text("Bye");

// Query of elements
$("button").text("Don't");

$("button").html("<em>Hey</em>");

// adding attribute - image has a src, a href 

// finding
$("img").attr("src");

// setting 
$("a").attr("href", "https://www.yahoo.com");


$("button").click(function(key){
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    $("h1").text(event.key);
    console.log(event.key);
});


$("h1").on("mouseover", function() {
    $("h1").css("color", "orange");
});


$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");

$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

$("button").on("click", function(){
    // refers only to numeric animation
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});




