

///// Audio Link's for Game Sounds /////


var themeMusic = document.createElement("audio");
themeMusic.setAttribute("src", "audio/theme.mp3");

var fightMusic = document.createElement("audio");
fightMusic.setAttribute("src", "audio/fight.wav");

var subZeroMusic = document.createElement("audio");
subZeroMusic.setAttribute("src", "audio/subzero.wav");

var scorpionMusic = document.createElement("audio");
scorpionMusic.setAttribute("src", "audio/scorpion.wav");

var jaxMusic = document.createElement("audio");
jaxMusic.setAttribute("src", "audio/jax.wav");

var milenaMusic = document.createElement("audio");
milenaMusic.setAttribute("src", "audio/milena.wav");



$("#btnPlay").on("click", function() {
    themeMusic.play();
});

$(".pause-button").on("click", function() {
    themeMusic.pause();
});

$("#h31").on("click", function() {
    subZeroMusic.play();
});

$("#h32").on("click", function() {
    scorpionMusic.play();
});

$("#h33").on("click", function() {
    jaxMusic.play();
});

$("#h34").on("click", function() {
    milenaMusic.play();
});




    ///// Fighters Stats when Game Starts /////




    // Sub Zer0's stats:
    subZeroHP = Math.floor(Math.random() * 200) + 200;
    subZeroAttack = Math.floor(Math.random() * 100) + 50;
    subZeroCountAt = Math.floor(Math.random() * 50) + 25;
    $(".hp1").text(subZeroHP);
    console.log("Sub Zer0 Health - " + subZeroHP);
    console.log("Sub Zer0 Attack - " + subZeroAttack);
    console.log("Sub Zer0 Counter Attack - " + subZeroCountAt);
    console.log("--------------------------------");


    // Scorpion's stats:
    scorpionHP = Math.floor(Math.random() * 200) + 200;
    scorpionAttack = Math.floor(Math.random() * 100) + 50;
    scorpionCountAt = Math.floor(Math.random() * 50) + 25;
    $(".hp2").text(scorpionHP);
    console.log("Scorpion Health - " + scorpionHP);
    console.log("Scorpion Attack - " + scorpionAttack);
    console.log("Scorpion Counter Attack - " + scorpionCountAt);
    console.log("--------------------------------");


    // Jax's stats:
    jaxHP = Math.floor(Math.random() * 200) + 200;
    jaxAttack = Math.floor(Math.random() * 100) + 50;
    jaxCountAt = Math.floor(Math.random() * 50) + 25;
    $(".hp3").text(jaxHP);
    console.log("Jax Health- " + jaxHP);
    console.log("Jax Attack - " + jaxAttack);
    console.log("Jax Counter Attack - " + jaxCountAt);
    console.log("--------------------------------");


    // Milena's stats:
    milenaHP = Math.floor(Math.random() * 200) + 200;
    milenaAttack = Math.floor(Math.random() * 100) + 50;
    milenaCountAt = Math.floor(Math.random() * 50) + 25;
    $(".hp4").text(milenaHP);
    console.log("Milena Health- " + milenaHP);
    console.log("Milena Attack - " + milenaAttack);
    console.log("Milena Counter Attack - " + milenaCountAt);
    console.log("--------------------------------");





    ///// Player 1 and Player 2 Variables: /////



    var playerwin = 0;
    var playerlose = [];

    var player1 = {
        fighter: "",
        hp: 0,
        attack: 0,
        counterAttack: 0,
    };

    var player2 = {
        fighter: "",
        hp: 0,
        attack: 0,
        counterAttack: 0
    };

    

    
    ///// Functions for Sub Zer0: /////


    $("#h31").on("click", function() {
        if (player1.attack == 0){
            player1 = {
                name: "Sub Zer0",
                hp: subZeroHP,
                attack: subZeroAttack,
                counterAttack: subZeroCountAt,
            }
            
            $("#h61").append(player1.name);
            $("#h61").append("Health Point " + player1.hp);
            $("#h61").append("Attack " + player1.attack);
            $("#h61").append("Block " + player1.counterAttack);
            $("#h31").animate({ bottom: "-280px", left: "20px" }, "slow");
            console.log("Player chose " + player1.name)
        }
    
        else if (player2.attack == 0 && player1.name != "Sub Zer0" && !playerlose.includes("Sub Zer0")){
            player2 = {
                name: "Sub Zer0",
                hp: subZeroHP,
                attack: subZeroAttack,
                counterAttack: subZeroCountAt,
            }
            
            $("#h62").append("Health Point " + player2.hp);
            $("#h62").append("Attack " + player2.attack);
            $("#h62").append("Block " + player2.counterAttack);
            $("#h31").animate({ bottom: "-280px", left: "550px" }, "slow");
            console.log("Player chose " + player2.name)
        }
    });



    ///// Functions for Scorpion: /////
    

    $("#h32").on("click", function(){
        if (player1.attack == 0){
            player1 = {
                name: "Scorpion",
                hp: scorpionHP,
                attack: scorpionAttack,
                counterAttack: scorpionCountAt,
            }
            
            $("#h61").append(player1.name);
            $("#h61").append("Health Point " + player1.hp);
            $("#h61").append("Attack " + player1.attack);
            $("#h61").append("Block " + player1.counterAttack);
            $("#h32").animate({ bottom: "-280px", left: "-150px" }, "slow");
            console.log("Player chose " + player1.name)
        }

        else if (player2.attack == 0 && player1.name != "Scorpion" && !playerlose.includes("Scorpion")){
            player2 = {
                name: "Scorpion",
                hp: scorpionHP,
                attack: scorpionAttack,
                counterAttack: scorpionCountAt,
            }
            
            $("#h62").append("Health Point " + player2.hp);
            $("#h62").append("Attack " + player2.attack);
            $("#h62").append("Block " + player2.counterAttack);
            $("#h32").animate({ bottom: "-280px", left: "380px" }, "slow");
            console.log("Player chose " + player2.name)
        }
    });
    

    ///// Functions for Jax: /////


    $("#h33").on("click", function() {
        if (player1.attack == 0){
            player1 = {
                name: "Jax",
                hp: jaxHP,
                attack: jaxAttack,
                counterAttack: jaxCountAt,
            }
            
            $("#h61").append(player1.name);
            $("#h61").append("Health Point " + player1.hp);
            $("#h61").append("Attack " + player1.attack);
            $("#h61").append("Block " + player1.counterAttack);
            $("#h33").animate({ bottom: "-280px", left: "-330px" }, "slow");
            console.log("Player chose " + player1.name)
        }
    
        else if (player2.attack == 0 && player1.name != "Jax" && !playerlose.includes("Jax")){
            player2 = {
                name: "Jax",
                hp: jaxHP,
                attack: jaxAttack,
                counterAttack: jaxCountAt,
            }
            
            $("#h62").append("Health Point " + player2.hp);
            $("#h62").append("Attack " + player2.attack);
            $("#h62").append("Block " + player2.counterAttack);
            $("#h33").animate({ bottom: "-280px", left: "180px" }, "slow");
            console.log("Player chose " + player2.name)
        }
    });



    ///// Functions for Milena: /////
    

    $("#h34").on("click", function(){
        if (player1.attack == 0){
            player1 = {
                name: "Milena",
                hp: milenaHP,
                attack: milenaAttack,
                counterAttack: milenaCountAt,
            }
            
            $("#h61").append(player1.name);
            $("#h61").append("Health Point " + player1.hp);
            $("#h61").append("Attack " + player1.attack);
            $("#h61").append("Block " + player1.counterAttack);
            $("#h34").animate({ bottom: "-280px", left: "-550px" }, "slow");
            console.log("Player chose " + player1.name)
        }

        else if (player2.attack == 0 && player1.name != "Milena" && !playerlose.includes("Milena")){
            player2 = {
                name: "Milena",
                hp: milenaHP,
                attack: milenaAttack,
                counterAttack: milenaCountAt,
            }
            
            $("#h62").append("Health Point " + player2.hp);
            $("#h62").append("Attack " + player2.attack);
            $("#h62").append("Block " + player2.counterAttack);
            $("#h34").animate({ bottom: "-280px", left: "-20px" }, "slow");
            console.log("Player chose " + player2.name)
        }
    });


    


  
    
    
    
//    $("#h31").on("click", function() {
//    $( "#h41" ).before( $( ".containerB" ) );
//});

//    $("#h32").on("click", function() {
//  $( "#h42" ).before( $( ".containerB" ) );
//});

//    $("#h33").on("click", function() {
//   $( "#h43" ).before( $( ".containerB" ) );
//});

//    $("#h34").on("click", function() {
//    $( "#h44" ).before( $( ".containerB" ) );
//});




    

//    userSelectFirst = false;
//    userSelectSecond = false;

    
    
    
    
    //var enemiesRemaining = players.lenght -1;


//function playerSelect(){

        
//    $("#h31").on("click", function() {
//        var subZero = $("#h31");
//        if(userSelectFirst === false){
//        subZero.animate({ bottom: "-280px", left: "50px" }, "slow");
//        console.log("First player select Sub Zero");
//        userSelectFirst = true;
//        };




//       $("#h32").on("click", function() {
//            var scorpion = $("#h32");
//            if(userSelectSecond === false){
//            scorpion.animate({ bottom: "-280px", left: "350px" }, "fast");
//            console.log("Second player select Sub Zero");
//           userSelectSecond = true;
//           };
//        });




//       ("#h33").on("click", function() {
//           var jax = $("#h33");
//           if(userSelectSecond === false){
//           jax.animate({ bottom: "-280px", left: "350px" }, "slow");
//            console.log("Second player select Jax");
//            userSelectSecond = true;
//            };
//        });



        
//        $("#h34").on("click", function() {
//           var milena = $("#h34");
//            if(userSelectSecond === false){
//            milena.animate({ bottom: "-280px", left: "350px" }, "fast");
//            console.log("Second player select Milena");
//            userSelectFirst = true;
//            };
//        });


        
        
        
//    });






        

    





//}

//playerSelect();

    








   
   
//    $("#h32").on("click", function() {

//    var scorpion = $("#h32");

//    scorpion.animate({ bottom: "-280px", left: "0px" }, "fast");

//    $("#h33").on("click", function() {
//    var jax = $("#h33");

//    jax.animate({ bottom: "-280px", left: "0px" }, "fast");
    
//    $("#h34").on("click", function() {

//    var milena = $("#h34");

//   if (subZero)
//   subZero.animate({ bottom: "-280px", left: "50px" }, "fast");
//   else ()



    

//      milena.animate({ bottom: "-280px", left: "0px" }, "fast");

//      if (userSelectFirst) {


//      userSelectFirst.animate({ bottom: "-280px", left: "50px" }, "fast");
//       }

//      else (userSelectSecond) 

        
//   userSelectSecond.animate({ bottom: "-280px", left: "300px" }, "fast");
    




//  var userSelectSecond = (subZero = scorpion = jax = milena);

//  userSelectFirst.animate({ bottom: "-280px", left: "50px" }, "fast");
//  userSelectSecond.animate({ bottom: "-280px", left: "300px" }, "fast");










//});
//});    
//});    
//});





//    function showFighters() {

//      var subZero = $("#h31");
//      var scorpion = $("#h32");
//      if (userSelectFirst === subZero || userSelectFirst === scorpion) {
//      console.log(userSelectFirst)
//      return;
    


//      if  (userSelectFirst) {

//    $("#h31").on("click", function() {
//    var subZero = $("#h31");
//    subZero.animate({ bottom: "-280px", left: "80px" }, "fast");
//  });

//  $("#h32").on("click", function() {
//    var scorpion = $("#h32");
//    scorpion.animate({ bottom: "-280px", left: "300px" }, "fast");
//  });
//  }
//  };