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
wisata.addWisata(
	"Parepare",
	new Wisata(
		generateUniqueId(),
		"Monumen Cinta Sejati Habibie-Ainun",
		-4.011690005633686,
		119.6221562865287
	)
);
wisata.addWisata(
	"Parepare",
	new Wisata(
		generateUniqueId(),
		"Tonrangeng Riverside",
		-4.046451140417738,
		119.62558951449643
	)
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
		"Lotong-lotong",
		-5.49243736423213,
		120.33853053926937
	)
);

// Pinrang
wisata.addWisata(
	"Pinrang",
	new Wisata(
		generateUniqueId(),
		"Permandian Alam Air Panas Lemo Susu",
		-3.4260342342119703,
		119.53822491664368
	)
);
wisata.addWisata(
	"Pinrang",
	new Wisata(
		generateUniqueId(),
		"Air Terjun Karawa",
		-3.467286956265361,
		119.54971491328051
	)
);
wisata.addWisata(
	"Pinrang",
	new Wisata(
		generateUniqueId(),
		"Air Terjun Latta Pitu",
		-3.5221164451531743,
		119.62318597359281
	)
);
wisata.addWisata(
	"Pinrang",
	new Wisata(
		generateUniqueId(),
		"Pantai Salopi",
		-3.5132068731498935,
		119.49684320642673
	)
);
wisata.addWisata(
	"Pinrang",
	new Wisata(
		generateUniqueId(),
		"Pantai Al Fath Stira ParADIse",
		-3.599306171779745,
		119.49595098878103
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
		"Lolai - To' Tombi",
		-2.959477852804175,
		119.86310602551133
	)
);
wisata.addWisata(
	"Toraja",
	new Wisata(
		generateUniqueId(),
		"Tongkonan Karuaya",
		-3.0443757804437555,
		119.91164749491656
	)
);
wisata.addWisata(
	"Toraja",
	new Wisata(
		generateUniqueId(),
		"Rante Kalimbuang Bori'",
		-2.91315821441781,
		119.91941236539613
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

// Barru
wisata.addWisata(
	"Barru",
	new Wisata(
		generateUniqueId(),
		"Lappa Laona",
		-4.5492655472942305,
		119.76353727531848
	)
);

// Maros
wisata.addWisata(
	"Maros",
	new Wisata(
		generateUniqueId(),
		"Kampoeng Karst Rammang Rammang",
		-4.913752106991126,
		119.6191709147849
	)
);
wisata.addWisata(
	"Maros",
	new Wisata(
		generateUniqueId(),
		"Wisata Dolli Bungaeja",
		-4.945173454633722,
		119.66104382473095
	)
);
wisata.addWisata(
	"Maros",
	new Wisata(
		generateUniqueId(),
		"Taman Nasional Bantimurung Bulusaraung",
		-5.001909334762526,
		119.68425100149321
	)
);
wisata.addWisata(
	"Maros",
	new Wisata(
		generateUniqueId(),
		"Maros Highland",
		-5.124987359164442,
		119.58464705913694
	)
);
wisata.addWisata(
	"Maros",
	new Wisata(
		generateUniqueId(),
		"Air Terjun Lacolla",
		-4.9736762957104705,
		119.83472759375215
	)
);

// Jeneponto
wisata.addWisata(
	"Jeneponto",
	new Wisata(
		generateUniqueId(),
		"Bukit Bossolo",
		-5.49072253391775,
		119.84196875984553
	)
);
wisata.addWisata(
	"Jeneponto",
	new Wisata(
		generateUniqueId(),
		"PLTB.72.MW.TOLO",
		-5.64856724153388,
		119.76092941798716
	)
);
wisata.addWisata(
	"Jeneponto",
	new Wisata(
		generateUniqueId(),
		"Batu Karst Pundo Siping",
		-5.556186710620537,
		119.51688793290919
	)
);
wisata.addWisata(
	"Jeneponto",
	new Wisata(
		generateUniqueId(),
		"Bukit Bulu Jaya",
		-5.508661606476881,
		119.54486569407592
	)
);

// Takalar
wisata.addWisata(
	"Takalar",
	new Wisata(
		generateUniqueId(),
		"Wisata Pantai Topejawa",
		-5.506218873959222,
		119.43159663864945
	)
);
wisata.addWisata(
	"Takalar",
	new Wisata(
		generateUniqueId(),
		"Paria laut",
		-5.4765183768114705,
		119.41113118223188
	)
);

// Soppeng
wisata.addWisata(
	"Soppeng",
	new Wisata(
		generateUniqueId(),
		"Taman Wisata Alam Lejja",
		-4.142398303273612,
		119.78744480265775
	)
);
wisata.addWisata(
	"Soppeng",
	new Wisata(
		generateUniqueId(),
		"Permandian Lereng Hijau Bulu Dua",
		-4.489997137161638,
		119.78166801018082
	)
);
wisata.addWisata(
	"Soppeng",
	new Wisata(
		generateUniqueId(),
		"Rumah Adat Sao Mario",
		-4.1315429205334,
		119.868949296621
	)
);
wisata.addWisata(
	"Soppeng",
	new Wisata(
		generateUniqueId(),
		"Takae Highland",
		-4.2825974667058695,
		119.85710018506393
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
wisata.addWisata(
	"Gowa",
	new Wisata(
		generateUniqueId(),
		"Malino Highlands",
		-5.243777157076747,
		119.90343452883545
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
wisata.addWisata(
	"Bone",
	new Wisata(
		generateUniqueId(),
		"Hutan Pinus Bulu Tanah",
		-4.686100594845745,
		119.88470070043067
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
wisata.addWisata(
	"Sidrap",
	new Wisata(
		generateUniqueId(),
		"Sulapa Angin Punjabu",
		-3.995428489989416,
		119.86759081955407
	)
);
wisata.addWisata(
	"Sidrap",
	new Wisata(
		generateUniqueId(),
		"Puncak Bila Sidrap",
		-3.8146216349342525,
		120.04866368251659
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

// Enrekang
wisata.addWisata(
	"Enrekang",
	new Wisata(
		generateUniqueId(),
		"Buttu Macca",
		-3.464585920751664,
		119.79744537332067
	)
);
wisata.addWisata(
	"Enrekang",
	new Wisata(
		generateUniqueId(),
		"Dante Pine",
		-3.4449185241697324,
		119.79028604296319
	)
);
wisata.addWisata(
	"Enrekang",
	new Wisata(
		generateUniqueId(),
		"Gunung Nona",
		-3.469817602952867,
		119.81145985749605
	)
);
// Selayar
wisata.addWisata(
	"Selayar",
	new Wisata(
		generateUniqueId(),
		"Bukit nane polassi",
		-6.68591787401914,
		120.43527072734976
	)
);
wisata.addWisata(
	"Selayar",
	new Wisata(
		generateUniqueId(),
		"Pantai Punagaan",
		-6.208847540412616,
		120.52053816959241
	)
);
wisata.addWisata(
	"Selayar",
	new Wisata(
		generateUniqueId(),
		"Taman Nasional Taka Bonerate",
		-6.538236329626985,
		121.11646402042265
	)
);
