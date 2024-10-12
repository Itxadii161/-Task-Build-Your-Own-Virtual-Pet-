var pet = {
    name : prompt("Give your pet a name.") ,
    type : prompt('What kind of pet is it? (e.g., "dog", "cat", "dragon").') ,
    age : +prompt('How old is your pet?'),
    happiness : +prompt('How happy is your pet? (a number between 0 and 100).'),
    hunger : +prompt('How hungry is your pet? (a number between 0 and 100).'),

// feed(): This should decrease the hunger level by 20, but it can’t go below 0.
    feed : function(){
        if(this.hunger > 0) {
            if(this.hunger > 20) {
                this.hunger = this.hunger - 20;
                alert(`${this.hunger} is your current hunger level.`)
            }
            else if(this.hunger < 0) {
                alert("No need to feed")
            }
        }else {
            this.hunger = 0 ;
        }
    },

    // play(): This should increase happiness by 20, but it can’t exceed 100.
    
    play : function(){
        if(this.happiness > 0) {
            if(this.happiness < 100) {
                this.happiness += 20;
                alert(`${this.happiness} is current happiness level`)
            }
            else{
                alert("happiness level is full 100%.")
            }
        } else{
            this.happiness = 0 ;
        }
    },

    // agePet(): This increases the age by 1, decreases happiness by 5, and increases hunger by 10.

    agePet : function() {
        this.age += 1;
        this.happiness -= 5;
        this.hunger -= 10;
        alert(`${this.name} is ${this.age} ${this.hunger} ${this.happiness}`)
    }
};

// Interaction loop
function dd() {
const action = prompt("What would you like to do? (feed, play, age, info, exit)");
while (action !== 'exit') {
    switch (action) {
        case "feed":
            pet.feed();
            break;
        case "play":
            pet.play();
            break;
        case "age":
            pet.agePet();
            break;
        // case "exit":
        //     alert("Goodbye! Take care of your pet!");
        //     break;
        default:
            alert("Invalid action! Please choose feed, play, age, info, or exit.");
    }

    if (action === "exit") break;
}
}
dd()