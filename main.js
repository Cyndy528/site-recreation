
$(document).ready(function() {
	alert("Check Out What's New!");
}); 

$("#1").on("click", function (e){
alert("Mimi and her lil' Babes in Town");
});

$("#2").on("click", function (e){
alert("Mariah and her new Macho Hubby!");
});

$("#3").on("click", function (e){
alert("What will Mariah dress her Monroe and Rocky this Halloween?");
});

$("#4").on("click", function (e){
alert("Mariah Carey releases her new single - Fly with Me Butterfly!");
});

$("#5").on("click", function (e){
alert("Tough Times for Mariah - but she's flying like a Butterfly!");
});

$("#6").on("click", function (e){
alert("Tough Times for Mariah - but she's flying like a Butterfly!");
});

$("#pics").hover(function (e){
    $("div").animate({
		opacity: "0.8",
  
    });
});

// $(".nav").hover(function (e){
// 	alert("Hi There!");
// });

$("div").scoll(function (e){
	$("div").text(x+1); 
}); 


