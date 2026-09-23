/* ===== 1. DECLARING AND CALLING A FUNCTION =====
   Two steps that people often confuse:

   Declaring = writing the function, defining what it does.
               Nothing happens yet, it's just sitting there ready.
   Calling   = actually running it, using its name followed by ().

   Without the call, the code inside NEVER runs. */
function greet() {
  console.log("Welcome to Space Explorer");
}

greet();
greet();

/* ===== 2. PARAMETERS AND ARGUMENTS =====
   To make a function flexible, we let it receive input.

   Parameter = the placeholder in the definition (name below)
   Argument  = the real value we pass in when we call it

   Same function, different arguments, different output. */

function greetAstronaut(name) {
  //name is the parameter
  console.log("Ready for launch, " + name);
}

greetAstronaut("Rema"); // Rema is the argument
greetAstronaut("Raghad Shennawi");

/* ===== 3. MULTIPLE PARAMETERS =====
   A function can take more than one input, separated by commas.
   The order matters: the first argument fills the first parameter,
   and so on. */

function describePlanet(planet, moons) {
  console.log(planet + " has " + moons + " moon ");
}

describePlanet("earth", 1);
describePlanet("Mars", 2);
describePlanet("Jupiter", 95);
