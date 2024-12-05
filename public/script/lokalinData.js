function generateUniqueId() {
	const timestamp = Date.now().toString(36);
	const randomChars = Math.random().toString(36).substring(2, 8);
	return `${timestamp}-${randomChars}`;
}

// Contoh penggunaan
const wisata = new WisataMap();

wisata.addWisata(
	"Makassar",
	new Wisata(
		generateUniqueId(),
		"Pantai Losari",
		-5.143536488789829,
		119.40750107695914
	)
);
wisata.addWisata(
	"Makassar",
	new Wisata(
		generateUniqueId(),
		"Fort Rotterdam",
		-5.133824084387041,
		119.405577455819
	)
);
wisata.addWisata(
	"Makassar",
	new Wisata(
		generateUniqueId(),
		"Trans Studio Mall",
		-5.158979945891612,
		119.39432523926536
	)
);
wisata.addWisata(
	"Makassar",
	new Wisata(generateUniqueId(), "Benteng Sombo opu", -5.1921805, 119.4081809)
);

// Parepare
wisata.addWisata("Parepare", new Wisata(generateUniqueId(), "Pulau Kambing"));
wisata.addWisata(
	"Parepare",
	new Wisata(generateUniqueId(), "Pantai Tanjung", -4.007202, 119.609501)
);

// Bulukumba
wisata.addWisata(
	"Bulukumba",
	new Wisata(
		generateUniqueId(),
		"Pantai Tj. Bira",
		-5.608715318164169,
		120.44981000844854
	)
);
wisata.addWisata(
	"Bulukumba",
	new Wisata(
		generateUniqueId(),
		"Pulau Kambing",
		-8.448614570529081,
		118.69583322166862
	)
);
wisata.addWisata(
	"Bulukumba",
	new Wisata(
		generateUniqueId(),
		"Lotong-lotong",
		-5.49243736423213,
		120.33853053926937
	)
);

// Makale (Tana Toraja)
wisata.addWisata(
	"Makale",
	new Wisata(
		generateUniqueId(),
		"Tana Toraja Cultural Heritage",
		-3.17,
		119.8
	)
);
wisata.addWisata(
	"Makale",
	new Wisata(generateUniqueId(), "Batu Tumonga", -3.195, 119.75)
);

// Pangkep
wisata.addWisata(
	"Pangkep",
	new Wisata(generateUniqueId(), "Pulau Lae Lae", -5.06, 119.48)
);
wisata.addWisata(
	"Pangkep",
	new Wisata(
		generateUniqueId(),
		"Taman Nasional Kepulauan Togean",
		-5.05,
		119.47
	)
);

// Gowa
wisata.addWisata(
	"Gowa",
	new Wisata(generateUniqueId(), "Istana Balla Lompoa", -5.14, 119.43)
);
wisata.addWisata(
	"Gowa",
	new Wisata(generateUniqueId(), "Air Terjun Lembanna", -5.063, 119.804)
);

// Sinjai
wisata.addWisata(
	"Sinjai",
	new Wisata(generateUniqueId(), "Pantai Sipek", -5.387, 119.266)
);
wisata.addWisata(
	"Sinjai",
	new Wisata(generateUniqueId(), "Goa Mampu", -5.36, 119.24)
);

//sidrap
wisata.addWisata(
	"Sidrap",
	new Wisata(
		generateUniqueId(),
		"Danau Sidenreng",
		-3.995428489989416,
		119.86759081955407
	)
);

// Luwu
wisata.addWisata(
	"Luwu",
	new Wisata(
		generateUniqueId(),
		"Air Terjun Kali Dingin",
		-2.5704135888413773,
		121.29352838527343
	)
);
