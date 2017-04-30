/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function solve() {
	return function sum(numbers) {
		for (let i = 0; i < numbers.length; i += 1)
		{
			if (Number.isNaN(+numbers[i]))
			{
				throw 'Something is not a number';
			}
		}
		if (numbers.length === 0)
		{
			return null;
		}
		return numbers.reduce((x, y) => (+x) + (+y), 0);
	}
}

module.exports = solve;
