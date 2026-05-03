const gameWords = [
  {
    word: "СЛОВО",
    definition: "word",
    lesson: "СЛОВО means 'word' in Russian. Примеры: «Это красивое слово звучит мелодично» (This beautiful word sounds melodic.). «Каждое слово важно в предложении» (Every word in the sentence is important.)"
  },
  {
    word: "МЕЧТА",
    definition: "dream",
    lesson: "МЕЧТА means 'dream' in Russian, referring to a hope or aspiration. Примеры: «У меня есть мечта стать писателем» (I have a dream to become a writer.). «Она упорно работает, чтобы осуществить свою мечту» (She works hard to achieve her dream.)"
  },
  {
    word: "КНИГА",
    definition: "book",
    lesson: "КНИГА means 'book' in Russian. Примеры: «Эта книга полна удивительных историй» (This book is full of amazing stories.). «Я люблю читать книги перед сном» (I love reading books before going to sleep.)"
  },
  {
    word: "ДОМИК",
    definition: "small house",
    lesson: "ДОМИК is a diminutive form meaning 'small house' or 'cottage.' Примеры: «В деревне стоит уютный домик» (There is a cozy small house in the village.). «Этот домик напоминает мне о детстве» (This little house reminds me of my childhood.)"
  },
  {
    word: "ВЕТЕР",
    definition: "wind",
    lesson: "ВЕТЕР means 'wind' in Russian. Примеры: «Сильный ветер развевает листья» (The strong wind scatters the leaves.). «Ветер дует с севера, принося прохладу» (The wind blows from the north, bringing cool air.)"
  },
  {
    word: "РЫБКА",
    definition: "fish (diminutive)",
    lesson: "РЫБКА means 'fish' (diminutive, often affectionate). Примеры: «Маленькая рыбка плавает в аквариуме» (The small fish swims in the aquarium.). «На ужин мы приготовим свежую рыбку» (For dinner, we will cook fresh fish.)"
  },
  {
    word: "ПЕСОК",
    definition: "sand",
    lesson: "ПЕСОК means 'sand' in Russian. Примеры: «Дети играют с песком на пляже» (The children play with sand at the beach.). «Тёплый песок приятно ощущается под ногами» (Warm sand feels pleasant under your feet.)"
  },
  {
    word: "ГОРОД",
    definition: "city",
    lesson: "ГОРОД means 'city' in Russian. Примеры: «Город кипит жизнью днём и ночью» (The city bustles with life day and night.). «В этом городе много исторических зданий» (There are many historical buildings in this city.)"
  },
  {
    word: "МАГИЯ",
    definition: "magic",
    lesson: "МАГИЯ means 'magic' in Russian. Примеры: «Фокусник показал настоящий акт магии» (The magician performed a real act of magic.). «В книгах фэнтези часто встречается магия» (Magic is often found in fantasy books.)"
  },
  {
    word: "СТАРТ",
    definition: "start",
    lesson: "СТАРТ means 'start' in Russian. Примеры: «Мы сделали старт нового проекта» (We started a new project.). «Перед стартом важно проверить все детали» (Before starting, it’s important to check all the details.)"
  },
  {
    word: "ТЕПЛО",
    definition: "warmth",
    lesson: "ТЕПЛО means 'warmth' or 'it is warm.' Примеры: «Сегодня на улице очень тепло» (It is very warm outside today.). «Чувствовать тепло солнца приятно» (It’s pleasant to feel the warmth of the sun.)"
  },
  {
    word: "ХОЛОД",
    definition: "cold",
    lesson: "ХОЛОД means 'cold' in Russian (noun). Примеры: «Холод проникал в каждую щель» (Cold seeped into every crevice.). «Я не люблю сильный холод зимой» (I don’t like extreme cold in winter.)"
  },
  {
    word: "ДОБРО",
    definition: "goodness",
    lesson: "ДОБРО means 'goodness' or 'kindness' in Russian. Примеры: «Он излучает добро и заботу» (He radiates goodness and care.). «Важно делать добро окружающим людям» (It’s important to do good for those around you.)"
  },
  {
    word: "БЕРЕГ",
    definition: "shore",
    lesson: "БЕРЕГ means 'shore' in Russian. Примеры: «Мы гуляли вдоль берега моря» (We walked along the seashore.). «На берегу реки растут высокие деревья» (Tall trees grow along the riverbank.)"
  },
  {
    word: "КУЗОВ",
    definition: "car body",
    lesson: "КУЗОВ means 'car body' in Russian. Примеры: «Кузов машины блестит после мойки» (The car body shines after washing.). «У грузовика крепкий кузов» (The truck has a sturdy body.)"
  },
  {
    word: "МЫСЛЬ",
    definition: "thought",
    lesson: "МЫСЛЬ means 'thought' in Russian. Примеры: «Её мысль была ясна и глубока» (Her thought was clear and profound.). «Иногда одна мысль может изменить всю жизнь» (Sometimes a single thought can change one’s entire life.)"
  },
  {
    word: "ОСЕНЬ",
    definition: "autumn",
    lesson: "ОСЕНЬ means 'autumn' in Russian. Примеры: «Осень приносит золотые листья» (Autumn brings golden leaves.). «Я люблю осень за её красочные пейзажи» (I love autumn for its colorful landscapes.)"
  },
  {
    word: "ВОЙНА",
    definition: "war",
    lesson: "ВОЙНА means 'war' in Russian. Примеры: «Война оставила много разрушений» (The war left a lot of destruction.). «Мы надеемся на мир и отсутствие войны» (We hope for peace and no war.)"
  },
  {
    word: "МИРНО",
    definition: "peacefully",
    lesson: "МИРНО means 'peacefully' in Russian (adverb). Примеры: «Они жили мирно в своей деревне» (They lived peacefully in their village.). «Всем хочется жить мирно и счастливо» (Everyone wants to live peacefully and happily.)"
  },
  {
    word: "ПОДОЛ",
    definition: "skirt hem",
    lesson: "ПОДОЛ refers to the hem of a skirt or dress. Примеры: «Подол её юбки красиво украшен» (The hem of her skirt is beautifully decorated.). «Она приподняла подол, чтобы пройти по лужам» (She lifted her skirt hem to walk through puddles.)"
  },
  {
    word: "ЗВУКИ",
    definition: "sounds",
    lesson: "ЗВУКИ means 'sounds' (plural). Примеры: «В комнате слышались странные звуки» (Strange sounds were heard in the room.). «Музыка состоит из приятных звуков» (Music consists of pleasant sounds.)"
  },
  {
    word: "ЛИНИЯ",
    definition: "line",
    lesson: "ЛИНИЯ means 'line' in Russian. Примеры: «На бумаге нарисована прямая линия» (A straight line is drawn on the paper.). «Через всю карту тянется красная линия» (A red line stretches across the map.)"
  },
  {
    word: "ЛУЧЕЙ",
    definition: "rays (gen. plural)",
    lesson: "ЛУЧЕЙ relates to 'rays' (for example, of light). Примеры: «Солнечный луч пробивался сквозь облака» (A sunbeam broke through the clouds.). «Несколько лучей света освещали комнату» (Several rays of light illuminated the room.)"
  },
  {
    word: "СМЕЛО",
    definition: "bravely",
    lesson: "СМЕЛО means 'bravely' in Russian. Примеры: «Он смело встретил все трудности» (He faced all difficulties bravely.). «Смело идти вперёд — ключ к успеху» (Moving forward bravely is the key to success.)"
  },
  {
    word: "БЛЕСК",
    definition: "shine",
    lesson: "БЛЕСК means 'shine' or 'glitter.' Примеры: «Блеск звёзд озарял ночное небо» (The shine of the stars lit up the night sky.). «Мне нравится блеск новогодних украшений» (I like the sparkle of New Year decorations.)"
  },
  {
    word: "АКТЁР",
    definition: "actor",
    lesson: "АКТЁР means 'actor' in Russian. Примеры: «Этот актёр известен своими театральными ролями» (This actor is known for his theatrical roles.). «Он мечтал стать актёром с детства» (He dreamed of becoming an actor since childhood.)"
  },
  {
    word: "АРЕНА",
    definition: "arena",
    lesson: "АРЕНА means 'arena' in Russian. Примеры: «Бой на арене вызвал бурю оваций» (The fight in the arena elicited a storm of applause.). «Арена цирка была ярко освещена прожекторами» (The circus arena was brightly lit by spotlights.)"
  },
  {
    word: "БАЛКА",
    definition: "beam",
    lesson: "БАЛКА means 'beam' (like a support beam). Примеры: «Балка поддерживает крышу здания» (The beam supports the building’s roof.). «Эта балка сделана из прочного металла» (This beam is made of strong metal.)"
  },
  {
    word: "БЕДНО",
    definition: "poorly",
    lesson: "БЕДНО means 'poorly' in Russian (adverb). Примеры: «Он чувствовал себя бедно после болезни» (He felt poorly after his illness.). «Они бедно жили, но были счастливы» (They lived in poor conditions, yet they were happy.)"
  },
  {
    word: "БЕЛКА",
    definition: "squirrel",
    lesson: "БЕЛКА means 'squirrel' in Russian. Примеры: «Маленькая белка быстро бегала по деревьям» (A small squirrel ran quickly among the trees.). «Белка хранит орехи на зиму» (A squirrel stores nuts for winter.)"
  },
  {
    word: "БРОСЬ",
    definition: "throw (imperative)",
    lesson: "БРОСЬ is the imperative of 'to throw.' Примеры: «Брось мяч мне, пожалуйста» (Throw the ball to me, please.). «Не бойся, просто брось камень в воду» (Don’t be afraid, just throw the stone into the water.)"
  },
  {
    word: "ВЗЛЁТ",
    definition: "takeoff",
    lesson: "ВЗЛЁТ means 'takeoff' (e.g., airplane). Примеры: «Взлёт самолёта был плавным и уверенным» (The airplane’s takeoff was smooth and confident.). «Пилот готовился к взлёту» (The pilot prepared for takeoff.)"
  },
  {
    word: "ВОЛНА",
    definition: "wave",
    lesson: "ВОЛНА means 'wave' in Russian. Примеры: «Волна накатывала на берег с шумом» (A wave crashed onto the shore with a roar.). «Море было спокойным, но иногда поднималась большая волна» (The sea was calm, but occasionally a large wave rose.)"
  },
  {
    word: "ГОЛОД",
    definition: "hunger",
    lesson: "ГОЛОД means 'hunger.' Примеры: «Голод мучил людей в те времена» (Hunger tormented people in those times.). «Я чувствую сильный голод после долгой прогулки» (I feel very hungry after a long walk.)"
  },
  {
    word: "ГЛАЗА",
    definition: "eyes",
    lesson: "ГЛАЗА is the plural of 'eye' in Russian. Примеры: «Её глаза сияли от счастья» (Her eyes sparkled with happiness.). «У него голубые глаза» (He has blue eyes.)"
  },
  {
    word: "ЗАПАС",
    definition: "reserve/supply",
    lesson: "ЗАПАС means 'reserve' or 'supply.' Примеры: «У нас есть запас продуктов на зиму» (We have a supply of food for the winter.). «Он всегда держит запас воды на случай отключения» (He always keeps a water reserve in case of a shutdown.)"
  },
  {
    word: "КУБИК",
    definition: "cube",
    lesson: "КУБИК means 'cube' (like a small block). Примеры: «Дети строят башню из кубиков» (The children are building a tower from cubes.). «Добавь кубик льда в напиток» (Add an ice cube to the drink.)"
  },
  {
    word: "ЛАМПА",
    definition: "lamp",
    lesson: "ЛАМПА means 'lamp' in Russian. Примеры: «Лампа ярко светит в тёмной комнате» (The lamp shines brightly in the dark room.). «Я включил настольную лампу, чтобы читать» (I turned on the desk lamp to read.)"
  },
  {
    word: "НОВОЕ",
    definition: "new (neuter)",
    lesson: "НОВОЕ is the neuter form of 'new.' Примеры: «Он купил новое пальто» (He bought a new coat.). «Мы узнали что-то новое на уроке» (We learned something new in class.)"
  },
  {
    word: "АТАКА",
    definition: "attack",
    lesson: "АТАКА means 'attack' in Russian. Примеры: «Атака началась на рассвете» (The attack began at dawn.). «Внезапная атака застала их врасплох» (A sudden attack took them by surprise.)"
  },
  {
    word: "АКУЛА",
    definition: "shark",
    lesson: "АКУЛА means 'shark.' Примеры: «В океане плывёт большая акула» (A big shark is swimming in the ocean.). «Акула — опасный морской хищник» (A shark is a dangerous sea predator.)"
  },
  {
    word: "АГЕНТ",
    definition: "agent",
    lesson: "АГЕНТ means 'agent.' Примеры: «Агент выполнил важную миссию» (The agent completed an important mission.). «Он работал в качестве секретного агента» (He worked as a secret agent.)"
  },
  {
    word: "БАНКА",
    definition: "jar/can",
    lesson: "БАНКА can mean 'jar' or 'can.' Примеры: «Он открыл банку горошка» (He opened a can of peas.). «В банке варенья закончилось» (The jar of jam is empty now.)"
  },
  {
    word: "БИЛЕТ",
    definition: "ticket",
    lesson: "БИЛЕТ means 'ticket' in Russian. Примеры: «У меня есть билет на концерт» (I have a ticket to the concert.). «Проверь, не забыл ли ты билет дома» (Check if you didn’t forget your ticket at home.)"
  },
  {
    word: "ВЕСНА",
    definition: "spring (season)",
    lesson: "ВЕСНА means 'spring' (the season). Примеры: «Весна приносит красивые цветы» (Spring brings beautiful flowers.). «Мне нравится весна, когда всё расцветает» (I like spring when everything blooms.)"
  },
  {
    word: "ВЕЧЕР",
    definition: "evening",
    lesson: "ВЕЧЕР means 'evening.' Примеры: «Наступил тёплый вечер» (A warm evening set in.). «По вечерам я люблю читать книги» (In the evenings, I like to read books.)"
  },
  {
    word: "ВАННА",
    definition: "bathtub",
    lesson: "ВАННА means 'bathtub.' Примеры: «Ребёнок играет в ванне с игрушками» (The child is playing with toys in the bathtub.). «Тёплая ванна помогает расслабиться» (A warm bath helps you relax.)"
  },
  {
    word: "ГОСТЬ",
    definition: "guest",
    lesson: "ГОСТЬ means 'guest.' Примеры: «У нас сегодня гость из города» (We have a guest from the city today.). «Я люблю принимать гостей дома» (I love hosting guests at home.)"
  },
  {
    word: "ГЕРОЙ",
    definition: "hero",
    lesson: "ГЕРОЙ means 'hero.' Примеры: «Каждый ребёнок мечтает быть героем» (Every child dreams of being a hero.). «Этот герой спас город от опасности» (This hero saved the city from danger.)"
  },
  {
    word: "ГРОЗА",
    definition: "thunderstorm",
    lesson: "ГРОЗА means 'thunderstorm.' Примеры: «Летняя гроза быстро прошла» (The summer thunderstorm passed quickly.). «Гроза напугала детей громом и молниями» (The thunderstorm scared the children with thunder and lightning.)"
  },
  {
    word: "ДВЕРЬ",
    definition: "door",
    lesson: "ДВЕРЬ means 'door.' Примеры: «Он открыл дверь и вошёл» (He opened the door and entered.). «Пожалуйста, закрой дверь, чтобы не было шума» (Please close the door to keep the noise out.)"
  },
  {
    word: "ДИВАН",
    definition: "sofa",
    lesson: "ДИВАН means 'sofa' or 'couch.' Примеры: «Мы сидим на мягком диване» (We are sitting on a soft couch.). «На диване лежат подушки и плед» (There are pillows and a blanket on the couch.)"
  },
  {
    word: "ДОЖДЬ",
    definition: "rain",
    lesson: "ДОЖДЬ means 'rain.' Примеры: «Дождь идёт весь день» (It is raining all day.). «Я люблю слушать звук дождя по крыше» (I enjoy listening to the sound of rain on the roof.)"
  },
  {
    word: "ЗЕМЛЯ",
    definition: "earth/land",
    lesson: "ЗЕМЛЯ can mean 'Earth' (the planet) or 'land/soil.' Примеры: «Земля круглая» (The Earth is round.). «Эта земля очень плодородна» (This land is very fertile.)"
  },
  {
    word: "ЗАПАХ",
    definition: "smell",
    lesson: "ЗАПАХ means 'smell' in Russian. Примеры: «В комнате чувствуется запах цветов» (The smell of flowers is noticeable in the room.). «Я чувствую аппетитный запах выпечки» (I smell the appetizing aroma of baked goods.)"
  },
  {
    word: "ИСКРА",
    definition: "spark",
    lesson: "ИСКРА means 'spark.' Примеры: «Искра зажгла огонь» (The spark ignited the fire.). «В тёмной комнате появилась яркая искра» (A bright spark appeared in the dark room.)"
  },
  {
    word: "КОШКА",
    definition: "cat",
    lesson: "КОШКА means 'cat' (usually female cat). Примеры: «Эта кошка любит играть с клубком ниток» (This cat loves to play with a ball of yarn.). «Моя кошка спит целый день» (My cat sleeps all day.)"
  },
  {
    word: "КУХНЯ",
    definition: "kitchen",
    lesson: "КУХНЯ means 'kitchen.' Примеры: «Наша кухня очень светлая» (Our kitchen is very bright.). «В кухне я готовлю завтрак каждое утро» (I cook breakfast in the kitchen every morning.)"
  },
  {
    word: "КРЫСА",
    definition: "rat",
    lesson: "КРЫСА means 'rat.' Примеры: «В подвале пробежала серая крыса» (A gray rat ran in the basement.). «В городе иногда можно увидеть крыс возле мусорных баков» (In the city, you can sometimes see rats near trash bins.)"
  },
  {
    word: "ЛОДКА",
    definition: "boat",
    lesson: "ЛОДКА means 'boat' in Russian. Примеры: «Лодка качается на волнах» (The boat is rocking on the waves.). «Мы катались на лодке по озеру» (We took a boat ride on the lake.)"
  },
  {
    word: "МАСКА",
    definition: "mask",
    lesson: "МАСКА means 'mask.' Примеры: «Актёр надел маску для спектакля» (The actor put on a mask for the play.). «В магазинах иногда нужно носить маску» (In stores, sometimes you need to wear a mask.)"
  },
  {
    word: "МАСЛО",
    definition: "butter/oil",
    lesson: "МАСЛО can mean 'butter' or certain types of oil. Примеры: «Хлеб намазан маслом» (The bread is spread with butter.). «Для жарки часто используют растительное масло» (Vegetable oil is often used for frying.)"
  },
  {
    word: "МЕДИК",
    definition: "medic",
    lesson: "МЕДИК means 'medic' or 'medical worker.' Примеры: «Она работает медиком в госпитале» (She works as a medic in the hospital.). «Медики помогают людям сохранять здоровье» (Medical workers help people stay healthy.)"
  },
  {
    word: "МОРОЗ",
    definition: "frost",
    lesson: "МОРОЗ means 'frost' or 'freezing cold.' Примеры: «Утром был сильный мороз» (There was a hard frost in the morning.). «На улице мороз, лучше оденься потеплее» (It’s freezing outside; you should dress warmer.)"
  },
  {
    word: "НОСКИ",
    definition: "socks",
    lesson: "НОСКИ means 'socks.' Примеры: «Эти носки очень тёплые» (These socks are very warm.). «Я всегда надеваю чистые носки после душа» (I always put on clean socks after a shower.)"
  },
  {
    word: "ОЗЕРО",
    definition: "lake",
    lesson: "ОЗЕРО means 'lake.' Примеры: «Озеро отражает голубое небо» (The lake reflects the blue sky.). «Летом мы купаемся в озере» (In summer, we swim in the lake.)"
  },
  {
    word: "ОГОНЬ",
    definition: "fire (flame)",
    lesson: "ОГОНЬ refers to 'fire' or 'flame.' Примеры: «Огонь согревает в холодную ночь» (Fire provides warmth on a cold night.). «Не оставляй огонь без присмотра» (Don’t leave the fire unattended.)"
  },
  {
    word: "ПЕСНЯ",
    definition: "song",
    lesson: "ПЕСНЯ means 'song.' Примеры: «Эта песня очень популярна» (This song is very popular.). «Люблю петь весёлые песни в компании друзей» (I love singing cheerful songs with friends.)"
  },
  {
    word: "ПЧЕЛА",
    definition: "bee",
    lesson: "ПЧЕЛА means 'bee.' Примеры: «Пчела летает от цветка к цветку» (The bee flies from flower to flower.). «Мёд делают пчёлы» (Honey is made by bees.)"
  },
  {
    word: "РОБОТ",
    definition: "robot",
    lesson: "РОБОТ means 'robot.' Примеры: «Современный робот выполняет сложные задачи» (A modern robot performs complex tasks.). «Роботы всё чаще используются в промышленности» (Robots are increasingly used in industry.)"
  },
  {
    word: "СУМКА",
    definition: "bag",
    lesson: "СУМКА means 'bag' in Russian. Примеры: «Она несёт тяжёлую сумку» (She is carrying a heavy bag.). «В моей сумке лежит кошелёк и телефон» (My wallet and phone are in my bag.)"
  },
  {
    word: "САХАР",
    definition: "sugar",
    lesson: "САХАР means 'sugar.' Примеры: «Он положил две ложки сахара в чай» (He put two spoons of sugar in the tea.). «Чрезмерное употребление сахара вредно» (Excessive sugar intake is harmful.)"
  },
  {
    word: "СПОРТ",
    definition: "sport",
    lesson: "СПОРТ means 'sport.' Примеры: «Спорт помогает поддерживать здоровье» (Sport helps maintain health.). «Каким видом спорта ты увлекаешься?» (Which sport do you enjoy?)"
  },
  {
    word: "СИНИЙ",
    definition: "blue",
    lesson: "СИНИЙ means 'blue' (adjective in Russian, masculine form). Примеры: «Небо сегодня синее» (The sky is blue today.). «Я люблю синий цвет в одежде» (I like the color blue in clothing.)"
  },
  {
    word: "СОСНА",
    definition: "pine (tree)",
    lesson: "СОСНА means 'pine tree.' Примеры: «Высокая сосна растёт у дороги» (A tall pine grows by the road.). «Сосна имеет приятный хвойный запах» (A pine tree has a pleasant coniferous smell.)"
  },
  {
    word: "СЕМЬЯ",
    definition: "family",
    lesson: "СЕМЬЯ means 'family.' Примеры: «Моя семья очень дружная» (My family is very close-knit.). «Проводить время с семьёй — это радость» (Spending time with family is a joy.)"
  },
  {
    word: "ТЕАТР",
    definition: "theater",
    lesson: "ТЕАТР means 'theater' in Russian. Примеры: «Мы ходим в театр на выходных» (We go to the theater on weekends.). «В театре показывают интересные спектакли» (They show interesting plays at the theater.)"
  },
  {
    word: "УЧИТЬ",
    definition: "to learn",
    lesson: "УЧИТЬ means 'to learn' (or sometimes 'to teach,' depending on context, but primarily 'to learn'). Примеры: «Дети учат новые слова» (Children learn new words.). «Я хочу учить русский язык» (I want to learn Russian.)"
  },
  {
    word: "УЛИЦА",
    definition: "street",
    lesson: "УЛИЦА means 'street.' Примеры: «Наш дом находится на тихой улице» (Our house is located on a quiet street.). «По улице прошла большая праздничная колонна» (A large festive parade passed through the street.)"
  },
  {
    word: "ФИЛЬМ",
    definition: "film/movie",
    lesson: "ФИЛЬМ means 'film' or 'movie.' Примеры: «Мы смотрим интересный фильм» (We are watching an interesting film.). «В кинотеатре скоро покажут новый фильм» (A new movie will be shown soon at the cinema.)"
  },
  {
    word: "ХВОСТ",
    definition: "tail",
    lesson: "ХВОСТ means 'tail.' Примеры: «У собаки длинный хвост» (The dog has a long tail.). «Кот помахал хвостом и убежал» (The cat wagged its tail and ran away.)"
  },
  {
    word: "ЦВЕТЫ",
    definition: "flowers",
    lesson: "ЦВЕТЫ means 'flowers' in Russian (plural). Примеры: «На клумбе растут яркие цветы» (Bright flowers grow in the flowerbed.). «Мне подарили букет цветов на праздник» (I was given a bouquet of flowers for the holiday.)"
  },
  {
    word: "ЧАШКА",
    definition: "cup",
    lesson: "ЧАШКА means 'cup.' Примеры: «В чашке горячий чай» (There is hot tea in the cup.). «Я люблю пить кофе из большой чашки» (I like to drink coffee from a big cup.)"
  },
  {
    word: "ЧЕСТЬ",
    definition: "honor",
    lesson: "ЧЕСТЬ means 'honor.' Примеры: «Для него это большая честь» (For him, it is a great honor.). «Соблюдать честь и достоинство — важная часть жизни» (Maintaining honor and dignity is an important part of life.)"
  },
  {
    word: "ШАПКА",
    definition: "hat",
    lesson: "ШАПКА means 'hat,' typically a warm, knitted one. Примеры: «Он надел тёплую шапку» (He put on a warm hat.). «Зимой без шапки очень холодно» (It’s very cold without a hat in winter.)"
  },
  {
    word: "ШАРИК",
    definition: "ball (small)/balloon",
    lesson: "ШАРИК often means a small ball or a balloon. Примеры: «Дети играют с красным шариком» (Children are playing with a red balloon.). «У котёнка шарик из шерсти вместо игрушки» (The kitten has a small yarn ball as a toy.)"
  },
  {
    word: "ЩЕНОК",
    definition: "puppy",
    lesson: "ЩЕНОК means 'puppy.' Примеры: «Маленький щенок играет с мячиком» (The little puppy plays with a small ball.). «Щенок всё ещё учится ходить на поводке» (The puppy is still learning to walk on a leash.)"
  },
  {
    word: "ЭКРАН",
    definition: "screen",
    lesson: "ЭКРАН means 'screen' (like a monitor or TV screen). Примеры: «На экране появилось сообщение» (A message appeared on the screen.). «Не сиди слишком близко к экрану» (Don’t sit too close to the screen.)"
  },
  {
    word: "ЯГОДА",
    definition: "berry",
    lesson: "ЯГОДА means 'berry.' Примеры: «Дети собирают ягоды в лесу» (The children are picking berries in the forest.). «Клубника — моя любимая ягода» (Strawberry is my favorite berry.)"
  },
  {
    word: "ФОРМА",
    definition: "form/uniform",
    lesson: "ФОРМА can mean 'form' or 'uniform.' Примеры: «У учеников школьная форма синего цвета» (The students’ school uniform is blue.). «Эта ваза имеет необычную форму» (This vase has an unusual shape.)"
  },
  {
    word: "ПЛАНЫ",
    definition: "plans",
    lesson: "ПЛАНЫ means 'plans' (plural). Примеры: «У них большие планы на лето» (They have big plans for the summer.). «Мои планы изменились в последний момент» (My plans changed at the last moment.)"
  },
  {
    word: "СТИЛЬ",
    definition: "style",
    lesson: "СТИЛЬ means 'style' in Russian. Примеры: «У неё свой уникальный стиль в одежде» (She has her own unique style in clothing.). «Стиль письма этого автора мне очень нравится» (I really like this author’s writing style.)"
  },
  {
    word: "ЮМОР",
    definition: "humor",
    lesson: "ЮМОР means 'humor.' Примеры: «У него отличное чувство юмора» (He has an excellent sense of humor.). «Немного юмора помогает в сложных ситуациях» (A bit of humor helps in difficult situations.)"
  },
  {
    word: "ШАНС",
    definition: "chance",
    lesson: "ШАНС means 'chance' or 'opportunity.' Примеры: «У нас есть шанс выиграть игру» (We have a chance to win the game.). «Это отличный шанс изменить свою жизнь» (It’s a great opportunity to change your life.)"
  },
  {
    word: "УСПЕХ",
    definition: "success",
    lesson: "УСПЕХ means 'success.' Примеры: «Её проект имел большой успех» (Her project had great success.). «Путь к успеху требует настойчивости» (The path to success requires perseverance.)"
  },
  {
    word: "НАУКА",
    definition: "science",
    lesson: "НАУКА means 'science.' Примеры: «Наука двигает мир вперёд» (Science moves the world forward.). «Он увлекается наукой с детства» (He has been interested in science since childhood.)"
  },
  {
    word: "ФИЗИК",
    definition: "physicist",
    lesson: "ФИЗИК means 'physicist.' Примеры: «Физик проводит эксперимент в лаборатории» (The physicist is conducting an experiment in the laboratory.). «Она хочет стать известным физиком» (She wants to become a famous physicist.)"
  },
  {
    word: "БАЛЕТ",
    definition: "ballet",
    lesson: "БАЛЕТ means 'ballet.' Примеры: «Русский балет известен во всём мире» (Russian ballet is known worldwide.). «Уроки балета начинают с раннего возраста» (Ballet lessons start at an early age.)"
  },
  {
    word: "КЛОУН",
    definition: "clown",
    lesson: "КЛОУН means 'clown.' Примеры: «Клоун смешит детей в цирке» (The clown makes the children laugh at the circus.). «Мальчик боялся клоунов в детстве» (The boy was afraid of clowns in childhood.)"
  },
  {
    word: "КАРТА",
    definition: "map/card",
    lesson: "КАРТА means 'map' or 'card' (depending on context). Примеры: «Он изучает карту города перед поездкой» (He is studying the city map before the trip.). «Мы играем в карты с друзьями по вечерам» (We play cards with friends in the evenings.)"
  },
  {
    word: "ПОЕЗД",
    definition: "train",
    lesson: "ПОЕЗД means 'train.' Примеры: «Поезд прибыл на станцию вовремя» (The train arrived at the station on time.). «Мне нравится путешествовать на поезде» (I enjoy traveling by train.)"
  },
  {
    word: "МЕТРО",
    definition: "subway/metro",
    lesson: "МЕТРО means 'subway' or 'metro.' Примеры: «Мы едем на работу на метро» (We go to work by subway.). «Станции метро бывают очень глубокими» (Subway stations can be very deep.)"
  },
  {
    word: "ЛИМОН",
    definition: "lemon",
    lesson: "ЛИМОН means 'lemon.' Примеры: «Она добавила лимон в чай» (She added lemon to the tea.). «Лимон придаёт напитку кисловатый вкус» (Lemon gives the drink a sour taste.)"
  },
  {
    word: "ГРУША",
    definition: "pear",
    lesson: "ГРУША means 'pear.' Примеры: «Спелая груша упала с дерева» (A ripe pear fell from the tree.). «Груши бывают очень сладкими осенью» (Pears can be very sweet in autumn.)"
  },
  {
    word: "СЛИВА",
    definition: "plum",
    lesson: "СЛИВА means 'plum.' Примеры: «В саду созрели сладкие сливы» (Sweet plums have ripened in the garden.). «Она приготовила варенье из слив» (She made jam from plums.)"
  },
  {
    word: "ЛИЛИЯ",
    definition: "lily",
    lesson: "ЛИЛИЯ means 'lily' (flower). Примеры: «Белая лилия распустилась в саду» (A white lily bloomed in the garden.). «Лилии часто используют в букетах» (Lilies are often used in bouquets.)"
  },
  {
    word: "МУЗЕЙ",
    definition: "museum",
    lesson: "МУЗЕЙ means 'museum.' Примеры: «В городе есть интересный исторический музей» (There is an interesting history museum in the city.). «Мы любим ходить в художественные музеи» (We enjoy going to art museums.)"
  },
  {
    word: "СТЕНА",
    definition: "wall",
    lesson: "СТЕНА means 'wall.' Примеры: «На стене висят фотографии» (Photographs are hanging on the wall.). «Стены дома покрашены в белый цвет» (The house walls are painted white.)"
  },
  {
    word: "КРЫША",
    definition: "roof",
    lesson: "КРЫША means 'roof.' Примеры: «Крыша дома покрашена в красный цвет» (The roof of the house is painted red.). «С крыши открывается красивый вид» (There is a beautiful view from the roof.)"
  },
  {
    word: "ДРОВА",
    definition: "firewood",
    lesson: "ДРОВА means 'firewood' (plural). Примеры: «Дрова сложены возле дома» (Firewood is stacked near the house.). «Мы используем дрова, чтобы топить печь» (We use firewood to heat the stove.)"
  },
  {
    word: "РЫНОК",
    definition: "market",
    lesson: "РЫНОК means 'market.' Примеры: «Мы купили свежие овощи на рынке» (We bought fresh vegetables at the market.). «На рынке много разных товаров» (There are many different goods at the market.)"
  },
  {
    word: "СТОЛЫ",
    definition: "tables",
    lesson: "СТОЛЫ means 'tables' (plural). Примеры: «В зале стоят длинные столы» (There are long tables in the hall.). «Мы сдвинули столы вместе для большого праздника» (We pushed the tables together for a big celebration.)"
  },
  {
    word: "ФРУКТ",
    definition: "fruit",
    lesson: "ФРУКТ means 'fruit' in Russian. Примеры: «Банан — мой любимый фрукт» (Banana is my favorite fruit.). «Ешь фрукты каждый день, чтобы быть здоровым» (Eat fruit every day to stay healthy.)"
  },
  {
    word: "ОВОЩ",
    definition: "vegetable",
    lesson: "ОВОЩ means 'vegetable' in Russian. Примеры: «Морковь — полезный овощ» (Carrot is a healthy vegetable.). «Нужно есть больше овощей в рационе» (You need to eat more vegetables in your diet.)"
  },
  {
    word: "СКОРО",
    definition: "soon",
    lesson: "СКОРО means 'soon.' Примеры: «Скоро наступит рассвет» (Dawn will come soon.). «Я скоро вернусь, подожди» (I’ll be back soon, wait for me.)"
  },
  {
    word: "ОЧЕНЬ",
    definition: "very",
    lesson: "ОЧЕНЬ means 'very.' Примеры: «Этот фильм очень интересный» (This movie is very interesting.). «Мне очень понравился твой подарок» (I really liked your gift.)"
  },
  {
    word: "ЗДЕСЬ",
    definition: "here",
    lesson: "ЗДЕСЬ means 'here' in Russian. Примеры: «Моя машина стоит здесь» (My car is parked here.). «Подпиши документ здесь» (Sign the document here.)"
  },
  {
    word: "СЕВЕР",
    definition: "north",
    lesson: "СЕВЕР means 'north.' Примеры: «На севере зимой очень холодно» (In the north, it is very cold in winter.). «Мы поедем на север в отпуск» (We will go north on vacation.)"
  },
  {
    word: "ЗАПАД",
    definition: "west",
    lesson: "ЗАПАД means 'west.' Примеры: «Солнце садится на западе» (The sun sets in the west.). «Город находится на запад от столицы» (The city is located to the west of the capital.)"
  },
  {
    word: "КАМНИ",
    definition: "stones",
    lesson: "КАМНИ means 'stones' (plural). Примеры: «На берегу лежат гладкие камни» (Smooth stones lie on the shore.). «Из камней можно строить прочные стены» (Stones can be used to build strong walls.)"
  },
  {
    word: "МОСТЫ",
    definition: "bridges",
    lesson: "МОСТЫ means 'bridges' (plural). Примеры: «Мосты соединяют берега реки» (Bridges connect the banks of the river.). «В этом городе много красивых мостов» (There are many beautiful bridges in this city.)"
  },
  {
    word: "ГРИБЫ",
    definition: "mushrooms",
    lesson: "ГРИБЫ means 'mushrooms' (plural). Примеры: «Осенью мы собираем грибы в лесу» (In autumn, we pick mushrooms in the forest.). «Из грибов можно приготовить вкусный суп» (You can make a tasty soup with mushrooms.)"
  },
  {
    word: "ГРЯЗЬ",
    definition: "mud",
    lesson: "ГРЯЗЬ means 'mud' in Russian. Примеры: «После дождя на дороге грязь» (After the rain, the road is muddy.). «Надень резиновые сапоги, чтобы не испачкаться в грязи» (Put on rubber boots so you don’t get dirty in the mud.)"
  },
  {
    word: "ФЕРМА",
    definition: "farm",
    lesson: "ФЕРМА means 'farm.' Примеры: «На ферме много разных животных» (There are many different animals on the farm.). «Он уехал работать на молочную ферму» (He went to work on a dairy farm.)"
  },
  {
    word: "ЗЕБРА",
    definition: "zebra",
    lesson: "ЗЕБРА means 'zebra.' Примеры: «В зоопарке мы видели зебру» (At the zoo, we saw a zebra.). «Зебра отличается черно-белыми полосами» (A zebra is distinguished by its black-and-white stripes.)"
  },
  {
    word: "ПАНДА",
    definition: "panda",
    lesson: "ПАНДА means 'panda.' Примеры: «Панда ест бамбук в зоопарке» (The panda eats bamboo at the zoo.). «Большая панда занесена в Красную книгу» (The giant panda is listed in the Red Book of endangered species.)"
  },
  {
    word: "ТИГРЫ",
    definition: "tigers",
    lesson: "ТИГРЫ means 'tigers' (plural). Примеры: «Тигры — опасные хищники» (Tigers are dangerous predators.). «В тайге обитает амурский тигр» (The Amur tiger lives in the taiga.)"
  }
];