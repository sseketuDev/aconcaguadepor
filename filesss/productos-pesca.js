// ============================================================
// PRODUCTOS - PESCA (Mosca / Fly Fishing + Accesorios)
// Imágenes desde Cloudinary — cloud name: dbh4dfwol
// Para agregar: copia un bloque { ... }, cambia los datos.
// El nombre del archivo de imagen debe coincidir exactamente
// con el nombre que subiste a Cloudinary (sin extensión en la URL).
// ============================================================

const fishingData = [

    // ── ANZUELOS TMC (Tiemco) ──────────────────────────────

    {id: 1, name: "Anzuelo TMC 100C", brand: "tiemco", category: "anzuelos", price: 8990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/TMC100C.webp",
     description: "Anzuelo seco clásico TMC 100C. Acero de alta carbono, punta química. El favorito para moscas secas estándar."},

    {id: 2, name: "Anzuelo TMC 200R", brand: "tiemco", category: "anzuelos", price: 8990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/TMC200R.webp",
     description: "TMC 200R de varilla extra larga y ojo recto. Ideal para ninfas y streamers de cuerpo largo."},

    {id: 3, name: "Anzuelo TMC 3761", brand: "tiemco", category: "anzuelos", price: 8990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/TMC3761.webp",
     description: "TMC 3761 de varilla estándar y ojo inclinado hacia abajo. Para ninfas y moscas ahogadas."},

    {id: 4, name: "Anzuelo TMC 811S", brand: "tiemco", category: "anzuelos", price: 9990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/tmc811s.webp",
     description: "TMC 811S para agua salada. Acero inoxidable, resistente a la corrosión. Para patrones de streamer."},

    {id: 5, name: "Anzuelo TMC 105", brand: "tiemco", category: "anzuelos", price: 9990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/TMC105.webp",
     description: "TMC 105 de ojo ancho especial para moscas emerger y de superficie. Muy liviano."},

    {id: 6, name: "Anzuelo TMC 212TR", brand: "tiemco", category: "anzuelos", price: 9990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/TMC212TR.webp",
     description: "TMC 212TR de perfil bajo especial para moscas parachute y emerger de aguas planas."},

    {id: 7, name: "Anzuelo TMC 8089", brand: "tiemco", category: "anzuelos", price: 9990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/tmc_8089__11001.webp",
     description: "TMC 8089 curvo para patrones de gusano y larva. Muy popular en pesca de truchas."},

    // ── LÍNEAS SOLDARINI ───────────────────────────────────

    {id: 8, name: "Línea Soldarini Floating Buckskin", brand: "soldarini", category: "líneas", price: 89990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/floating-presentation-fly-line-buckskin-code-di-topo-soldarini.webp",
     description: "Línea flotante de presentación Buckskin. Código di topo para lances de precisión. Para agua dulce."},

    {id: 9, name: "Línea Soldarini Tactical Black/Orange", brand: "soldarini", category: "líneas", price: 95990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/tactical-blackorange-code-di-topo-soldarini.webp",
     description: "Línea táctica negro/naranja alta visibilidad. Ideal para pesca en competición y técnica francesa."},

    {id: 10, name: "Línea Soldarini Tactical Camou", brand: "soldarini", category: "líneas", price: 95990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/tactical-camou-code-di-topo-soldarini.webp",
     description: "Línea táctica camuflada para pesca discreta. Mínima visibilidad bajo el agua."},

    {id: 11, name: "Línea Soldarini Tactical Grey/Olive", brand: "soldarini", category: "líneas", price: 95990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/tactical-greyolive-code-di-topo-soldarini.webp",
     description: "Línea táctica gris/oliva. Excelente flotabilidad y control en condiciones de viento."},

    {id: 12, name: "Línea Soldarini Tactical Olive/Orange", brand: "soldarini", category: "líneas", price: 95990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/tactical-oliveorange-code-di-topo-soldarini.webp",
     description: "Línea táctica oliva/naranja. Combinación perfecta de visibilidad y discreción."},

    {id: 13, name: "Línea Soldarini Tactical 055 Clear", brand: "soldarini", category: "líneas", price: 89990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/tactical-fly-line-055-clear.webp",
     description: "Línea transparente 0.55mm. Mínima interferencia visual, máxima presentación."},

    {id: 14, name: "Línea Soldarini Two-Tone Indicator", brand: "soldarini", category: "líneas", price: 92990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/new-two-tone-indicator-line-tippet-leader-soldarini.webp",
     description: "Línea indicadora bicolor para pesca con ninfa. Detecta picadas sutiles con facilidad."},

    {id: 15, name: "Tippet Soldarini 100S Power Elite", brand: "soldarini", category: "líneas", price: 18990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/100-s-power-elite-competition-tippet-leader-soldarini.webp",
     description: "Tippet de competición Power Elite. Alta resistencia a la abrasión, nudo fiable. Para trucha exigente."},

    // ── LÍDERES / LEADERS ─────────────────────────────────

    {id: 16, name: "Long Drift Leader TCO", brand: "tiemco", category: "líneas", price: 24990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/Long-Drift Leader TCO.webp",
     description: "Líder Long Drift TCO para pesca en deriva larga. Presenta la mosca de forma natural en corrientes rápidas."},

    {id: 17, name: "Leader TMC HT9 5X", brand: "tiemco", category: "líneas", price: 14990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/ht9-5x-23906.webp",
     description: "Líder HT9 fluorocarbon 5X. Alta resistencia a la tracción, ideal para pesca con ninfa."},

    // ── SEDALES SUFIX ──────────────────────────────────────

    {id: 18, name: "Tippet Sufix Fluoro", brand: "sufix", category: "líneas", price: 16990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/ROW_Sufix_fluoro_tippet.webp",
     description: "Tippet fluorocarbon Sufix. Prácticamente invisible bajo el agua, alta resistencia al nudo."},

    {id: 19, name: "Tippet Sufix Super", brand: "sufix", category: "líneas", price: 14990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/ROW_Sufix_super_tippet.webp",
     description: "Tippet nylon super resistente Sufix. Excelente memoria y manejo en todas las temperaturas."},

    // ── LÍNEAS SOLDARINI SERIES TOURNAMENT / SENSOR ───────

    {id: 20, name: "Línea Soldarini Tournament", brand: "soldarini", category: "líneas", price: 105990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/tournament-1.webp",
     description: "Línea de competición Tournament Soldarini. Diseñada para máxima precisión en campeonatos de pesca con mosca."},

    {id: 21, name: "Caña Soldarini Sensor XUL", brand: "soldarini", category: "cañas", price: 389990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/Sensor-2.webp",
     description: "Caña de mosca Sensor XUL Soldarini. Ultra liviana, acción extra rápida. Para aguas cristalinas y truchas selectivas."},

    {id: 22, name: "Caña Soldarini Hydropsyche XUL", brand: "soldarini", category: "cañas", price: 349990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/canna-da-mosca-soldariny-fly-tackle-hydropsyche-precision-sensytip-xul-11-0-2-3~5.webp",
     description: "Caña Hydropsyche Precision Sensytip XUL. Para pesca técnica en aguas de montaña, máxima sensibilidad."},

    {id: 23, name: "Caña Soldarini Radius LMF", brand: "soldarini", category: "cañas", price: 299990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/radius-lmf-1.webp",
     description: "Caña Radius LMF Soldarini. Versátil para streamer y seca en ríos medianos. Acción media-rápida."},

    // ── ACCESORIOS MOSCA ───────────────────────────────────

    {id: 24, name: "Gel Floatante DM", brand: "tiemco", category: "accesorios", price: 9990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/GEL DM.webp",
     description: "Gel floatante DM para moscas secas. Tratamiento invisible que repele el agua sin alterar el perfil de la mosca."},

    {id: 25, name: "Gel Flotante LDP", brand: "tiemco", category: "accesorios", price: 9990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/GEL LDP.webp",
     description: "Gel LDP de larga duración. Ideal para moscas de CDC y materiales delicados. Un tratamiento dura toda la sesión."},

    {id: 26, name: "CDC Oil Soldarini", brand: "soldarini", category: "accesorios", price: 12990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/CDC-OIL.webp",
     description: "Aceite especial para plumas CDC. Restaura las propiedades hidrofóbicas naturales del CDC después del uso."},

    {id: 27, name: "Pinza de Mosca", brand: "tiemco", category: "accesorios", price: 14990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/Pinza .webp",
     description: "Pinza de precisión para mosca. Punta fina para extraer anzuelos sin dañar los peces. Acero inoxidable."},

    {id: 28, name: "Apilador de Pelo TMC Inoxidable", brand: "tiemco", category: "accesorios", price: 19990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/Apilador de pelo TMC inoxidable.webp",
     description: "Apilador de pelo inoxidable TMC. Iguala las puntas del pelo de ciervo y elk para patrones de mosca perfectos."},

    {id: 29, name: "Wild CDC Dubbing", brand: "soldarini", category: "accesorios", price: 7990, condition: "new",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/WILD-CDC.webp",
     description: "CDC silvestre premium para atado de moscas. Plumas seleccionadas con excelente flotabilidad natural."},

    {id: 30, name: "CDC Dubbing 1 pieza", brand: "soldarini", category: "accesorios", price: 5990, condition: "popular",
     image: "https://res.cloudinary.com/dbh4dfwol/image/upload/cdc-dubbing-1-pz.webp",
     description: "Dubbing de CDC de alta calidad. Para atado de emergers y moscas de superficie ultrafinas."}
];
