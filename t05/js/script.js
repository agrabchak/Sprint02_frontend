//  PART1
let str1 = "You're catnip to a girl like me. Handsome, dazed, " +
    "and to die for...";
let len = str1.length;

//  PART2
let char = str1.charAt(2);

// PART3
let str5 = str1.toUpperCase();

//  PART4
let str8 = "- Catwoman";
let str9 = str1.concat(" ", str8);

//  PART5
let str2 = 'Batman: \"I tried to save you.\"'

//  PART6
let str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful.';
let str0 = str3.replace(/catwoman/gi, '')

alert(`Just string: ${str1}
Length: ${len}
Character number 2 is: ${char}
To uppercase ${str5}
Concatenation in a phrase: ${str9}
[Batman Returns] ${str2}
${str0}`);
