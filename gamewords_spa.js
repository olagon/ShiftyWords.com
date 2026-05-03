// gamewords_spa.js
// A list of 365 unique, five-letter Spanish words (all in uppercase).
// Each word object includes:
//    word: the Spanish word
//    definition: a concise English translation
//    lesson: an expanded language lesson suitable for beginners, with
//            multiple examples or extra context where useful.

const gameWords = [
  {
    word: "AMIGO",
    definition: "friend",
    lesson: "AMIGO means 'friend' in Spanish. Ejemplos: 'Mi amigo siempre me apoya.' (My friend always supports me.)"
  },
  {
    word: "PERRO",
    definition: "dog",
    lesson: "PERRO means 'dog' in Spanish. Ejemplos: 'El perro corre en el parque.' (The dog runs in the park.)"
  },
  {
    word: "LIBRO",
    definition: "book",
    lesson: "LIBRO means 'book' in Spanish. Ejemplos: 'Estoy leyendo un libro interesante.' (I am reading an interesting book.)"
  },
  {
    word: "SILLA",
    definition: "chair",
    lesson: "SILLA means 'chair' in Spanish. Ejemplos: 'La silla es cómoda para sentarse.' (The chair is comfortable to sit on.)"
  },
  {
    word: "PLAYA",
    definition: "beach",
    lesson: "PLAYA means 'beach' in Spanish, a place by the sea or ocean to relax or swim. Ejemplos: 'Nos relajamos en la playa durante el verano.' (We relaxed on the beach during the summer.)"
  },
  {
    word: "CAMPO",
    definition: "field",
    lesson: "CAMPO means 'field' or 'countryside' in Spanish. Ejemplos: 'El campo es perfecto para un picnic.' (The field is perfect for a picnic.)"
  },
  {
    word: "FRUTA",
    definition: "fruit",
    lesson: "FRUTA means 'fruit' in Spanish. Ejemplos: 'La fruta fresca es muy saludable.' (Fresh fruit is very healthy.)"
  },
  {
    word: "SUEÑO",
    definition: "dream",
    lesson: "SUEÑO means 'dream' in Spanish. It can be about sleeping dreams or aspirations. Ejemplos: 'Tuve un sueño muy extraño anoche.' (I had a very strange dream last night.)"
  },
  {
    word: "CIELO",
    definition: "sky",
    lesson: "CIELO means 'sky' in Spanish. Ejemplos: 'El cielo está despejado hoy.' (The sky is clear today.)"
  },
  {
    word: "SUELO",
    definition: "ground",
    lesson: "SUELO means 'ground' in Spanish. Ejemplos: 'El suelo está mojado después de la lluvia.' (The ground is wet after the rain.)"
  },
  {
    word: "VALLE",
    definition: "valley",
    lesson: "VALLE means 'valley' in Spanish, a low area between hills or mountains. Ejemplos: 'El valle es profundo y verde.' (The valley is deep and green.)"
  },
  {
    word: "MONTE",
    definition: "mountain",
    lesson: "MONTE can mean 'mountain' or 'hill' in Spanish. Ejemplos: 'Subimos el monte durante la excursión.' (We climbed the mountain during the hike.)"
  },
  {
    word: "RUEDA",
    definition: "wheel",
    lesson: "RUEDA means 'wheel' in Spanish. Ejemplos: 'La rueda gira rápidamente en la bicicleta.' (The wheel spins quickly on the bicycle.)"
  },
  {
    word: "LLAVE",
    definition: "key",
    lesson: "LLAVE means 'key' in Spanish. Ejemplos: 'No encuentro la llave de mi casa.' (I can’t find the key to my house.)"
  },
  {
    word: "PERLA",
    definition: "pearl",
    lesson: "PERLA means 'pearl' in Spanish. Ejemplos: 'La perla brilla en el collar.' (The pearl shines in the necklace.)"
  },
  {
    word: "FUEGO",
    definition: "fire",
    lesson: "FUEGO means 'fire' in Spanish. Ejemplos: 'El fuego arde con fuerza en la chimenea.' (The fire burns strongly in the fireplace.)"
  },
  {
    word: "BRISA",
    definition: "breeze",
    lesson: "BRISA means 'breeze' in Spanish, referring to a light wind. Ejemplos: 'La brisa marina es muy refrescante.' (The sea breeze is very refreshing.)"
  },
  {
    word: "ROSAL",
    definition: "rosebush",
    lesson: "ROSAL means 'rosebush' in Spanish. Ejemplos: 'El rosal florece en primavera.' (The rosebush blooms in spring.)"
  },
  {
    word: "DIOSA",
    definition: "goddess",
    lesson: "DIOSA means 'goddess' in Spanish. Ejemplos: 'La diosa era adorada por los antiguos.' (The goddess was worshipped by the ancients.)"
  },
  {
    word: "HONOR",
    definition: "honor",
    lesson: "HONOR means 'honor' in Spanish, referring to respect or integrity. Ejemplos: 'El honor es muy importante en nuestra cultura.' (Honor is very important in our culture.)"
  },
  {
    word: "NOBLE",
    definition: "noble",
    lesson: "NOBLE means 'noble' in Spanish (virtuous or high-born). Ejemplos: 'Es un hombre de espíritu noble.' (He is a man of noble spirit.)"
  },
  {
    word: "GRUPO",
    definition: "group",
    lesson: "GRUPO means 'group' in Spanish. Ejemplos: 'El grupo se reunió para estudiar juntos.' (The group met to study together.)"
  },
  {
    word: "RIMAS",
    definition: "rhymes",
    lesson: "RIMAS means 'rhymes' (plural) in Spanish. Ejemplos: 'Las rimas hacen que la poesía sea musical.' (Rhymes make poetry musical.)"
  },
  {
    word: "VERSO",
    definition: "verse",
    lesson: "VERSO means 'verse' in Spanish, a line of poetry. Ejemplos: 'Cada verso de este poema es especial.' (Every verse of this poem is special.)"
  },
  {
    word: "RIEGO",
    definition: "irrigation",
    lesson: "RIEGO means 'irrigation' in Spanish, essential for crops. Ejemplos: 'El riego es esencial para los cultivos en el campo.' (Irrigation is essential for the crops in the field.)"
  },
  {
    word: "ARBOL",
    definition: "tree",
    lesson: "ARBOL means 'tree' in Spanish. Ejemplos: 'El árbol da sombra en los días calurosos.' (The tree provides shade on hot days.)"
  },
  {
    word: "MUROS",
    definition: "walls",
    lesson: "MUROS means 'walls' in Spanish, often large or exterior walls. Ejemplos: 'Los muros del castillo son impresionantemente antiguos.' (The castle walls are impressively old.)"
  },
  {
    word: "MARCO",
    definition: "frame",
    lesson: "MARCO means 'frame' in Spanish, like a picture frame. Ejemplos: 'El marco de la foto es de madera tallada.' (The photo frame is made of carved wood.)"
  },
  {
    word: "TEXTO",
    definition: "text",
    lesson: "TEXTO means 'text' in Spanish, referring to written content. Ejemplos: 'El texto del libro es muy claro y directo.' (The book’s text is very clear and direct.)"
  },
  {
    word: "PUNTO",
    definition: "point",
    lesson: "PUNTO means 'point' in Spanish. Ejemplos: 'Cada punto en el argumento cuenta.' (Every point in the argument matters.)"
  },
  {
    word: "BAILE",
    definition: "dance",
    lesson: "BAILE means 'dance' (as an event or the art of dancing). Ejemplos: 'El baile en la fiesta fue espectacular.' (The dance at the party was spectacular.)"
  },
  {
    word: "COMER",
    definition: "to eat",
    lesson: "COMER means 'to eat' in Spanish. Ejemplos: 'Me gusta comer comida saludable.' (I like to eat healthy food.)"
  },
  {
    word: "BEBER",
    definition: "to drink",
    lesson: "BEBER means 'to drink' in Spanish. Ejemplos: 'Voy a beber un vaso de agua fresca.' (I am going to drink a glass of fresh water.)"
  },
  {
    word: "VIVIR",
    definition: "to live",
    lesson: "VIVIR means 'to live' in Spanish. Ejemplos: 'Quiero vivir una vida llena de aventuras.' (I want to live a life full of adventures.)"
  },
  {
    word: "ANDAR",
    definition: "to walk",
    lesson: "ANDAR means 'to walk' in Spanish, similar to 'caminar'. Ejemplos: 'Prefiero andar por el parque cada mañana.' (I prefer to walk in the park every morning.)"
  },
  {
    word: "MIRAR",
    definition: "to look",
    lesson: "MIRAR means 'to look' or 'to watch' in Spanish. Ejemplos: 'Voy a mirar la puesta de sol en la playa.' (I am going to watch the sunset at the beach.)"
  },
  {
    word: "SABOR",
    definition: "flavor",
    lesson: "SABOR means 'flavor' in Spanish. Ejemplos: 'El sabor del chocolate es irresistible.' (The flavor of chocolate is irresistible.)"
  },
  {
    word: "SUAVE",
    definition: "soft",
    lesson: "SUAVE means 'soft' or 'gentle' in Spanish. Ejemplos: 'La tela de la camisa es muy suave al tacto.' (The fabric of the shirt is very soft to the touch.)"
  },
  {
    word: "FIRME",
    definition: "firm",
    lesson: "FIRME means 'firm' or 'steady' in Spanish. Ejemplos: 'El suelo está firme después de la lluvia.' (The ground is firm after the rain.)"
  },
  {
    word: "GRATO",
    definition: "pleasing",
    lesson: "GRATO means 'pleasing' or 'pleasant' in Spanish. Ejemplos: 'La música de fondo es muy grata y relajante.' (The background music is very pleasant and relaxing.)"
  },
  {
    word: "SALUD",
    definition: "health",
    lesson: "SALUD means 'health' in Spanish. Ejemplos: 'Cuidar la salud es lo más importante.' (Taking care of your health is the most important thing.)"
  },
  {
    word: "VITAL",
    definition: "vital",
    lesson: "VITAL means 'vital' or 'essential' in Spanish. Ejemplos: 'El ejercicio es vital para una buena salud.' (Exercise is vital for good health.)"
  },
  {
    word: "MIEDO",
    definition: "fear",
    lesson: "MIEDO means 'fear' in Spanish. Ejemplos: 'El miedo a lo desconocido es natural.' (Fear of the unknown is natural.)"
  },
  {
    word: "LLORO",
    definition: "I cry",
    lesson: "LLORO means 'I cry'. It's the form of llorar for 'yo'. Ejemplos: 'Cuando estoy triste, a veces lloro.' (When I am sad, sometimes I cry.)"
  },
  {
    word: "LLAMA",
    definition: "flame/calls",
    lesson: "LLAMA can mean 'flame' (noun) or 'calls' (from llamar). Ejemplos: 'La llama de la vela parpadea.' (The candle flame flickers.) 'Ella llama a su amigo cada día.' (She calls her friend every day.)"
  },
  {
    word: "SONAR",
    definition: "to sound",
    lesson: "SONAR means 'to sound' or 'to ring'. Ejemplos: 'El teléfono va a sonar en cualquier momento.' (The phone is going to ring any moment.)"
  },
  {
    word: "LLENO",
    definition: "full",
    lesson: "LLENO means 'full' in Spanish (masculine form). Ejemplos: 'El vaso está lleno de jugo.' (The glass is full of juice.)"
  },
  {
    word: "VACIO",
    definition: "empty",
    lesson: "VACÍO means 'empty' in Spanish. Ejemplos: 'La botella está vacía.' (The bottle is empty.)"
  },
  {
    word: "VERDE",
    definition: "green",
    lesson: "VERDE means 'green' in Spanish. Ejemplos: 'El césped es de un verde vibrante.' (The grass is a vibrant green.)"
  },
  {
    word: "NEGRO",
    definition: "black",
    lesson: "NEGRO means 'black' in Spanish. Ejemplos: 'El gato es completamente negro.' (The cat is completely black.)"
  },
  {
    word: "TARDE",
    definition: "afternoon/late",
    lesson: "TARDE can mean 'afternoon' (la tarde) or 'late' (llegar tarde). Ejemplos: 'Llegamos en la tarde.' (We arrived in the afternoon.)"
  },
  {
    word: "PRISA",
    definition: "hurry",
    lesson: "PRISA means 'hurry'. The phrase 'tener prisa' means to be in a hurry. Ejemplos: 'Tengo mucha prisa para llegar a tiempo.' (I'm in a big hurry to arrive on time.)"
  },
  {
    word: "LISTO",
    definition: "ready/smart",
    lesson: "LISTO can mean 'ready' (estar listo) or 'smart' (ser listo). Ejemplos: 'Estoy listo para el examen.' (I am ready for the exam.) 'Ella es muy lista.' (She is very smart.)"
  },
  {
    word: "FRESA",
    definition: "strawberry",
    lesson: "FRESA means 'strawberry' in Spanish. Ejemplos: 'La fresa es dulce y jugosa.' (The strawberry is sweet and juicy.)"
  },
  {
    word: "MANOS",
    definition: "hands",
    lesson: "MANOS means 'hands' in Spanish. Ejemplos: 'Lávate las manos antes de comer.' (Wash your hands before eating.)"
  },
  {
    word: "CORTO",
    definition: "short",
    lesson: "CORTO means 'short' in Spanish (length). Ejemplos: 'El cabello está muy corto.' (The hair is very short.)"
  },
  {
    word: "LARGO",
    definition: "long",
    lesson: "LARGO means 'long' in Spanish. Ejemplos: 'El vestido es largo y elegante.' (The dress is long and elegant.)"
  },
  {
    word: "NUEVA",
    definition: "new (feminine)",
    lesson: "NUEVA is the feminine form of 'new'. Ejemplos: 'La casa es nueva y moderna.' (The house is new and modern.)"
  },
  {
    word: "VIEJA",
    definition: "old (feminine)",
    lesson: "VIEJA is the feminine form of 'old'. Ejemplos: 'La tradición es vieja pero valiosa.' (The tradition is old but valuable.)"
  },
  {
    word: "JOVEN",
    definition: "young",
    lesson: "JOVEN means 'young' in Spanish. Ejemplos: 'La energía de los jóvenes es inspiradora.' (The energy of the young is inspiring.)"
  },
  {
    word: "FELIZ",
    definition: "happy",
    lesson: "FELIZ means 'happy' in Spanish. Ejemplos: 'Estoy feliz de verte hoy.' (I am happy to see you today.)"
  },
  {
    word: "AMADO",
    definition: "loved",
    lesson: "AMADO means 'loved' in Spanish (past participle of amar). Ejemplos: 'Se siente amado por su familia.' (He/She feels loved by family.)"
  },
  {
    word: "MATAR",
    definition: "to kill",
    lesson: "MATAR means 'to kill' in Spanish. Ejemplos: 'El villano intentó matar al héroe.' (The villain tried to kill the hero.)"
  },
  {
    word: "SABER",
    definition: "to know",
    lesson: "SABER means 'to know' (facts/information) in Spanish. Ejemplos: 'Quiero saber la verdad.' (I want to know the truth.)"
  },
  {
    word: "CREER",
    definition: "to believe",
    lesson: "CREER means 'to believe' in Spanish. Ejemplos: 'Es importante creer en uno mismo.' (It's important to believe in oneself.)"
  },
  {
    word: "DECIR",
    definition: "to say",
    lesson: "DECIR means 'to say' or 'to tell' in Spanish. Ejemplos: 'No sé qué decir en esta situación.' (I don’t know what to say in this situation.)"
  },
  {
    word: "LABOR",
    definition: "work",
    lesson: "LABOR means 'work' or 'labor' in Spanish, often implying effort. Ejemplos: 'El trabajo duro es una labor constante.' (Hard work is a constant effort.)"
  },
  {
    word: "DUCHA",
    definition: "shower",
    lesson: "DUCHA means 'shower' in Spanish. Ejemplos: 'Después de correr, tomé una ducha refrescante.' (After running, I took a refreshing shower.)"
  },
  {
    word: "BAÑAR",
    definition: "to bathe",
    lesson: "BAÑAR means 'to bathe'. Ejemplos: 'Voy a bañar al perro esta tarde.' (I'm going to bathe the dog this afternoon.)"
  },
  {
    word: "SALON",
    definition: "hall/room",
    lesson: "SALÓN (often spelled with accent) can mean 'hall' or 'large room'. Ejemplos: 'La fiesta se celebró en el salón principal.' (The party was held in the main hall.)"
  },
  {
    word: "MUNDO",
    definition: "world",
    lesson: "MUNDO means 'world' in Spanish. Ejemplos: 'El mundo es un lugar fascinante.' (The world is a fascinating place.)"
  },
  {
    word: "PLUMA",
    definition: "feather/pen",
    lesson: "PLUMA means 'feather' or 'pen' in Spanish. Ejemplos: 'La pluma escribe suavemente.' (The pen writes smoothly.)"
  },
  {
    word: "NOCHE",
    definition: "night",
    lesson: "NOCHE means 'night' in Spanish. Ejemplos: 'La noche está llena de estrellas.' (The night is full of stars.)"
  },
  {
    word: "ARENA",
    definition: "sand",
    lesson: "ARENA means 'sand' in Spanish. Ejemplos: 'La arena de la playa es fina y dorada.' (The sand on the beach is fine and golden.)"
  },
  {
    word: "CUEVA",
    definition: "cave",
    lesson: "CUEVA means 'cave' in Spanish. Ejemplos: 'Exploramos una cueva misteriosa.' (We explored a mysterious cave.)"
  },
  {
    word: "NUBES",
    definition: "clouds",
    lesson: "NUBES means 'clouds' (plural) in Spanish. Ejemplos: 'Las nubes se mueven lentamente en el cielo.' (The clouds move slowly in the sky.)"
  },
  {
    word: "SOLES",
    definition: "suns",
    lesson: "SOLES (plural) means 'suns'. Used poetically or for multiple stars. Ejemplos: 'Los soles de verano brillan intensamente.' (The summer suns shine intensely.)"
  },
  {
    word: "ESTÍO",
    definition: "summer",
    lesson: "ESTÍO is a more literary term for 'summer'. Ejemplos: 'El estío trae días largos.' (Summer brings long days.)"
  },
  {
    word: "OTOÑO",
    definition: "autumn",
    lesson: "OTOÑO means 'autumn' in Spanish. Ejemplos: 'El otoño viste los árboles de colores cálidos.' (Autumn dresses the trees in warm colors.)"
  },
  {
    word: "COSTA",
    definition: "coast",
    lesson: "COSTA means 'coast' in Spanish. Ejemplos: 'La costa española es famosa por sus playas.' (The Spanish coast is famous for its beaches.)"
  },
  {
    word: "BARCO",
    definition: "boat",
    lesson: "BARCO means 'boat' in Spanish. Ejemplos: 'El barco surca el océano con elegancia.' (The boat sails the ocean gracefully.)"
  },
  {
    word: "BANCO",
    definition: "bank",
    lesson: "BANCO means 'bank' in Spanish (financial institution). Ejemplos: 'Fui al banco para hacer un depósito.' (I went to the bank to make a deposit.)"
  },
  {
    word: "PLATA",
    definition: "silver/money",
    lesson: "PLATA means 'silver', and also slang for 'money'. Ejemplos: 'La plata brilla bajo el sol.' (The silver shines under the sun.)"
  },
  {
    word: "CORAL",
    definition: "coral",
    lesson: "CORAL means 'coral' in Spanish. Ejemplos: 'El arrecife de coral es un ecosistema vibrante.' (The coral reef is a vibrant ecosystem.)"
  },
  {
    word: "MAREA",
    definition: "tide",
    lesson: "MAREA means 'tide' in Spanish. Ejemplos: 'La marea sube y baja con regularidad.' (The tide rises and falls regularly.)"
  },
  {
    word: "TIGRE",
    definition: "tiger",
    lesson: "TIGRE means 'tiger' in Spanish. Ejemplos: 'El tigre es un felino majestuoso.' (The tiger is a majestic feline.)"
  },
  {
    word: "BURRO",
    definition: "donkey",
    lesson: "BURRO means 'donkey' in Spanish. Ejemplos: 'El burro carga con el peso de la tradición.' (The donkey carries the weight of tradition.)"
  },
  {
    word: "CABRA",
    definition: "goat",
    lesson: "CABRA means 'goat' in Spanish. Ejemplos: 'La cabra pasta en la ladera de la montaña.' (The goat grazes on the mountainside.)"
  },
  {
    word: "CERDO",
    definition: "pig",
    lesson: "CERDO means 'pig' in Spanish. Ejemplos: 'El cerdo es criado en la granja.' (The pig is raised on the farm.)"
  },
  {
    word: "OVEJA",
    definition: "sheep",
    lesson: "OVEJA means 'sheep' in Spanish. Ejemplos: 'La oveja es suave y lanuda.' (The sheep is soft and woolly.)"
  },
  {
    word: "GANSO",
    definition: "goose",
    lesson: "GANSO means 'goose' in Spanish. Ejemplos: 'El ganso nada en el lago.' (The goose swims in the lake.)"
  },
  {
    word: "BLUSA",
    definition: "blouse",
    lesson: "BLUSA means 'blouse' in Spanish. Ejemplos: 'La blusa combina perfectamente con la falda.' (The blouse pairs perfectly with the skirt.)"
  },
  {
    word: "FALDA",
    definition: "skirt",
    lesson: "FALDA means 'skirt' in Spanish. Ejemplos: 'La falda es ligera y colorida.' (The skirt is light and colorful.)"
  },
  {
    word: "DULCE",
    definition: "sweet",
    lesson: "DULCE means 'sweet' in Spanish. Ejemplos: 'El postre es muy dulce y delicioso.' (The dessert is very sweet and delicious.)"
  },
  {
    word: "AMENO",
    definition: "pleasant",
    lesson: "AMENO means 'pleasant' or 'enjoyable'. Ejemplos: 'El ambiente es ameno y acogedor.' (The atmosphere is pleasant and welcoming.)"
  },
  {
    word: "BRAVO",
    definition: "fierce",
    lesson: "BRAVO can mean 'fierce', 'brave', or 'wild'. Ejemplos: 'El león tiene un rugido bravo.' (The lion has a fierce roar.)"
  },
  {
    word: "JUEGO",
    definition: "game",
    lesson: "JUEGO means 'game' in Spanish. Ejemplos: 'El juego de mesa es muy entretenido.' (The board game is very entertaining.)"
  },
  {
    word: "PISTA",
    definition: "track/clue",
    lesson: "PISTA means 'track' or 'clue'. Ejemplos: 'La policía siguió la pista del sospechoso.' (The police followed the suspect’s trail.)"
  },
  {
    word: "RUIDO",
    definition: "noise",
    lesson: "RUIDO means 'noise' in Spanish. Ejemplos: 'El ruido de la ciudad es constante.' (The city’s noise is constant.)"
  },
  {
    word: "CALOR",
    definition: "heat",
    lesson: "CALOR means 'heat' in Spanish. Ejemplos: 'El calor del verano es intenso.' (The summer heat is intense.)"
  },
  {
    word: "CRUDO",
    definition: "raw",
    lesson: "CRUDO means 'raw' in Spanish. Ejemplos: 'Prefiero comer alimentos crudos.' (I prefer to eat raw foods.)"
  },
  {
    word: "COCER",
    definition: "to cook",
    lesson: "COCER means 'to cook' (often boiling) in Spanish. Ejemplos: 'Voy a cocer el arroz para la cena.' (I'm going to cook the rice for dinner.)"
  },
  {
    word: "ASADO",
    definition: "roast",
    lesson: "ASADO can mean 'roast' or a barbecue event. Ejemplos: 'El asado se prepara en la parrilla.' (The roast is prepared on the grill.)"
  },
  {
    word: "SALIR",
    definition: "to leave",
    lesson: "SALIR means 'to leave' or 'to go out'. Ejemplos: 'Voy a salir a dar un paseo.' (I'm going out for a walk.)"
  },
  {
    word: "ABRIR",
    definition: "to open",
    lesson: "ABRIR means 'to open' in Spanish. Ejemplos: 'Por favor, abre la ventana.' (Please open the window.)"
  },
  {
    word: "FRENO",
    definition: "brake",
    lesson: "FRENO means 'brake' (on a vehicle). Ejemplos: 'El coche frenó repentinamente.' (The car braked suddenly.)"
  },
  {
    word: "COCHE",
    definition: "car",
    lesson: "COCHE means 'car' in Spanish. Ejemplos: 'El coche es rápido y moderno.' (The car is fast and modern.)"
  },
  {
    word: "PLAZA",
    definition: "square",
    lesson: "PLAZA means 'square', like a public square in a town. Ejemplos: 'La plaza del pueblo es muy animada.' (The town square is very lively.)"
  },
  {
    word: "CALLE",
    definition: "street",
    lesson: "CALLE means 'street' in Spanish. Ejemplos: 'La calle está llena de gente.' (The street is full of people.)"
  },
  {
    word: "AMIGA",
    definition: "friend (female)",
    lesson: "AMIGA means 'friend (female)'. Ejemplos: 'Mi amiga siempre me escucha.' (My female friend always listens to me.)"
  },
  {
    word: "NOVIO",
    definition: "boyfriend",
    lesson: "NOVIO means 'boyfriend' (also 'groom'). Ejemplos: 'Su novio le regaló flores.' (Her boyfriend gave her flowers.)"
  },
  {
    word: "NOVIA",
    definition: "girlfriend",
    lesson: "NOVIA means 'girlfriend' (also 'bride'). Ejemplos: 'La novia estaba radiante en su vestido.' (The girlfriend was radiant in her dress.)"
  },
  {
    word: "CARTA",
    definition: "letter",
    lesson: "CARTA means 'letter' in Spanish. Ejemplos: 'Escribí una carta a mi abuela.' (I wrote a letter to my grandmother.)"
  },
  {
    word: "SELLO",
    definition: "stamp",
    lesson: "SELLO means 'stamp' in Spanish. Ejemplos: 'El sello es pequeño y rojo.' (The stamp is small and red.)"
  },
  {
    word: "POSTE",
    definition: "post/pole",
    lesson: "POSTE means 'post' or 'pole'. Ejemplos: 'El poste de luz está en la esquina.' (The streetlight pole is at the corner.)"
  },
  {
    word: "PARED",
    definition: "wall",
    lesson: "PARED means 'wall' (usually interior). Ejemplos: 'La pared está decorada con cuadros.' (The wall is decorated with paintings.)"
  },
  {
    word: "TECHO",
    definition: "roof",
    lesson: "TECHO means 'roof' or 'ceiling' in Spanish. Ejemplos: 'El techo de la casa necesita reparación.' (The house’s roof needs repair.)"
  },
  {
    word: "FUMAR",
    definition: "to smoke",
    lesson: "FUMAR means 'to smoke'. Ejemplos: 'No se permite fumar en este edificio.' (Smoking is not allowed in this building.)"
  },
  {
    word: "TOCAR",
    definition: "to touch/play",
    lesson: "TOCAR means 'to touch' or 'to play' (an instrument). Ejemplos: 'Me gusta tocar la guitarra.' (I like to play the guitar.)"
  },
  {
    word: "BAILA",
    definition: "dances",
    lesson: "BAILA means 'he/she dances'. Ejemplos: 'Ella baila en cada fiesta.' (She dances at every party.)"
  },
  {
    word: "CANTA",
    definition: "sings",
    lesson: "CANTA means 'he/she sings'. Ejemplos: 'Él canta en el coro.' (He sings in the choir.)"
  },
  {
    word: "GRITA",
    definition: "shouts",
    lesson: "GRITA means 'he/she shouts'. Ejemplos: 'El niño grita cuando juega.' (The child shouts while playing.)"
  },
  {
    word: "LLORA",
    definition: "cries",
    lesson: "LLORA means 'he/she cries'. Ejemplos: 'La bebé llora por atención.' (The baby cries for attention.)"
  },
  {
    word: "RIEGA",
    definition: "waters",
    lesson: "RIEGA means 'he/she waters'. It's from regar. Ejemplos: 'Ella riega las plantas cada mañana.' (She waters the plants every morning.)"
  },
  {
    word: "PINTA",
    definition: "paints",
    lesson: "PINTA means 'he/she paints'. Ejemplos: 'El artista pinta un mural colorido.' (The artist paints a colorful mural.)"
  },
  {
    word: "COLOR",
    definition: "color",
    lesson: "COLOR means 'color' in Spanish. Ejemplos: 'El color de la habitación es vibrante.' (The room’s color is vibrant.)"
  },
  {
    word: "TEMOR",
    definition: "fear",
    lesson: "TEMOR means 'fear', similar to miedo but often more serious. Ejemplos: 'El temor se apoderó de la multitud.' (Fear took over the crowd.)"
  },
  {
    word: "VALOR",
    definition: "courage",
    lesson: "VALOR means 'courage' or 'value'. Ejemplos: 'Se necesita valor para enfrentar desafíos.' (It takes courage to face challenges.)"
  },
  {
    word: "RIVAL",
    definition: "rival",
    lesson: "RIVAL means 'rival' in Spanish. Ejemplos: 'El rival se mostró fuerte en el juego.' (The rival was strong in the game.)"
  },
  {
    word: "SOCIO",
    definition: "partner",
    lesson: "SOCIO means 'partner' or 'member' (business context). Ejemplos: 'Mi socio y yo fundamos la empresa juntos.' (My partner and I founded the company together.)"
  },
  {
    word: "SALMO",
    definition: "psalm",
    lesson: "SALMO means 'psalm' in Spanish (a sacred hymn or poem). Ejemplos: 'El salmo cantado es muy conmovedor.' (The sung psalm is very moving.)"
  },
  {
    word: "DUETO",
    definition: "duet",
    lesson: "DUETO means 'duet'. Ejemplos: 'El dueto en el concierto fue espectacular.' (The duet at the concert was spectacular.)"
  },
  {
    word: "OCASO",
    definition: "sunset",
    lesson: "OCASO means 'sunset' (literal) or 'decline' (figurative). Ejemplos: 'El ocaso tiñe el cielo de rojo.' (The sunset paints the sky red.)"
  },
  {
    word: "ALBOR",
    definition: "dawn",
    lesson: "ALBOR is a poetic word for 'dawn'. Ejemplos: 'El albor anuncia el comienzo del día.' (Dawn announces the start of the day.)"
  },
  {
    word: "CREMA",
    definition: "cream",
    lesson: "CREMA means 'cream' in Spanish. Ejemplos: 'La crema es la base de muchos postres.' (Cream is the base of many desserts.)"
  },
  {
    word: "SALSA",
    definition: "sauce/dance",
    lesson: "SALSA means 'sauce' or the 'salsa dance'. Ejemplos: 'La salsa picante es deliciosa.' (The spicy sauce is delicious.) 'Bailaron salsa toda la noche.' (They danced salsa all night.)"
  },
  {
    word: "MANGO",
    definition: "mango",
    lesson: "MANGO means 'mango' (the fruit). Ejemplos: 'El mango está maduro y dulce.' (The mango is ripe and sweet.)"
  },
  {
    word: "MELÓN",
    definition: "melon",
    lesson: "MELÓN means 'melon' in Spanish. Ejemplos: 'Corté un melón para el postre.' (I cut a melon for dessert.)"
  },
  {
    word: "MORAS",
    definition: "blackberries",
    lesson: "MORAS means 'blackberries' in Spanish. Ejemplos: 'Las moras crecen en el campo.' (Blackberries grow in the countryside.)"
  },
  {
    word: "SUERO",
    definition: "whey",
    lesson: "SUERO means 'whey' in Spanish, a byproduct of cheese-making. Ejemplos: 'El suero se usa en bebidas energéticas.' (Whey is used in energy drinks.)"
  },
  {
    word: "CALDO",
    definition: "broth",
    lesson: "CALDO means 'broth' in Spanish, like soup stock. Ejemplos: 'El caldo de pollo es reconfortante.' (Chicken broth is comforting.)"
  },
  {
    word: "TARTA",
    definition: "pie/tart",
    lesson: "TARTA means 'pie' or 'tart' in Spanish. Ejemplos: 'Preparé una tarta de manzana casera.' (I made a homemade apple pie/tart.)"
  },
  {
    word: "QUESO",
    definition: "cheese",
    lesson: "QUESO means 'cheese' in Spanish. Ejemplos: 'El queso manchego es famoso en España.' (Manchego cheese is famous in Spain.)"
  },
  {
    word: "NIEVE",
    definition: "snow",
    lesson: "NIEVE means 'snow' in Spanish. Ejemplos: 'La nieve cubre el paisaje invernal.' (Snow covers the winter landscape.)"
  },
  {
    word: "BRUMA",
    definition: "mist",
    lesson: "BRUMA means 'mist' or 'fog' in Spanish. Ejemplos: 'La bruma envuelve el valle en la mañana.' (Mist envelops the valley in the morning.)"
  },
  {
    word: "NIEVA",
    definition: "snows",
    lesson: "NIEVA means 'it snows'. It's from 'nevar'. Ejemplos: 'En invierno, nieva en las montañas.' (In winter, it snows in the mountains.)"
  },
  {
    word: "LEONA",
    definition: "lioness",
    lesson: "LEONA means 'lioness' in Spanish. Ejemplos: 'La leona protege a sus crías con fuerza.' (The lioness fiercely protects her cubs.)"
  },
  {
    word: "ZORRO",
    definition: "fox",
    lesson: "ZORRO means 'fox' in Spanish. Ejemplos: 'El zorro es astuto y rápido.' (The fox is cunning and fast.)"
  },
  {
    word: "LINCE",
    definition: "lynx",
    lesson: "LINCE means 'lynx' in Spanish. Ejemplos: 'El lince merodea por el bosque.' (The lynx prowls through the forest.)"
  },
  {
    word: "TORDO",
    definition: "thrush",
    lesson: "TORDO means 'thrush' (a type of songbird). Ejemplos: 'El tordo canta al amanecer.' (The thrush sings at dawn.)"
  },
  {
    word: "HIENA",
    definition: "hyena",
    lesson: "HIENA means 'hyena' in Spanish. Ejemplos: 'La hiena ríe en la sabana.' (The hyena laughs in the savannah.)"
  },
  {
    word: "GALLO",
    definition: "rooster",
    lesson: "GALLO means 'rooster' in Spanish. Ejemplos: 'El gallo canta al amanecer.' (The rooster crows at dawn.)"
  },
  {
    word: "POLLO",
    definition: "chicken",
    lesson: "POLLO means 'chicken', referring to the animal or chicken meat. Ejemplos: 'El pollo asado es delicioso.' (Roasted chicken is delicious.)"
  },
  {
    word: "COBRE",
    definition: "copper",
    lesson: "COBRE means 'copper' in Spanish (the metal). Ejemplos: 'El cobre se usa en la fabricación de cables.' (Copper is used in cable manufacturing.)"
  },
  {
    word: "ACERO",
    definition: "steel",
    lesson: "ACERO means 'steel' in Spanish. Ejemplos: 'La estructura de acero es muy resistente.' (The steel structure is very strong.)"
  },
  {
    word: "PODER",
    definition: "power",
    lesson: "PODER as a noun means 'power'. Ejemplos: 'El poder de la mente es increíble.' (The power of the mind is incredible.)"
  },
  {
    word: "NIVEL",
    definition: "level",
    lesson: "NIVEL means 'level' in Spanish. Ejemplos: 'Este juego tiene varios niveles de dificultad.' (This game has several levels of difficulty.)"
  },
  {
    word: "MARCA",
    definition: "brand",
    lesson: "MARCA means 'brand' in Spanish. Ejemplos: 'Esa marca es conocida en todo el mundo.' (That brand is known worldwide.)"
  },
  {
    word: "SEÑAL",
    definition: "sign",
    lesson: "SEÑAL means 'sign' or 'signal' in Spanish. Ejemplos: 'La señal de tráfico indica detenerse.' (The traffic sign indicates to stop.)"
  },
  {
    word: "BRAZO",
    definition: "arm",
    lesson: "BRAZO means 'arm' in Spanish. Ejemplos: 'Me lastimé el brazo jugando fútbol.' (I hurt my arm playing soccer.)"
  },
  {
    word: "MUELA",
    definition: "molar",
    lesson: "MUELA means 'molar' (tooth) in Spanish. Ejemplos: 'La muela del juicio a veces duele mucho.' (The wisdom tooth sometimes hurts a lot.)"
  },
  {
    word: "CICLO",
    definition: "cycle",
    lesson: "CICLO means 'cycle' in Spanish. Ejemplos: 'El ciclo de las estaciones es fascinante.' (The cycle of the seasons is fascinating.)"
  },
  {
    word: "RONDA",
    definition: "round",
    lesson: "RONDA means 'round' (in games, applause, etc.). Ejemplos: 'Dieron una ronda de aplausos.' (They gave a round of applause.)"
  },
  {
    word: "CERCA",
    definition: "near",
    lesson: "CERCA means 'near'. Often used with 'de'. Ejemplos: 'La tienda está cerca de mi casa.' (The store is near my house.)"
  },
  {
    word: "LEJOS",
    definition: "far",
    lesson: "LEJOS means 'far' or 'far away'. Ejemplos: 'El destino está lejos y requiere paciencia.' (The destination is far and requires patience.)"
  },
  {
    word: "MEDIO",
    definition: "middle",
    lesson: "MEDIO means 'middle' (n), also 'half' (adj). Ejemplos: 'El camino se divide en el medio.' (The road splits in the middle.)"
  },
  {
    word: "BORDE",
    definition: "edge",
    lesson: "BORDE means 'edge' in Spanish. Ejemplos: 'Caminamos por el borde del acantilado.' (We walked along the edge of the cliff.)"
  },
  {
    word: "ATRÁS",
    definition: "behind",
    lesson: "ATRÁS means 'behind'. Ejemplos: 'El coche quedó atrás en la carrera.' (The car was left behind in the race.)"
  },
  {
    word: "TRAZO",
    definition: "stroke",
    lesson: "TRAZO means 'stroke' (brush stroke or outline). Ejemplos: 'El trazo del pincel es suave.' (The brush stroke is smooth.)"
  },
  {
    word: "VOLAR",
    definition: "to fly",
    lesson: "VOLAR means 'to fly'. Ejemplos: 'Los pájaros vuelan en el cielo.' (Birds fly in the sky.)"
  },
  {
    word: "CAZAR",
    definition: "to hunt",
    lesson: "CAZAR means 'to hunt' in Spanish. Ejemplos: 'El león sale a cazar al amanecer.' (The lion goes out to hunt at dawn.)"
  },
  {
    word: "NADAR",
    definition: "to swim",
    lesson: "NADAR means 'to swim'. Ejemplos: 'Me gusta nadar en el mar.' (I like to swim in the sea.)"
  },
  {
    word: "BOMBA",
    definition: "bomb",
    lesson: "BOMBA means 'bomb'. Ejemplos: 'La bomba explotó en la película de acción.' (The bomb exploded in the action movie.)"
  },
  {
    word: "RIMAR",
    definition: "to rhyme",
    lesson: "RIMAR means 'to rhyme'. Ejemplos: 'A los poetas les gusta rimar palabras.' (Poets enjoy making words rhyme.)"
  },
  {
    word: "POEMA",
    definition: "poem",
    lesson: "POEMA means 'poem' in Spanish. Ejemplos: 'El poema capturó la belleza del paisaje.' (The poem captured the beauty of the landscape.)"
  },
  {
    word: "ACTOR",
    definition: "actor",
    lesson: "ACTOR means 'actor' in Spanish; 'actriz' means actress. Ejemplos: 'El actor principal recibió un premio.' (The lead actor received an award.)"
  },
  {
    word: "TACTO",
    definition: "touch",
    lesson: "TACTO means 'touch' (the sense). Ejemplos: 'El tacto del terciopelo es suave.' (The feel of velvet is soft.)"
  },
  {
    word: "BULTO",
    definition: "bulk",
    lesson: "BULTO means 'bulk' or 'bundle'. Ejemplos: 'El bulto en la caja es muy pesado.' (The bundle in the box is very heavy.)"
  },
  {
    word: "FARDO",
    definition: "bundle",
    lesson: "FARDO means 'bundle' or 'bale'. Ejemplos: 'Compré un fardo de leña para la chimenea.' (I bought a bundle of wood for the fireplace.)"
  },
  {
    word: "CESTA",
    definition: "basket",
    lesson: "CESTA means 'basket' in Spanish. Ejemplos: 'La cesta está llena de frutas frescas.' (The basket is full of fresh fruit.)"
  },
  {
    word: "PLATO",
    definition: "plate",
    lesson: "PLATO means 'plate' in Spanish, or a dish of food. Ejemplos: 'El plato de comida se veía delicioso.' (The plate of food looked delicious.)"
  },
  {
    word: "TENIS",
    definition: "tennis",
    lesson: "TENIS means 'tennis' in Spanish. Ejemplos: 'Jugamos tenis en el club local.' (We played tennis at the local club.)"
  },
  {
    word: "MURAL",
    definition: "mural",
    lesson: "MURAL means 'mural' in Spanish (large wall painting). Ejemplos: 'El mural en la pared es una obra de arte.' (The mural on the wall is a work of art.)"
  },
  {
    word: "CROMO",
    definition: "chrome",
    lesson: "CROMO means 'chrome' in Spanish. Ejemplos: 'El auto tiene detalles de cromo brillantes.' (The car has shiny chrome details.)"
  },
  {
    word: "LIMÓN",
    definition: "lemon",
    lesson: "LIMÓN means 'lemon' in Spanish. Ejemplos: 'El limón es ácido y refrescante.' (The lemon is sour and refreshing.)"
  },
  {
    word: "DEDOS",
    definition: "fingers",
    lesson: "DEDOS means 'fingers'. Ejemplos: 'Cuenta con tus dedos para aprender a contar.' (Count on your fingers to learn to count.)"
  },
  {
    word: "SOLAR",
    definition: "relating to the sun",
    lesson: "SOLAR means 'relating to the sun' (solar). Ejemplos: 'La energía solar es renovable.' (Solar energy is renewable.)"
  },
  {
    word: "VIRUS",
    definition: "virus",
    lesson: "VIRUS means 'virus' in Spanish (same form singular/plural). Ejemplos: 'El virus se propagó rápidamente.' (The virus spread quickly.)"
  },
  {
    word: "ÉXITO",
    definition: "success",
    lesson: "ÉXITO means 'success' in Spanish. Ejemplos: 'El éxito llega con trabajo duro.' (Success comes with hard work.)"
  },
  {
    word: "AUNAR",
    definition: "to unite",
    lesson: "AUNAR means 'to unite' or 'to join together'. Ejemplos: 'Es importante aunar esfuerzos en equipo.' (It's important to unite team efforts.)"
  },
  {
    word: "CEDER",
    definition: "to yield",
    lesson: "CEDER means 'to yield' or 'to give in'. Ejemplos: 'No debemos ceder ante la presión.' (We must not yield to pressure.)"
  },
  {
    word: "DARLE",
    definition: "to give",
    lesson: "DARLE means 'to give (to him/her)'. Ejemplos: 'Voy a darle un regalo a mi amigo.' (I'm going to give my friend a gift.)"
  },
  {
    word: "EJIDO",
    definition: "common land",
    lesson: "EJIDO means 'common land' in some Spanish-speaking areas. Ejemplos: 'El ejido es compartido por la comunidad.' (The common land is shared by the community.)"
  },
  {
    word: "FLUIR",
    definition: "to flow",
    lesson: "FLUIR means 'to flow'. Ejemplos: 'El agua fluye suavemente por el río.' (The water flows smoothly through the river.)"
  },
  {
    word: "GIRAR",
    definition: "to turn",
    lesson: "GIRAR means 'to turn' or 'to rotate'. Ejemplos: 'La llave gira para abrir la puerta.' (The key turns to open the door.)"
  },
  {
    word: "JUGAR",
    definition: "to play",
    lesson: "JUGAR means 'to play' (a game or sport). Ejemplos: 'A los niños les gusta jugar en el parque.' (Children like to play in the park.)"
  },
  {
    word: "JALAR",
    definition: "to pull",
    lesson: "JALAR means 'to pull' in Spanish. Ejemplos: 'Necesitas jalar la cuerda con fuerza.' (You need to pull the rope hard.)"
  },
  {
    word: "LABIA",
    definition: "eloquence",
    lesson: "LABIA means 'eloquence' or 'gift of gab'. Ejemplos: 'Su labia convence a la audiencia.' (His eloquence convinces the audience.)"
  },
  {
    word: "MIMAR",
    definition: "to pamper",
    lesson: "MIMAR means 'to pamper' or 'to spoil (with affection)'. Ejemplos: 'A los padres les gusta mimar a sus hijos.' (Parents like to pamper their children.)"
  },
  {
    word: "NOTAR",
    definition: "to notice",
    lesson: "NOTAR means 'to notice'. Ejemplos: 'Comencé a notar los pequeños detalles.' (I started to notice the little details.)"
  },
  {
    word: "OBRAR",
    definition: "to work/do",
    lesson: "OBRAR means 'to work' or 'to act'. Often used formally. Ejemplos: 'Debemos obrar con integridad.' (We must act with integrity.)"
  },
  {
    word: "PAGAR",
    definition: "to pay",
    lesson: "PAGAR means 'to pay'. Ejemplos: 'Tengo que pagar la factura hoy.' (I have to pay the bill today.)"
  },
  {
    word: "QUEMA",
    definition: "burns",
    lesson: "QUEMA often refers to 'the burning' (noun). Ejemplos: 'La quema de basura está prohibida.' (Burning trash is prohibited.)"
  },
  {
    word: "REGAR",
    definition: "to water",
    lesson: "REGAR means 'to water' (plants). Ejemplos: 'Es importante regar las plantas diariamente.' (It's important to water the plants daily.)"
  },
  {
    word: "SACAR",
    definition: "to take out",
    lesson: "SACAR means 'to take out'. Ejemplos: 'Voy a sacar la basura esta noche.' (I will take out the trash tonight.)"
  },
  {
    word: "TOSER",
    definition: "to cough",
    lesson: "TOSER means 'to cough'. Ejemplos: 'El resfriado me hace toser constantemente.' (The cold makes me cough constantly.)"
  },
  {
    word: "UNTAR",
    definition: "to spread",
    lesson: "UNTAR means 'to spread' (like butter or jam). Ejemplos: 'Me gusta untar mermelada en el pan.' (I like to spread jam on bread.)"
  },
  {
    word: "VENIR",
    definition: "to come",
    lesson: "VENIR means 'to come'. Ejemplos: '¿Puedes venir a mi casa esta tarde?' (Can you come to my house this afternoon?)"
  },
  {
    word: "YERMO",
    definition: "barren",
    lesson: "YERMO means 'barren' in Spanish, describing uncultivable land. Ejemplos: 'La tierra yerma no produce cultivos.' (The barren land does not produce crops.)"
  },
  {
    word: "ZAFAR",
    definition: "to loosen",
    lesson: "ZAFAR means 'to loosen' or 'to free'. Ejemplos: 'Tienes que zafar el nudo para liberar la cuerda.' (You have to loosen the knot to free the rope.)"
  },
  {
    word: "SALVO",
    definition: "safe",
    lesson: "SALVO means 'safe' (unharmed). Ejemplos: 'Todos salvos tras la tormenta.' (Everyone is safe after the storm.)"
  },
  {
    word: "SODIO",
    definition: "sodium",
    lesson: "SODIO means 'sodium', the chemical element. Ejemplos: 'El sodio es esencial en pequeñas cantidades.' (Sodium is essential in small amounts.)"
  },
  {
    word: "PLENO",
    definition: "full",
    lesson: "PLENO means 'full' or 'complete'. Ejemplos: 'Estoy pleno de felicidad.' (I am full of happiness.)"
  },
  {
    word: "VAPOR",
    definition: "steam",
    lesson: "VAPOR means 'steam' in Spanish. Ejemplos: 'El vapor sale de la taza de café.' (Steam rises from the coffee cup.)"
  },
  {
    word: "SUTIL",
    definition: "subtle",
    lesson: "SUTIL means 'subtle'. Ejemplos: 'El aroma sutil de la flor es encantador.' (The subtle scent of the flower is charming.)"
  },
  {
    word: "NACER",
    definition: "to be born",
    lesson: "NACER means 'to be born'. Ejemplos: 'Cada día nacen nuevas oportunidades.' (Every day new opportunities are born.)"
  },
  {
    word: "MOVER",
    definition: "to move",
    lesson: "MOVER means 'to move' (something). Ejemplos: 'Es importante mover el cuerpo cada mañana.' (It's important to move your body every morning.)"
  },
  {
    word: "GANAR",
    definition: "to win",
    lesson: "GANAR means 'to win' or 'to earn'. Ejemplos: 'Trabajó duro para ganar el campeonato.' (He worked hard to win the championship.)"
  },
  {
    word: "JUSTO",
    definition: "fair",
    lesson: "JUSTO means 'fair' (just). Ejemplos: 'Es justo tratar a todos con respeto.' (It's fair to treat everyone with respect.)"
  },
  {
    word: "FALSO",
    definition: "false",
    lesson: "FALSO means 'false'. Ejemplos: 'La información era falsa y engañosa.' (The information was false and misleading.)"
  },
  {
    word: "PODER",
    definition: "power",
    lesson: "PODER (noun) also means 'power' (another example). Ejemplos: 'El poder de la tecnología es innegable.' (The power of technology is undeniable.)"
  },
  {
    word: "MODOS",
    definition: "manners",
    lesson: "MODOS means 'manners' (plural). Ejemplos: 'Es importante tener buenos modos.' (It's important to have good manners.)"
  },
  {
    word: "FIRMA",
    definition: "signature/firm",
    lesson: "FIRMA can mean 'signature' or 'firm' (company). Ejemplos: 'La firma en el contrato es obligatoria.' (The signature on the contract is mandatory.)"
  }
];
