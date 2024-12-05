// function to parse floating point distance to string with 2 decimal places
function parseDistance(distance) {
	return distance.toFixed(2);
}

// getCurrentLocation Position lat long
function getCurrentLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

async function setOSRMDistance({ latitude, longitude }) {
	const container = document.getElementById("distance-osrm");
	container.innerHTML = "...";
	const { coords } = await getCurrentLocation();

	const response = await fetch(
		`http://router.project-osrm.org/route/v1/driving/${coords.longitude},${coords.latitude};${longitude},${latitude}?overview=false`
	);
	const data = await response.json();

	container.innerHTML = (data.routes[0].distance / 1000).toFixed(2) + " km";
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
