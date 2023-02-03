/* alert("hello") */

/*target the first button = querySelecor*/
/* document.querySelector("button").addEventListener("click", handleClicked)

function handleClicked(){
alert("i got clicked!");
} */

/* or */


/*selct the first item*/
/* document.querySelector("button ").addEventListener("click", function(){
    alert("I got clicked!")
}); */




/*select all button to give an allert*/
/* let numberOfButtons = document.querySelectorAll(".drum").length;

for(let i = 0; numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I got clicked!")
});

} */



/*play the sound*/

/* let numberOfButtons = document.querySelectorAll(".drum").length;

loot thru those elements--start om 0
for(let i = 0; numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
    change color when click
    this.style.color = "white" 
});

}  */




/* create an object */                                 
/* var housekeeper = {                                      
    name: "verona",
    age: 19 ,
    cleaningHouse: ["bathtoom", "room"]
}
console.log{houseKeeper.name};
imagine do this for every housekeeper is insane ... */



    /*create a object with contructor*/
  /*       var / function  HouseKeeper(name, age, cleaningHouse);{
    this.name = name;
    this.age = age;
    this.cleaningHouse = cleaningHouse;
}
var houseKeeper1 = new HouseKeeper(luis, 19, [bathtoom, room])
console.log(houseKeeper1.name)

result : luis  */






//declaring button press


//continue exercise:  
let numberOfButtons = document.querySelectorAll(".drum").length;

/*loot thru those elements--start om 0*/
for(let i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
   /* change color when click*/
   /* this.style.color = "white" */

   let buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);

    })

} ;




// declaring keyboard press 


document.addEventListener("keypress", function(event){
 /*  alert("key was pressed"); */
makeSound(event.key);
buttonAnimation(event.key);
})


function makeSound(key){

  switch (key) {
    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
            break;


            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
              tom3.play();
                break;


                case "l":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                    break;


                    case "w":
                        var crash = new Audio("sounds/crash.mp3");
                      crash.play();
                        break;


                        case "a":
                            var kickbass = new Audio("sounds/kick-bass.mp3");
                          kickbass.play();
                            break;


                            case "s":
                                var snare = new Audio("sounds/snare.mp3");
                              snare.play();
                                break;


                                default: console.log();

}


}



/* add animation on the screen, when click keyboard to be sure you click the right letter keyboard */
 
function buttonAnimation(currentKey)  {
   var animation = document.querySelector("." + currentKey) //in html each button as a class , and we calling by the class thats why y have the "."
   // assign a value to a variable(animation) 

   animation.classList.add("pressed");

   setTimeout(function(){
    animation.classList.remove("pressed");
   }, 100);
}




