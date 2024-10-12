var pet = {
    name : prompt("Give your pet a name.") ,
    type : prompt('What kind of pet is it? (e.g., "dog", "cat", "dragon").') ,
    age : +prompt('How old is your pet?'),
    happiness : +prompt('How happy is your pet? (a number between 0 and 100).'),
    hunger : +prompt('How hungry is your pet? (a number between 0 and 100).'),

// feed(): This should decrease the hunger level by 20, but it can’t go below 0.
    feed : function(){
 
            if(this.hunger > 20) {
                this.hunger = this.hunger - 20;
            }
            else {
                this.hunger = 0 ;
            }
            alert(`Your ${this.name} is ${this.hunger}% hungry.`)

    },

    // play(): This should increase happiness by 20, but it can’t exceed 100.
    
    play : function(){

            if(this.happiness < 100) {
                this.happiness += 20;
            }
            else if(this.happiness > 100){
                this.happiness = 100
            }
            alert(`Your ${this.name} is ${this.happiness}% happy`)
        },

    // agePet(): This increases the age by 1, decreases happiness by 5, and increases hunger by 10.

    agePet : function() {
        this.age += 1;
        if (this.happiness >= 5) {
            this.happiness -= 5;
        } else {
            this.happiness = 0; 
        }
        if (this.hunger < 100) {
            this.hunger += 10;
            } else {
                this.hunger = 100; 
            }
        alert(Your`${this.name} is now ${this.age} years. Happiness level is ${this.happiness}, Hunger level is ${this.hunger}`);
    }
};

// Interaction loop
// function dd() {
// const action = prompt("What would you like to do? (feed, play, age, info, exit)");
// while (action !== 'exit') {
//     switch (action) {
//         case "feed":
//             pet.feed();
//             break;
//         case "play":
//             pet.play();
//             break;
//         case "age":
//             pet.agePet();
//             break;
//         // case "exit":
//         //     alert("Goodbye! Take care of your pet!");
//         //     break;
//         default:
//             alert("Invalid action! Please choose feed, play, age, info, or exit.");
//     }

//     if (action === "exit") break;
// }
// }
// dd()
function interactWithPet() {
   
    while (true) {

    let action = prompt("What would you like to do with your pet? (feed, play, age, exit)");
    
       if (action === "feed") {
            pet.feed();
        } else if (action === "play") {
            pet.play();
        } else if (action === "age") {
            pet.agePet();
        } else if (action === "exit") {
            alert("Thanks for taking care of your pet!");
            break;
        } else {
            alert("Please choose a valid action: feed, play, age, or exit.");      
        }
    }
}

// Start the interaction
interactWithPet();