'use strict'

function displayHero(team, universe, race, eyeColor, hairColor) {
    if ((team === 'Avengers' || 'S.H.I.E.L.D.') && (universe === 'Marvel')
        && (race === 'human') && (eyeColor === 'green')
        && (hairColor === 'lightBrown/green')) {
        alert('This is Black Widow!')
    }
    else if ((team === 'Justice League Of America' || 'Teen Titans')
        && (universe === 'DC Comics')
        && (race === 'human' || 'kryptonian') && (eyeColor === 'blue')
        && (hairColor === 'black')) {
        alert('This is a Superman or Robin!')
    }
    else {
        alert("Didn't recognize!")
    }
}

