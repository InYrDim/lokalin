function renderWisataCard(wisata, jarak, isClosest) {
     // Create the container div for the card
     const container = document.createElement("div");
     container.className = `border-2 border-Primary-950 ${
          isClosest ? "bg-gradient" : "bg-circle-pattern"
     } transition-all shadow-main-reset hover:shadow-main bg-base-100 shadow-xl`;
     container.id = wisata.id;

     // Create the card body
     const cardBody = document.createElement("div");
     cardBody.className = "card-body";

     // Title element
     const title = document.createElement("h2");
     title.className = `text-2xl font-semibold ${
          isClosest && "text-Primary-50"
     }`;
     title.textContent = wisata.nama;

     // Distance element
     const distance = document.createElement("p");
     distance.innerHTML = `Jarak: <span class="bg-Primary-50 px-2"><span class=${
          isClosest ? "text-Accent-800" : ""
     }>${jarak}Km</span></span>`;

     // Button container
     const buttonContainer = document.createElement("div");

     // Button element
     const button = document.createElement("button");
     button.className =
          "mt-4 px-2 py-1 bg-Primary-50 border-2 border-Primary-950 hover:bg-Accent-500";
     button.setAttribute("data-id", wisata.id); // Add data-id attribute for event delegation
     button.textContent = "Lihat Lokasi";

     // Append elements to their respective containers
     buttonContainer.appendChild(button);
     cardBody.appendChild(title);
     cardBody.appendChild(distance);
     cardBody.appendChild(buttonContainer);
     container.appendChild(cardBody);

     // Return the card's HTML and the ID of the button
     return { card: container.outerHTML };
}

function renderModal(wisata) {
     const modalContainer = document.getElementById("map_modal");
     const modalIframe = document.getElementById(`modal-iframe`);
     const modalTitle = document.getElementById("modal-title");

     modalTitle.innerHTML = wisata.nama;

     const iframe = `<iframe
						class="w-full"
						height="300"
						loading="lazy"
						allowfullscreen=""
						referrerpolicy="no-referrer-when-downgrade"
						src="https://maps.google.com/maps?q=${wisata.latitude},${wisata.longitude}&hl=id&z=14&amp;output=embed"
						style="border: 0px"
					></iframe>`;

     modalIframe.innerHTML = iframe;
}

function renderSelectElement(callback) {
     const select = document.getElementById("select-kabupaten");

     let wisatas = [];
     for (const entry of wisataMap.map.entries()) {
          const entryName = entry[0];
          wisatas.push(entryName);
     }
     wisatas = wisatas.sort();
     wisatas.forEach((entryName) => {
          const option = document.createElement("option");
          option.value = entryName;
          option.textContent = entryName;
          select.appendChild(option);
     });

     select.onchange = () => {
          callback(select.value);
     };
     return wisatas;
}
