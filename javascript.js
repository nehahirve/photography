$ ( document ).ready(function(){

//loops through all a and checks href against url

    var loc = window.location.pathname;
    $ ("a").each( function (){
    $ (this).toggleClass("currentpage", loc.indexOf($(this).attr("href")) != -1 );
    });
});


function menu() {
  var x = document.getElementById('index');
  var y = document.getElementById('exhibit');
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display ="block";
    y.style.display ="none";
  };
};
