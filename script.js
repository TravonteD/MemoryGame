$(document).ready(function(){

    //initates the cards
    var card1 = "img/debian-card.png";
    var card2 = "img/debian-card.png";
    var card3 = "img/fedora-card.png";
    var card4 = "img/fedora-card.png";
    var card5 = "img/kali-card.png";
    var card6 = "img/kali-card.png";
    var card7 = "img/manjaro-card.png";
    var card8 = "img/manjaro-card.png";

    //initiates the deck
    var deck = [card1,card2,card3,card4,card5,card6,card7,card8];

    //declare variable to hold the selected cards
    var selected1;
    var selected2;
    function shuffle(array){

        for(var i=0; i<array.length;i++){
            var x = Math.floor((Math.random()*4)+1);
            var temp = array[x];
            var current = array[i];
            array[i]=temp;
            array[x]=current;
        }
    }

    $("#start").click(function(){
        shuffle(deck);
        selected1 = "";
        selected2 = "";
    });

    $(".card").click(function(){
        var id = $(this).attr("id");
        //this is to identify the card clicked
        switch (id){
            case "card1":
                $("#card1 img").attr("src", deck[0]);
                break;
            case "card2":
                $("#card2 img").attr("src", deck[1]);
                break;
            case "card3":
                $("#card3 img").attr("src", deck[2]);
                break;
            case "card4":
                $("#card4 img").attr("src", deck[3]);
                break;
            case "card5":
                $("#card5 img").attr("src", deck[4]);
                break;
            case "card6":
                $("#card6 img").attr("src", deck[5]);
                break;
            case "card7":
                $("#card7 img").attr("src", deck[6]);
                break;
            case "card8":
                $("#card8 img").attr("src", deck[7]);
                break;
            default: "Something went wrong";
                  }
        //keep track of the two selected cards
        if(selected1 === ""){
            selected1 = $(this).children().attr("src");
            alert(selected1);
        }
        else{
            selected2 = $(this).children().attr("src");
            alert(selected2);
        }
    })

})
