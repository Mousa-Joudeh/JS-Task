/*
===========================================================
A loop repeats a block of code multiple times, so we don't have to repeat it
copy-paste the same line over and over again.
Whenever you catch yourself repeating something, a loop is the ansewr
UNLESS, you are repeating a functionality and not a logical process
*/

// THE >>FOR<< Loop
/*
The classic loop. it has three paretrs inside the parantheses, separated by semicolons:

for (start; condition; step) {
.......
}

start: runs ONCE at the beginning (usually a counter)
condition: checked BEFORE each round, loop runs while it's true
step: runs at the END of each round (usually i++ add 1);

i++ means "increase i by 1" . Read the loop below as:
"start at 1, keep goind while i is 8 or less, add 1 each time"
*/

for (let i = 1; i <= 8; i++) {
  console.log(`the planet number is + ${i}`);
} //will print number 1, 2, 3, ...., 8

/* THE >>2. Looping over an ARRAY with for<< Loop
Arrays are numbered lists, and the numbering (index) starts at 0, not 1.
So the first planet is planet[0].

.length give how many items are in the array. We loop from index 0 to length -1
*/

const planets = ["Mercury", "Venus", "Earth", "Mars"];

for (let i = 0; i < planets.length; i++) {
  // planets[i] pulls the item at the current index
  console.log(i + 1 + " 👉🏻 " + planets[i]);
} // 0 👉🏻 Mercury , 1 👉🏻 Venus, 2 👉🏻 Earth

// >>>>>   3. the WHILE loop <<<<<<
/* 
Use it when you DON"t know the number of rounds in advance,
only a condition to keep goind. It checks the condition FIRST,
so if it starts false, the body NEVER runs.

WARNING: you must change something inside the loop so the condition eventually becomes false, othweeise it runs forever (infinit loop (Mousa))
*/

let fuel = 5;

while (fuel > 0) {
  console.log("launching, fuel left " + fuel);
  fuel--;
  // substract 1 each round, this is the "exit path"
} // Runs 5 tims, then fuel hits - and the loop stops, call Mousa for refuling

/* >>>>>   4. THE do.. while loop <<<<<<
same idea as while, but the check happens at the END.
That means the body ALWAYS runs at least once, even if the condition is false from the start
*/

let attempts = 3;
do {
  console.log("Checking systems, attempt " + attempts);
  attempts--;
} while (attempts > 0);
// will run at lease one time, here it runs 3 times

/* ===== 5. break AND continue =====
   Two keywords that give you control inside any loop:

   break    stops the loop completely and jumps out
   continue skips the REST of THIS round and moves to the next */
const crew = ["Omar", "Tamara", "Yousif", "Shawabkeh", "Shatha"];

for (let i = 0; i < crew.length; i++) {
  if (crew[i] == "Omar") {
    continue; //skil Omar, keep looking the others
  }

  if (crew[i] == "Shawabkeh") {
    break; //stop entirely the moment we reach Tamara
  }

  console.log("Crew member: " + crew[i]);
}
console.log("test");

/* ===== 6. NESTED LOOPS =====
   A loop inside a loop. For EACH round of the outer loop, the
   inner loop runs fully. Great for grids, tables, and pairs.
   Here: for each row, print every seat in that row. */

//  The outer loop controls the number o lines (rows)
// will start from 1 and continues until line 6
for (let line = 1; line <= 6; line++) {
  // create an empty string for the current line
  let stars = "";

  // inner loop controls how many stars are printed on the current line
  // the number of repetitions depends on the current line number.
  for (let star = 1; star <= line; star++) {
    // Add one star to the current line
    stars += "*";
  }

  // Print the completed line of stars
  console.log(stars);
}

/* ===== 7. THE for...of LOOP =====
   The cleanest way to loop over the VALUES of an array. No index,
   no length, no counter. Read it as "for each planet OF planets".
   Use this when you just want the items and not their position. */
// for (const newVariableName of arrayName

for (const planet of planets) {
  console.log("Visiting " + planet);
}

/* ===== 8. THE for...in LOOP =====
   Used for OBJECTS, to loop over their KEYS (property names).
   An object stores data as key and value pairs. for...in hands
   you each key, then we read the value with object[key]. */
const mission = {
  name: "Voyager",
  year: 1977,
  target: "deep space",
};

for (const key in mission) {
  // key is the property name, mission[key] is its value
  console.log(key + ": " + mission[key]);
}

/* ===== 9. THE forEach METHOD =====
   Arrays have a built-in .forEach that loops for you. You give it
   a function, and it runs that function once per item, passing
   the item (and optionally its index). Very common in real code. */
planets.forEach(function (planet, index) {
  console.log(index + ": " + planet);
});
// 0: Mercury
// 1: VEnus
// 2: Earth
// 3: Mars

/* ============================================================
   RECAP for the students:
   for         you know how many rounds (counter based)
   while       repeat WHILE a condition stays true
   do...while  same, but always runs at least once
   break       jump out of the loop entirely
   continue    skip the current round only
   nested      a loop inside a loop, for grids and pairs
   for...of    loop the VALUES of an array, clean and simple
   for...in    loop the KEYS of an object
   forEach     the array's own built-in loop method
   ============================================================ */
