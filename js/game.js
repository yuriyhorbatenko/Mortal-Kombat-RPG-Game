

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




///// Fighters Health Bar numbers at Game Start /////



    // Sub Zero
    subZeroHP = Math.floor(Math.random() * 200) + 100;
    subZeroAttack = Math.floor(Math.random() * 100) + 100;
    subZeroCountAt = Math.floor(Math.random() * 50) + 100;
    $(".hp1").text(subZeroHP);
    console.log("Sub Zer0 Health - " + subZeroHP);
    console.log("Sub Zer0 Attack - " + subZeroAttack);
    console.log("Sub Zer0 Counter Attack - " + subZeroCountAt);


    // Scorpion
    var scorpionHP = 0;
    for (var i = 0; i < 9; i++) {
    var random = Math.floor(Math.random() * 50) + 10;
    scorpionHP = random + scorpionHP;
    }
    $(".hp2").text(scorpionHP);
    console.log("HP Scorpion - " + scorpionHP);


    // Jax
    var jaxHP = 0;
    for (var i = 0; i < 9; i++) {
    var random = Math.floor(Math.random() * 50) + 10;
    jaxHP = random + jaxHP;
    }
    $(".hp3").text(jaxHP);
    console.log("HP Jax - " + jaxHP);


    // Milena
    var milenaHP = 0;
    for (var i = 0; i < 9; i++) {
    var random = Math.floor(Math.random() * 50) + 10;
    milenaHP = random + milenaHP;
    }
    $(".hp4").text(milenaHP);
    console.log("HP Milena - " + milenaHP);






  
    
    
    
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




    var defender;   
    var attacker;

    userSelectFirst = false;
    userSelectSecond = false;

    
    
    
    
    //var enemiesRemaining = players.lenght -1;


function playerSelect(){

        
    $("#h31").on("click", function() {
        var subZero = $("#h31");
        if(userSelectFirst === false){
        subZero.animate({ bottom: "-280px", left: "50px" }, "slow");
        console.log("First player select Sub Zero");
        userSelectFirst = true;
        };




        $("#h32").on("click", function() {
            var scorpion = $("#h32");
            if(userSelectSecond === false){
            scorpion.animate({ bottom: "-280px", left: "350px" }, "fast");
            console.log("Second player select Sub Zero");
            userSelectSecond = true;
            };
        });




        ("#h33").on("click", function() {
            var jax = $("#h33");
            if(userSelectSecond === false){
            jax.animate({ bottom: "-280px", left: "350px" }, "slow");
            console.log("Second player select Jax");
            userSelectSecond = true;
            };
        });



        
        $("#h34").on("click", function() {
            var milena = $("#h34");
            if(userSelectSecond === false){
            milena.animate({ bottom: "-280px", left: "350px" }, "fast");
            console.log("Second player select Milena");
            userSelectFirst = true;
            };
        });


        
        
        
    });






        

    





}

playerSelect();

    








   
   
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