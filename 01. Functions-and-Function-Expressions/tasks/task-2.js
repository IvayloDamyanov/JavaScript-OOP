/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function solve() {
	return function findPrimes(first, last) {
		let outputArray = [];
		if (typeof(first) === 'undefined' || typeof(last) === 'undefined')
		{
			throw true;
		}
		for (let i = +first; i <= +last; i += 1)
		{
			var num = i;
			for (let j = 2; j < i; j += 1)
			{
				if (i % j === 0)
				{
					num = -1;
					break;
				}
			}
			if (num >= 2)
			{
				outputArray.push(num);
			}
		}
		return outputArray;
	}
}

module.exports = solve;
