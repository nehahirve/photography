$ ( document ).ready(function(){

//loops through all a and checks href against url

    var loc = window.location.pathname;
    $ ("a").each( function (){
    $ (this).toggleClass("currentpage", loc.indexOf($(this).attr("href")) != -1 );
    });
});
