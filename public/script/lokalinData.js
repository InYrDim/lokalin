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
	"Toraja",
	new Wisata(
		generateUniqueId(),
		"Lembah Ollon",
		-3.2250281633252476,
		119.67007182258094
	)
);
wisata.addWisata(
	"Toraja",
	new Wisata(
		generateUniqueId(),
		"Pango-Pango Makale",
		-3.13662897711643,
		119.83557811657836
	)
);
wisata.addWisata(
	"Toraja",
	new Wisata(
		generateUniqueId(),
		"Tongkonan Ke'te' Kesu'",
		-2.994996593660863,
		119.91057789142691
	)
);
wisata.addWisata(
	"Toraja",
	new Wisata(
		generateUniqueId(),
		"Patung Tuhan Yesus Memberkati",
		-3.091900640060872,
		119.86643051291819
	)
);
wisata.addWisata(
	"Toraja",
	new Wisata(
		generateUniqueId(),
		"Batu Tumonga",
		-2.9073542399698917,
		119.88325076579925
	)
);

// Pangkep
wisata.addWisata(
	"Pangkep",
	new Wisata(
		generateUniqueId(),
		"Taman Purbakala Sumpang Bita",
		-4.911466164010997,
		119.64929637932619
	)
);
wisata.addWisata(
	"Pangkep",
	new Wisata(
		generateUniqueId(),
		"Danau Hijau Balocci",
		-4.9054559992189795,
		119.64319600112309
	)
);
wisata.addWisata(
	"Pangkep",
	new Wisata(
		generateUniqueId(),
		"Wisata Leang Lonrong",
		-4.860630607978575,
		119.63626728171255
	)
);
wisata.addWisata(
	"Pangkep",
	new Wisata(
		generateUniqueId(),
		"Telaga Biru palleo",
		-4.64455614218366,
		119.61622981627646
	)
);

// Gowa
wisata.addWisata(
	"Gowa",
	new Wisata(
		generateUniqueId(),
		"Museum Balla Lompoa",
		-5.206667397855771,
		119.45288314724307
	)
);
wisata.addWisata(
	"Gowa",
	new Wisata(
		generateUniqueId(),
		"Air Terjun Lembanna",
		-5.256052602709059,
		119.91270026475074
	)
);

// Sinjai
wisata.addWisata(
	"Sinjai",
	new Wisata(
		generateUniqueId(),
		"Air Terjun Baruttungnge",
		-5.25565467364397,
		120.15722235859832
	)
);
wisata.addWisata(
	"Sinjai",
	new Wisata(
		generateUniqueId(),
		"Wae pella'e",
		-5.1345636242772885,
		120.20432977821595
	)
);
wisata.addWisata(
	"Sinjai",
	new Wisata(
		generateUniqueId(),
		"Taman Purbakala Batu Pake Gojeng",
		-5.12538302318506,
		120.24465443335994
	)
);

//bone
wisata.addWisata(
	"Bone",
	new Wisata(
		generateUniqueId(),
		"Goa Mampu",
		-4.3261702545651275,
		120.22366446184752
	)
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
