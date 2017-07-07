// JavaScript File
// JavaScript File
/*global $*/
$( document ).ready(function() {
    var ra = Math.floor(Math.random()*3);
    if(ra <2){
        $("#general").append("Not much about me other then a general hate for cats.");
        $("#why").append("Please dont make me explain myself though because there are far to many reasons and besides it should'nt matter to you what I think.");
        $("body").attr("background","https://upload.wikimedia.org/wikipedia/commons/3/39/Toxoplasma_gondii_tachy.jpg");
    } else{
        $("#general").append("Why hello and welcome to my website. If you've come to learn more about me then perhaps you should talk to me instead of staring at a screen like every seems to do these days.");
        $("#why").append("Why don't you take a look and push a button, just for the sake of pushing it. I promise it doesn't do any thing bad. Now about me... For starters I have a dog named Palita and I like to wear sweaters.");
        $("body").attr("background",'http://wallpapercave.com/wp/InfkkQ7.png');
    }
    
    $("button").click(function(){
        if(ra <2){
            alert("one such example of cats and their inferiority would include the disease most of them carry known as Toxoplasma Gondii");
            $("body").append("<a href='https://en.wikipedia.org/wiki/Toxoplasma_gondii'>Check it out</a>");
        }else{
            $(".click").text("Why don't you try refreshing the page");
        }
    });
});