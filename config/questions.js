const questions = [
  {
    question: "What is the chemical symbol for gold?",
    options: [
      "Ag",
      "Au",
      "Fe",
      "Cu"
    ],
    answer: "Au"
  },
  {
    question: "What is the study of fungi called?",
    options: [
      "Botany",
      "Virology",
      "Mycology",
      "Zoology"
    ],
    answer: "Mycology"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon Dioxide",
      "Argon"
    ],
    answer: "Nitrogen"
  },
  {
    question: "What is the unit of electrical resistance?",
    options: [
      "Ampere",
      "Volt",
      "Ohm",
      "Watt"
    ],
    answer: "Ohm"
  },
  {
    question: "What color is determined by the absence of all light?",
    options: [
      "White",
      "Black",
      "Gray",
      "Red"
    ],
    answer: "Black"
  },
  {
    question: "Which organelle is responsible for photosynthesis in plants?",
    options: [
      "Mitochondria",
      "Nucleus",
      "Chloroplast",
      "Vacuole"
    ],
    answer: "Chloroplast"
  },
  {
    question: "What force keeps planets in orbit around the Sun?",
    options: [
      "Magnetism",
      "Tension",
      "Gravity",
      "Friction"
    ],
    answer: "Gravity"
  },
  {
    question: "At what temperature are Celsius and Fahrenheit equal?",
    options: [
      "0°",
      "-40°",
      "100°",
      "32°"
    ],
    answer: "-40°"
  },
  {
    question: "What is the common name for Sodium Chloride (NaCl)?",
    options: [
      "Sugar",
      "Baking Soda",
      "Table Salt",
      "Vinegar"
    ],
    answer: "Table Salt"
  },
  {
    question: "Which of these is a primary color of light?",
    options: [
      "Yellow",
      "Cyan",
      "Green",
      "Magenta"
    ],
    answer: "Green"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: [
      "Quartz",
      "Iron",
      "Diamond",
      "Tungsten"
    ],
    answer: "Diamond"
  },
  {
    question: "What process is used by the Sun to generate energy?",
    options: [
      "Nuclear Fission",
      "Chemical Reaction",
      "Nuclear Fusion",
      "Combustion"
    ],
    answer: "Nuclear Fusion"
  },
  {
    question: "What is the pH level of a neutral substance?",
    options: [
      "0",
      "7",
      "14",
      "5"
    ],
    answer: "7"
  },
  {
    question: "The speed of sound is fastest through which medium?",
    options: [
      "Air",
      "Water",
      "Vacuum",
      "Solid (Steel)"
    ],
    answer: "Solid (Steel)"
  },
  {
    question: "What does DNA stand for?",
    options: [
      "Deoxyribonucleic Acid",
      "Dioxynucleic Atom",
      "Dynamic Nucleic Acid",
      "Deoxynutrient Acid"
    ],
    answer: "Deoxyribonucleic Acid"
  },
  {
    question: "Which element has the atomic number 1?",
    options: [
      "Oxygen",
      "Helium",
      "Hydrogen",
      "Carbon"
    ],
    answer: "Hydrogen"
  },
  {
    question: "What is the SI unit for measuring mass?",
    options: [
      "Pound",
      "Kilogram",
      "Gram",
      "Liter"
    ],
    answer: "Kilogram"
  },
  {
    question: "A substance that speeds up a chemical reaction without being consumed is called a...",
    options: [
      "Inhibitor",
      "Catalyst",
      "Reagent",
      "Solvent"
    ],
    answer: "Catalyst"
  },
  {
    question: "The process of a solid turning directly into a gas is called...",
    options: [
      "Condensation",
      "Sublimation",
      "Evaporation",
      "Melting"
    ],
    answer: "Sublimation"
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Niels Bohr",
      "Galileo Galilei",
      "Albert Einstein"
    ],
    answer: "Albert Einstein"
  },
  {
    question: "What component of blood carries oxygen?",
    options: [
      "White Blood Cells",
      "Platelets",
      "Plasma",
      "Red Blood Cells"
    ],
    answer: "Red Blood Cells"
  },
  {
    question: "What part of the eye is responsible for color vision?",
    options: [
      "Rods",
      "Cornea",
      "Pupil",
      "Cones"
    ],
    answer: "Cones"
  },
  {
    question: "Which type of lens is used to correct nearsightedness (myopia)?",
    options: [
      "Convex",
      "Concave",
      "Cylindrical",
      "Prismatic"
    ],
    answer: "Concave"
  },
  {
    question: "What is the force of attraction between two masses called?",
    options: [
      "Inertia",
      "Momentum",
      "Tension",
      "Gravitation"
    ],
    answer: "Gravitation"
  },
  {
    question: "The movement of tectonic plates is caused by convection currents in which layer of the Earth?",
    options: [
      "Crust",
      "Mantle",
      "Outer Core",
      "Inner Core"
    ],
    answer: "Mantle"
  },
  {
    question: "What is the chemical symbol for iron?",
    options: [
      "I",
      "In",
      "Fe",
      "Ir"
    ],
    answer: "Fe"
  },
  {
    question: "What is the primary function of the cerebellum?",
    options: [
      "Memory",
      "Emotion",
      "Balance and Coordination",
      "Breathing"
    ],
    answer: "Balance and Coordination"
  },
  {
    question: "How many bones are in the average adult human body?",
    options: [
      "206",
      "300",
      "150",
      "100"
    ],
    answer: "206"
  },
  {
    question: "Which subatomic particle has a negative charge?",
    options: [
      "Proton",
      "Neutron",
      "Electron",
      "Photon"
    ],
    answer: "Electron"
  },
  {
    question: "What is the process of generating electricity by moving a conductor through a magnetic field?",
    options: [
      "Conduction",
      "Induction",
      "Radiation",
      "Convection"
    ],
    answer: "Induction"
  },
  {
    question: "What is the name of the galaxy that contains our solar system?",
    options: [
      "Andromeda",
      "Triangulum",
      "Pinwheel",
      "Milky Way"
    ],
    answer: "Milky Way"
  },
  {
    question: "The measurement of how much light is absorbed by a solution is known as...",
    options: [
      "Fluorescence",
      "Reflectance",
      "Transmittance",
      "Absorbance"
    ],
    answer: "Absorbance"
  },
  {
    question: "Which type of rock is formed from the cooling and solidification of magma or lava?",
    options: [
      "Sedimentary",
      "Metamorphic",
      "Igneous",
      "Fossilized"
    ],
    answer: "Igneous"
  },
  {
    question: "What is the formula for calculating Density?",
    options: [
      "Mass / Volume",
      "Force x Distance",
      "Mass x Acceleration",
      "Pressure x Area"
    ],
    answer: "Mass / Volume"
  },
  {
    question: "What is the common term for the vibration of the Earth's crust caused by a sudden release of energy?",
    options: [
      "Tsunami",
      "Volcano",
      "Landslide",
      "Earthquake"
    ],
    answer: "Earthquake"
  },
  {
    question: "What is the primary solvent in the human body?",
    options: [
      "Oil",
      "Alcohol",
      "Water",
      "Acid"
    ],
    answer: "Water"
  },
  {
    question: "Who is credited with inventing the telephone?",
    options: [
      "Thomas Edison",
      "Nikola Tesla",
      "Alexander Graham Bell",
      "Guglielmo Marconi"
    ],
    answer: "Alexander Graham Bell"
  },
  {
    question: "What type of energy is stored in a compressed spring?",
    options: [
      "Kinetic",
      "Thermal",
      "Chemical",
      "Elastic Potential"
    ],
    answer: "Elastic Potential"
  },
  {
    question: "What is the scientific unit of force?",
    options: [
      "Joule",
      "Pascal",
      "Newton",
      "Hertz"
    ],
    answer: "Newton"
  },
  {
    question: "The ozone layer is found in which layer of the Earth's atmosphere?",
    options: [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Thermosphere"
    ],
    answer: "Stratosphere"
  },
  {
    question: "What is the function of red blood cells?",
    options: [
      "Fight infection",
      "Clot blood",
      "Carry oxygen",
      "Produce antibodies"
    ],
    answer: "Carry oxygen"
  },
  {
    question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon Dioxide",
      "Hydrogen"
    ],
    answer: "Carbon Dioxide"
  },
  {
    question: "What is the term for an atom that has gained or lost an electron?",
    options: [
      "Molecule",
      "Isotope",
      "Ion",
      "Compound"
    ],
    answer: "Ion"
  },
  {
    question: "Who proposed the laws of motion and universal gravitation?",
    options: [
      "Galileo Galilei",
      "Robert Hooke",
      "Isaac Newton",
      "Johannes Kepler"
    ],
    answer: "Isaac Newton"
  },
  {
    question: "What is the name of the protective protein that makes up hair and nails?",
    options: [
      "Collagen",
      "Elastin",
      "Keratin",
      "Hemoglobin"
    ],
    answer: "Keratin"
  },
  {
    question: "What is the brightest star in the night sky?",
    options: [
      "Polaris",
      "Alpha Centauri",
      "Sirius",
      "Vega"
    ],
    answer: "Sirius"
  },
  {
    question: "In genetics, what is the term for an organism's observable characteristics?",
    options: [
      "Genotype",
      "Allele",
      "Locus",
      "Phenotype"
    ],
    answer: "Phenotype"
  },
  {
    question: "The phenomenon where light bends as it passes from one medium to another is called...",
    options: [
      "Reflection",
      "Diffraction",
      "Refraction",
      "Absorption"
    ],
    answer: "Refraction"
  },
  {
    question: "What is the chemical formula for Methane?",
    options: [
      "C2H6",
      "CH4",
      "CO2",
      "C6H12O6"
    ],
    answer: "CH4"
  },
  {
    question: "What does a barometer measure?",
    options: [
      "Temperature",
      "Humidity",
      "Wind Speed",
      "Atmospheric Pressure"
    ],
    answer: "Atmospheric Pressure"
  },
  {
    question: "Which ancient civilization built the pyramids of Giza?",
    options: [
      "Roman",
      "Greek",
      "Egyptian",
      "Mesopotamian"
    ],
    answer: "Egyptian"
  },
  {
    question: "In which year did World War I officially begin?",
    options: [
      "1910",
      "1914",
      "1918",
      "1939"
    ],
    answer: "1914"
  },
  {
    question: "Who was the first Emperor of Rome?",
    options: [
      "Julius Caesar",
      "Nero",
      "Augustus",
      "Constantine"
    ],
    answer: "Augustus"
  },
  {
    question: "What country sold the Louisiana Purchase to the United States?",
    options: [
      "Spain",
      "Great Britain",
      "France",
      "Portugal"
    ],
    answer: "France"
  },
  {
    question: "The fall of the Berlin Wall occurred in which year?",
    options: [
      "1985",
      "1989",
      "1991",
      "2000"
    ],
    answer: "1989"
  },
  {
    question: "The Magna Carta was signed in which year?",
    options: [
      "1066",
      "1215",
      "1492",
      "1776"
    ],
    answer: "1215"
  },
  {
    question: "Who led the Protestant Reformation?",
    options: [
      "John Calvin",
      "Martin Luther",
      "Henry VIII",
      "Jan Hus"
    ],
    answer: "Martin Luther"
  },
  {
    question: "The Industrial Revolution largely began in which country?",
    options: [
      "United States",
      "Germany",
      "Great Britain",
      "France"
    ],
    answer: "Great Britain"
  },
  {
    question: "What famous trade route connected the East and West?",
    options: [
      "Spice Route",
      "Appian Way",
      "Silk Road",
      "King's Highway"
    ],
    answer: "Silk Road"
  },
  {
    question: "Which empire was ruled by Genghis Khan?",
    options: [
      "Ottoman",
      "Persian",
      "Byzantine",
      "Mongol"
    ],
    answer: "Mongol"
  },
  {
    question: "The Hundred Years' War was fought primarily between which two countries?",
    options: [
      "Spain and Portugal",
      "France and England",
      "Germany and Russia",
      "Italy and Austria"
    ],
    answer: "France and England"
  },
  {
    question: "What event is considered the start of the French Revolution?",
    options: [
      "The Reign of Terror",
      "Storming of the Bastille",
      "Execution of Louis XVI",
      "Napoleonic Coup"
    ],
    answer: "Storming of the Bastille"
  },
  {
    question: "Who was the leader of Nazi Germany during World War II?",
    options: [
      "Benito Mussolini",
      "Joseph Stalin",
      "Adolf Hitler",
      "Winston Churchill"
    ],
    answer: "Adolf Hitler"
  },
  {
    question: "Which Portuguese explorer was the first to circumnavigate the Earth?",
    options: [
      "Vasco da Gama",
      "Christopher Columbus",
      "Ferdinand Magellan",
      "Bartolomeu Dias"
    ],
    answer: "Ferdinand Magellan"
  },
  {
    question: "What war resulted in the formation of the United States?",
    options: [
      "Civil War",
      "French and Indian War",
      "Revolutionary War",
      "War of 1812"
    ],
    answer: "Revolutionary War"
  },
  {
    question: "What was the dominant religion of the Byzantine Empire?",
    options: [
      "Roman Catholicism",
      "Eastern Orthodox Christianity",
      "Islam",
      "Judaism"
    ],
    answer: "Eastern Orthodox Christianity"
  },
  {
    question: "The attack on Pearl Harbor happened in what year?",
    options: [
      "1939",
      "1940",
      "1941",
      "1942"
    ],
    answer: "1941"
  },
  {
    question: "Who was the famous Greek philosopher who taught Plato?",
    options: [
      "Aristotle",
      "Socrates",
      "Pythagoras",
      "Homer"
    ],
    answer: "Socrates"
  },
  {
    question: "What term is used for the devastating economic downturn of the 1930s?",
    options: [
      "The Recession",
      "The Depression",
      "The Great Crash",
      "The Panic"
    ],
    answer: "The Depression"
  },
  {
    question: "The city of Constantinople is now known by what name?",
    options: [
      "Ankara",
      "Istanbul",
      "Athens",
      "Beirut"
    ],
    answer: "Istanbul"
  },
  {
    question: "Which civilization invented the concept of zero?",
    options: [
      "Chinese",
      "Roman",
      "Mayan",
      "Indian"
    ],
    answer: "Indian"
  },
  {
    question: "What was the primary goal of the Crusades?",
    options: [
      "Trade with the East",
      "Spreading Christianity to Asia",
      "Capturing Jerusalem",
      "Exploring new lands"
    ],
    answer: "Capturing Jerusalem"
  },
  {
    question: "Who was the Russian Czar executed during the 1917 revolution?",
    options: [
      "Peter the Great",
      "Ivan the Terrible",
      "Nicholas II",
      "Alexander I"
    ],
    answer: "Nicholas II"
  },
  {
    question: "What was the name of the ship that brought the Pilgrims to America?",
    options: [
      "Pinta",
      "Santa Maria",
      "Mayflower",
      "Discovery"
    ],
    answer: "Mayflower"
  },
  {
    question: "The Renaissance began in which European country?",
    options: [
      "France",
      "Spain",
      "Italy",
      "England"
    ],
    answer: "Italy"
  },
  {
    question: "Which major battle marked the end of Napoleon Bonaparte's rule?",
    options: [
      "Battle of Austerlitz",
      "Battle of Trafalgar",
      "Battle of Waterloo",
      "Battle of Borodino"
    ],
    answer: "Battle of Waterloo"
  },
  {
    question: "Which ancient structure was built by the Emperor Qin Shi Huang?",
    options: [
      "Great Wall of China",
      "Parthenon",
      "Colosseum",
      "Stonehenge"
    ],
    answer: "Great Wall of China"
  },
  {
    question: "The period of political tension between the US and the Soviet Union after WWII is known as the...",
    options: [
      "Great War",
      "Cold War",
      "Korean War",
      "Space Race"
    ],
    answer: "Cold War"
  },
  {
    question: "Who was the Egyptian queen known for her relationships with Julius Caesar and Mark Antony?",
    options: [
      "Nefertiti",
      "Hatshepsut",
      "Cleopatra",
      "Ramses II"
    ],
    answer: "Cleopatra"
  },
  {
    question: "What major event happened in 1492?",
    options: [
      "Discovery of America",
      "Fall of Constantinople",
      "Gutenberg printing press invented",
      "Magna Carta signed"
    ],
    answer: "Discovery of America"
  },
  {
    question: "The treaty that formally ended World War I was the Treaty of...",
    options: [
      "Paris",
      "Ghent",
      "Versailles",
      "Vienna"
    ],
    answer: "Versailles"
  },
  {
    question: "What was the former name of Iran?",
    options: [
      "Mesopotamia",
      "Persia",
      "Canaan",
      "Assyria"
    ],
    answer: "Persia"
  },
  {
    question: "In ancient Rome, what was the term for the common, working-class citizens?",
    options: [
      "Patricians",
      "Senators",
      "Equestrians",
      "Plebeians"
    ],
    answer: "Plebeians"
  },
  {
    question: "Who was the leader of India's independence movement using non-violent resistance?",
    options: [
      "Jawaharlal Nehru",
      "Indira Gandhi",
      "Mohandas Gandhi",
      "Subhas Chandra Bose"
    ],
    answer: "Mohandas Gandhi"
  },
  {
    question: "Which battle is famous for the phrase 'Remember the Alamo'?",
    options: [
      "Battle of San Jacinto",
      "Battle of Gettysburg",
      "Battle of the Alamo",
      "Battle of Bunker Hill"
    ],
    answer: "Battle of the Alamo"
  },
  {
    question: "The Ming Dynasty ruled which country?",
    options: [
      "Japan",
      "Korea",
      "China",
      "India"
    ],
    answer: "China"
  },
  {
    question: "What 18th-century movement emphasized reason and individualism?",
    options: [
      "Romanticism",
      "Enlightenment",
      "Abolitionism",
      "Mercantilism"
    ],
    answer: "Enlightenment"
  },
  {
    question: "Who was the Queen of England during the defeat of the Spanish Armada?",
    options: [
      "Mary I",
      "Elizabeth I",
      "Victoria",
      "Anne"
    ],
    answer: "Elizabeth I"
  },
  {
    question: "What was the name of the system of racial segregation in South Africa?",
    options: [
      "Imperialism",
      "Colonialism",
      "Apartheid",
      "Zionism"
    ],
    answer: "Apartheid"
  },
  {
    question: "The Bubonic Plague is commonly known as the...",
    options: [
      "Great Fever",
      "Black Death",
      "Spanish Flu",
      "Red Tide"
    ],
    answer: "Black Death"
  },
  {
    question: "The Suez Canal connects the Mediterranean Sea to which other body of water?",
    options: [
      "Black Sea",
      "Red Sea",
      "Atlantic Ocean",
      "Persian Gulf"
    ],
    answer: "Red Sea"
  },
  {
    question: "Which U.S. President ended slavery with the Emancipation Proclamation?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Theodore Roosevelt"
    ],
    answer: "Abraham Lincoln"
  },
  {
    question: "What type of weapon was used against the Japanese cities of Hiroshima and Nagasaki?",
    options: [
      "Chemical bombs",
      "Napalm bombs",
      "Atomic bombs",
      "Biological weapons"
    ],
    answer: "Atomic bombs"
  },
  {
    question: "Who was the first female Prime Minister of the UK?",
    options: [
      "Theresa May",
      "Margaret Thatcher",
      "Indira Gandhi",
      "Angela Merkel"
    ],
    answer: "Margaret Thatcher"
  },
  {
    question: "The 'Stone Age' is named for the primary material used for what?",
    options: [
      "Housing",
      "Art",
      "Tools and Weapons",
      "Clothing"
    ],
    answer: "Tools and Weapons"
  },
  {
    question: "What document established self-government in Plymouth Colony?",
    options: [
      "Constitution",
      "Declaration of Independence",
      "Magna Carta",
      "Mayflower Compact"
    ],
    answer: "Mayflower Compact"
  },
  {
    question: "The first Olympic Games were held in which country?",
    options: [
      "Rome",
      "Egypt",
      "Greece",
      "China"
    ],
    answer: "Greece"
  },
  {
    question: "Which major world religion originated in India and focuses on the teachings of the Buddha?",
    options: [
      "Hinduism",
      "Islam",
      "Buddhism",
      "Sikhism"
    ],
    answer: "Buddhism"
  },
  {
    question: "Who was the famous military leader who conquered vast territories and established a large empire in the 4th century BC?",
    options: [
      "Julius Caesar",
      "Alexander the Great",
      "Hannibal Barca",
      "Cyrus the Great"
    ],
    answer: "Alexander the Great"
  },
  {
    question: "The Cold War ended with the dissolution of which political entity?",
    options: [
      "The Warsaw Pact",
      "Yugoslavia",
      "The Soviet Union (USSR)",
      "The German Democratic Republic"
    ],
    answer: "The Soviet Union (USSR)"
  },

  {
    question: "What is the capital city of Canada?",
    options: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Ottawa"
    ],
    answer: "Ottawa"
  },
  {
    question: "Which continent is the most populated?",
    options: [
      "Africa",
      "Europe",
      "Asia",
      "North America"
    ],
    answer: "Asia"
  },
  {
    question: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Yangtze River",
      "Mississippi River",
      "Nile River"
    ],
    answer: "Nile River"
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: [
      "Andes",
      "Rockies",
      "Alps",
      "Himalayas"
    ],
    answer: "Himalayas"
  },
  {
    question: "What is the largest country in the world by land area?",
    options: [
      "China",
      "Canada",
      "United States",
      "Russia"
    ],
    answer: "Russia"
  },
  {
    question: "Which desert is the largest hot desert in the world?",
    options: [
      "Gobi",
      "Kalahari",
      "Arabian",
      "Sahara"
    ],
    answer: "Sahara"
  },
  {
    question: "The Great Barrier Reef is located off the coast of which country?",
    options: [
      "Brazil",
      "Indonesia",
      "Australia",
      "Mexico"
    ],
    answer: "Australia"
  },
  {
    question: "What is the capital city of Brazil?",
    options: [
      "Rio de Janeiro",
      "São Paulo",
      "Brasília",
      "Salvador"
    ],
    answer: "Brasília"
  },
  {
    question: "Which country is both an island and a continent?",
    options: [
      "Greenland",
      "Japan",
      "Madagascar",
      "Australia"
    ],
    answer: "Australia"
  },
  {
    question: "What is the narrow strip of land connecting two larger landmasses called?",
    options: [
      "Strait",
      "Peninsula",
      "Isthmus",
      "Archipelago"
    ],
    answer: "Isthmus"
  },
  {
    question: "The Mediterranean Sea connects to the Atlantic Ocean via which strait?",
    options: [
      "Suez Canal",
      "Strait of Hormuz",
      "Strait of Gibraltar",
      "Bosphorus Strait"
    ],
    answer: "Strait of Gibraltar"
  },
  {
    question: "Which South American country has the longest coastline?",
    options: [
      "Brazil",
      "Argentina",
      "Chile",
      "Peru"
    ],
    answer: "Chile"
  },
  {
    question: "What is the largest lake in Africa by surface area?",
    options: [
      "Lake Malawi",
      "Lake Victoria",
      "Lake Tanganyika",
      "Lake Turkana"
    ],
    answer: "Lake Victoria"
  },
  {
    question: "What is the capital of South Korea?",
    options: [
      "Busan",
      "Pyongyang",
      "Tokyo",
      "Seoul"
    ],
    answer: "Seoul"
  },
  {
    question: "Which latitude line marks the boundary between the North Temperate Zone and the North Frigid Zone?",
    options: [
      "Equator",
      "Tropic of Cancer",
      "Arctic Circle",
      "Tropic of Capricorn"
    ],
    answer: "Arctic Circle"
  },
  {
    question: "The Pyrenees mountains separate which two European countries?",
    options: [
      "Germany and Poland",
      "Italy and Switzerland",
      "France and Spain",
      "Greece and Turkey"
    ],
    answer: "France and Spain"
  },
  {
    question: "What country is geographically shaped like a boot?",
    options: [
      "Greece",
      "Spain",
      "Italy",
      "Portugal"
    ],
    answer: "Italy"
  },
  {
    question: "The lowest point on Earth's land surface is found in the vicinity of which body of water?",
    options: [
      "Black Sea",
      "Red Sea",
      "Dead Sea",
      "Caspian Sea"
    ],
    answer: "Dead Sea"
  },
  {
    question: "Which US state has the most miles of coastline?",
    options: [
      "California",
      "Florida",
      "Texas",
      "Alaska"
    ],
    answer: "Alaska"
  },
  {
    question: "In which city would you find the Colosseum?",
    options: [
      "Paris",
      "London",
      "Rome",
      "Athens"
    ],
    answer: "Rome"
  },
  {
    question: "What is the largest archipelago (group of islands) in the world?",
    options: [
      "Philippines",
      "Japan",
      "Indonesia",
      "Caribbean"
    ],
    answer: "Indonesia"
  },
  {
    question: "Which major world city is divided by the Bosphorus Strait, linking two continents?",
    options: [
      "Dubai",
      "Cairo",
      "Istanbul",
      "Moscow"
    ],
    answer: "Istanbul"
  },
  {
    question: "What is the capital of Germany?",
    options: [
      "Frankfurt",
      "Munich",
      "Hamburg",
      "Berlin"
    ],
    answer: "Berlin"
  },
  {
    question: "The Ring of Fire, a major area of volcanoes and earthquakes, borders which ocean?",
    options: [
      "Atlantic",
      "Indian",
      "Arctic",
      "Pacific"
    ],
    answer: "Pacific"
  },
  {
    question: "The currency used in Japan is the...",
    options: [
      "Won",
      "Yuan",
      "Yen",
      "Dollar"
    ],
    answer: "Yen"
  },
  {
    question: "Which country is landlocked by the Himalayas, bordered by China and India?",
    options: [
      "Bangladesh",
      "Pakistan",
      "Nepal",
      "Bhutan"
    ],
    answer: "Nepal"
  },
  {
    question: "The Prime Meridian (0 degrees longitude) passes through which city?",
    options: [
      "Paris",
      "New York",
      "London (Greenwich)",
      "Cairo"
    ],
    answer: "London (Greenwich)"
  },
  {
    question: "What is the highest mountain peak in Africa?",
    options: [
      "Mount Kenya",
      "Mount Stanley",
      "Mount Kilimanjaro",
      "Table Mountain"
    ],
    answer: "Mount Kilimanjaro"
  },
  {
    question: "The Panama Canal connects which two oceans?",
    options: [
      "Atlantic and Pacific",
      "Pacific and Indian",
      "Atlantic and Indian",
      "Arctic and Atlantic"
    ],
    answer: "Atlantic and Pacific"
  },
  {
    question: "What is the capital of Egypt?",
    options: [
      "Alexandria",
      "Giza",
      "Cairo",
      "Luxor"
    ],
    answer: "Cairo"
  },
  {
    question: "The term 'monsoon' primarily refers to a seasonal...",
    options: [
      "Drought",
      "Wind change",
      "Volcanic eruption",
      "Tide"
    ],
    answer: "Wind change"
  },
  {
    question: "Which of these countries is NOT part of Scandinavia?",
    options: [
      "Norway",
      "Finland",
      "Sweden",
      "Denmark"
    ],
    answer: "Finland"
  },
  {
    question: "What large landform is characterized by high elevation, rugged relief, and a small summit area?",
    options: [
      "Plateau",
      "Plain",
      "Hill",
      "Mountain"
    ],
    answer: "Mountain"
  },
  {
    question: "Which body of water lies between Europe and North America?",
    options: [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean"
    ],
    answer: "Atlantic Ocean"
  },
  {
    question: "What is the name of the narrow, deep inlet of the sea between high cliffs, typically found in Norway?",
    options: [
      "Canyon",
      "Delta",
      "Fjord",
      "Lagoon"
    ],
    answer: "Fjord"
  },
  {
    question: "The Eiffel Tower is located in which European city?",
    options: [
      "Rome",
      "Paris",
      "Vienna",
      "Brussels"
    ],
    answer: "Paris"
  },
  {
    question: "What is the capital of New Zealand?",
    options: [
      "Auckland",
      "Christchurch",
      "Wellington",
      "Queenstown"
    ],
    answer: "Wellington"
  },
  {
    question: "Which continent contains the Amazon Rainforest?",
    options: [
      "Africa",
      "Asia",
      "South America",
      "North America"
    ],
    answer: "South America"
  },
  {
    question: "Which country is separated from Africa by the Strait of Gibraltar?",
    options: [
      "Portugal",
      "Italy",
      "Spain",
      "Greece"
    ],
    answer: "Spain"
  },
  {
    question: "The River Thames flows through which capital city?",
    options: [
      "Paris",
      "Dublin",
      "London",
      "Berlin"
    ],
    answer: "London"
  },
  {
    question: "Which Asian country consists of four main islands: Honshu, Hokkaido, Kyushu, and Shikoku?",
    options: [
      "South Korea",
      "China",
      "Philippines",
      "Japan"
    ],
    answer: "Japan"
  },
  {
    question: "The Gobi Desert is located primarily in which two countries?",
    options: [
      "India and Pakistan",
      "China and Mongolia",
      "Russia and China",
      "Kazakhstan and Uzbekistan"
    ],
    answer: "China and Mongolia"
  },
  {
    question: "What is the capital of Afghanistan?",
    options: [
      "Islamabad",
      "Tehran",
      "Kabul",
      "Baghdad"
    ],
    answer: "Kabul"
  },
  {
    question: "Which is the smallest country in the world by area?",
    options: [
      "Monaco",
      "Nauru",
      "Vatican City",
      "San Marino"
    ],
    answer: "Vatican City"
  },
  {
    question: "What is the largest sea in the world?",
    options: [
      "Caribbean Sea",
      "Mediterranean Sea",
      "South China Sea",
      "Arabian Sea"
    ],
    answer: "South China Sea"
  },
  {
    question: "The Andes Mountains run along the western edge of which continent?",
    options: [
      "North America",
      "Africa",
      "South America",
      "Asia"
    ],
    answer: "South America"
  },
  {
    question: "In which US state is the Grand Canyon located?",
    options: [
      "Utah",
      "Colorado",
      "New Mexico",
      "Arizona"
    ],
    answer: "Arizona"
  },
  {
    question: "The city of Venice is famous for its use of what method of transport?",
    options: [
      "Buses",
      "Gondolas/Boats",
      "Subways",
      "Trams"
    ],
    answer: "Gondolas/Boats"
  },
  {
    question: "Which two countries share the longest international land border?",
    options: [
      "USA and Mexico",
      "China and Russia",
      "USA and Canada",
      "India and China"
    ],
    answer: "USA and Canada"
  },
  {
    question: "What term refers to the frozen ground that remains stable year-round, primarily in Arctic regions?",
    options: [
      "Tundra",
      "Glacier",
      "Permafrost",
      "Ice Sheet"
    ],
    answer: "Permafrost"
  },
   {
    question: "Who painted the 'Mona Lisa'?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet"
    ],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the setting for the majority of William Shakespeare's play 'Hamlet'?",
    options: [
      "Rome",
      "Scotland",
      "Denmark",
      "Italy"
    ],
    answer: "Denmark"
  },
  {
    question: "Which author wrote the dystopian novel '1984'?",
    options: [
      "Aldous Huxley",
      "George Orwell",
      "Ray Bradbury",
      "J.R.R. Tolkien"
    ],
    answer: "George Orwell"
  },
  {
    question: "The term 'Renaissance' literally means what?",
    options: [
      "New Age",
      "Rebirth",
      "Golden Era",
      "Artistic Movement"
    ],
    answer: "Rebirth"
  },
  {
    question: "Which of the following is an example of an Impressionist painter?",
    options: [
      "Salvador Dali",
      "Michelangelo",
      "Claude Monet",
      "Andy Warhol"
    ],
    answer: "Claude Monet"
  },
  {
    question: "Who composed the famous 'Symphony No. 5'?",
    options: [
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Johann Sebastian Bach",
      "Frédéric Chopin"
    ],
    answer: "Ludwig van Beethoven"
  },
  {
    question: "Which literary figure created the characters Sherlock Holmes and Dr. Watson?",
    options: [
      "Agatha Christie",
      "Arthur Conan Doyle",
      "Charles Dickens",
      "Edgar Allan Poe"
    ],
    answer: "Arthur Conan Doyle"
  },
  {
    question: "What genre of art is characterized by dreamlike, illogical scenes, such as those by Salvador Dalí?",
    options: [
      "Cubism",
      "Surrealism",
      "Abstract Expressionism",
      "Futurism"
    ],
    answer: "Surrealism"
  },
  {
    question: "Who wrote 'The Odyssey' and 'The Iliad'?",
    options: [
      "Virgil",
      "Sophocles",
      "Homer",
      "Plato"
    ],
    answer: "Homer"
  },
  {
    question: "The musical term 'forte' (f) means what?",
    options: [
      "Slowly",
      "Softly",
      "Loudly",
      "Quickly"
    ],
    answer: "Loudly"
  },
  {
    question: "Which novel opens with the line: 'Call me Ishmael'?",
    options: [
      "Moby Dick",
      "The Great Gatsby",
      "The Scarlet Letter",
      "Frankenstein"
    ],
    answer: "Moby Dick"
  },
  {
    question: "The color wheel organizes colors into what three main categories?",
    options: [
      "Bright, Dark, Medium",
      "Primary, Secondary, Tertiary",
      "Warm, Cool, Neutral",
      "Red, Yellow, Blue"
    ],
    answer: "Primary, Secondary, Tertiary"
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    options: [
      "Charlotte Brontë",
      "Jane Austen",
      "Louisa May Alcott",
      "Virginia Woolf"
    ],
    answer: "Jane Austen"
  },
  {
    question: "Which painter famously cut off part of his own ear?",
    options: [
      "Paul Cézanne",
      "Paul Gauguin",
      "Vincent van Gogh",
      "Pierre-Auguste Renoir"
    ],
    answer: "Vincent van Gogh"
  },
  {
    question: "In poetry, a group of lines forming the basic recurring metrical unit is called a...",
    options: [
      "Verse",
      "Rhyme",
      "Stanza",
      "Sonnet"
    ],
    answer: "Stanza"
  },
  {
    question: "The famous ballet 'The Nutcracker' was composed by which Russian composer?",
    options: [
      "Igor Stravinsky",
      "Sergei Rachmaninoff",
      "Pyotr Ilyich Tchaikovsky",
      "Dmitri Shostakovich"
    ],
    answer: "Pyotr Ilyich Tchaikovsky"
  },
  {
    question: "Which novel features the character Jay Gatsby?",
    options: [
      "To Kill a Mockingbird",
      "The Great Gatsby",
      "The Catcher in the Rye",
      "Of Mice and Men"
    ],
    answer: "The Great Gatsby"
  },
  {
    question: "What is the primary medium used in a fresco painting?",
    options: [
      "Oil on canvas",
      "Watercolor on paper",
      "Pigment on wet plaster",
      "Ink on silk"
    ],
    answer: "Pigment on wet plaster"
  },
  {
    question: "Who wrote the play 'Macbeth'?",
    options: [
      "Christopher Marlowe",
      "Ben Jonson",
      "William Shakespeare",
      "Oscar Wilde"
    ],
    answer: "William Shakespeare"
  },
  {
    question: "What instrument is known as the 'King of Instruments'?",
    options: [
      "Piano",
      "Violin",
      "Organ",
      "Cello"
    ],
    answer: "Organ"
  },
  {
    question: "What is the main character's name in 'Alice's Adventures in Wonderland'?",
    options: [
      "Dorothy",
      "Wendy",
      "Alice",
      "Matilda"
    ],
    answer: "Alice"
  },
  {
    question: "Which famous sculpture depicts the biblical figure David?",
    options: [
      "Donatello's David",
      "Michelangelo's David",
      "Bernini's David",
      "Rodin's The Thinker"
    ],
    answer: "Michelangelo's David"
  },
  {
    question: "In literature, a 'protagonist' is the...",
    options: [
      "Main villain",
      "Main character",
      "Supporting character",
      "Author"
    ],
    answer: "Main character"
  },
  {
    question: "Which German composer was deaf for most of his composing career?",
    options: [
      "Bach",
      "Handel",
      "Mozart",
      "Beethoven"
    ],
    answer: "Beethoven"
  },
  {
    question: "The literary movement known as 'Romanticism' emphasized what concept?",
    options: [
      "Reason and logic",
      "Emotion and individualism",
      "Technological progress",
      "Political realism"
    ],
    answer: "Emotion and individualism"
  },
  {
    question: "The Hagia Sophia in Istanbul is a famous example of which architectural style?",
    options: [
      "Gothic",
      "Byzantine",
      "Romanesque",
      "Baroque"
    ],
    answer: "Byzantine"
  },
  {
    question: "Who wrote the children's classic 'Where the Wild Things Are'?",
    options: [
      "Dr. Seuss",
      "Maurice Sendak",
      "E.B. White",
      "Beatrix Potter"
    ],
    answer: "Maurice Sendak"
  },
  {
    question: "Which musical instrument typically has 88 keys?",
    options: [
      "Harpsichord",
      "Organ",
      "Piano",
      "Synthesizer"
    ],
    answer: "Piano"
  },
  {
    question: "The term 'Cubism' in art is most associated with which painter?",
    options: [
      "Claude Monet",
      "Salvador Dalí",
      "Pablo Picasso",
      "Jackson Pollock"
    ],
    answer: "Pablo Picasso"
  },
  {
    question: "What type of traditional Japanese poetry consists of three phrases with a 5, 7, 5 syllable structure?",
    options: [
      "Tanka",
      "Haiku",
      "Sonnets",
      "Limerick"
    ],
    answer: "Haiku"
  },
  {
    question: "Who composed the opera 'The Marriage of Figaro'?",
    options: [
      "Giuseppe Verdi",
      "Richard Wagner",
      "Wolfgang Amadeus Mozart",
      "Giacomo Puccini"
    ],
    answer: "Wolfgang Amadeus Mozart"
  },
  {
    question: "The novel 'To Kill a Mockingbird' is set in which US state?",
    options: [
      "New York",
      "Alabama",
      "California",
      "Texas"
    ],
    answer: "Alabama"
  },
  {
    question: "What is a 'still life' painting?",
    options: [
      "A portrait of a person",
      "A landscape painting",
      "An arrangement of inanimate objects",
      "A historical scene"
    ],
    answer: "An arrangement of inanimate objects"
  },
  {
    question: "Which famous literary work begins with the words, 'All happy families are alike; each unhappy family is unhappy in its own way'?",
    options: [
      "War and Peace",
      "Anna Karenina",
      "Crime and Punishment",
      "The Brothers Karamazov"
    ],
    answer: "Anna Karenina"
  },
  {
    question: "The architectural style characterized by pointed arches, flying buttresses, and stained-glass windows is...",
    options: [
      "Romanesque",
      "Gothic",
      "Baroque",
      "Neoclassical"
    ],
    answer: "Gothic"
  },
  {
    question: "Which author is known for the children's books 'The Chronicles of Narnia'?",
    options: [
      "J.K. Rowling",
      "Roald Dahl",
      "C.S. Lewis",
      "L. Frank Baum"
    ],
    answer: "C.S. Lewis"
  },
  {
    question: "The painting 'The Starry Night' features a swirling night sky and is the work of...",
    options: [
      "Paul Gauguin",
      "Vincent van Gogh",
      "Edvard Munch",
      "Georges Seurat"
    ],
    answer: "Vincent van Gogh"
  },
  {
    question: "In Greek Mythology, who wrote the epic poems about the Trojan War?",
    options: [
      "Hesiod",
      "Homer",
      "Socrates",
      "Aristotle"
    ],
    answer: "Homer"
  },
  {
    question: "What is the process of carving or etching a design into a hard material like metal, glass, or stone called?",
    options: [
      "Modeling",
      "Etching",
      "Casting",
      "Fusing"
    ],
    answer: "Etching"
  },
  {
    question: "Which famous piece of literature tells the story of two star-crossed lovers in Verona?",
    options: [
      "Othello",
      "Romeo and Juliet",
      "A Midsummer Night's Dream",
      "Antony and Cleopatra"
    ],
    answer: "Romeo and Juliet"
  },
  {
    question: "Which musical period is known for composers like Bach and Handel?",
    options: [
      "Classical",
      "Baroque",
      "Romantic",
      "Modern"
    ],
    answer: "Baroque"
  },
  {
    question: "The statue of 'The Thinker' was created by which French sculptor?",
    options: [
      "Auguste Rodin",
      "Claude Monet",
      "Edgar Degas",
      "Paul Cézanne"
    ],
    answer: "Auguste Rodin"
  },
  {
    question: "Who wrote the classic novel 'Wuthering Heights'?",
    options: [
      "Charlotte Brontë",
      "Emily Brontë",
      "Anne Brontë",
      "Jane Austen"
    ],
    answer: "Emily Brontë"
  },
  {
    question: "In art, the term 'sfumato' is used to describe a blurring of lines and colors, famously used by...",
    options: [
      "Raphael",
      "Michelangelo",
      "Leonardo da Vinci",
      "Titian"
    ],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Which American poet wrote 'The Raven'?",
    options: [
      "Robert Frost",
      "Walt Whitman",
      "Edgar Allan Poe",
      "Emily Dickinson"
    ],
    answer: "Edgar Allan Poe"
  },
  {
    question: "What is the term for a painting technique where paint is applied thickly to create texture?",
    options: [
      "Impasto",
      "Sfumato",
      "Fresco",
      "Tempera"
    ],
    answer: "Impasto"
  },
  {
    question: "Which Greek comedy writer is known for his satirical plays like 'Lysistrata'?",
    options: [
      "Euripides",
      "Aristophanes",
      "Sophocles",
      "Aeschylus"
    ],
    answer: "Aristophanes"
  },
  {
    question: "Which instrument is central to the traditional Irish folk music ensemble?",
    options: [
      "Saxophone",
      "Mandolin",
      "Fiddle (Violin)",
      "Trumpet"
    ],
    answer: "Fiddle (Violin)"
  },
  {
    question: "The literary device of giving human qualities to non-human things is called...",
    options: [
      "Metaphor",
      "Simile",
      "Allusion",
      "Personification"
    ],
    answer: "Personification"
  },
  {
    question: "The Parthenon in Athens is a temple dedicated to which Greek goddess?",
    options: [
      "Hera",
      "Artemis",
      "Aphrodite",
      "Athena"
    ],
    answer: "Athena"
  },

  {
    question: "Which film won the Academy Award for Best Picture in 2020 (for films released in 2019)?",
    options: [
      "Joker",
      "1917",
      "Parasite",
      "Once Upon a Time in Hollywood"
    ],
    answer: "Parasite"
  },
  {
    question: "What is the name of the fictional town where the TV show 'The Simpsons' is set?",
    options: [
      "Quahog",
      "South Park",
      "Springfield",
      "Shelbyville"
    ],
    answer: "Springfield"
  },
  {
    question: "Which artist released the album 'Thriller' in 1982?",
    options: [
      "Prince",
      "Madonna",
      "Michael Jackson",
      "Elton John"
    ],
    answer: "Michael Jackson"
  },
  {
    question: "Who played the role of Jack Dawson in the movie 'Titanic'?",
    options: [
      "Brad Pitt",
      "Matthew McConaughey",
      "Leonardo DiCaprio",
      "Tom Cruise"
    ],
    answer: "Leonardo DiCaprio"
  },
  {
    question: "What is the name of the apartment building where the TV show 'Friends' characters live?",
    options: [
      "The Dakota",
      "Central Perk",
      "The Brownstone",
      "No official name (set in Greenwich Village)"
    ],
    answer: "No official name (set in Greenwich Village)"
  },
  {
    question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
    options: [
      "Led Zeppelin",
      "The Beatles",
      "Queen",
      "Pink Floyd"
    ],
    answer: "Queen"
  },
  {
    question: "In the 'Harry Potter' series, what is the name of the school of witchcraft and wizardry?",
    options: [
      "Beauxbatons",
      "Durmstrang",
      "Hogwarts",
      "Ilvermorny"
    ],
    answer: "Hogwarts"
  },
  {
    question: "Who directed the films 'Pulp Fiction' and 'Kill Bill'?",
    options: [
      "Steven Spielberg",
      "Christopher Nolan",
      "Martin Scorsese",
      "Quentin Tarantino"
    ],
    answer: "Quentin Tarantino"
  },
  {
    question: "The character 'Walter White' is the protagonist of which TV series?",
    options: [
      "The Sopranos",
      "Breaking Bad",
      "Mad Men",
      "Ozark"
    ],
    answer: "Breaking Bad"
  },
  {
    question: "Which pop star is often referred to as the 'Queen of Pop'?",
    options: [
      "Beyoncé",
      "Lady Gaga",
      "Madonna",
      "Taylor Swift"
    ],
    answer: "Madonna"
  },
  {
    question: "What is the name of the fictional universe where Marvel superheroes like Iron Man and Captain America exist?",
    options: [
      "DC Universe",
      "Star Trek",
      "The MCU",
      "Middle-earth"
    ],
    answer: "The MCU"
  },
  {
    question: "Who hosts the late-night talk show 'The Tonight Show Starring...'?",
    options: [
      "Stephen Colbert",
      "Jimmy Kimmel",
      "Jimmy Fallon",
      "James Corden"
    ],
    answer: "Jimmy Fallon"
  },
  {
    question: "Which singer's real name is Stefani Joanne Angelina Germanotta?",
    options: [
      "Rihanna",
      "Adele",
      "Ariana Grande",
      "Lady Gaga"
    ],
    answer: "Lady Gaga"
  },
  {
    question: "Which animated Disney film features the song 'Let It Go'?",
    options: [
      "Moana",
      "Tangled",
      "Frozen",
      "The Little Mermaid"
    ],
    answer: "Frozen"
  },
  {
    question: "What TV show's famous theme song is 'I'll Be There for You' by The Rembrandts?",
    options: [
      "Seinfeld",
      "Friends",
      "How I Met Your Mother",
      "Cheers"
    ],
    answer: "Friends"
  },
  {
    question: "Who wrote the 'A Song of Ice and Fire' books, adapted into 'Game of Thrones'?",
    options: [
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "Robert Jordan",
      "Brandon Sanderson"
    ],
    answer: "George R.R. Martin"
  },
  {
    question: "The band U2 originated in which country?",
    options: [
      "United States",
      "Ireland",
      "England",
      "Canada"
    ],
    answer: "Ireland"
  },
  {
    question: "What type of vehicle is the DeLorean in the 'Back to the Future' movies?",
    options: [
      "Airplane",
      "Train",
      "Time Machine Car",
      "Motorcycle"
    ],
    answer: "Time Machine Car"
  },
  {
    question: "Which actress played Katniss Everdeen in 'The Hunger Games' film series?",
    options: [
      "Emma Stone",
      "Shailene Woodley",
      "Jennifer Lawrence",
      "Kristen Stewart"
    ],
    answer: "Jennifer Lawrence"
  },
  {
    question: "In the TV series 'The Office' (US), which character is the regional manager of Dunder Mifflin Scranton?",
    options: [
      "Dwight Schrute",
      "Jim Halpert",
      "Michael Scott",
      "Andy Bernard"
    ],
    answer: "Michael Scott"
  },
  {
    question: "What 1994 film features the line, 'Life is like a box of chocolates'?",
    options: [
      "Pulp Fiction",
      "The Shawshank Redemption",
      "Forrest Gump",
      "The Lion King"
    ],
    answer: "Forrest Gump"
  },
  {
    question: "Which singer's debut album was titled '...Baby One More Time'?",
    options: [
      "Christina Aguilera",
      "Britney Spears",
      "Jessica Simpson",
      "Mandy Moore"
    ],
    answer: "Britney Spears"
  },
  {
    question: "What is the name of the fictional kingdom in Disney's 'The Lion King'?",
    options: [
      "Arendelle",
      "Pride Lands",
      "Zootopia",
      "Neverland"
    ],
    answer: "Pride Lands"
  },
  {
    question: "Who is the lead guitarist for the band 'The Rolling Stones'?",
    options: [
      "Mick Jagger",
      "Keith Richards",
      "Jimmy Page",
      "Eric Clapton"
    ],
    answer: "Keith Richards"
  },
  {
    question: "Which superhero is known as the 'Man of Steel'?",
    options: [
      "Batman",
      "Spider-Man",
      "Superman",
      "Flash"
    ],
    answer: "Superman"
  },
  {
    question: "The phrase 'Houston, we have a problem' originated from which space film?",
    options: [
      "Apollo 13",
      "Gravity",
      "The Right Stuff",
      "Interstellar"
    ],
    answer: "Apollo 13"
  },
  {
    question: "Which US city is the setting for the TV show 'Cheers'?",
    options: [
      "New York",
      "Chicago",
      "Boston",
      "Seattle"
    ],
    answer: "Boston"
  },
  {
    question: "What is the name of the fictional continent in 'The Lord of the Rings'?",
    options: [
      "Westeros",
      "Narnia",
      "Middle-earth",
      "Gondor"
    ],
    answer: "Middle-earth"
  },
  {
    question: "Which legendary reggae artist is known for the song 'No Woman, No Cry'?",
    options: [
      "Peter Tosh",
      "Jimmy Cliff",
      "Bob Marley",
      "Burning Spear"
    ],
    answer: "Bob Marley"
  },
  {
    question: "The movie 'E.T. the Extra-Terrestrial' was directed by whom?",
    options: [
      "George Lucas",
      "James Cameron",
      "Steven Spielberg",
      "Martin Scorsese"
    ],
    answer: "Steven Spielberg"
  },
  {
    question: "Which actor played the role of Forrest Gump?",
    options: [
      "Denzel Washington",
      "Tom Hanks",
      "Robert De Niro",
      "Johnny Depp"
    ],
    answer: "Tom Hanks"
  },
  {
    question: "The character Sheldon Cooper is a main character in which sitcom?",
    options: [
      "Big Bang Theory",
      "Friends",
      "Two and a Half Men",
      "Frasier"
    ],
    answer: "Big Bang Theory"
  },
  {
    question: "Which country does the K-Pop band BTS hail from?",
    options: [
      "Japan",
      "China",
      "South Korea",
      "Thailand"
    ],
    answer: "South Korea"
  },
  {
    question: "What fictional substance powers the Flux Capacitor in 'Back to the Future'?",
    options: [
      "Dilithium",
      "Plutonium",
      "Kryptonite",
      "Unobtainium"
    ],
    answer: "Plutonium"
  },
  {
    question: "Who sang the official theme song for the James Bond film 'Skyfall'?",
    options: [
      "Sam Smith",
      "Adele",
      "Billie Eilish",
      "Alicia Keys"
    ],
    answer: "Adele"
  },
  {
    question: "The TV series 'Stranger Things' is set in which decade?",
    options: [
      "1970s",
      "1980s",
      "1990s",
      "2000s"
    ],
    answer: "1980s"
  },
  {
    question: "Which Disney princess is known for having a glass slipper?",
    options: [
      "Belle",
      "Ariel",
      "Cinderella",
      "Snow White"
    ],
    answer: "Cinderella"
  },
  {
    question: "Who is the lead singer of the rock band 'Coldplay'?",
    options: [
      "Bono",
      "Chris Martin",
      "Thom Yorke",
      "Liam Gallagher"
    ],
    answer: "Chris Martin"
  },
  {
    question: "What is the subtitle of the third movie in the original Star Wars trilogy?",
    options: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Phantom Menace"
    ],
    answer: "Return of the Jedi"
  },
  {
    question: "What creature is the main antagonist in the film 'Jaws'?",
    options: [
      "Octopus",
      "Great White Shark",
      "Killer Whale",
      "Squid"
    ],
    answer: "Great White Shark"
  },
  {
    question: "Which TV series features the main characters Ross, Rachel, Monica, Chandler, Phoebe, and Joey?",
    options: [
      "Seinfeld",
      "Friends",
      "The Office",
      "Parks and Recreation"
    ],
    answer: "Friends"
  },
  {
    question: "Who is the actress that played Hermione Granger in the 'Harry Potter' films?",
    options: [
      "Evanna Lynch",
      "Bonnie Wright",
      "Emma Watson",
      "Katie Leung"
    ],
    answer: "Emma Watson"
  },
  {
    question: "The genre of music known as 'Grunge' originated in which US city?",
    options: [
      "Los Angeles",
      "New York",
      "Seattle",
      "Austin"
    ],
    answer: "Seattle"
  },
  {
    question: "Which animated movie studio created 'Toy Story' and 'Finding Nemo'?",
    options: [
      "DreamWorks",
      "Pixar",
      "Blue Sky Studios",
      "Illumination"
    ],
    answer: "Pixar"
  },
  {
    question: "Which actor is famous for his role as Captain Jack Sparrow?",
    options: [
      "Will Smith",
      "Johnny Depp",
      "Tom Cruise",
      "Robert Downey Jr."
    ],
    answer: "Johnny Depp"
  },
  {
    question: "The band Led Zeppelin is famous for the song...",
    options: [
      "Stairway to Heaven",
      "Imagine",
      "Hey Jude",
      "Sweet Child O' Mine"
    ],
    answer: "Stairway to Heaven"
  },
  {
    question: "What does the 'TARDIS' stand for in 'Doctor Who'?",
    options: [
      "Time and Relative Dimension in Space",
      "Totally Awesome Repair Dome in Space",
      "Travelling Around Random Dimensions in Secret",
      "Temporal Arts Research Device In Service"
    ],
    answer: "Time and Relative Dimension in Space"
  },
  {
    question: "Who is often called the 'King of Rock and Roll'?",
    options: [
      "Chuck Berry",
      "Little Richard",
      "Elvis Presley",
      "Buddy Holly"
    ],
    answer: "Elvis Presley"
  },
  {
    question: "In the movie 'The Matrix', what color pill does Neo take to see the truth?",
    options: [
      "Blue",
      "Green",
      "Red",
      "Yellow"
    ],
    answer: "Red"
  },
  {
    question: "What character is the nemesis of Batman?",
    options: [
      "Lex Luthor",
      "The Joker",
      "Doctor Octopus",
      "Green Goblin"
    ],
    answer: "The Joker"
  },
   {
    question: "What does the acronym 'CPU' stand for?",
    options: [
      "Central Power Unit",
      "Computer Processing Utility",
      "Central Processing Unit",
      "Core Program Unit"
    ],
    answer: "Central Processing Unit"
  },
  {
    question: "What is the basic unit of information in computing and digital communications?",
    options: [
      "Byte",
      "Kilobyte",
      "Bit",
      "Megabyte"
    ],
    answer: "Bit"
  },
  {
    question: "Who is often credited as the inventor of the World Wide Web (WWW)?",
    options: [
      "Bill Gates",
      "Steve Jobs",
      "Tim Berners-Lee",
      "Mark Zuckerberg"
    ],
    answer: "Tim Berners-Lee"
  },
  {
    question: "Which programming language is primarily used for styling web pages?",
    options: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    answer: "CSS"
  },
  {
    question: "What is the process of finding and fixing errors in a software program called?",
    options: [
      "Compiling",
      "Debugging",
      "Executing",
      "Testing"
    ],
    answer: "Debugging"
  },
  {
    question: "What does 'RAM' stand for in computer memory?",
    options: [
      "Read Access Memory",
      "Random Application Machine",
      "Remote Access Module",
      "Random Access Memory"
    ],
    answer: "Random Access Memory"
  },
  {
    question: "Which company developed the Android operating system?",
    options: [
      "Apple",
      "Microsoft",
      "Google",
      "Samsung"
    ],
    answer: "Google"
  },
  {
    question: "What is a 'firewall' primarily designed to do?",
    options: [
      "Increase internet speed",
      "Block external unauthorized access",
      "Manage email accounts",
      "Store computer data"
    ],
    answer: "Block external unauthorized access"
  },
  {
    question: "What is the standard port number for HTTP (Hypertext Transfer Protocol)?",
    options: [
      "21",
      "80",
      "443",
      "25"
    ],
    answer: "80"
  },
  {
    question: "Who co-founded Microsoft with Bill Gates?",
    options: [
      "Paul Allen",
      "Steve Wozniak",
      "Larry Page",
      "Jeff Bezos"
    ],
    answer: "Paul Allen"
  },
  {
    question: "What kind of cable is used to connect a computer to a high-speed wired network?",
    options: [
      "HDMI",
      "VGA",
      "Ethernet",
      "USB"
    ],
    answer: "Ethernet"
  },
  {
    question: "What does 'URL' stand for?",
    options: [
      "Universal Resource Link",
      "Uniform Remote Locator",
      "Uniform Resource Locator",
      "User Registration Login"
    ],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Which protocol is used to securely transfer data over the internet?",
    options: [
      "FTP",
      "SMTP",
      "HTTPS",
      "DNS"
    ],
    answer: "HTTPS"
  },
  {
    question: "A 'keylogger' is an example of what type of software?",
    options: [
      "Antivirus",
      "Malware",
      "Web Browser",
      "Operating System"
    ],
    answer: "Malware"
  },
  {
    question: "What is the primary function of an operating system (OS)?",
    options: [
      "Design graphics",
      "Manage hardware and software resources",
      "Connect to the internet",
      "Run application code"
    ],
    answer: "Manage hardware and software resources"
  },
  {
    question: "Which unit is used to measure the clock speed of a CPU?",
    options: [
      "Volts",
      "Amperes",
      "Hertz (GHz)",
      "Watts"
    ],
    answer: "Hertz (GHz)"
  },
  {
    question: "The 'Internet of Things' (IoT) refers to what?",
    options: [
      "The history of the internet",
      "A network of physical devices connected to the internet",
      "A type of programming language",
      "A complex type of security system"
    ],
    answer: "A network of physical devices connected to the internet"
  },
  {
    question: "What is the term for a block of code that performs a specific task and can be reused?",
    options: [
      "Variable",
      "Function/Method",
      "Array",
      "Loop"
    ],
    answer: "Function/Method"
  },
  {
    question: "What company is known for its Mac, iPhone, and iPad products?",
    options: [
      "Microsoft",
      "Google",
      "Apple",
      "Samsung"
    ],
    answer: "Apple"
  },
  {
    question: "In a database, a 'row' is also commonly referred to as a...",
    options: [
      "Field",
      "Table",
      "Query",
      "Record"
    ],
    answer: "Record"
  },
  {
    question: "What type of storage is non-volatile and often used for long-term data retention?",
    options: [
      "RAM",
      "Cache",
      "SSD/HDD",
      "CPU Register"
    ],
    answer: "SSD/HDD"
  },
  {
    question: "Which programming language is known for its use in web browsers for interactive effects?",
    options: [
      "Java",
      "C++",
      "JavaScript",
      "Ruby"
    ],
    answer: "JavaScript"
  },
  {
    question: "What is the maximum number of bits in an IPv4 address?",
    options: [
      "8",
      "16",
      "32",
      "64"
    ],
    answer: "32"
  },
  {
    question: "The concept of 'Moore's Law' primarily concerns the rapid increase in what?",
    options: [
      "Internet speed",
      "Programming languages",
      "Computer processing power/Transistor count",
      "Monitor resolution"
    ],
    answer: "Computer processing power/Transistor count"
  },
  {
    question: "Which technology is used to create a wireless local area network (WLAN)?",
    options: [
      "Bluetooth",
      "GPS",
      "Wi-Fi",
      "NFC"
    ],
    answer: "Wi-Fi"
  },
  {
    question: "In HTML, what tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<url>",
      "<href>"
    ],
    answer: "<a>"
  },
  {
    question: "What is the standard file extension for a Python source code file?",
    options: [
      ".java",
      ".py",
      ".cpp",
      ".html"
    ],
    answer: ".py"
  },
  {
    question: "The concept of 'Blockchain' was originally invented for which application?",
    options: [
      "Social Media",
      "Bitcoin/Cryptocurrency",
      "Cloud Storage",
      "Self-Driving Cars"
    ],
    answer: "Bitcoin/Cryptocurrency"
  },
  {
    question: "What is the smallest element of a display screen?",
    options: [
      "Pixel",
      "Dot",
      "Vector",
      "Bit"
    ],
    answer: "Pixel"
  },
  {
    question: "Which port is commonly used to charge smartphones and transfer data to modern computers?",
    options: [
      "VGA",
      "USB",
      "Ethernet",
      "PS/2"
    ],
    answer: "USB"
  },
  {
    question: "What does 'SEO' stand for in web technology?",
    options: [
      "Standard E-commerce Operations",
      "Secure Electronic Output",
      "Search Engine Optimization",
      "Software Engineering Objective"
    ],
    answer: "Search Engine Optimization"
  },
  {
    question: "What is the name for a miniature camera on a computer or laptop, usually used for video calls?",
    options: [
      "Digital Camera",
      "Webcam",
      "Scanner",
      "Optical Drive"
    ],
    answer: "Webcam"
  },
  {
    question: "Which type of software is distributed freely but requires payment for advanced features or support?",
    options: [
      "Open Source",
      "Freeware",
      "Shareware",
      "Proprietary"
    ],
    answer: "Shareware"
  },
  {
    question: "What is the decimal equivalent of the binary number 101?",
    options: [
      "3",
      "5",
      "7",
      "9"
    ],
    answer: "5"
  },
  {
    question: "The 'cloud' in cloud computing refers to what?",
    options: [
      "Meteorology data",
      "Programs running on local hard drives",
      "Servers accessed over the internet",
      "A specific type of operating system"
    ],
    answer: "Servers accessed over the internet"
  },
  {
    question: "Which of these is a popular version control system for tracking software changes?",
    options: [
      "FTP",
      "SSH",
      "Git",
      "CURL"
    ],
    answer: "Git"
  },
  {
    question: "What is the process called when a computer starts up?",
    options: [
      "Hibernation",
      "Booting",
      "Caching",
      "Indexing"
    ],
    answer: "Booting"
  },
  {
    question: "Which company is known for the original 'ThinkPad' line of laptop computers?",
    options: [
      "Dell",
      "HP",
      "Lenovo (formerly IBM)",
      "Acer"
    ],
    answer: "Lenovo (formerly IBM)"
  },
  {
    question: "What type of data structure follows the 'Last In, First Out' (LIFO) principle?",
    options: [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    answer: "Stack"
  },
  {
    question: "Which display technology uses organic compounds to emit light when an electric current is passed through them?",
    options: [
      "LED",
      "LCD",
      "Plasma",
      "OLED"
    ],
    answer: "OLED"
  },
  {
    question: "What is the most common use of the SQL language?",
    options: [
      "Web development",
      "Data visualization",
      "Managing relational databases",
      "Artificial Intelligence"
    ],
    answer: "Managing relational databases"
  },
  {
    question: "What does a 'DNS' server primarily translate?",
    options: [
      "HTML to CSS",
      "Binary to Hexadecimal",
      "Domain names to IP addresses",
      "URL to HTTPS"
    ],
    answer: "Domain names to IP addresses"
  },
  {
    question: "In networking, what does 'WAN' stand for?",
    options: [
      "Wide Access Network",
      "Wireless Area Node",
      "Wide Area Network",
      "Web Application Node"
    ],
    answer: "Wide Area Network"
  },
  {
    question: "Which technology is commonly used for contactless payment and short-range wireless data transfer?",
    options: [
      "Wi-Fi",
      "NFC",
      "GPS",
      "Li-Fi"
    ],
    answer: "NFC"
  },
  {
    question: "What is the main advantage of using fiber optic cables over traditional copper cables?",
    options: [
      "Lower cost",
      "Easier installation",
      "Faster data transmission/Higher bandwidth",
      "Resilience to temperature"
    ],
    answer: "Faster data transmission/Higher bandwidth"
  },
  {
    question: "What is the term for a program that replicates itself and spreads to other computers, often causing damage?",
    options: [
      "Trojan",
      "Worm",
      "Spyware",
      "Adware"
    ],
    answer: "Worm"
  },
  {
    question: "The term 'Algorithm' refers to what in computer science?",
    options: [
      "A type of hardware",
      "A specific error message",
      "A set of rules/steps to solve a problem",
      "A brand of programming tool"
    ],
    answer: "A set of rules/steps to solve a problem"
  },
  {
    question: "What is a 'cookie' in the context of web browsing?",
    options: [
      "A malicious program",
      "A small file stored on the user's computer by a website",
      "A type of server",
      "A pop-up advertisement"
    ],
    answer: "A small file stored on the user's computer by a website"
  },
  {
    question: "Which programming language is often considered the foundation of all web pages?",
    options: [
      "CSS",
      "JavaScript",
      "PHP",
      "HTML"
    ],
    answer: "HTML"
  },
  {
    question: "A 'router' primarily performs what function in a network?",
    options: [
      "Connects devices to a single network",
      "Translates domain names",
      "Forwards data packets between different networks",
      "Scans for viruses"
    ],
    answer: "Forwards data packets between different networks"
  },
  
  {
    question: "How many players are on a soccer (football) team on the field at one time?",
    options: [
      "10",
      "11",
      "12",
      "15"
    ],
    answer: "11"
  },
  {
    question: "What is the highest-scoring play in American football?",
    options: [
      "Field Goal",
      "Safety",
      "Touchdown",
      "Extra Point"
    ],
    answer: "Touchdown"
  },
  {
    question: "In tennis, what term is used to describe a score of 40-40?",
    options: [
      "Advantage",
      "Set Point",
      "Game Point",
      "Deuce"
    ],
    answer: "Deuce"
  },
  {
    question: "Which country has won the most FIFA World Cup titles (men's)?",
    options: [
      "Germany",
      "Italy",
      "Brazil",
      "Argentina"
    ],
    answer: "Brazil"
  },
  {
    question: "What is the standard length of a marathon race in kilometers?",
    options: [
      "26.2 km",
      "42.195 km",
      "50 km",
      "100 km"
    ],
    answer: "42.195 km"
  },
  {
    question: "What Olympic sport involves a foil, an épée, and a sabre?",
    options: [
      "Archery",
      "Fencing",
      "Judo",
      "Wrestling"
    ],
    answer: "Fencing"
  },
  {
    question: "The 'Masters' is a major tournament in which sport?",
    options: [
      "Tennis",
      "Snooker",
      "Golf",
      "Badminton"
    ],
    answer: "Golf"
  },
  {
    question: "In baseball, how many bases must a runner touch to score a run?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: "4"
  },
  {
    question: "Which well-known professional basketball player is nicknamed 'King James'?",
    options: [
      "Michael Jordan",
      "Kobe Bryant",
      "LeBron James",
      "Shaquille O'Neal"
    ],
    answer: "LeBron James"
  },
  {
    question: "What are the five colors of the Olympic rings (excluding the white background)?",
    options: [
      "Red, Blue, Green, Yellow, Black",
      "Red, Blue, Green, Orange, Black",
      "White, Blue, Green, Yellow, Black",
      "Yellow, Blue, Green, Red, Purple"
    ],
    answer: "Red, Blue, Green, Yellow, Black"
  },
  {
    question: "What is the maximum number of shots a pool (billiards) cue can be used for in a single turn?",
    options: [
      "One",
      "Two",
      "Three",
      "Unlimited, until a fault occurs"
    ],
    answer: "Unlimited, until a fault occurs"
  },
  {
    question: "In which sport would you perform a 'slam dunk'?",
    options: [
      "Volleyball",
      "Rugby",
      "Basketball",
      "Ice Hockey"
    ],
    answer: "Basketball"
  },
  {
    question: "What is the name of the main governing body for international soccer?",
    options: [
      "UEFA",
      "IOC",
      "FIFA",
      "NOC"
    ],
    answer: "FIFA"
  },
  {
    question: "Which chess piece can only move diagonally?",
    options: [
      "Rook",
      "Knight",
      "Bishop",
      "Pawn"
    ],
    answer: "Bishop"
  },
  {
    question: "What type of competition is the 'Tour de France'?",
    options: [
      "Running",
      "Rowing",
      "Cycling",
      "Sailing"
    ],
    answer: "Cycling"
  },
  {
    question: "How many periods are in a standard ice hockey game?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "3"
  },
  {
    question: "What is the term for a perfect score of 300 in bowling?",
    options: [
      "Strike",
      "Spare",
      "Turkey",
      "Perfect Game"
    ],
    answer: "Perfect Game"
  },
  {
    question: "Which legendary boxer was nicknamed 'The Greatest'?",
    options: [
      "Mike Tyson",
      "Rocky Marciano",
      "Muhammad Ali",
      "Joe Frazier"
    ],
    answer: "Muhammad Ali"
  },
  {
    question: "What piece of equipment is mandatory for a player to wear in professional ice hockey?",
    options: [
      "Helmet",
      "Visor",
      "Mouthguard",
      "Shoulder Pads"
    ],
    answer: "Helmet"
  },
  {
    question: "In board games, the dice used for role-playing games (like Dungeons & Dragons) are typically known as...",
    options: [
      "Cubes",
      "Polyhedral Dice",
      "Weighted Dice",
      "Fudge Dice"
    ],
    answer: "Polyhedral Dice"
  },
  {
    question: "Which track and field event involves throwing a heavy spherical object?",
    options: [
      "Javelin",
      "Discus",
      "Shot Put",
      "Hammer Throw"
    ],
    answer: "Shot Put"
  },
  {
    question: "What is the official name of the sport commonly known as ping-pong?",
    options: [
      "Racquetball",
      "Badminton",
      "Table Tennis",
      "Squash"
    ],
    answer: "Table Tennis"
  },
  {
    question: "Which country is the birthplace of the sport of Judo?",
    options: [
      "China",
      "South Korea",
      "Japan",
      "Brazil"
    ],
    answer: "Japan"
  },
  {
    question: "In the game of Monopoly, what color are the properties Boardwalk and Park Place?",
    options: [
      "Red",
      "Green",
      "Yellow",
      "Dark Blue"
    ],
    answer: "Dark Blue"
  },
  {
    question: "Which player holds the record for the most Grand Slam single titles in men's tennis?",
    options: [
      "Roger Federer",
      "Rafael Nadal",
      "Novak Djokovic",
      "Pete Sampras"
    ],
    answer: "Novak Djokovic"
  },
  {
    question: "How long is a standard quarter in a professional basketball game (NBA)?",
    options: [
      "8 minutes",
      "10 minutes",
      "12 minutes",
      "15 minutes"
    ],
    answer: "12 minutes"
  },
  {
    question: "The 'Ryder Cup' is a major team competition in which sport?",
    options: [
      "Soccer",
      "Cricket",
      "Golf",
      "Rugby"
    ],
    answer: "Golf"
  },
  {
    question: "In cricket, what term is used when a batter scores 100 runs in a single innings?",
    options: [
      "A Six",
      "A Century",
      "A Boundary",
      "A Wicket"
    ],
    answer: "A Century"
  },
  {
    question: "What is the term for a position in American football responsible for throwing the ball?",
    options: [
      "Running Back",
      "Wide Receiver",
      "Quarterback",
      "Defensive End"
    ],
    answer: "Quarterback"
  },
  {
    question: "Which legendary swimmer holds the record for the most Olympic gold medals by an individual?",
    options: [
      "Mark Spitz",
      "Ian Thorpe",
      "Katie Ledecky",
      "Michael Phelps"
    ],
    answer: "Michael Phelps"
  },
  {
    question: "What is the maximum number of points a single basket can be worth in a professional basketball game?",
    options: [
      "2 points",
      "3 points",
      "4 points",
      "5 points"
    ],
    answer: "3 points"
  },
  {
    question: "In the game of darts, what is the maximum score you can achieve with a single dart?",
    options: [
      "50",
      "60",
      "75",
      "100"
    ],
    answer: "60"
  },
  {
    question: "The Stanley Cup is awarded annually to the champion of which sports league?",
    options: [
      "NFL",
      "NHL",
      "MLB",
      "NBA"
    ],
    answer: "NHL"
  },
  {
    question: "What color flag indicates a driver has won a motor race?",
    options: [
      "Red",
      "White",
      "Checkered",
      "Yellow"
    ],
    answer: "Checkered"
  },
  {
    question: "Which two teams compete in 'El Clásico' in Spanish soccer?",
    options: [
      "Atlético Madrid and Real Madrid",
      "Barcelona and Real Madrid",
      "Sevilla and Real Betis",
      "Manchester United and Liverpool"
    ],
    answer: "Barcelona and Real Madrid"
  },
  {
    question: "What is the term for a successful pass that leads directly to a goal in soccer or hockey?",
    options: [
      "Assist",
      "Takeaway",
      "Penalty",
      "Offside"
    ],
    answer: "Assist"
  },
  {
    question: "Which body of water is often used as the location for the America's Cup sailing race?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Any ocean/sea",
      "Great Lakes"
    ],
    answer: "Any ocean/sea"
  },
  {
    question: "How many pieces does each player start with in a standard game of chess?",
    options: [
      "8",
      "12",
      "16",
      "24"
    ],
    answer: "16"
  },
  {
    question: "The Grand National is a famous race in which sport?",
    options: [
      "Horse Racing",
      "Dog Racing",
      "Motor Racing",
      "Rowing"
    ],
    answer: "Horse Racing"
  },
  {
    question: "What is the name of the main venue for the Wimbledon tennis championships?",
    options: [
      "Arthur Ashe Stadium",
      "Court Philippe Chatrier",
      "Centre Court",
      "Rod Laver Arena"
    ],
    answer: "Centre Court"
  },
  {
    question: "In rugby, a 'try' is worth how many points?",
    options: [
      "3",
      "5",
      "7",
      "4"
    ],
    answer: "5"
  },
  {
    question: "What term is used in basketball when a player commits five fouls?",
    options: [
      "Technical Foul",
      "Personal Foul",
      "Foul Out",
      "Flagrant Foul"
    ],
    answer: "Foul Out"
  },
  {
    question: "Which game uses tiles that feature Chinese characters, symbols, and dots?",
    options: [
      "Dominoes",
      "Mahjong",
      "Go",
      "Backgammon"
    ],
    answer: "Mahjong"
  },
  {
    question: "In the video game 'Pac-Man', what is the main character trying to eat?",
    options: [
      "Dots/Pellets",
      "Ghosts",
      "Fruits",
      "Power-ups"
    ],
    answer: "Dots/Pellets"
  },
  {
    question: "Which sport uses terms like 'gimmes' and 'bogey'?",
    options: [
      "Billiards",
      "Bowling",
      "Golf",
      "Curling"
    ],
    answer: "Golf"
  },
  {
    question: "What is the distance between the two goals in a game of ice hockey in feet?",
    options: [
      "85 feet",
      "100 feet",
      "200 feet",
      "250 feet"
    ],
    answer: "200 feet"
  },
  {
    question: "The game 'Settlers of Catan' is primarily about what resource-based activity?",
    options: [
      "Trading and Building",
      "Fighting and Conquest",
      "Magic and Lore",
      "Racing"
    ],
    answer: "Trading and Building"
  },
  {
    question: "Which discipline is NOT part of the modern pentathlon?",
    options: [
      "Swimming",
      "Fencing",
      "Shooting",
      "Weightlifting"
    ],
    answer: "Weightlifting"
  },
  {
    question: "In which sport would you use a 'shuttlecock'?",
    options: [
      "Table Tennis",
      "Badminton",
      "Volleyball",
      "Squash"
    ],
    answer: "Badminton"
  },
  {
    question: "Which team has won the most Super Bowl titles in NFL history?",
    options: [
      "Dallas Cowboys",
      "San Francisco 49ers",
      "Pittsburgh Steelers and New England Patriots (TIE)",
      "Green Bay Packers"
    ],
    answer: "Pittsburgh Steelers and New England Patriots (TIE)"
  },
   {
    question: "Who was the first President of the United States?",
    options: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "George Washington",
      "John Adams"
    ],
    answer: "George Washington"
  },
  {
    question: "The US Declaration of Independence was primarily written by whom?",
    options: [
      "Benjamin Franklin",
      "Thomas Jefferson",
      "George Washington",
      "John Adams"
    ],
    answer: "Thomas Jefferson"
  },
  {
    question: "What year was the US Constitution ratified?",
    options: [
      "1776",
      "1787",
      "1791",
      "1800"
    ],
    answer: "1787"
  },
  {
    question: "What major conflict did the Emancipation Proclamation take place during?",
    options: [
      "Revolutionary War",
      "War of 1812",
      "Mexican-American War",
      "Civil War"
    ],
    answer: "Civil War"
  },
  {
    question: "How many amendments are currently in the US Constitution?",
    options: [
      "10",
      "15",
      "27",
      "33"
    ],
    answer: "27"
  },
  {
    question: "What is the system of checks and balances designed to do in the US government?",
    options: [
      "Prevent states from leaving the union",
      "Ensure only two political parties exist",
      "Prevent any one branch from becoming too powerful",
      "Regulate the economy"
    ],
    answer: "Prevent any one branch from becoming too powerful"
  },
  {
    question: "The highest court in the United States is the...",
    options: [
      "Court of Appeals",
      "District Court",
      "Supreme Court",
      "Federal Court"
    ],
    answer: "Supreme Court"
  },
  {
    question: "Which US President was in office during the Cuban Missile Crisis?",
    options: [
      "Dwight D. Eisenhower",
      "John F. Kennedy",
      "Lyndon B. Johnson",
      "Richard Nixon"
    ],
    answer: "John F. Kennedy"
  },
  {
    question: "What event officially brought the US into World War II?",
    options: [
      "Sinking of the Lusitania",
      "Invasion of Poland",
      "Attack on Pearl Harbor",
      "Battle of Midway"
    ],
    answer: "Attack on Pearl Harbor"
  },
  {
    question: "What is the minimum age to be elected President of the United States?",
    options: [
      "25",
      "30",
      "35",
      "40"
    ],
    answer: "35"
  },
  {
    question: "Which state was the last to abolish slavery?",
    options: [
      "Mississippi",
      "Texas",
      "Delaware",
      "Kentucky"
    ],
    answer: "Mississippi"
  },
  {
    question: "The period following the Civil War, focused on rebuilding the South, is known as...",
    options: [
      "The Great Migration",
      "Reconstruction",
      "The New Deal",
      "Manifest Destiny"
    ],
    answer: "Reconstruction"
  },
  {
    question: "What amendment grants citizens the right to freedom of speech and religion?",
    options: [
      "First Amendment",
      "Second Amendment",
      "Fourth Amendment",
      "Tenth Amendment"
    ],
    answer: "First Amendment"
  },
  {
    question: "Who was the leader of the Civil Rights Movement known for the 'I Have a Dream' speech?",
    options: [
      "Malcolm X",
      "Martin Luther King Jr.",
      "Rosa Parks",
      "Thurgood Marshall"
    ],
    answer: "Martin Luther King Jr."
  },
  {
    question: "The purchase of a large territory from France in 1803 is known as the...",
    options: [
      "Gadsden Purchase",
      "Louisiana Purchase",
      "Alaska Purchase",
      "Oregon Treaty"
    ],
    answer: "Louisiana Purchase"
  },
  {
    question: "How many senators does each US state have in the Senate?",
    options: [
      "1",
      "2",
      "3",
      "Based on population"
    ],
    answer: "2"
  },
  {
    question: "Which constitutional principle divides power between the national and state governments?",
    options: [
      "Separation of Powers",
      "Popular Sovereignty",
      "Federalism",
      "Judicial Review"
    ],
    answer: "Federalism"
  },
  {
    question: "The US national anthem is 'The Star-Spangled Banner.' Which war inspired its creation?",
    options: [
      "Civil War",
      "Revolutionary War",
      "War of 1812",
      "WWI"
    ],
    answer: "War of 1812"
  },
  {
    question: "The American Industrial Revolution was characterized by the rise of which industry?",
    options: [
      "Agriculture",
      "Textile and Steel",
      "Information Technology",
      "Renewable Energy"
    ],
    answer: "Textile and Steel"
  },
  {
    question: "What is the term limit for the President of the United States (number of terms)?",
    options: [
      "One",
      "Two",
      "Three",
      "Unlimited"
    ],
    answer: "Two"
  },
  {
    question: "Which former colony became the last of the 13 original states to ratify the Constitution?",
    options: [
      "Virginia",
      "New York",
      "Rhode Island",
      "North Carolina"
    ],
    answer: "Rhode Island"
  },
  {
    question: "What was the purpose of the New Deal, introduced by FDR?",
    options: [
      "Fund WWII efforts",
      "End the Cold War",
      "Combat the Great Depression",
      "Expand US territory"
    ],
    answer: "Combat the Great Depression"
  },
  {
    question: "The 19th Amendment granted suffrage (the right to vote) to which group?",
    options: [
      "African Americans",
      "Women",
      "18-year-olds",
      "Native Americans"
    ],
    answer: "Women"
  },
  {
    question: "What is the name of the legislative branch of the US government?",
    options: [
      "The Cabinet",
      "The Congress",
      "The Judiciary",
      "The Executive Branch"
    ],
    answer: "The Congress"
  },
  {
    question: "Which early American figure is famous for his kite experiment with electricity?",
    options: [
      "Thomas Edison",
      "Nikola Tesla",
      "Benjamin Franklin",
      "Eli Whitney"
    ],
    answer: "Benjamin Franklin"
  },
  {
    question: "The primary cause of the Civil War was a conflict over which issue?",
    options: [
      "Taxation",
      "Slavery",
      "Territorial Expansion",
      "Trade Tariffs"
    ],
    answer: "Slavery"
  },
  {
    question: "The system used to elect the President, based on state-by-state votes, is called the...",
    options: [
      "Popular Vote",
      "Electoral College",
      "Congressional Vote",
      "Referendum"
    ],
    answer: "Electoral College"
  },
  {
    question: "Which President is associated with the 'Great Society' domestic programs?",
    options: [
      "John F. Kennedy",
      "Lyndon B. Johnson",
      "Richard Nixon",
      "Jimmy Carter"
    ],
    answer: "Lyndon B. Johnson"
  },
  {
    question: "What famous trial in 1925 centered on teaching evolution in public schools?",
    options: [
      "Sacco and Vanzetti Trial",
      "Scopes Monkey Trial",
      "Salem Witch Trials",
      "Dred Scott Case"
    ],
    answer: "Scopes Monkey Trial"
  },
  {
    question: "What does the Bald Eagle symbolize in the US?",
    options: [
      "Prosperity",
      "Freedom and Strength",
      "Innovation",
      "Peace"
    ],
    answer: "Freedom and Strength"
  },
  {
    question: "The 'Trail of Tears' refers to the forced relocation of which group?",
    options: [
      "African Slaves",
      "Native American Tribes",
      "Irish Immigrants",
      "Chinese Laborers"
    ],
    answer: "Native American Tribes"
  },
  {
    question: "What is the term for a formal charge of misconduct against a civil officer?",
    options: [
      "Veto",
      "Impeachment",
      "Filibuster",
      "Censure"
    ],
    answer: "Impeachment"
  },
  {
    question: "The original 13 colonies were located on which coast of the US?",
    options: [
      "Pacific Coast",
      "Gulf Coast",
      "Great Lakes",
      "Atlantic Coast"
    ],
    answer: "Atlantic Coast"
  },
  {
    question: "Which President signed the Civil Rights Act of 1964 into law?",
    options: [
      "John F. Kennedy",
      "Lyndon B. Johnson",
      "Richard Nixon",
      "Jimmy Carter"
    ],
    answer: "Lyndon B. Johnson"
  },
  {
    question: "What was the system of laws enforcing racial segregation in the South after Reconstruction?",
    options: [
      "Jim Crow Laws",
      "Black Codes",
      "The Great Compromise",
      "Plessy v. Ferguson"
    ],
    answer: "Jim Crow Laws"
  },
  {
    question: "The first ten amendments to the Constitution are collectively known as the...",
    options: [
      "Bill of Rights",
      "Articles of Confederation",
      "Magna Carta",
      "Gettysburg Address"
    ],
    answer: "Bill of Rights"
  },
  {
    question: "What major power did the Supreme Court establish for itself in the case *Marbury v. Madison*?",
    options: [
      "Veto power",
      "War-making power",
      "Judicial Review",
      "Power to tax"
    ],
    answer: "Judicial Review"
  },
  {
    question: "Which President made the decision to drop atomic bombs on Japan to end WWII?",
    options: [
      "Franklin D. Roosevelt",
      "Harry S. Truman",
      "Dwight D. Eisenhower",
      "Theodore Roosevelt"
    ],
    answer: "Harry S. Truman"
  },
  {
    question: "What is the two-house structure of the US Congress called?",
    options: [
      "Unicameral",
      "Bicameral",
      "Tricameral",
      "Monocameral"
    ],
    answer: "Bicameral"
  },
  {
    question: "The *Star Trek* franchise is often credited with inspiring the invention of what communication device?",
    options: [
      "Personal Computer",
      "Mobile Phone (Flip Phone)",
      "Tablet Computer",
      "Virtual Reality Headset"
    ],
    answer: "Mobile Phone (Flip Phone)"
  },
  {
    question: "What was the name of the Soviet satellite that became the first artificial satellite launched into space?",
    options: [
      "Vostok",
      "Soyuz",
      "Sputnik",
      "Apollo"
    ],
    answer: "Sputnik"
  },
  {
    question: "The 'Me Too' movement primarily focuses on raising awareness about...",
    options: [
      "Gender pay gap",
      "Racial inequality",
      "Sexual abuse and harassment",
      "Environmental destruction"
    ],
    answer: "Sexual abuse and harassment"
  },
  {
    question: "Which major technological innovation is largely credited to Thomas Edison?",
    options: [
      "The Automobile",
      "The Telephone",
      "The Practical Incandescent Light Bulb",
      "The Radio"
    ],
    answer: "The Practical Incandescent Light Bulb"
  },
  {
    question: "The concept of 'fake news' primarily gained prominence in political discourse after which year?",
    options: [
      "1990",
      "2001",
      "2008",
      "2016"
    ],
    answer: "2016"
  },
  {
    question: "The first transatlantic radio signal was sent by whom?",
    options: [
      "Nikola Tesla",
      "Guglielmo Marconi",
      "Alexander Graham Bell",
      "Lee de Forest"
    ],
    answer: "Guglielmo Marconi"
  },
  {
    question: "In the 21st century, which is the primary form of energy generation in the US (by share)?",
    options: [
      "Solar Power",
      "Natural Gas",
      "Nuclear Power",
      "Hydropower"
    ],
    answer: "Natural Gas"
  },
  {
    question: "What is the common term for a distributed database that maintains a continuously growing list of records secured from tampering and revision?",
    options: [
      "Cloud Storage",
      "Data Warehouse",
      "Blockchain",
      "Data Lake"
    ],
    answer: "Blockchain"
  },
  {
    question: "The 'Red Scare' in US history refers to widespread fear of...",
    options: [
      "Invasion by foreign powers",
      "The rise of Communism",
      "Economic depression",
      "Environmental collapse"
    ],
    answer: "The rise of Communism"
  },
  {
    question: "What is the significance of the 26th Amendment to the US Constitution?",
    options: [
      "Abolished poll taxes",
      "Granted women the right to vote",
      "Set the presidential term limit",
      "Lowered the voting age to 18"
    ],
    answer: "Lowered the voting age to 18"
  },
  {
    question: "The Watergate scandal led to the resignation of which US President?",
    options: [
      "Lyndon B. Johnson",
      "Richard Nixon",
      "Gerald Ford",
      "Jimmy Carter"
    ],
    answer: "Richard Nixon"
  },
  {
    question: "What is the value of Pi (π) rounded to two decimal places?",
    options: ["3.10", "3.14", "3.04", "3.24"],
    answer: "3.14"
  },
  {
    question: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. This is known as the...",
    options: ["Euclidean Postulate", "Pythagorean Theorem", "Fermat's Last Theorem", "Archimedes' Principle"],
    answer: "Pythagorean Theorem"
  },
  {
    question: "What is the term for a number that can only be divided by 1 and itself?",
    options: ["Composite Number", "Even Number", "Prime Number", "Integer"],
    answer: "Prime Number"
  },
  {
    question: "How many degrees are in a full circle?",
    options: ["90", "180", "270", "360"],
    answer: "360"
  },
  {
    question: "What is the result of multiplying any number by zero?",
    options: ["The original number", "1", "0", "Undefined"],
    answer: "0"
  },
  {
    question: "The perimeter of a shape is the measure of its...",
    options: ["Interior area", "Height", "Distance around the outside", "Volume"],
    answer: "Distance around the outside"
  },
  {
    question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13...?",
    options: ["17", "21", "24", "27"],
    answer: "21"
  },
  {
    question: "In algebra, what is a 'variable'?",
    options: ["A constant number", "A symbol that represents an unknown quantity", "The result of an equation", "A type of function"],
    answer: "A symbol that represents an unknown quantity"
  },
  {
    question: "What is the formal term for the average of a set of numbers?",
    options: ["Mode", "Median", "Range", "Mean"],
    answer: "Mean"
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    question: "What is 10^5?",
    options: ["1000", "10000", "100000", "1000000"],
    answer: "100000"
  },
  {
    question: "In geometry, two lines that are always the same distance apart and never intersect are called...",
    options: ["Perpendicular", "Intersecting", "Parallel", "Tangent"],
    answer: "Parallel"
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    answer: "12"
  },
  {
    question: "The area of a circle is calculated using the formula A = πr². What does 'r' represent?",
    options: ["Diameter", "Circumference", "Radius", "Arc length"],
    answer: "Radius"
  },
  {
    question: "What is the term for an angle that measures exactly 90 degrees?",
    options: ["Acute Angle", "Obtuse Angle", "Right Angle", "Straight Angle"],
    answer: "Right Angle"
  },
  {
    question: "In probability, what is the chance of rolling a 6 on a standard six-sided die?",
    options: ["1/3", "1/6", "1/2", "1/12"],
    answer: "1/6"
  },
  {
    question: "What is 25% of 200?",
    options: ["25", "50", "75", "100"],
    answer: "50"
  },
  {
    question: "In set theory, the symbol '∩' represents the...",
    options: ["Union", "Complement", "Intersection", "Subset"],
    answer: "Intersection"
  },
  {
    question: "What is the term for a polygon with eight sides?",
    options: ["Heptagon", "Nonagon", "Decagon", "Octagon"],
    answer: "Octagon"
  },
  {
    question: "The number 1,000,000,000 is equivalent to what term?",
    options: ["Million", "Trillion", "Billion", "Thousand"],
    answer: "Billion"
  },
  {
    question: "What is the reciprocal of 1/4?",
    options: ["4", "0.25", "-4", "1/8"],
    answer: "4"
  },
  {
    question: "Which mathematical field is the study of continuous change?",
    options: ["Statistics", "Geometry", "Calculus", "Discrete Math"],
    answer: "Calculus"
  },
  {
    question: "What is the value of 0! (zero factorial)?",
    options: ["0", "1", "Undefined", "10"],
    answer: "1"
  },
  {
    question: "What is the volume of a cube with a side length of 3 units?",
    options: ["9 cubic units", "18 cubic units", "27 cubic units", "81 cubic units"],
    answer: "27 cubic units"
  },
  {
    question: "In coordinate geometry, the horizontal axis is called the...",
    options: ["Y-axis", "Z-axis", "X-axis", "Origin"],
    answer: "X-axis"
  },
  {
    question: "What is the decimal equivalent of the fraction 1/5?",
    options: ["0.1", "0.2", "0.25", "0.5"],
    answer: "0.2"
  },
  {
    question: "What is the largest factor that two or more numbers share?",
    options: ["Least Common Multiple (LCM)", "Greatest Common Divisor (GCD)", "Prime Factor", "Composite Factor"],
    answer: "Greatest Common Divisor (GCD)"
  },
  {
    question: "An equation with a straight-line graph is known as a...",
    options: ["Quadratic Equation", "Exponential Equation", "Linear Equation", "Polynomial Equation"],
    answer: "Linear Equation"
  },
  {
    question: "The Roman numeral 'C' represents which number?",
    options: ["10", "50", "100", "500"],
    answer: "100"
  },
  {
    question: "What is the opposite operation of squaring a number?",
    options: ["Cubing", "Multiplying by two", "Taking the square root", "Dividing by two"],
    answer: "Taking the square root"
  },
  {
    question: "The mathematical constant 'e' (Euler's number) is approximately equal to:",
    options: ["2.71", "3.14", "1.61", "1.41"],
    answer: "2.71"
  },
  {
    question: "What is the median of the following set of numbers: 2, 4, 6, 8, 10?",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    question: "What is a 'rational number'?",
    options: ["A number that cannot be written as a fraction", "A number that can be written as a fraction (p/q)", "Any real number", "An imaginary number"],
    answer: "A number that can be written as a fraction (p/q)"
  },
  {
    question: "The measure of a triangle's three interior angles always adds up to how many degrees?",
    options: ["90°", "180°", "270°", "360°"],
    answer: "180°"
  },
  {
    question: "What term describes the property a(b+c) = ab + ac?",
    options: ["Commutative Property", "Associative Property", "Distributive Property", "Identity Property"],
    answer: "Distributive Property"
  },
  {
    question: "How many millimeters are in one meter?",
    options: ["100", "1000", "10000", "100000"],
    answer: "1000"
  },
  {
    question: "What is the cube root of 27?",
    options: ["3", "4", "9", "1.5"],
    answer: "3"
  },
  {
    question: "A function whose graph is a parabola is called a...",
    options: ["Linear function", "Cubic function", "Quadratic function", "Trigonometric function"],
    answer: "Quadratic function"
  },
  {
    question: "What is the mode of the following data set: 5, 7, 7, 8, 10, 10, 10, 12?",
    options: ["7", "8", "10", "12"],
    answer: "10"
  },
  {
    question: "The measure of the entire surface of a three-dimensional object is its...",
    options: ["Volume", "Perimeter", "Surface Area", "Density"],
    answer: "Surface Area"
  },
  {
    question: "What is the value of sin(90°)?",
    options: ["0", "1", "-1", "Undefined"],
    answer: "1"
  },
  {
    question: "What is the common term for the vertical lines on a graph (going up and down)?",
    options: ["Abscissa", "Ordinate", "Y-coordinate", "Y-axis"],
    answer: "Y-axis"
  },
  {
    question: "If a number is divisible by both 2 and 3, it must also be divisible by what number?",
    options: ["4", "5", "6", "9"],
    answer: "6"
  },
  {
    question: "The equation a² + b² = c² only applies to which type of triangle?",
    options: ["Equilateral", "Isosceles", "Right", "Scalene"],
    answer: "Right"
  },
  {
    question: "What does the symbol '∞' represent?",
    options: ["Zero", "Undefined", "Infinity", "Approximation"],
    answer: "Infinity"
  },
  {
    question: "What is 1/3 + 1/6?",
    options: ["1/2", "2/9", "2/6", "1/9"],
    answer: "1/2"
  },
  {
    question: "How many fluid ounces are in one US cup?",
    options: ["4", "8", "12", "16"],
    answer: "8"
  },
  {
    question: "The mathematical field concerned with the collection, analysis, interpretation, and presentation of data is...",
    options: ["Algebra", "Calculus", "Statistics", "Topology"],
    answer: "Statistics"
  },
  {
    question: "If you multiply two negative numbers together, what is the sign of the result?",
    options: ["Negative", "Positive", "Zero", "Depends on the numbers"],
    answer: "Positive"
  },
  {
    question: "What is the term for a whole number (positive, negative, or zero)?",
    options: ["Rational Number", "Irrational Number", "Integer", "Fraction"],
    answer: "Integer"
  },
    {
    question: "What is the largest organ in the human body?",
    options: [
      "Heart",
      "Liver",
      "Brain",
      "Skin"
    ],
    answer: "Skin"
  },
  {
    question: "The primary component of the cell wall in plants is...",
    options: [
      "Lignin",
      "Chitin",
      "Cellulose",
      "Keratin"
    ],
    answer: "Cellulose"
  },
  {
    question: "What are the building blocks of proteins?",
    options: [
      "Fatty Acids",
      "Amino Acids",
      "Glucose",
      "Nucleotides"
    ],
    answer: "Amino Acids"
  },
  {
    question: "Which blood type is considered the universal donor?",
    options: [
      "A positive",
      "B negative",
      "O negative",
      "AB positive"
    ],
    answer: "O negative"
  },
  {
    question: "The process of maintaining a stable internal environment in a body is called...",
    options: [
      "Metabolism",
      "Respiration",
      "Homeostasis",
      "Catabolism"
    ],
    answer: "Homeostasis"
  },
  {
    question: "What is the purpose of white blood cells (leukocytes)?",
    options: [
      "Carry oxygen",
      "Clot blood",
      "Fight infection/disease",
      "Produce hormones"
    ],
    answer: "Fight infection/disease"
  },
  {
    question: "Where does the digestion of food primarily begin?",
    options: [
      "Stomach",
      "Small Intestine",
      "Mouth",
      "Esophagus"
    ],
    answer: "Mouth"
  },
  {
    question: "What term refers to an organism that can produce its own food, usually through photosynthesis?",
    options: [
      "Heterotroph",
      "Omnivore",
      "Autotroph",
      "Decomposer"
    ],
    answer: "Autotroph"
  },
  {
    question: "The primary function of the lungs is to facilitate the exchange of...",
    options: [
      "Water and Salt",
      "Blood and Plasma",
      "Oxygen and Carbon Dioxide",
      "Nutrients and Waste"
    ],
    answer: "Oxygen and Carbon Dioxide"
  },
  {
    question: "What part of the brain is responsible for memory and emotion?",
    options: [
      "Cerebellum",
      "Brain Stem",
      "Cerebrum",
      "Hypothalamus"
    ],
    answer: "Cerebrum"
  },
  {
    question: "Which of these is a common sexually transmitted infection caused by a bacterium?",
    options: [
      "HIV",
      "Herpes",
      "Chlamydia",
      "HPV"
    ],
    answer: "Chlamydia"
  },
  {
    question: "What is the common term for the fatty layer surrounding the axon of a nerve cell?",
    options: [
      "Dendrite",
      "Synapse",
      "Myelin Sheath",
      "Neuron"
    ],
    answer: "Myelin Sheath"
  },
  {
    question: "In genetics, what is the 'dominant' allele?",
    options: [
      "The allele that is only expressed in females",
      "The allele that is always expressed when present",
      "The allele that requires two copies to be expressed",
      "The allele that mutates quickly"
    ],
    answer: "The allele that is always expressed when present"
  },
  {
    question: "Which substance in red blood cells is responsible for binding and transporting oxygen?",
    options: [
      "Hemocyanin",
      "Albumin",
      "Fibrinogen",
      "Hemoglobin"
    ],
    answer: "Hemoglobin"
  },
  {
    question: "What is a 'vaccine' designed to do?",
    options: [
      "Treat an existing infection",
      "Cure chronic diseases",
      "Stimulate the immune system to create antibodies",
      "Lower blood pressure"
    ],
    answer: "Stimulate the immune system to create antibodies"
  },
  {
    question: "What is the scientific term for the windpipe?",
    options: [
      "Esophagus",
      "Trachea",
      "Larynx",
      "Pharynx"
    ],
    answer: "Trachea"
  },
  {
    question: "Which vitamin deficiency causes scurvy?",
    options: [
      "Vitamin A",
      "Vitamin B1",
      "Vitamin C",
      "Vitamin K"
    ],
    answer: "Vitamin C"
  },
  {
    question: "The process of cell division that results in two identical daughter cells is called...",
    options: [
      "Meiosis",
      "Mitosis",
      "Fission",
      "Fusion"
    ],
    answer: "Mitosis"
  },
  {
    question: "What is the fluid portion of blood called?",
    options: [
      "Serum",
      "Lymph",
      "Plasma",
      "Intercellular fluid"
    ],
    answer: "Plasma"
  },
  {
    question: "Which gland produces insulin?",
    options: [
      "Thyroid",
      "Adrenal",
      "Pancreas",
      "Pituitary"
    ],
    answer: "Pancreas"
  },
  {
    question: "What is the protective outer layer of skin called?",
    options: [
      "Dermis",
      "Hypodermis",
      "Epidermis",
      "Cuticle"
    ],
    answer: "Epidermis"
  },
  {
    question: "Which type of microorganism causes diseases like the flu, common cold, and COVID-19?",
    options: [
      "Bacteria",
      "Fungi",
      "Protozoa",
      "Virus"
    ],
    answer: "Virus"
  },
  {
    question: "What is the collective term for the male reproductive organs of a flower?",
    options: [
      "Carpel",
      "Pistil",
      "Stamen",
      "Sepal"
    ],
    answer: "Stamen"
  },
  {
    question: "What is the study of how traits are inherited from parents to offspring?",
    options: [
      "Ecology",
      "Physiology",
      "Genetics",
      "Taxonomy"
    ],
    answer: "Genetics"
  },
  {
    question: "Which organ filters waste products from the blood to produce urine?",
    options: [
      "Liver",
      "Stomach",
      "Kidney",
      "Spleen"
    ],
    answer: "Kidney"
  },
  {
    question: "What is the main energy currency of the cell?",
    options: [
      "Glucose",
      "DNA",
      "ATP",
      "RNA"
    ],
    answer: "ATP"
  },
  {
    question: "A doctor specializing in the health of the heart is called a...",
    options: [
      "Neurologist",
      "Dermatologist",
      "Cardiologist",
      "Oncologist"
    ],
    answer: "Cardiologist"
  },
  {
    question: "What part of the plant absorbs water and nutrients from the soil?",
    options: [
      "Leaves",
      "Stem",
      "Roots",
      "Flower"
    ],
    answer: "Roots"
  },
  {
    question: "What disease is caused by a Plasmodium parasite and transmitted by mosquitoes?",
    options: [
      "Typhoid",
      "Dengue Fever",
      "Cholera",
      "Malaria"
    ],
    answer: "Malaria"
  },
  {
    question: "What is the process called where an organism produces light, often seen in deep-sea creatures?",
    options: [
      "Photosynthesis",
      "Bioluminescence",
      "Chemosynthesis",
      "Bioaccumulation"
    ],
    answer: "Bioluminescence"
  },
  {
    question: "Which structure connects muscle to bone?",
    options: [
      "Ligament",
      "Cartilage",
      "Tendon",
      "Joint"
    ],
    answer: "Tendon"
  },
  {
    question: "The 'survival of the fittest' concept is central to the theory of...",
    options: [
      "Cell Theory",
      "Lamarckism",
      "Natural Selection",
      "Germ Theory"
    ],
    answer: "Natural Selection"
  },
  {
    question: "What part of the ear is primarily responsible for balance?",
    options: [
      "Eardrum",
      "Cochlea",
      "Ossicles",
      "Semicircular Canals"
    ],
    answer: "Semicircular Canals"
  },
  {
    question: "What is the scientific term for the voice box?",
    options: [
      "Pharynx",
      "Trachea",
      "Larynx",
      "Bronchi"
    ],
    answer: "Larynx"
  },
  {
    question: "Which nutrient is the most energy-dense (most calories per gram)?",
    options: [
      "Carbohydrates",
      "Protein",
      "Vitamins",
      "Fats"
    ],
    answer: "Fats"
  },
  {
    question: "What is the name of the process that plants use to release water vapor?",
    options: [
      "Respiration",
      "Evaporation",
      "Transpiration",
      "Condensation"
    ],
    answer: "Transpiration"
  },
  {
    question: "A deficiency of iodine can cause which thyroid condition?",
    options: [
      "Diabetes",
      "Anemia",
      "Goiter",
      "Osteoporosis"
    ],
    answer: "Goiter"
  },
  {
    question: "What is the term for a permanent change in the DNA sequence?",
    options: [
      "Replication",
      "Translation",
      "Transcription",
      "Mutation"
    ],
    answer: "Mutation"
  },
  {
    question: "Which of these is an example of an involuntary muscle?",
    options: [
      "Bicep",
      "Tricep",
      "Heart Muscle (Cardiac)",
      "Quadricep"
    ],
    answer: "Heart Muscle (Cardiac)"
  },
  {
    question: "What type of macromolecule includes sugars and starches?",
    options: [
      "Lipids",
      "Proteins",
      "Carbohydrates",
      "Nucleic Acids"
    ],
    answer: "Carbohydrates"
  },
  {
    question: "Which organ detoxifies blood and produces bile?",
    options: [
      "Spleen",
      "Gallbladder",
      "Liver",
      "Pancreas"
    ],
    answer: "Liver"
  },
  {
    question: "The bending of a plant toward a light source is called...",
    options: [
      "Geotropism",
      "Thigmotropism",
      "Phototropism",
      "Hydrotropism"
    ],
    answer: "Phototropism"
  },
  {
    question: "How many chambers does the human heart have?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "4"
  },
  {
    question: "Which hormone is often called the 'fight or flight' hormone?",
    options: [
      "Estrogen",
      "Testosterone",
      "Insulin",
      "Adrenaline (Epinephrine)"
    ],
    answer: "Adrenaline (Epinephrine)"
  },
  {
    question: "What is the primary product of the Krebs Cycle (Citric Acid Cycle) in cellular respiration?",
    options: [
      "Lactic Acid",
      "Pyruvic Acid",
      "Carbon Dioxide (CO2)",
      "Oxygen (O2)"
    ],
    answer: "Carbon Dioxide (CO2)"
  },
  {
    question: "Which organism is considered an amphibian?",
    options: [
      "Snake",
      "Lizard",
      "Frog",
      "Crocodile"
    ],
    answer: "Frog"
  },
  {
    question: "What type of nutrient must be obtained from the diet because the body cannot synthesize it?",
    options: [
      "Non-essential",
      "Essential",
      "Transitional",
      "Primary"
    ],
    answer: "Essential"
  },
  {
    question: "What is the scientific term for the study of the classification of living organisms?",
    options: [
      "Morphology",
      "Ecology",
      "Taxonomy",
      "Ethology"
    ],
    answer: "Taxonomy"
  },
  {
    question: "The outer shell of a virus is composed primarily of what material?",
    options: [
      "Lipids",
      "Carbohydrates",
      "Protein (Capsid)",
      "Nucleic Acid"
    ],
    answer: "Protein (Capsid)"
  },
  {
    question: "Which sense organ relies on olfactory receptors?",
    options: [
      "Eyes",
      "Ears",
      "Nose",
      "Tongue"
    ],
    answer: "Nose"
  }
]