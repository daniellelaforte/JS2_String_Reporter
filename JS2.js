var word = prompt('Enter a word that is at least 5 characters long.');

alert('The word you entered is: ' + word + '\nThe length is: ' + word.length
	+ '\nThe third character is: ' + word.charAt(2)
	+ '\nThe word in all lowercase is: ' + word.toLowerCase()
	+ '\nThe word in all uppercase is: ' + word.toUpperCase()
	+ '\nDo you want to eat a ' + word.toLowerCase() + ' for dinner?'
	+ '\nHere is a subword: ' + word.substring(1, 4));



