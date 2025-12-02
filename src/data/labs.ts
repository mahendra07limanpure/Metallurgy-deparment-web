export type LabCategory = "service" | "thematic";

export type Equipment = string | { name: string; usage?: string };

export interface Lab {
  slug: string;
  name: string;
  category: LabCategory;
  description: string;
  image: string;
  profIncharge?: string;
  profInchargeEmail?: string;
  staffIncharge?: string;
  staffInchargeEmail?: string;
  roomNo?: string;
  equipments: Equipment[];
  contacts?: { role: string; name: string; email?: string; phone?: string }[];
  analyses?: { category: string; items: string[] }[];
  gallery?: { src: string; alt: string; caption: string }[];
}

const ph = (text: string) =>
  `https://via.placeholder.com/800x500?text=${encodeURIComponent(text)}`;

export const labs: Lab[] = [
  // Service Laboratories
  {
    slug: "ceramic-laboratory",
    name: "Ceramic Laboratory",
    category: "service",
    description: "Ceramic processing and characterization facility.",
    image: ph("Ceramic Laboratory"),
    profIncharge: "Prof. V.V. Dabhade",
    profInchargeEmail: "vikram.dabhade@mt.iitr.ac.in",
    staffIncharge: "Sh. D. Prasad",
    staffInchargeEmail: "mozhimic@iitr.ac.in",
    roomNo: "231",
    equipments: [
      { name: "Electronic Balance", usage: "For weighing" },
      { name: "Hot Air Oven", usage: "For drying" },
      {
        name: "Hydraulic Press (Hot)",
        usage: "For polymer sample preparation",
      },
      {
        name: "Hydraulic press",
        usage: "For ceramic powder compaction uniaxially",
      },
      {
        name: "High Temperature Furnace",
        usage: "For sintering the ceramic samples",
      },
      {
        name: "Planetary Ball Mill (single jar)",
        usage: "For grinding and mixing the powders",
      },
      { name: "Laboratory Stirrer", usage: "For Stirring" },
      {
        name: "Densitometer for Powder/Solids",
        usage: "To measure density of powdered solids",
      },
      {
        name: "Vacuum Annealing Furnace with Gas Facility",
        usage: "	For heat treatment in vacuum and / or gaseous atmospheres",
      },
    ],
  },

  {
    slug: "corrosion-laboratory",
    name: "Corrosion Laboratory",
    category: "service",
    description: "Corrosion testing and mitigation studies.",
    image: ph("Corrosion Laboratory"),
    profIncharge: "Prof. G.P. Chaudhari",
    profInchargeEmail: "g.chaudhari@mt.iitr.ac.in",
    staffIncharge: "Sh. Dinesh Kumar",
    staffInchargeEmail: "dishamme@iitr.ac.in",
    roomNo: "124",
    equipments: [
      { name: "Corrosion Chamber", usage: "For corrosion test" },
      { name: "Salt Spray", usage: "For corrosion test" },
      { name: "Muffle Furnace", usage: "For heat treatment" },
      { name: "Electro Balance", usage: "For Weighing" },
      { name: "D.C. Rectifier", usage: "For electro winning" },
      "C.O.D.",
      { name: "Belt Polishing", usage: "For sample polishing" },
      { name: "BOD Incubator", usage: "For keep the sample in low temp." },
      {
        name: "Universal Cathod Meter",
        usage: "For the potential measurement",
      },
      "Programmable Meter",
      {
        name: "Optical Microscope",
        usage: "For micro structured characterization",
      },
    ],
  },
  {
    slug: "fabrication-laboratory",
    name: "Fabrication Laboratory",
    category: "service",
    description: "Metal fabrication and prototyping resources.",
    image: "/data/Lab/Fabrication-Lab/Fabrication.jpeg",
    profIncharge: "Prof. Ujjwal Prakash",
    profInchargeEmail: "ujjwal.prakash@mt.iitr.ac.in",
    staffIncharge: "Anurag Chaudhary",
    staffInchargeEmail: "anurag.mmt@iitr.ac.in",
    equipments: [
      {
        name: "Spray forming setup with air compressor and a resistance heating furnace Temp. 1100°C",
        usage: "Can be used for spray forming of low melting metal/alloys",
      },
      { name: "Wooden lathe Machine", usage: "For wooden work" },
      { name: "Drilling Machine", usage: "Drill size 1-12 mm" },
      { name: "Lathe Machine", usage: "Bed length = 3 feet, Job dia = 2\"" },
      { name: "Shaper", usage: "Job size = 12x5 inch" },
      { name: "Grinder", usage: "Surface grinder & table grinder" },
      { name: "Small Rolling Mill", usage: "Roll dia = 15 cm" },
      { name: "Forging/Hammering Machine", usage: "For medium size job upto 20 mm" },
    ],
  },
  {
    slug: "fatigue-testing-laboratory",
    name: "Fatigue Testing Laboratory",
    category: "service",
    description: "Mechanical fatigue testing across materials.",
    image: "/data/Lab/Fatigue/Fatigue.png",
    profIncharge: "Prof. K.S. Suresh",
    profInchargeEmail: "ks.suresh@mt.iitr.ac.in",
    staffIncharge: "Mr. Nitin Kumar",
    staffInchargeEmail: "nitin.mmt@iitr.ac.in",
    roomNo: "143",
    equipments: [
      {
        name: "Fatigue and Fracture Testing Machine",
        usage: "Medium Capacity servohydraulic system includes 8802 systems accepting actuators upto 250kN capacity.",
      },
    ],
  },
  {
    slug: "foundry-laboratory",
    name: "Foundry Laboratory",
    category: "service",
    description: "Casting, molding, and foundry operations.",
    image: ph("Foundry Laboratory"),
    profIncharge: "Prof. Sadhan Ghosh",
    profInchargeEmail: "sadhan.ghosh@mt.iitr.ac.in",
    staffIncharge: "Sh. Nitin Kumar",
    staffInchargeEmail: "nitin.mmt@iitr.ac.in",
    roomNo: "105",
    equipments: [
      { name: "Induction Melting Furnace (5 KG)", usage: "5 Kg of metal can be melted" },
      { name: "Permiability meter", usage: "To measure permeability of foundry sand" },
      { name: "Sieve Shaker", usage: "To characterize foundry sand in terms of size and size distribution" },
      { name: "Universal strength machine", usage: "To measure compression strength, tensile strength and transverse strength of green sand" },
      { name: "Sand washer", usage: "It is used to find out clay content of raw sand." },
      { name: "Sand Muller", usage: "It is used to mix moulding sand, bentonite, coal dust and water together." },
      { name: "Hand moulding machine", usage: "To prepare sample for tensile , compression, transverse and permeability tests." },
      { name: "Sand moisture tester", usage: "To determine the moisture content of sand" },
      { name: "Oven", usage: "To dry the moisture content of core" },
    ],
  },
  {
    slug: "heat-treatment-laboratory",
    name: "Heat Treatment Laboratory",
    category: "service",
    description: "Heat treatment and thermal processing.",
    image: ph("Heat Treatment Laboratory"),
    profIncharge: "Prof. Varun A Baheti",
    profInchargeEmail: "varun@mt.iitr.ac.in",
    staffIncharge: "Sh. Akashdeep Talwar",
    staffInchargeEmail: "akashdeep.mmt2018@iitr.ac.in",
    roomNo: "113",
    equipments: [
      "Electric Muffle Furnace (Max. working temp. 800°C)",
      "High Temperature Tubular Furnace (Max. working temp. 1100°C)",
      "Electric Muffle Furnace (Max. working temp. 1200°C)",
      "High Temperature Box Furnace (Max. working temp. 1200°C)",
      "High Temperature Tubular Furnace (Max. working temp. 1000°C)",
      "High Temperature Tubular Furnace (Max. working temp. 1400°C)",
      "High Temperature Electric Muffle Furnace (Max. working temp. 1400°C)",
    ],
  },
  {
    slug: "hr-tem-laboratory",
    name: "HR-TEM Laboratory",
    category: "service",
    description:
      "High-resolution transmission electron microscopy facility for diffraction, imaging, spectroscopy and energy-filtered analysis.",
    image: ph("HR-TEM Laboratory"),
    profIncharge: "Prof. B.S. Sundar Daniel",
    profInchargeEmail: "sundar.daniel@mt.iitr.ac.in",
    staffIncharge: "S. Krishnsamy",
    staffInchargeEmail: "ksamy@iitr.ac.in",
    roomNo: "114",
    contacts: [
      { role: "TEM Operator", name: "Dr. Manovah David" },
    ],
    analyses: [
      {
        category: "Electron Diffraction",
        items: [
          "Selected-Area Electron Diffraction (SAED)",
          "Converged-Beam Electron Diffraction (CBED)",
          "Nano-Beam Electron Diffraction (NBD)",
        ],
      },
      {
        category: "HRTEM Imaging",
        items: [
          "Bright-Field Imaging (BFi)",
          "Dark-Field Imaging (DFi)",
          "High-Resolution Lattice Fringe Imaging (HRLFi)",
        ],
      },
      {
        category: "STEM Imaging",
        items: [
          "Bright-Field (BF) STEM Imaging",
          "High Angle Annular Dark Field (HAADF) STEM Imaging",
        ],
      },
      { category: "EDS/EDX", items: ["Spectrum", "Mapping"] },
      { category: "EELS", items: ["Spectrum"] },
      {
        category: "EFTEM",
        items: ["Zero Loss Imaging (ZLi)", "EFTEM Mapping"],
      },
    ],
    gallery: [
      { src: "/public/data/Lab/HR-TEM/EDS_Spectrum.jpg", alt: "EDS Spectrum example", caption: "EDS Spectrum" },
      { src: "/public/data/Lab/HR-TEM/EDS_Mapping.jpg", alt: "EDS Mapping example", caption: "EDS Mapping" },
      { src: "/public/data/Lab/HR-TEM/EELS-Spectrum.jpg", alt: "EELS Spectrum example", caption: "EELS Spectrum" },
      { src: "/public/data/Lab/HR-TEM/ZLi.jpg", alt: "Zero Loss Imaging example", caption: "Zero Loss Imaging (ZLi)" },
      { src: "/public/data/Lab/HR-TEM/EFTEM_Mapping.jpg", alt: "EFTEM Mapping example", caption: "EFTEM Mapping" },
      { src: "/public/data/Lab/HR-TEM/BFi.jpg", alt: "STEM Imaging example", caption: "BFi" },
      { src: "/public/data/Lab/HR-TEM/CBED.jpg", alt: "STEM Imaging example", caption: "CBED" },
      { src: "/public/data/Lab/HR-TEM/DFi.jpg", alt: "STEM Imaging example", caption: "DFi" },
      { src: "/public/data/Lab/HR-TEM/EFTEM_Mapping.jpg", alt: "STEM Imaging example", caption: "EFTEM Mapping" },
      { src: "/public/data/Lab/HR-TEM/HRLFi.jpg", alt: "STEM Imaging example", caption: "HRLFi" },
      { src: "/public/data/Lab/HR-TEM/NBD.jpg", alt: "STEM Imaging example", caption: "NBD" },
      { src: "/public/data/Lab/HR-TEM/SAED.jpg", alt: "STEM Imaging example", caption: "SAED" },
      { src: "/public/data/Lab/HR-TEM/STEM-Bfi.jpg", alt: "STEM Imaging example", caption: "STEM Bright-Field Imaging" },
      { src: "/public/data/Lab/HR-TEM/STEM-HAADFi.jpg", alt: "STEM Imaging example", caption: "STEM High Angle Annular Dark Field Imaging" },
    ],
    equipments: [
      
        "JEM 3200FS Electron Microscope",
      "Automatic Twin jet Electropolisher (Model- Fischione 110)",
      "Ion Mill (Gatan PIPS II)",
      "Ultrasonic Disc Cutter (Model- Fischione 170)",
      "Dimple Grinder (Model- Fischione 200)",
      "Low speed Isomet precision Saw Diamond cutter (Buehler)",
      "TEM Specimen Punch (Model- Fischione 130)",
      "TEM Specimen Grinder (Model- Fischione 160)",
      "Ion Cleaner (Jeol EC-52000IC)",
      "Hot Plate",
      "Labman Ultrosonic Jar (Labs)",
    ],
  },
  {
    slug: "magnetic-materials-research-laboratory",
    name: "Magnetic Materials Research Laboratory",
    category: "service",
    description: "Magnetic materials synthesis and testing.",
    image: ph("Magnetic Materials Laboratory"),
    equipments: [],
  },
  {
    slug: "materials-characterization-xrd-laboratory",
    name: "Materials Characterization (XRD) Laboratory",
    category: "service",
    description: "X-ray diffraction analysis for materials.",
    image: ph("XRD Laboratory"),
    profIncharge: "Prof. Nikhil Dhawan",
    profInchargeEmail: "nikhil.dhawan@mt.iitr.ac.in",
    staffIncharge: "Sh. Dinesh Kumar",
    staffInchargeEmail: "dishamme@iitr.ac.in",
    roomNo: "211",
    equipments: [
      {
        name: "Automated X-Ray Diffractometer (Rigaku SmartLab 3kW)",
        usage: "Powder, bulk, thin-film and SAXS analysis; α-β stage, φ-attachment, high-temp stage, fast detector, Cu/Mo/Co/Fe tubes, PDXL software",
      },
    ],
  },
  {
    slug: "materials-testing-laboratory",
    name: "Materials Testing Laboratory",
    category: "service",
    description: "Universal testing and mechanical properties.",
    image: ph("Materials Testing Laboratory"),
    profIncharge: "Prof. Gautam Agarwal",
    profInchargeEmail: "gautam.agarwal@mt.iitr.ac.in",
    staffIncharge: "Mr. Narendra Kumar",
    staffInchargeEmail: "narendra.mmt@iitr.ac.in",
    roomNo: "101",
    equipments: [
      { name: "Tensile Testing Machine (Instron 5982)", usage: "100 kN electro-mechanical machine for flat/round samples per ASTM/BIS/JIS/DIN; strain rate up to 500 mm/min, room-temp only; 25 mm & 12.5 mm extensometers available" },
      { name: "Pendulum Impact Testing Machine Model PS-30", usage: "Permits determination of behaviour of metals under impact load. Basically two types of tests are used (i) Charpy Test (ii) Izod Test" },
      { name: "Universal Testing Machine Model ZD-20", usage: "To determine tensile, compressive and bending strength and other properties of materials.Capacity 20 Ton Sample Size used: upto 18 mm Diameter having length upto 9 inch" },
      { name: "Brinall Cum Rockwell hardness Tester Model HP-250", usage: "Suitable for testing hardness of materials and alloys-hard of soft, flat or round" },
      { name: "Erichon Cupping Test Machine Type-05", usage: "Used to check deep draw ability of metal sheets. Thin sheets upto 1 mm thickness are suitable for this test." },
      { name: "Rotating bar Fatigue Testing Machine", usage: "Used to measure the high cycle fatigue strength of materials." },
      { name: "Magnetic Crack Deductor", usage: "Magnetic particle inspection of ferromagnetic materials by mobile magnetic yoke. Method conforms to ASTM 1444 standard." },
      { name: "Brinell cum Vickers Hardness Tester Model HPO-250", usage: "Suitable for testing hardness of materials and alloys-hard or soft, flat or round." },
      { name: "Drop ball impact testing machine", usage: "This test is used for checking the impact resistance of plastic pipes and ceramics, glass, fiber, acrylic coatings." },
      { name: "H-25K Tensile Testing Machine", usage: "For tensile, compression and bending testing: Capacity 25 KN" },
      { name: "Computerized Vickers Hardness Tester", usage: "Advanced Vickers Hardness Tester with computer interface" },
      { name: "Digital Rockwell Electronic Hardness Tester", usage: "Used to check Rockwell Hardness on C, B&A scales with the digital output." },
      { name: "Ultra Sonic Flaw Deductor Model USM-3.55", usage: "Non-destructive test equipment used for internal defect evaluation of castings, weld joints and also can be used for thickness measurements." },
      { name: "Current Testing Package Model Locator 25-s", usage: "Eddy current inspection set up for detection of the surface and sub surface flaws in the materials." },
      { name: "Universal Testing Machine Model H-75 KS", usage: "For tensile compression and three point bending tests: Capacity 75Kn" },
      { name: "Laser Extensometer (Tenious Olsen make)", usage: "To check the stain under tensile load for non-metallic materials under non contact conditions." },
    ],
  },
  {
    slug: "metal-forming-laboratory",
    name: "Metal Forming Laboratory",
    category: "service",
    description: "Metal forming processes and research.",
    image: ph("Metal Forming Laboratory"),
    profIncharge: "Prof. Sumeet Mishra",
    profInchargeEmail: "sumeet.mishra@mt.iitr.ac.in",
    staffIncharge: "Mr. Naveen Rana",
    staffInchargeEmail: "naveen.mmt@iitr.ac.in",
    roomNo: "140",
    equipments: [
      { name: "Birson Friction Screw Press (100 tons)", usage: "For forging of metals / powders" },
      { name: "Hydraulic Press (60 Metric Tons)", usage: "For compaction of powders" },
      { name: "Hydraulic Press (20 Tons) Hand Operated", usage: "For compaction of powders" },
      { name: "Attritor Mill", usage: "For milling/mechanical alloying of powders" },
      { name: "Mechanico Ball Mill", usage: "For milling/mechanical alloying of powders" },
      { name: "Jar Mill", usage: "For mixing of powder blends" },
      { name: "Hydrogen Generator", usage: "For hydrogen generation / supply" },
      { name: "Lab Stirrer with Chuck", usage: "For stirring" },
      { name: "Magnetic Stirrer with Hot Plate", usage: "To provide heating and stirring" },
      { name: "High pressure Bulldozer Pump", usage: "To provide pressurized water" },
    ],
  },
  {
    slug: "metallography-laboratory",
    name: "Metallography Laboratory",
    category: "service",
    description: "Metallography lab is dedicated for fundamental material inspection and operation like sample preparation and microstructural examination of materials by optical microscope. This lab is equipped with belt polisher, disc polisher, hot mounting press, DC regulated power supply and optical microscopes.",
    image: ph("Metallography Laboratory"),
    profIncharge: "Prof. Pinku Roy",
    profInchargeEmail: "pinku.roy@mt.iitr.ac.in",
    staffIncharge: "Sh. Akashdeep Talwar",
    staffInchargeEmail: "akashdeep.mmt2018@iitr.ac.in",
    roomNo: "112",
    equipments: [
      { name: "Optical Microscope", usage: "Make: Leica, Model: 5000M, Magnification: 100X to 1000X" },
      { name: "Automatic Electro-polishing Unit", usage: "Make: Struers, Model: LectroPol-5" },
      { name: "Automatic Precision High Speed Diamond Saw", usage: "Make: Metco" },
      { name: "Polishing machine", usage: "Make: METCO" },
      { name: "Hot Mounting Press", usage: "Make: METCO, Model: BAINMOUNT-P AUTO" },
      { name: "Abrasive Cutting Machine", usage: "Make: Metco" },
      { name: "DC regulated power supply", usage: "Make: Aplab, Model: L3205, Usage: Electroetching" },
    ],
    gallery: [
      { src: "/data/Lab/Metallography-Lab/Optical_micro.jpeg", alt: "Optical Microscope", caption: "Optical Microscope" },
      { src: "/data/Lab/Metallography-Lab/Electro-polishing.jpeg", alt: "Automatic Electro-polishing Unit", caption: "Automatic Electro-polishing Unit" },
      { src: "/data/Lab/Metallography-Lab/diamond_saw.jpeg", alt: "Automatic Precision High Speed Diamond Saw", caption: "Automatic Precision High Speed Diamond Saw" },
      { src: "/data/Lab/Metallography-Lab/polishing_machine.jpg", alt: "Polishing machine", caption: "Polishing machine" },
      { src: "/data/Lab/Metallography-Lab/mounting_press.jpeg", alt: "Hot Mounting Press", caption: "Hot Mounting Press" },
      { src: "/data/Lab/Metallography-Lab/cutting_machine.jpeg", alt: "Abrasive Cutting Machine", caption: "Abrasive Cutting Machine" },
      { src: "/data/Lab/Metallography-Lab/power_supply.jpg", alt: "DC regulated power supply", caption: "DC regulated power supply" },
    ],
  },
  {
    slug: "mineral-dressing-laboratory",
    name: "Mineral Dressing Laboratory",
    category: "service",
    description: "Mineral processing and beneficiation.",
    image: "/data/Lab/Mineral_dressing_lab/Ball_mill.jpg",
    profIncharge: "Prof. Nikhil Dhawan",
    profInchargeEmail: "nikhil.dhawan@mt.iitr.ac.in",
    staffIncharge: "Mr. Anurag Chaudhary",
    staffInchargeEmail: "anurag.mmt@iitr.ac.in",
    equipments: [
      {
        name: "Ball mill size 18”×18”/Ball mill( A.S. Enterprise, Calcutta)",
        usage: "A ball mill is a machine with a rotating hollow cylinder partly filled with steel or white cast iron balls which is used as grinding media. Ball Mill grinds a material by rotating a cylinder with hard balls, causing them to fall back into the cylinder and onto the material to be ground. The impact of balls is important for reduction in size of the particles.",
      },
      {
        name: "Lab. Jaw Crusher (A.S Enterprises, Calcutta)",
        usage: "Crushers used to reduce the size of a solid mix of raw material run of mine ore. A jaw crusher uses compressive force for breaking of particle. This mechanical pressure is achieved by the two jaws of the crusher of which one is fixed while the other reciprocates.",
      },
      {
        name: "Roll Crusher 10ʺ ×6ʺ",
        usage: "Roll crusher is used for secondary crushing in which the product of primary crusher is the feed. The final size of particles can be varied through adjusting space between the rollers.",
      },
      {
        name: "Centrifugal classifier",
        usage: "It is extensively used for sizing the aggregates of minerals particles into varying size groups by centrifugal force.",
      },
      {
        name: "Froth flotation cell",
        usage: "Froth flotation is a highly versatile method for physically separating particles based on differences in their wet ability as froth. The particles with attached air bubbles are then carried to the surface and removed, while the particles that remain completely wetted stay in the liquid phase. Froth flotation can be adapted to a broad range of mineral separations, as it is possible to use chemical treatments to selectively alter mineral surfaces so that they have the necessary properties for the separation.",
      },
      {
        name: "Mechanical sieve shaking machine hanging type",
        usage: "A sieve analysis used to assess the particle size distribution of a granular material. A sieve analysis can be performed on any type of non-organic or organic granular materials including sands, crushed rock, clays, granite, feldspars, coal, and soil, a wide range of manufactured powders, grain and seeds, down to a minimum size. It is a simple technique of particle sizing; it is probably the most common. Sieve shaker is used for shaking the sieves for determination of particle size and its distribution.",
      },
      {
        name: "Hot Air oven 18ʺ× 18ʺ× 18ʺ",
        usage: "Hot Air Oven is an electrical device, widely used in laboratories for sterilization. It makes optimal use of dry heat to sanitize. It have thermostat for controlling the temperature and digitally controlled to maintain the temperature and fan to circulate hot air.",
      },
      {
        name: "Wilfley table",
        usage: "The Wilfley Table is simply a large wooden table, on top of which a series of parallel “riffles” are fixed. These riffles increased in length incrementally from the top of the table down to the bottom. The entire table is set at an angle, and the slime is poured onto it from the top corner. The heavier particles would be held up along the riffles, while the lighter particles would roll over them. The whole table is oscillated back and forth many times a minute, which works the heavier particles down the riffles and towards the opposite end of the table. From there they are removed. The basic principle of Wilfley table is flowing film convention in which minerals are separated on the basis of specific gravity and size differences.",
      },
      {
        name: "Mineral Jig",
        usage: "A jig is a simple mineral separation device using water and the force of gravity to separate minerals depending on the differences in their specific gravity and size.",
      },
      {
        name: "Disc Type Pelletizer",
        usage: "This equipment used for converting powdered materials into round and uniform size pellets. Which are subsequently used for reduction studies.",
      },
      {
        name: "Rod Mill",
        usage: "It is used for grinding the ore using steel rods as grinding media. In this mill the uniform particle size is obtained if a raw material is ground by this mill. It consists a long hollow cylinder and grinding action is performed by tumbling of rods inside the mill.",
      },
      {
        name: "Jar Mill",
        usage: "This machine is used for uniformly mixing the metal powder (blending) which is subsequently used for preparation of compacts.",
      },
    ],
  },
  {
    slug: "nano-mechanics-laboratory",
    name: "Nano-Mechanics Laboratory",
    category: "service",
    description: "Nanomechanics and instrumented testing.",
    image: ph("Nano-Mechanics Laboratory"),
    profIncharge: "Prof. S.R. Meka",
    profInchargeEmail: "s.r.meka@mt.iitr.ac.in",
    staffIncharge: "Sh. Narendra Kumar",
    staffInchargeEmail: "narendra.mmt@iitr.ac.in",
    roomNo: "125",
    equipments: [
      {
        name: "Hysitron - TI 950 TriboIndentor",
        usage: `Hysitron Nano Indentor (TI 950 TriboIndentor) is an instrumented indentation system for analyzing the mechanical behavior of materials with a probing depth of few 10s of nanometers to micrometer range. It offers researchers and scientist the ability to take accurate nanoscale measurements of mechanical properties such as hardness and elastic modulus through indentation. The instrument is equipped with an in-situ contact imaging facility with nanometer level resolution for obtaining 3D profile of the tested surface. Friction, wear resistance and coating adhesive strength can also be evaluated using scratch mode. In addition, nanoDMA and nanoECR testing modes are available for investigating the dynamic mechanical behavior and stress induced electrical behavior of material systems, respectively.

Specifications:
• Max. force: 10 nN (Z-Axis) / 2 mN (X-Axis)
• Load Resolution: 1 nN (Z-Axis) / 3000 nN (X-Axis)
• Load Noise Floor: 100 nN (Z-Axis) / 10000 nN (X-Axis)
• Maximum Displacement: 5000 nm (Z-Axis) / 15000 nm (X-Axis)
• Displacement Resolution: 0.04 nm (Z-Axis) / 4 nm (X-Axis)
• Displacement Noise Floor: 0.2 nm (Z-Axis) / 10 nm (X-Axis)
• Thermal Drift: < 0.05 nm/sec (both axes)

Available Testing Modes:
• Quasistatic Nanoindentation – Measures Young’s modulus and hardness via nanoindentation.
• Scratch testing – Quantifies scratch resistance (lateral force) and friction coefficients as a function of displacement.
• ScanningWear – Quantifies wear volumes and wear rates using the in-situ imaging capability
• nanoDMA – Investigates time-dependent properties of materials using a dynamic testing technique, which is designed specifically for soft materials.
• Modulus Mapping – Produces quantitative maps of the storage and loss stiffness and moduli from a single SPM scan
• nanoECR – Conductive nanoindentation system capable of providing simultaneous in situ electrical and mechanical measurements for investigating material deformation and stress induced transformation behavior.`,
      },
      {
        name: "Nanovea M1 Hardness and Scratch Tester",
        usage: `Nanovea M1 is an instrumented indentation system providing hardness and Young’s modulus from indentation data. Micro modules support indentation, scratch and wear testing for thin or thick, soft or hard coatings, films and substrates. Software computes fracture toughness, adhesion, wear resistance and other deformation-related quantities. A 3D non-contact profiler provides high-resolution 3D imaging of indentations, scratches and wear tracks plus surface roughness.

Specifications:
• Load Resolution (Noise Floor): 0.75 mN
• Depth Range: 100 μm
• Depth Resolution (Theoretical): 0.2 nm
• Depth measured with Z motor encoders: 10 nm resolution
• Friction Force: 40 N
• Friction Resolution (Noise Floor): 3 mN
• Scratch length: 25 mm`,
      },
    ],
  },
  {
    slug: "polymer-laboratory",
    name: "Polymer Laboratory",
    category: "service",
    description: "Polymer synthesis and characterization.",
    image: ph("Polymer Laboratory"),
    profIncharge: "Prof. Aparna Tripathi",
    profInchargeEmail: "aparna.tripathi@mt.iitr.ac.in",
    staffIncharge: "Sh. Vivek Mehta",
    staffInchargeEmail: "vivek.mhy@iitr.ac.in",
    roomNo: "Currently In XRD Lab (211)",
    equipments: [
      {
        name: "Differential Scanning Calorimetry (DSC)",
        usage: "The operating technique is based on the difference in heat flow to a sample and to a reference, is monitored as function of temperature or time, while the sample is subjected to a controlled temperature programme.",
      },
      {
        name: "Simultaneous Thermal Analysis (STA)",
        usage: "It is used to perform TG and DTA of materials. It enables to measure mass change and thermal effects of a great variety of application materials including thermal stability, decomposition behaviour, composition, phase transitions and melting processes comprehensively and quickly.",
      },
      {
        name: "Dynamic Mechanical Analyzer (DMA)",
        usage: "The DMA 800 has facility to conduct oscillatory experiments to measure the elasticity of polymer materials by providing dynamic mechanical deformation. Operating principle: A constant load applied to a sample begins to oscillate sinusoidally in a linear viscoelastic region of the sample material.",
      },
    ],
    gallery: [
      { src: "/data/Lab/Polymer_lab/DSC.png", alt: "Differential Scanning Calorimetry", caption: "DSC Equipment" },
      { src: "/data/Lab/Polymer_lab/STA.png", alt: "Simultaneous Thermal Analyzer", caption: "STA Equipment" },
      { src: "/data/Lab/Polymer_lab/DMA.png", alt: "Dynamic Mechanical Analyzer", caption: "DMA Equipment" },
    ],
  },
  {
    slug: "sem-laboratory",
    name: "SEM Laboratory",
    category: "service",
    description: "Scanning Electron Microscopy (SEM) is used for imaging solid samples like metals, ceramics, fibers, powders, thin films, etc. with EDS and EBSD detectors for elemental composition and texture analysis.",
    image: ph("SEM Laboratory"),
    profIncharge: "Prof. Piyush V Jagtap",
    profInchargeEmail: "piyushvj@mt.iitr.ac.in",
    roomNo: "129",
    equipments: [
      {
        name: "Thermionic Emission SEM (EVO 18, Carl Zeiss)",
        usage: "SEM Make: EVO 18, Carl Zeiss; EDS Detector: Oxford Instruments; EBSD Detector: Oxford Instruments; Installation year: 2012",
      },
      {
        name: "Field Emission SEM (Sigma 300, Carl Zeiss)",
        usage: "SEM Make: Sigma 300, Carl Zeiss; EDS Detector: Oxford Instruments; EBSD Detector: Oxford Instruments; Installation year: 2023",
      },
    ],
    analyses: [
      {
        category: "Imaging",
        items: [
          "Secondary Electron (SE) Imaging",
          "Backscattered Electron (BSE) Imaging",
          "High Resolution Imaging",
        ],
      },
      {
        category: "Elemental Analysis",
        items: [
          "Energy Dispersive Spectroscopy (EDS) - Spectrum Analysis",
          "Energy Dispersive Spectroscopy (EDS) - Elemental Mapping",
        ],
      },
      {
        category: "Crystallographic Analysis",
        items: [
          "Electron Backscatter Diffraction (EBSD) - Texture Analysis",
          "Electron Backscatter Diffraction (EBSD) - Phase Identification",
          "Electron Backscatter Diffraction (EBSD) - Orientation Mapping",
        ],
      },
    ],
    contacts: [
      { role: "Professor In-Charge", name: "Prof. Piyush V Jagtap", email: "piyushvj@mt.iitr.ac.in" },
    ],
    gallery: [
      { src: "/data/Lab/Sem_lab/thermionic_emission_sem.png", alt: "Thermionic Emission SEM", caption: "Thermionic Emission SEM (EVO 18, Carl Zeiss)" },
      { src: "/data/Lab/Sem_lab/field_emission_sem.png", alt: "Field Emission SEM", caption: "Field Emission SEM (Sigma 300, Carl Zeiss)" },
    ],
  },
  {
    slug: "spark-plasma-sintering-laboratory",
    name: "Spark Plasma Sintering Laboratory",
    category: "service",
    description: "Spark Plasma Sintering (SPS) is used for compacting metallic, ceramic or metal-ceramic powders to form pellets. SPS achieves high density at reduced sintering temperature and time without requiring a binder, resulting in materials with better mechanical properties.",
    image: ph("Spark Plasma Sintering Laboratory"),
    profIncharge: "Prof. B.V. Manoj Kumar",
    profInchargeEmail: "manoj.kumar@mt.iitr.ac.in",
    staffIncharge: "D. Prasad, Technical Officer",
    staffInchargeEmail: "mozhimic@iitr.ac.in",
    roomNo: "111",
    equipments: [
      {
        name: "Spark Plasma Sintering Machine (Dr. Sinter SPS-625)",
        usage: "Model: Dr. Sinter SPS-625, Fuji Electronic Industrial Co. Ltd., Japan; Max. Current: 5000A; Max. sintering Temperature: 2000°C; Max. sintering pressure: 100 KN; Vacuum: up to 0.006 Pa. Operating parameters depend on the sample composition and die type/size.",
      },
    ],
    contacts: [
      { role: "Professor In-Charge", name: "Prof. B.V. Manoj Kumar", email: "manoj.kumar@mt.iitr.ac.in" },
      { role: "Officer In-Charge", name: "D. Prasad, Technical Officer", email: "mozhimic@iitr.ac.in", phone: "+91-01332-284380" },
    ],
    analyses: [
      {
        category: "Sample Requirements",
        items: [
          "Sample must be bone dry by heating in oven at suitable temperature for at least 24 hours",
          "Powder sample weight: 4-10g (depends on sample density and desired pellet dimensions)",
        ],
      },
      {
        category: "Charges for Non-IITR Users",
        items: [
          "Educational institutes: ₹4,000 + 18% GST per sample",
          "Govt Research labs: ₹8,000 + 18% GST per sample",
          "Industry - Testing: ₹10,000 + 18% GST per sample",
          "Industry - Consultancy: ₹15,000 + 18% GST per sample",
        ],
      },
      {
        category: "Procedure for Sample Submission",
        items: [
          "IITR Users: MMED IITR users submit duly signed form at Officer In-charge office. Non-MMED IITR users forward form through Head, MMED.",
          "Non-IITR Users: Requisition Form for SPS duly forwarded by Supervisor/Head with NEFT/RTGS/UPI details and GST number to postal address. E-mail ID and mobile number must be clearly written.",
          "Mode of Payment: Online transfer through NEFT/RTGS/UPI only",
        ],
      },
      {
        category: "Bank Details",
        items: [
          "Name of A/c holder: Dean SRIC, IIT Roorkee",
          "Name of Bank: Punjab National Bank, IIT Roorkee branch",
          "Account No.: 4044000100031597",
          "IFSC Code: PUNB0404400",
          "MICR Code: 247024103",
        ],
      },
      {
        category: "Postal Address",
        items: [
          "The Head, Dept of Metallurgical & Materials Engg, IIT Roorkee, Roorkee – 247667, Uttarakhand, India",
          "Tel: 01332 284343, 285606",
          "Note: Mention 'Samples for SPS (Spark Plasma Sintering)' on the envelope",
        ],
      },
    ],
    gallery: [
      { src: "/data/Lab/Spark_Plasma_Sintering_lab/SPS.png", alt: "Spark Plasma Sintering Machine", caption: "Dr. Sinter SPS-625, Spark Plasma Sintering Machine" },
    ],
  },
  {
    slug: "thermo-mechanical-simulator-laboratory",
    name: "Thermo-Mechanical Simulator Laboratory",
    category: "service",
    description: "Very versatile equipment to do physical simulation of actual industrial processes. Samples can be subjected to actual deformation and thermal cycles experienced by material during processing. This helps in understanding the effect of processing conditions on microstructure and related properties, and to develop new processing conditions to optimize microstructure and material properties.",
    image: ph("Thermo-Mechanical Simulator Laboratory"),
    profIncharge: "Prof. Vivek Pancholi",
    profInchargeEmail: "vivek.pancholi@mt.iitr.ac.in",
    staffIncharge: "Sh. Naveen Rana",
    staffInchargeEmail: "naveen.mmt@iitr.ac.in",
    roomNo: "144",
    equipments: [
      {
        name: "Gleeble 3800",
        usage: "Specification: Gleeble 3800; Strain rate for compression test: max. 100/s; Maximum heating rate: up to 10,000°C/sec",
      },
    ],
    contacts: [
      { role: "Professor In-Charge", name: "Prof. Vivek Pancholi", email: "vivek.pancholi@mt.iitr.ac.in" },
      { role: "Staff In-Charge", name: "Sh. Naveen Rana", email: "naveen.mmt@iitr.ac.in" },
    ],
    analyses: [
      {
        category: "Applications",
        items: [
          "Compression Test",
          "Strip Annealing",
          "Surface Studies",
          "TTT Curve (Time-Temperature-Transformation)",
          "Inter-critical Cooling",
          "Powder Metallurgy",
          "Compact Testing",
          "CCT Curves (Continuous Cooling Transformation)",
          "Cryogenic Works",
          "Many more applications",
        ],
      },
    ],
  },
  {
    slug: "tribology-laboratory",
    name: "Tribology Laboratory",
    category: "service",
    description: "Wear is a surface degradation of operating surface due to relative motion of materials at the surface. Huge loss is incurred on account of wear. This lab studies the behavior of newly developed materials under wear conditions using specialized equipment.",
    image: ph("Tribology Laboratory"),
    profIncharge: "Prof. Anish Karmakar",
    profInchargeEmail: "anish.karmakar@mt.iitr.ac.in",
    staffIncharge: "Mr. Narendra Kumar",
    staffInchargeEmail: "narendra.mmt@iitr.ac.in",
    roomNo: "137",
    equipments: [
      {
        name: "Ultrasonicator",
        usage: "Make: Sonics; Model No.: Vibracell; Frequency: 20 Hz",
      },
      {
        name: "Pin on Disc Tester",
        usage: "Make: Magnum; RPM: 1 to 200 rpm; Applied load: 1-6 kg",
      },
      {
        name: "Profilometer",
        usage: "Make: Mititoyo; Model Name: SJ 400; Range: <1 to 300 µm; Used for measuring surface roughness",
      },
    ],
    contacts: [
      { role: "Professor In-Charge", name: "Prof. Anish Karmakar", email: "anish.karmakar@mt.iitr.ac.in" },
      { role: "Service Supervisor", name: "Mr. Narendra Kumar", email: "narendra.mmt@iitr.ac.in" },
    ],
    gallery: [
      { src: "/data/Lab/Tribology/Ultrasonicator.png", alt: "Ultrasonicator", caption: "Ultrasonicator - Sonics Vibracell" },
      { src: "/data/Lab/Tribology/Pin_on_Disc_Tester.png", alt: "Pin on Disc Tester", caption: "Pin on Disc Tester - Magnum" },
      { src: "/data/Lab/Tribology/Profilometer.png", alt: "Profilometer", caption: "Profilometer - Mititoyo SJ 400" },
    ],
  },
  {
    slug: "welding-laboratory",
    name: "Welding Laboratory",
    category: "service",
    description: "The Metal Joining Laboratory promotes the advancement of quality welding in the industry and teaches welding techniques at UG, PG and PhD levels. The laboratory provides an excellent educational environment where students learn the latest techniques for SMAW, GMAW, SAW, and GTAW welding processes.",
    image: ph("Welding Laboratory"),
    profIncharge: "Prof. Sourav Das",
    profInchargeEmail: "sourav.das@mt.iitr.ac.in",
    staffIncharge: "Sh. Anurag Chaudhary",
    staffInchargeEmail: "anurag.mmt@iitr.ac.in",
    equipments: [
      {
        name: "ESAB Welding Power Source",
        usage: "Make: ESAB, Model: Aristo 2000 – LUD 450 UW, Direct current (D.C) welding power source with MEK 44C wire feeder. Capable to operate for SMAW, GTAW, GMAW and P-GMAW in both synergic and non-synergic modes.",
      },
      {
        name: "Lincoln Powerwave 455M/Powerfeed 10M",
        usage: "Make: Lincoln Electric Co. USA, Inverter based synergic pulse MIG/MAG welding power wave machine with single feeder. Suitable for MIG welding, SMAW, GTAW (Touch Start TIG only), GMAW, P-GMAW and FCAW in both synergic and non-synergic modes.",
      },
      {
        name: "Submerged Arc Welding Machine",
        usage: "Equipment for submerged arc welding processes.",
      },
    ],
    contacts: [
      { role: "Professor In-Charge", name: "Prof. Sourav Das", email: "sourav.das@mt.iitr.ac.in" },
      { role: "Staff In-Charge", name: "Sh. Anurag Chaudhary", email: "anurag.mmt@iitr.ac.in" },
    ],
    analyses: [
      {
        category: "On Going Research Projects",
        items: [
          "Investigation on effect of pulsed current gas metal arc welding on joint characteristics of scandium inoculated high strength aluminium alloy (CSIR, India)",
          "Investigation on advanced welding technique to improve properties of dissimilar weld joint of austenitic stainless steel to high strength low alloy steel (DRDO, India)",
          "To study critical application of pulse current gas tungsten arching process in surface processing of steel for desired properties (CSIR, India)",
        ],
      },
      {
        category: "On Going Ph.D. Work",
        items: [
          "Surface modification of steel by TIG arcing process",
          "Narrow gap gas metal arc welding of dissimilar weld joint of stainless steel and HSLA steel",
          "Effect of TIG surfacing on fatigue properties of steel",
        ],
      },
      {
        category: "Achievements",
        items: [
          "Development of a concept to control pulse parameter in GMAW process by considering their summarized influence through a dimensionless hypothetical factor",
          "Development of newly designed narrow GMAW torch nozzle device with appropriate cooling system for narrow gap P-GMA welding of thick wall stainless steel pipe",
          "Reduction of shrinkage and stresses in multi-pass and multi-seam narrow groove weld of thick (25mm) HSLA steel plate prepared by P-GMAW process",
          "Design and development of advanced active cooling system in a narrow gap GMAW torch nozzle for multi-pass single-seam per layer extra narrow gap welding of thick steel plates",
          "Development of a controlled arc of pulsed current TIG arcing process to develop high wear resistant surface modification of steel",
        ],
      },
      {
        category: "Patents",
        items: [
          "GMAW Torch nozzle device for narrow gap welding, Application No. 1245/DEL/2009 dated 17.06.2009",
          "Single Seam Multilayer Narrow Gap Pulse Current Gas Metal Arc Welding Technique, Application No. 1023/DEL/2010, dated 29.4.2010",
        ],
      },
    ],
    gallery: [
      { src: "/data/Lab/Welding_Lab/ESAB_Welding_Power_Source.png", alt: "ESAB Welding Power Source", caption: "ESAB Welding Power Source - Aristo 2000 – LUD 450 UW" },
      { src: "/data/Lab/Welding_Lab/Lincoln_Powerwave.png", alt: "Lincoln Powerwave 455M", caption: "Lincoln Powerwave 455M/Powerfeed 10M" },
      { src: "/data/Lab/Welding_Lab/Submerged_Arc_Welding.png", alt: "Submerged Arc Welding Machine", caption: "Submerged Arc Welding Machine" },
    ],
  },

  // Thematic Research Laboratories
  {
    slug: "adhesive-joining-laboratory",
    name: "Adhesive Joining Laboratory",
    category: "thematic",
    description: "The Adhesive Joining Laboratory promotes the advancement of polymer nanocomposite in the industry and teaches polymer composite and adhesives at UG, PG and Ph.D. levels. The laboratory provides an excellent educational environment where students learn techniques for Epoxy-CNT composite, in-situ grown nanocomposite, PMMA-graphene composite, and inorganic nano particles filled epoxy based adhesives for similar and dissimilar metals joints.",
    image: ph("Adhesive Joining Laboratory"),
    profIncharge: "Prof. Indranil Lahiri",
    profInchargeEmail: "indranil.lahiri@mt.iitr.ac.in",
    staffIncharge: "Mr. Dhan Prakash",
    equipments: [
      {
        name: "Ultrasonicator",
        usage: "Make: Sonics vibra cell; Model: VCX750; Power: 750 watts; Frequency: 20 kHz; Probe: 13 mm diameter titanium alloy",
      },
      {
        name: "Ultra high vacuum pump",
        usage: "Make: Edwards; Model: E2M 18",
      },
      {
        name: "Vacuum oven",
        usage: "Make: Matrix Scientific Instruments; Model: MW2; Temperature: up to 300°C",
      },
    ],
    contacts: [
      { role: "Professor In-Charge", name: "Prof. Indranil Lahiri", email: "indranil.lahiri@mt.iitr.ac.in" },
      { role: "Service Supervisor", name: "Mr. Dhan Prakash" },
    ],
    analyses: [
      {
        category: "Research Projects",
        items: [
          "Optimization of ultrasonic dual mixing for homogeneous distribution of inorganic nano particles in epoxy based adhesive affecting its thermal and mechanical properties (Department of Science and Technology, India, 2012-2015)",
          "Studies on ambient and elevated temperature properties of joints of metals prepared by adhesive joining using nano-particle filled adhesive (Department of Science and Technology, India, 2007-2010)",
        ],
      },
      {
        category: "On Going Ph.D. Work",
        items: [
          "Structure-Property Relationship of Inorganic Nanoparticle Filled Epoxy Adhesive (Kaushal Kumar) - In Progress",
          "Epoxy Based Carbon Nanotube Composite with Advance Physical and Mechanical properties (Arun Kumar) - In Progress",
        ],
      },
      {
        category: "Achievements",
        items: [
          "An interesting dual mixing ultrasonic processing technique has been developed which could effectively change the matrix structure of epoxy based polymers, instrumental in considerable improvement in mechanical and physical properties including strength, modulus, toughness, safety and durability",
          "Process is ready for application on many other polymeric materials for modification of desired properties",
          "Neat epoxy adhesive with excellent thermal and mechanical properties",
          "Nano-particulate composite adhesive for advanced automobile application",
          "Adhesive joint on aluminum substrate for automobile and aerospace applications",
        ],
      },
      {
        category: "Patents",
        items: [
          "A multifunctional technique for dispersion of thoroughly broken agglomerates of inorganic nano particles in viscous fluid, Application No. 1554/Del/2008 dated 27.06.2008",
        ],
      },
    ],
    gallery: [
      { src: "/data/Lab/Adhesive_Joining_Lab/Ultrasonicator.png", alt: "Ultrasonicator", caption: "Ultrasonicator - Sonics VCX750" },
      { src: "/data/Lab/Adhesive_Joining_Lab/Ultra_high_vacuum_pump.png", alt: "Ultra high vacuum pump", caption: "Ultra High Vacuum Pump - Edwards E2M 18" },
      { src: "/data/Lab/Adhesive_Joining_Lab/Vacuum_oven.png", alt: "Vacuum oven", caption: "Vacuum Oven - Matrix Scientific Instruments MW2" },
    ],
  },
  {
    slug: "bio-materials-and-multiscale-mechanics-laboratory",
    name: "Bio-Materials and Multiscale Mechanics Laboratory",
    category: "thematic",
    description: "In this laboratory, we work on developing material systems for tissue engineering. We are working on developing metal based material systems for orthopedic applications and polymer based material systems for neural and skin generation scaffolds both with specific functionalities. We also work on developing polymer/metal/ceramic matrix composites reinforced with nano-phases for structural applications.",
    image: ph("Bio-Materials Laboratory"),
    profIncharge: "Dr. Debrupa Lahiri",
    profInchargeEmail: "debrupa.lahiri@mt.iitr.ac.in",
    staffIncharge: "Sh. Narendra Kumar",
    staffInchargeEmail: "narendra.mmt@iitr.ac.in",
    contacts: [
      { role: "Officer In-Charge", name: "Dr. Debrupa Lahiri", email: "debrupa.lahiri@mt.iitr.ac.in" },
      { role: "Lab In-Charge", name: "Sh. Narendra Kumar", email: "narendra.mmt@iitr.ac.in" },
    ],
    equipments: [
      {
        name: "Ultrasonic Probe Sonicator (PCI Analytics PKS-750F)",
        usage: "Max. Frequency: 25 KHz; Max. Power: 750W; Probe Dia: 1/2\", Titanium; Max. Crushing capacity: 600 ml; Programmable Time: 0-99 hrs 59 min 59 sec; Used for emulsion preparation, homogenization, enzymatic reactions, nanomaterial dispersion, and particle synthesis",
      },
      {
        name: "Ultrasonic Probe Sonicator (Sonics VCX 750)",
        usage: "Make: Vibra-Cell - Sonics & Materials, Inc.; Model: VCX 750",
      },
      {
        name: "Contact Angle Goniometer",
        usage: "Make: KRUSS GmbH Germany; Model: DSA25E; Used for determining contact angle, surface free energy of solids, and surface tension of liquids",
      },
      {
        name: "Vacuum Impregnation System",
        usage: "Indigenous system for polymer impregnation in porous materials; Vacuum: 1 mbar; Internal pressure: up to 12 bar; Make: Vacuum Systems and Products, Bangalore",
      },
      {
        name: "Planetary Ball Mill",
        usage: "Make: Retsch Technology GmbH, Germany; Model: PM 100; Used for size reduction, mixing, and mechanical alloying",
      },
      {
        name: "Double Beam UV-Vis Spectrophotometer",
        usage: "Make: Hitachi; Model: UH-5300; Wavelength range: 200-1000 nm; Spectral band pass: 1 nm; Light source: Xenon flash lamp",
      },
      {
        name: "Controlled Atmosphere Furnace",
        usage: "Make: Nabertherm GmbH, Germany; Model: R50/500/13; Tmax: 1300°C; Can operate in Argon and Nitrogen atmosphere",
      },
      {
        name: "Hydraulic Cold Press",
        usage: "Make: K.K. Engineers, Surat; Capacity: 25T; Used for making green compacts of powdered materials",
      },
      {
        name: "Centrifuge",
        usage: "Make: REMI; Model: C-30BL; Max Speed: 20000 rpm; Max RCF: 35000 g force; Cooling temperature: up to -20°C",
      },
      {
        name: "Electrostatic Sprayer",
        usage: "Make: Red Line Industries Limited; Model: E2100; Power: 260V AC, 60 Hz; Air Supply Pressure: 10-30 PSI",
      },
      {
        name: "True Density Meter",
        usage: "Make: SMART INSTRUMENTS CO. PVT. LTD.; Model: SMART PYCNO 32; Used for measuring true density/specific gravity using helium displacement",
      },
      {
        name: "Hot Air Oven",
        usage: "Operating temperature: 50-250°C; Inside Dimensions: 455x455x455 mm; Digital temperature controller",
      },
      {
        name: "Bio Tribometer Pin/Ball on Disc",
        usage: "Make: Ducom Material Characterization Systems; Model: 836; Wear track dia: 5-40 mm; Disc rotation: 10-1500 rpm; Normal load: 1-50N; Temperature: 550°C; ASTM and ISO compliant",
      },
      {
        name: "Vacuum Pressure Impregnation Chamber",
        usage: "Make: Indian High Vacuum Pumps, Bangalore; Vacuum: up to 10-3 mbar; Pressure Vessel: SS-304 material; Standard pressure: 7 bar; Used for resin infusion and impregnation",
      },
      {
        name: "Low Speed Diamond Cutter",
        usage: "Make: Ducom Material Characterization Systems; Model: 840; Speed Range: 20-300 rpm; Load: 0-300 grams; Max cutting length: 25 mm; Sample size: Dia 3-12 mm",
      },
      {
        name: "Vacuum Oven",
        usage: "Make: Vacuum Techniques Pvt.Ltd., Bangalore; Internal dimension: 300x300x300 mm; Vacuum: 0.01 mbar; Used for heating, degassing, annealing, and vacuum drying",
      },
      {
        name: "Incubator",
        usage: "Operational temperature: 5°C to 60°C; Three side heating elements; Air circulating fan; Microprocessor based digital controller",
      },
    ],
    gallery: [
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Ultrasonic_Probe_Sonicator.png", alt: "Ultrasonic Probe Sonicator", caption: "Ultrasonic Probe Sonicator PKS-750F" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/VCX-750.png", alt: "VCX 750 Sonicator", caption: "VCX 750 Ultrasonic Sonicator" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/DSA25E.png", alt: "Contact Angle Goniometer", caption: "Contact Angle Goniometer DSA25E" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Vacuum_Impregnation_System.png", alt: "Vacuum Impregnation System", caption: "Vacuum Impregnation System" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Planetary_Ball_Mill.png", alt: "Planetary Ball Mill", caption: "Planetary Ball Mill PM 100" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/UH-5300.png", alt: "UV-Vis Spectrophotometer", caption: "Double Beam UV-Vis Spectrophotometer UH-5300" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Controlled_Atmosphere_Furnace.png", alt: "Controlled Atmosphere Furnace", caption: "Controlled Atmosphere Furnace R50/500/13" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Hydraulic_Cold_press:.png", alt: "Hydraulic Cold Press", caption: "Hydraulic Cold Press 25T" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Centrifuge.png", alt: "Centrifuge", caption: "Refrigerated Centrifuge C-30BL" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/E2100.png", alt: "Electrostatic Sprayer", caption: "Electrostatic Sprayer E2100" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/True_Density_Meter.png", alt: "True Density Meter", caption: "True Density Meter SMART PYCNO 32" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Hot_Air_Oven.png", alt: "Hot Air Oven", caption: "Hot Air Oven" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/836.png", alt: "Bio Tribometer", caption: "Bio Tribometer Pin/Ball on Disc 836" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Vacuum_Pressure_Impregnation_Chamber.png", alt: "Vacuum Pressure Impregnation Chamber", caption: "Vacuum Pressure Impregnation Chamber" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/840.png", alt: "Low Speed Diamond Cutter", caption: "Low Speed Diamond Cutter 840" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/Vacuum_oven.png", alt: "Vacuum Oven", caption: "Vacuum Oven" },
      { src: "/data/Lab/Bio-Materials_and_Multiscale_Mechanics_Lab/INCUBATOR.png", alt: "Incubator", caption: "Incubator" },
    ],
  },
  {
    slug: "cellular-and-composite-materials-laboratory",
    name: "Cellular and Composite Materials Laboratory",
    category: "thematic",
    description: "The purpose of this laboratory is to provide knowledge regarding various techniques of fabrication of metal matrix composite (MMCs) and metallic foam. MMCs combine the ductility and toughness of metallic matrices with the modulus and strength of ceramic reinforcements. Foams with a cellular structure have many interesting combinations of physical and mechanical properties such as high stiffness with very low specific weight and high gas permeability with high thermal conductivity.",
    image: ph("Composite Materials Laboratory"),
    profIncharge: "Dr. B. S. S. Daniel",
    profInchargeEmail: "sundar.daniel@mt.iitr.ac.in",
    staffIncharge: "Sh. Dinesh Kumar",
    staffInchargeEmail: "dishamme@iitr.ac.in",
    contacts: [
      { role: "Officer In-Charge", name: "Dr. B. S. S. Daniel", email: "sundar.daniel@mt.iitr.ac.in" },
      { role: "Service Supervisor", name: "Sh. Dinesh Kumar", email: "dishamme@iitr.ac.in" },
    ],
    equipments: [
      {
        name: "Ultrasonic Processor",
        usage: "Make: Sonic and Materials; Model: VCX1500; Power: 1500 watts; Frequency: 20 kHz; Probe: 25 mm diameter",
      },
      {
        name: "Electric Furnace",
        usage: "K-type thermocouple; Spare muffle; Gas flow meter; Argon gas cylinder; Furnace interfaced PC",
      },
      {
        name: "Potentiostat",
        usage: "For electrochemical analysis and testing",
      },
    ],
    analyses: [
      {
        category: "On Going Ph.D. Work",
        items: [
          "Al-Al3Ti based in-situ composite by ultrasonication for high temperature application (Rahul Gupta)",
          "Processing of Steel foam (Himanshu Kala)",
          "Ultrasonic processing of Al alloy (Neeraj Shrivastava)",
        ],
      },
    ],
    gallery: [
      { src: "/data/Lab/Cellular_and_Composite_Materials_Lab/Ultrasonic_Processor.png", alt: "Ultrasonic Processor", caption: "Ultrasonic Processor VCX1500" },
      { src: "/data/Lab/Cellular_and_Composite_Materials_Lab/Electric_furnace.png", alt: "Electric Furnace", caption: "Electric Furnace" },
      { src: "/data/Lab/Cellular_and_Composite_Materials_Lab/Potentiostat.png", alt: "Potentiostat", caption: "Potentiostat" },
    ],
  },
  {
    slug: "electrometallurgy-research-laboratory",
    name: "Electrometallurgy Research Laboratory",
    category: "thematic",
    description: "Electro-metallurgical processing and research.",
    image: ph("Electrometallurgy Laboratory"),
    equipments: [],
  },
  {
    slug: "energy-materials-laboratory",
    name: "Energy Materials Laboratory",
    category: "thematic",
    description: "Energy storage and conversion materials.",
    image: ph("Energy Materials Laboratory"),
    equipments: [],
  },
  {
    slug: "erosion-testing-laboratory",
    name: "Erosion Testing Laboratory",
    category: "thematic",
    description: "Erosion mechanisms and testing.",
    image: ph("Erosion Testing Laboratory"),
    equipments: [],
  },
  {
    slug: "materials-processing-laboratory",
    name: "Materials Processing Laboratory",
    category: "thematic",
    description: "Processing pathways for advanced materials.",
    image: ph("Materials Processing Laboratory"),
    equipments: [],
  },
  {
    slug: "nano-materials-and-application-laboratory",
    name: "Nano Materials and Application Laboratory",
    category: "thematic",
    description: "Nanomaterials and applications.",
    image: ph("Nano Materials Laboratory"),
    equipments: [],
  },
  {
    slug: "phase-transformation-laboratory",
    name: "Phase Transformation Laboratory",
    category: "thematic",
    description: "Phase transformations in alloys/materials.",
    image: ph("Phase Transformation Laboratory"),
    equipments: [],
  },
];
