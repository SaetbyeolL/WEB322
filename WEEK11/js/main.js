// $(document).ready(function(){
//     console.log("document ready!");
// });

// // alternatively:

// // $(function() {
// //    console.log( "document ready!" );
// // });

// console.log("file loaded");
  

// $(document).ready(function(){
//     // make all <li> elements inside <ul class="list1">...</ul> bold
//     $("ul.list1 li").css("font-weight", "bold"); 
// });


// $(document).ready(function(){
//     // make all <li> elements inside <ul class="list1">...</ul> bold
//     $("ul.list1 li").css("font-weight", "bold"); 
// });

// $(document).ready(function(){
//     $("ul.list1 li").filter(":odd").css("font-weight", "bold")
// })


// $(document).ready(function () {
//     $("ul.list1").on("click", "li", function () { // DO NOT use () => {} syntax here
//         $(this).css("color", "red");
//     });

//     $("ul.list1").append("<li>I get the event too!</li>");
// });


// $(document).ready(function(){
//     $("ul.list1").on("click", "li", function(){
//         $(this).css("color", "red");
//     });
//     $("ul.list1").append("<li>I get the event too!</li>");
// });


// $(document).ready(function(){
//     $("ul.list1").on("click", "li", function(){
//         $(this).css("color", "red");
//     });
//     $("ul.list1").append("<li>I get the event too!</li>");
// });


$(document).read(function(){
    $("ul.list1").off("click", "li");
})
























