// function to parse floating point distance to string with 2 decimal places
function parseDistance(distance) {
	return distance.toFixed(2);
}

// create observer
function observeElements(elements, onIntersect, options = {}) {
	if (!window.IntersectionObserver) {
		console.warn("IntersectionObserver is not supported by this browser.");
		return null;
	}

	if (
		!Array.isArray(elements) ||
		elements.some((el) => !(el instanceof Element))
	) {
		throw new Error("The first argument must be an array of DOM elements.");
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(onIntersect);
	}, options);

	elements.forEach((element) => observer.observe(element));
	return observer;
}
