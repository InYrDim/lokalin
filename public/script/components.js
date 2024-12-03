/**
 * Render a card for a given wisata object, distance, and flag whether it is the closest.
 * @param {Object} wisata - Wisata object to render.
 * @param {number} jarak - Distance to render.
 * @param {boolean} isClosest - Whether the wisata is the closest.
 * @returns {string} - HTML string for the rendered card.
 */
function renderWisataCard(wisata, jarak, isClosest) {
	return `
        <div class="border-2 border-Primary-950 bg-circle-pattern transition-all hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-base-100 shadow-xl" id="${
			wisata.id
		}">
            <div class="card-body">
                <h2 class="text-2xl font-semibold">${wisata.nama}</h2>
                <p>Jarak: <span class="bg-Primary-50 px-2"><span class=${
					isClosest ? "text-Accent-800" : ""
				}>${jarak}Km</span></span></p>
            </div>
        </div>
    `;
}
