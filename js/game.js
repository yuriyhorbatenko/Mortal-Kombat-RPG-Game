

///// Hide some content /////

$( "#h42" ).hide();
$( "#btnFight" ).hide();

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

var youLose = document.createElement("audio");
youLose.setAttribute("src", "audio/laugh.wav");

var youWon = document.createElement("audio");
youWon.setAttribute("src", "audio/flawless.wav");



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
    subZeroHP = Math.floor(Math.random() * 200) + 500;
    subZeroAttack = Math.floor(Math.random() * 100) + 50;
    subZeroCountAt = Math.floor(Math.random() * 50) + 25;
    $(".hp1").text(subZeroHP);
    console.log("Sub Zer0 Health - " + subZeroHP);
    console.log("Sub Zer0 Attack - " + subZeroAttack);
    console.log("Sub Zer0 Counter Attack - " + subZeroCountAt);
    console.log("--------------------------------");


    // Scorpion's stats:
    scorpionHP = Math.floor(Math.random() * 200) + 500;
    scorpionAttack = Math.floor(Math.random() * 100) + 50;
    scorpionCountAt = Math.floor(Math.random() * 50) + 25;
    $(".hp2").text(scorpionHP);
    console.log("Scorpion Health - " + scorpionHP);
    console.log("Scorpion Attack - " + scorpionAttack);
    console.log("Scorpion Counter Attack - " + scorpionCountAt);
    console.log("--------------------------------");


    // Jax's stats:
    jaxHP = Math.floor(Math.random() * 200) + 500;
    jaxAttack = Math.floor(Math.random() * 100) + 50;
    jaxCountAt = Math.floor(Math.random() * 50) + 25;
    $(".hp3").text(jaxHP);
    console.log("Jax Health- " + jaxHP);
    console.log("Jax Attack - " + jaxAttack);
    console.log("Jax Counter Attack - " + jaxCountAt);
    console.log("--------------------------------");


    // Milena's stats:
    milenaHP = Math.floor(Math.random() * 200) + 500;
    milenaAttack = Math.floor(Math.random() * 100) + 50;
    milenaCountAt = Math.floor(Math.random() * 50) + 25;
    $(".hp4").text(milenaHP);
    console.log("Milena Health- " + milenaHP);
    console.log("Milena Attack - " + milenaAttack);
    console.log("Milena Counter Attack - " + milenaCountAt);
    console.log("--------------------------------");



    ///// Player 1 and Player 2 Variables: /////



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

            $("#h61").append("Health - " + player1.hp);            
            $("#h71").append("Attack - " + player1.attack);
            $("#h81").append("Block - " + player1.counterAttack);
            $("#h31").animate({ bottom: "-280px", left: "20px" }, "slow");
            $("#h42").show();
            $("#btnFight").show();
            $(".hp1").hide();
            console.log("Player chose " + player1.name)
        }
    
        else if (player2.attack == 0 && player1.name != "Sub Zer0" && !playerlose.includes("Sub Zer0")){
            player2 = {
                name: "Sub Zer0",
                hp: subZeroHP,
                attack: subZeroAttack,
                counterAttack: subZeroCountAt,
            }

            $("#h62").append("Health - " + player2.hp);
            $("#h72").append("Attack - " + player2.attack);
            $("#h82").append("Block - " + player2.counterAttack);
            $("#h31").animate({ bottom: "-280px", left: "530px" }, "slow");
            $(".hp1").hide();
            setTimeout(function(){ fightMusic.play(); }, 1100);
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

            $("#h61").append("Health - " + player1.hp);
            $("#h71").append("Attack - " + player1.attack);
            $("#h81").append("Block - " + player1.counterAttack);
            $("#h32").animate({ bottom: "-280px", left: "-170px" }, "slow");
            $("#h42").show();
            $("#btnFight").show();
            $(".hp2").hide();
            console.log("Player chose " + player1.name)
        }

        else if (player2.attack == 0 && player1.name != "Scorpion" && !playerlose.includes("Scorpion")){
            player2 = {
                name: "Scorpion",
                hp: scorpionHP,
                attack: scorpionAttack,
                counterAttack: scorpionCountAt,
            }
            
            $("#h62").append("Health - " + player2.hp);
            $("#h72").append("Attack - " + player2.attack);
            $("#h82").append("Block - " + player2.counterAttack);
            $("#h32").animate({ bottom: "-280px", left: "340px" }, "slow");
            $(".hp2").hide();
            setTimeout(function(){ fightMusic.play(); }, 1100);
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
            
            $("#h61").append("Health - " + player1.hp);
            $("#h71").append("Attack - " + player1.attack);
            $("#h81").append("Block - " + player1.counterAttack);
            $("#h33").animate({ bottom: "-280px", left: "-360px" }, "slow");
            $("#h42").show();
            $("#btnFight").show();
            $(".hp3").hide();
            console.log("Player chose " + player1.name)
        }
    
        else if (player2.attack == 0 && player1.name != "Jax" && !playerlose.includes("Jax")){
            player2 = {
                name: "Jax",
                hp: jaxHP,
                attack: jaxAttack,
                counterAttack: jaxCountAt,
            }
            
            $("#h62").append("Health - " + player2.hp);
            $("#h72").append("Attack - " + player2.attack);
            $("#h82").append("Block - " + player2.counterAttack);
            $("#h33").animate({ bottom: "-280px", left: "150px" }, "slow");
            $(".hp3").hide();
            setTimeout(function(){ fightMusic.play(); }, 1100);
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
            
            $("#h61").append("Health - " + player1.hp);
            $("#h71").append("Attack - " + player1.attack);
            $("#h81").append("Block - " + player1.counterAttack);
            $("#h34").animate({ bottom: "-280px", left: "-550px" }, "slow");
            $("#h42").show();
            $("#btnFight").show();
            $(".hp4").hide();
            console.log("Player chose " + player1.name)
        }

        else if (player2.attack == 0 && player1.name != "Milena" && !playerlose.includes("Milena")){
            player2 = {
                name: "Milena",
                hp: milenaHP,
                attack: milenaAttack,
                counterAttack: milenaCountAt,
            }
            
            $("#h62").append("Health - " + player2.hp);
            $("#h72").append("Attack - " + player2.attack);
            $("#h82").append("Block - " + player2.counterAttack);
            $("#h34").animate({ bottom: "-280px", left: "-45px" }, "slow");
            $(".hp4").hide();
            setTimeout(function(){ fightMusic.play(); }, 1100);
            console.log("Player chose " + player2.name)
        }
    });


    ///// Functions for Attack: /////


    $("#btnFight").on("click", function(){

        player2.hp -= player1.attack;
        player1.attack += player1.counterAttack;
        player1.hp -= player2.counterAttack;

        $("#h61").empty();
        $("#h62").empty();

        $("#h71").empty();
        $("#h72").empty();

        $("#h81").empty();
        $("#h82").empty();
        
        if (player1.hp < 0){
            player1.hp = 0
            youLose.play();
        }

        else if (player2.hp < 0){
                 player2.hp = 0
                 youWon.play();
        }


        $("#h61").append("Health - " + player1.hp);
        $("#h62").append("Health - " + player2.hp);

        //$("#h71").append("Attack - " + player1.attack);
        //$("#h72").append("Attack - " + player2.attack);

        //$("#h81").append("Block - " + player1.counterAttack);
        //$("#h82").append("Block - " + player2.counterAttack);
        

        console.log(player1)
        console.log(player2)

    });