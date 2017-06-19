$(document).ready(function(){

    function shuffle(array){

        for(var i=0; i<array.length;i++){
            var x = Math.floor((Math.random()*4)+1);
            var temp = array[x];
            var current = array[i];
            array[i]=temp;
            array[x]=current;
        }
    }
    var card1 = "img/debian-card.png";
    var card2 = "img/debian-card.png";
    var card3 = "img/fedora-card.png";
    var card4 = "img/fedora-card.png";
    var card5 = "img/kali-card.png";
    var card6 = "img/kali-card.png";
    var card7 = "img/manjaro-card.png";
    var card8 = "img/manjaro-card.png";
    var deck = [card1,card2,card3,card4,card5,card6,card7,card8];

    $("#start").click(function(){
       shuffle(deck);
        alert(deck[1];)
    });

    $(".card").click(function(){
        var id = $(this).attr("id");
        switch (id){
            case "card1":
                $("#card1 img").attr("src", "img/debian-card.png");
                break;
            case "card2":
                $("#card2 img").attr("src", "img/debian-card.png");
                break;
            case "card3":
                $("#card3 img").attr("src", "img/debian-card.png");
                break;
            case "card4":
                $("#card4 img").attr("src", "img/debian-card.png");
                break;
            case "card5":
                $("#card5 img").attr("src", "img/debian-card.png");
                break;
            case "card6":
                $("#card6 img").attr("src", "img/debian-card.png");
                break;
            case "card7":
                $("#card7 img").attr("src", "img/debian-card.png");
                break;
            case "card8":
                $("#card8 img").attr("src", "img/debian-card.png");
                break;
            default: "Something went wrong";
                  }
    })

})
