var pets = ['cat', 'dog', 'rat'];
function loop (array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i] + 's';
	}
};
loop(pets);
console.log(pets);