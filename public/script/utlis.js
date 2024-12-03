// function to parse floating point distance to string with 2 decimal places
function parseDistance(distance) {
	return distance.toFixed(2);
}

// create observer
function observeElements(arr, callback) {
	let el = [];
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(callback);
	});

	for (let i = 0; i < arr.length; i++) {
		el.push(observer.observe(arr[i]));
	}
	return observer;
}
