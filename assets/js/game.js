var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("Welcome to Robot Gladiators!");
 
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

   if (promptFight === "fight" || promptFight === "FIGHT") {

        enemyHealth = enemyHealth - playerAttack;
         console.log(playerName + " attacked " + enemyName +". " + enemyName + " now has " + enemyHealth + " health remaining. ");

         //Check enemys health
          if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
         }

         else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
         }

          playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. ");

        //Check players health
        if (playerHealth <=0) {
         window.alert(playerName + " has died.");
        }
         else {
       window.alert(playerName + " still has " + playerHealth + " health left.");
        }
   }    
        //Player chooses to skip

        else if (promptFight === "skip" || promptFight === "SKIP") {
    
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight. Goodbye!");
            playerMoney=playerMoney - 2;

        }

        else {
            fight();
        }
    }
}

fight();