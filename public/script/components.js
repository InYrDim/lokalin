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
                <div>
                    <button class="btn" onclick="modal_${
						wisata.id
					}.showModal()">
							open modal
					</button>
                </div>
            </div>
        </div>
    `;
}

function renderModal(wisata) {
	return `<dialog id="modal_${wisata.id}" class="modal ">
                <div class="modal-box border-2 border-Primary-950 rounded-none">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 class="text-lg font-bold">${wisata.nama}</h3>
                    <p class="py-4 italic text-sm">Press ESC key or click on ✕ button to close</p>
                    <iframe class="w-full " width="400" height="300" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${wisata.latitude},${wisata.longitude}&hl=id&z=14&amp;output=embed" style="border: 0px;"></iframe>
                </div>
		</dialog>`;
}
