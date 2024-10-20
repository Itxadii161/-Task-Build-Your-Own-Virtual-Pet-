function getNumber(input) {
    input = input.trim()
    while (isNaN(input) || input === null || input === "") {
        input = prompt("Please enter a valid number:").trim();
    }
    return +input;
}
function getString(input) {
    input = input.trim();
    while (input === "") {
        input = prompt("Please enter a valid name:").trim();
    }
    return input;
}
// creating pet object
var pet = {
    name : getString(prompt("Give your pet a name.").trim()) ,
    type : getString(prompt('What kind of pet is it? (e.g., "dog", "cat", "dragon").').trim()) ,
    age : getNumber(prompt('How old is your pet?').trim()),
    happiness : getNumber(prompt('How happy is your pet? (a number between 0 and 100).')),
    hunger : getNumber(prompt('How hungry is your pet? (a number between 0 and 100).').trim()) ,

// feed(): This should decrease the hunger level by 20, but it can’t go below 0.// Function to get a valid number

    feed : function() {
 
            if(this.hunger > 20) {
                this.hunger = this.hunger - 20;
            }
            else {
                this.hunger = 0 ;
            }
            alert(`Your ${this.name} is ${this.hunger}% hungry.`)

    },

    // play(): This should increase happiness by 20, but it can’t exceed 100.
    
 
    play : function() {

            if(this.happiness < 100) {
                this.happiness += 20;
            }
            if(this.happiness > 100){
                this.happiness = 100;
            }
            alert(`Your ${this.name} is ${this.happiness}% happy`)
        },

    // agePet(): This increases the age by 1, decreases happiness by 5, and increases hunger by 10.

    agePet : function() {
        this.age += 1;
        if (this.happiness >= 5) {
            this.happiness -= 5;
            // this.happiness = this.happiness -5;
        } else {
            this.happiness = 0; 
        }
        if (this.hunger < 100) {
            this.hunger += 10;
            } else {
                this.hunger = 100; 
            }
        alert(`Your "${this.name}" is now "${this.age}" years. Happiness level is "${this.happiness}", Hunger level is "${this.hunger}"`);
    },
};
// function to perform some tasks
function interactWithPet() {
   
    while (true) {

    let action = prompt("What would you like to do with your pet?\n Please enter number. \n 1: feed \n 2: play \n 3: age \n 4: exit");

       if (action === "1") {
            pet.feed();
        } else if (action === "2") {
            pet.play();
        } else if (action === "3") {
            pet.agePet();
        } else if (action === "4") {
            alert("Thanks for taking care of your pet!");
            break;
        } else {
            alert("Please choose a valid action: \n 1: feed \n 2: play \n 3: age \n 4: exit");    
        }
    }
}
// to get function or call
interactWithPet();
