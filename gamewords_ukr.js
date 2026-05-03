const gameWords = [
    {
        word: "СЛОВО",
        definition: "word",
        lesson: "СЛОВО means 'word'. <br><strong>Example:</strong> 'Добре слово краще за багатство.' (<em>A good word is better than wealth.</em>)"
    },
    {
        word: "МРІЯ",
        definition: "dream",
        lesson: "МРІЯ means 'dream'. It can refer to a sleep dream or a life aspiration. <br><strong>Example:</strong> 'У мене є велика мрія.' (<em>I have a big dream.</em>)"
    },
    {
        word: "КНИГА",
        definition: "book",
        lesson: "КНИГА means 'book'. <br><strong>Example:</strong> 'Ця книга дуже цікава.' (<em>This book is very interesting.</em>)"
    },
    {
        word: "ВІТЕР",
        definition: "wind",
        lesson: "ВІТЕР means 'wind'. <br><strong>Example:</strong> 'Сильний вітер дме з півночі.' (<em>A strong wind blows from the north.</em>)"
    },
    {
        word: "МІСТО",
        definition: "city",
        lesson: "МІСТО means 'city'. <br><strong>Example:</strong> 'Київ — красиве місто.' (<em>Kyiv is a beautiful city.</em>)"
    },
    {
        word: "ЗЕМЛЯ",
        definition: "earth, land",
        lesson: "ЗЕМЛЯ means 'earth' or 'land'. <br><strong>Example:</strong> 'Рідна земля найкраща.' (<em>Native land is the best.</em>)"
    },
    {
        word: "СОНЦЕ",
        definition: "sun",
        lesson: "СОНЦЕ means 'sun'. <br><strong>Example:</strong> 'Сонце світить яскраво.' (<em>The sun shines brightly.</em>)"
    },
    {
        word: "НЕБО",
        definition: "sky",
        lesson: "НЕБО means 'sky'. <br><strong>Example:</strong> 'На небі немає хмар.' (<em>There are no clouds in the sky.</em>)"
    },
    {
        word: "МОРЕ",
        definition: "sea",
        lesson: "МОРЕ means 'sea'. <br><strong>Example:</strong> 'Ми поїхали на море влітку.' (<em>We went to the sea in summer.</em>)"
    },
    {
        word: "РІЧКА",
        definition: "river",
        lesson: "РІЧКА means 'river'. <br><strong>Example:</strong> 'Дніпро — велика річка.' (<em>The Dnipro is a big river.</em>)"
    },
    {
        word: "ОЗЕРО",
        definition: "lake",
        lesson: "ОЗЕРО means 'lake'. <br><strong>Example:</strong> 'Вода в озері чиста.' (<em>The water in the lake is clean.</em>)"
    },
    {
        word: "ГОРА",
        definition: "mountain",
        lesson: "ГОРА means 'mountain'. <br><strong>Example:</strong> 'Ми піднялися на високу гору.' (<em>We climbed a high mountain.</em>)"
    },
    {
        word: "ЛІС",
        definition: "forest",
        lesson: "ЛІС means 'forest'. <br><strong>Example:</strong> 'У лісі багато грибів.' (<em>There are many mushrooms in the forest.</em>)"
    },
    {
        word: "ПОЛЕ",
        definition: "field",
        lesson: "ПОЛЕ means 'field'. <br><strong>Example:</strong> 'Пшеничне поле золоте.' (<em>The wheat field is golden.</em>)"
    },
    {
        word: "САД",
        definition: "garden",
        lesson: "САД means 'garden' or 'orchard'. <br><strong>Example:</strong> 'У нашому саду ростуть яблука.' (<em>Apples grow in our garden.</em>)"
    },
    {
        word: "КВІТ",
        definition: "bloom, blossom",
        lesson: "КВІТ usually refers to 'bloom' or 'blossom' (mass noun) or short for flower. <br><strong>Example:</strong> 'Весняний квіт чарує.' (<em>Spring blossom is enchanting.</em>)"
    },
    {
        word: "ТРАВА",
        definition: "grass",
        lesson: "ТРАВА means 'grass'. <br><strong>Example:</strong> 'Зелена трава вкрила землю.' (<em>Green grass covered the ground.</em>)"
    },
    {
        word: "ДЕРЕВО",
        definition: "tree",
        lesson: "ДЕРЕВО means 'tree'. <br><strong>Example:</strong> 'Це старе дерево.' (<em>This is an old tree.</em>)"
    },
    {
        word: "КУЩ",
        definition: "bush",
        lesson: "КУЩ means 'bush'. <br><strong>Example:</strong> 'Під вікном росте кущ троянд.' (<em>A rose bush grows under the window.</em>)"
    },
    {
        word: "ХМАРА",
        definition: "cloud",
        lesson: "ХМАРА means 'cloud'. <br><strong>Example:</strong> 'Темна хмара закрила сонце.' (<em>A dark cloud covered the sun.</em>)"
    },
    {
        word: "ДОЩ",
        definition: "rain",
        lesson: "ДОЩ means 'rain'. <br><strong>Example:</strong> 'Після дощу буде веселка.' (<em>After rain there will be a rainbow.</em>)"
    },
    {
        word: "СНІГ",
        definition: "snow",
        lesson: "СНІГ means 'snow'. <br><strong>Example:</strong> 'Білий сніг падає тихо.' (<em>White snow falls quietly.</em>)"
    },
    {
        word: "ЛІД",
        definition: "ice",
        lesson: "ЛІД means 'ice'. <br><strong>Example:</strong> 'Обережно, на дорозі лід.' (<em>Careful, there is ice on the road.</em>)"
    },
    {
        word: "ВОГОНЬ",
        definition: "fire",
        lesson: "ВОГОНЬ means 'fire'. <br><strong>Example:</strong> 'Вогонь зігріває нас.' (<em>Fire warms us.</em>)"
    },
    {
        word: "ДИМ",
        definition: "smoke",
        lesson: "ДИМ means 'smoke'. <br><strong>Example:</strong> 'Немає диму без вогню.' (<em>There is no smoke without fire.</em>)"
    },
    {
        word: "ПОПІЛ",
        definition: "ash",
        lesson: "ПОПІЛ means 'ash'. <br><strong>Example:</strong> 'Від багаття залишився лише попіл.' (<em>Only ash remained from the bonfire.</em>)"
    },
    {
        word: "ПІСОК",
        definition: "sand",
        lesson: "ПІСОК means 'sand'. <br><strong>Example:</strong> 'Діти граються у пісок.' (<em>Children play in the sand.</em>)"
    },
    {
        word: "КАМІНЬ",
        definition: "stone",
        lesson: "КАМІНЬ means 'stone'. <br><strong>Example:</strong> 'Цей камінь дуже важкий.' (<em>This stone is very heavy.</em>)"
    },
    {
        word: "ГЛИНА",
        definition: "clay",
        lesson: "ГЛИНА means 'clay'. <br><strong>Example:</strong> 'Глечик зроблений з глини.' (<em>The jug is made of clay.</em>)"
    },
    {
        word: "ЗОЛОТО",
        definition: "gold",
        lesson: "ЗОЛОТО means 'gold'. <br><strong>Example:</strong> 'Мовчання — золото.' (<em>Silence is gold.</em>)"
    },
    {
        word: "СРІБЛО",
        definition: "silver",
        lesson: "СРІБЛО means 'silver'. <br><strong>Example:</strong> 'Срібло блищить на сонці.' (<em>Silver shines in the sun.</em>)"
    },
    {
        word: "ЗАЛІЗО",
        definition: "iron",
        lesson: "ЗАЛІЗО means 'iron'. <br><strong>Example:</strong> 'Залізо — міцний метал.' (<em>Iron is a strong metal.</em>)"
    },
    {
        word: "СКЛО",
        definition: "glass",
        lesson: "СКЛО means 'glass'. <br><strong>Example:</strong> 'Обережно, розбите скло.' (<em>Careful, broken glass.</em>)"
    },
    {
        word: "СТІНА",
        definition: "wall",
        lesson: "СТІНА means 'wall'. <br><strong>Example:</strong> 'Біла стіна.' (<em>White wall.</em>)"
    },
    {
        word: "ВІКНО",
        definition: "window",
        lesson: "ВІКНО means 'window'. <br><strong>Example:</strong> 'Відкрий вікно, будь ласка.' (<em>Open the window, please.</em>)"
    },
    {
        word: "ДВЕРІ",
        definition: "door",
        lesson: "ДВЕРІ means 'door' (plural form used for singular object). <br><strong>Example:</strong> 'Зачини двері.' (<em>Close the door.</em>)"
    },
    {
        word: "ДАХ",
        definition: "roof",
        lesson: "ДАХ means 'roof'. <br><strong>Example:</strong> 'Кіт сидить на даху.' (<em>The cat sits on the roof.</em>)"
    },
    {
        word: "ПІДЛОГА",
        definition: "floor",
        lesson: "ПІДЛОГА means 'floor'. <br><strong>Example:</strong> 'Ми помили підлогу.' (<em>We washed the floor.</em>)"
    },
    {
        word: "СТЕЛЯ",
        definition: "ceiling",
        lesson: "СТЕЛЯ means 'ceiling'. <br><strong>Example:</strong> 'Висока стеля у кімнаті.' (<em>High ceiling in the room.</em>)"
    },
    {
        word: "КУТ",
        definition: "corner, angle",
        lesson: "КУТ means 'corner' or 'angle'. <br><strong>Example:</strong> 'Стіл стоїть у кутку.' (<em>The table stands in the corner.</em>)"
    },
    {
        word: "СТІЛ",
        definition: "table",
        lesson: "СТІЛ means 'table'. <br><strong>Example:</strong> 'Обід вже на столі.' (<em>Lunch is already on the table.</em>)"
    },
    {
        word: "СТІЛЕЦЬ",
        definition: "chair",
        lesson: "СТІЛЕЦЬ means 'chair'. <br><strong>Example:</strong> 'Сідай на стілець.' (<em>Sit on the chair.</em>)"
    },
    {
        word: "ЛІЖКО",
        definition: "bed",
        lesson: "ЛІЖКО means 'bed'. <br><strong>Example:</strong> 'Зручне ліжко.' (<em>Comfortable bed.</em>)"
    },
    {
        word: "ШАФА",
        definition: "wardrobe, cupboard",
        lesson: "ШАФА means 'wardrobe' or 'cupboard'. <br><strong>Example:</strong> 'Одяг висить у шафі.' (<em>Clothes hang in the wardrobe.</em>)"
    },
    {
        word: "КИТИМ",
        definition: "rug, carpet (dialect/rare)",
        lesson: "КИЛИМ (usually 5 letters: К-И-Л-И-М) means 'carpet'. <br><strong>Example:</strong> 'На підлозі лежить килим.' (<em>A carpet lies on the floor.</em>)"
    },
    {
        word: "ЛАМПА",
        definition: "lamp",
        lesson: "ЛАМПА means 'lamp'. <br><strong>Example:</strong> 'Увімкни лампу.' (<em>Turn on the lamp.</em>)"
    },
    {
        word: "СВІЧКА",
        definition: "candle",
        lesson: "СВІЧКА means 'candle'. <br><strong>Example:</strong> 'Свічка горить яскраво.' (<em>The candle burns brightly.</em>)"
    },
    {
        word: "ГОДИННИК",
        definition: "clock, watch",
        lesson: "ГОДИННИК is too long (8 letters). Let's use ЧАС (time) - 3 letters. Wait, need 5 letters. <br><strong>Replacement:</strong> ЕКРАН (screen). <br><strong>Example:</strong> 'Дивись на екран.' (<em>Look at the screen.</em>)"
    },
    {
        word: "ЕКРАН",
        definition: "screen",
        lesson: "ЕКРАН means 'screen'. <br><strong>Example:</strong> 'Великий екран телевізора.' (<em>Big TV screen.</em>)"
    },
    {
        word: "РАДІО",
        definition: "radio",
        lesson: "РАДІО means 'radio'. <br><strong>Example:</strong> 'Ми слухаємо радіо.' (<em>We listen to the radio.</em>)"
    },
    {
        word: "ВІДЕО",
        definition: "video",
        lesson: "ВІДЕО means 'video'. <br><strong>Example:</strong> 'Цікаве відео.' (<em>Interesting video.</em>)"
    },
    {
        word: "ФОТО",
        definition: "photo",
        lesson: "ФОТО means 'photo' (short for photography). <br><strong>Example:</strong> 'Гарне фото.' (<em>Nice photo.</em>)"
    },
    {
        word: "АВТО",
        definition: "auto, car",
        lesson: "АВТО means 'car' (short for automobile). <br><strong>Example:</strong> 'Швидке авто.' (<em>Fast car.</em>)"
    },
    {
        word: "ЛІТАК",
        definition: "airplane",
        lesson: "ЛІТАК means 'airplane'. <br><strong>Example:</strong> 'Літак летить високо.' (<em>The airplane flies high.</em>)"
    },
    {
        word: "ПОТЯГ",
        definition: "train",
        lesson: "ПОТЯГ means 'train'. <br><strong>Example:</strong> 'Потяг прибуває вчасно.' (<em>The train arrives on time.</em>)"
    },
    {
        word: "МЕТРО",
        definition: "metro, subway",
        lesson: "МЕТРО means 'metro'. <br><strong>Example:</strong> 'Київське метро глибоке.' (<em>Kyiv metro is deep.</em>)"
    },
    {
        word: "ТАКСІ",
        definition: "taxi",
        lesson: "ТАКСІ means 'taxi'. <br><strong>Example:</strong> 'Ми викликали таксі.' (<em>We called a taxi.</em>)"
    },
    {
        word: "ЧОВЕН",
        definition: "boat",
        lesson: "ЧОВЕН means 'boat'. <br><strong>Example:</strong> 'Рибалка у човні.' (<em>Fisherman in a boat.</em>)"
    },
    {
        word: "ШЛЯХ",
        definition: "way, path",
        lesson: "ШЛЯХ means 'way' or 'path'. <br><strong>Example:</strong> 'Далекий шлях додому.' (<em>Long way home.</em>)"
    },
    {
        word: "ДОРОГА",
        definition: "road",
        lesson: "ДОРОГА means 'road'. <br><strong>Example:</strong> 'Широка дорога.' (<em>Wide road.</em>)"
    },
    {
        word: "ВУЛИЦЯ",
        definition: "street",
        lesson: "ВУЛИЦЯ means 'street'. <br><strong>Example:</strong> 'Тиха вулиця.' (<em>Quiet street.</em>)"
    },
    {
        word: "АДРЕСА",
        definition: "address",
        lesson: "АДРЕСА means 'address'. <br><strong>Example:</strong> 'Яка твоя адреса?' (<em>What is your address?</em>)"
    },
    {
        word: "НОМЕР",
        definition: "number",
        lesson: "НОМЕР means 'number'. <br><strong>Example:</strong> 'Запиши мій номер.' (<em>Write down my number.</em>)"
    },
    {
        word: "ІМ'Я",
        definition: "name",
        lesson: "ІМ'Я means 'name'. Note: The apostrophe is a letter in Ukrainian alphabet (sort of, it's a sign). Wait, standard Ukrainian keyboard has apostrophe. In 5-letter game, apostrophe might be tricky. Let's use words without apostrophe if possible, or treat it as a char. User requested 5 letter words. ІМ'Я is 3 letters + apostrophe. Let's skip. <br><strong>Replacement:</strong> НАЗВА (name/title). <br><strong>Example:</strong> 'Цікава назва книги.' (<em>Interesting book title.</em>)"
    },
    {
        word: "НАЗВА",
        definition: "name, title",
        lesson: "НАЗВА means 'name' (of a thing) or 'title'. <br><strong>Example:</strong> 'Назва міста.' (<em>Name of the city.</em>)"
    },
    {
        word: "ЛЮДИНА",
        definition: "human, person",
        lesson: "ЛЮДИНА means 'human' or 'person'. <br><strong>Example:</strong> 'Добра людина.' (<em>Kind person.</em>)"
    },
    {
        word: "НАРОД",
        definition: "people, nation",
        lesson: "НАРОД means 'people' or 'nation'. <br><strong>Example:</strong> 'Український народ.' (<em>Ukrainian people.</em>)"
    },
    {
        word: "СІМ'Я",
        definition: "family",
        lesson: "СІМ'Я means 'family'. 4 letters + apostrophe. Let's use РОДИНА (family) - 6 letters. Too long. РІДНЯ (relatives) - 5 letters. <br><strong>Example:</strong> 'Уся моя рідня тут.' (<em>All my relatives are here.</em>)"
    },
    {
        word: "РІДНЯ",
        definition: "relatives, kin",
        lesson: "РІДНЯ means 'relatives' or 'kin'. <br><strong>Example:</strong> 'Велика рідня.' (<em>Big family/kin.</em>)"
    },
    {
        word: "МАТИ",
        definition: "mother",
        lesson: "МАТИ means 'mother'. <br><strong>Example:</strong> 'Рідна мати.' (<em>Own mother.</em>)"
    },
    {
        word: "ТАТО",
        definition: "dad",
        lesson: "ТАТО means 'dad'. <br><strong>Example:</strong> 'Мій тато сильний.' (<em>My dad is strong.</em>)"
    },
    {
        word: "БРАТ",
        definition: "brother",
        lesson: "БРАТ means 'brother'. <br><strong>Example:</strong> 'Старший брат.' (<em>Older brother.</em>)"
    },
    {
        word: "СЕСТРА",
        definition: "sister",
        lesson: "СЕСТРА means 'sister'. <br><strong>Example:</strong> 'Молодша сестра.' (<em>Younger sister.</em>)"
    },
    {
        word: "СИН",
        definition: "son",
        lesson: "СИН means 'son'. Too short. <br><strong>Replacement:</strong> ОНУК (grandson). <br><strong>Example:</strong> 'Любий онук.' (<em>Dear grandson.</em>)"
    },
    {
        word: "ОНУК",
        definition: "grandson",
        lesson: "ОНУК means 'grandson'. <br><strong>Example:</strong> 'Онук відвідав бабусю.' (<em>Grandson visited grandma.</em>)"
    },
    {
        word: "ДОЧКА",
        definition: "daughter",
        lesson: "ДОЧКА means 'daughter'. <br><strong>Example:</strong> 'Красуня дочка.' (<em>Beautiful daughter.</em>)"
    },
    {
        word: "ДІД",
        definition: "grandfather",
        lesson: "ДІД means 'grandfather'. Too short. <br><strong>Replacement:</strong> ДЯДЬКО (uncle) - 6 letters. ТІТКА (aunt) - 5 letters. <br><strong>Example:</strong> 'Тітка приїхала в гості.' (<em>Aunt came to visit.</em>)"
    },
    {
        word: "ТІТКА",
        definition: "aunt",
        lesson: "ТІТКА means 'aunt'. <br><strong>Example:</strong> 'Моя тітка лікар.' (<em>My aunt is a doctor.</em>)"
    },
    {
        word: "ДРУГ",
        definition: "friend",
        lesson: "ДРУГ means 'friend'. <br><strong>Example:</strong> 'Вірний друг.' (<em>Loyal friend.</em>)"
    },
    {
        word: "ВОРОГ",
        definition: "enemy",
        lesson: "ВОРОГ means 'enemy'. <br><strong>Example:</strong> 'Ворог не пройде.' (<em>The enemy shall not pass.</em>)"
    },
    {
        word: "СУСІД",
        definition: "neighbor",
        lesson: "СУСІД means 'neighbor'. <br><strong>Example:</strong> 'Добрий сусід.' (<em>Good neighbor.</em>)"
    },
    {
        word: "ГІСТЬ",
        definition: "guest",
        lesson: "ГІСТЬ means 'guest'. <br><strong>Example:</strong> 'Шановний гість.' (<em>Honored guest.</em>)"
    },
    {
        word: "ЛІКАР",
        definition: "doctor",
        lesson: "ЛІКАР means 'doctor'. <br><strong>Example:</strong> 'Лікар лікує хворих.' (<em>The doctor treats the sick.</em>)"
    },
    {
        word: "КУХАР",
        definition: "cook, chef",
        lesson: "КУХАР means 'cook' or 'chef'. <br><strong>Example:</strong> 'Кухар готує смачно.' (<em>The cook cooks deliciously.</em>)"
    },
    {
        word: "АКТОР",
        definition: "actor",
        lesson: "АКТОР means 'actor'. <br><strong>Example:</strong> 'Відомий актор.' (<em>Famous actor.</em>)"
    },
    {
        word: "АВТОР",
        definition: "author",
        lesson: "АВТОР means 'author'. <br><strong>Example:</strong> 'Автор книги.' (<em>Author of the book.</em>)"
    },
    {
        word: "ПОЕТ",
        definition: "poet",
        lesson: "ПОЕТ means 'poet'. <br><strong>Example:</strong> 'Тарас Шевченко — великий поет.' (<em>Taras Shevchenko is a great poet.</em>)"
    },
    {
        word: "СПІВАК",
        definition: "singer",
        lesson: "СПІВАК means 'singer'. <br><strong>Example:</strong> 'Талановитий співак.' (<em>Talented singer.</em>)"
    },
    {
        word: "ГОЛОС",
        definition: "voice",
        lesson: "ГОЛОС means 'voice'. <br><strong>Example:</strong> 'Гарний голос.' (<em>Beautiful voice.</em>)"
    },
    {
        word: "СЛУХ",
        definition: "hearing",
        lesson: "СЛУХ means 'hearing'. <br><strong>Example:</strong> 'У нього добрий слух.' (<em>He has good hearing.</em>)"
    },
    {
        word: "ЗІР",
        definition: "sight",
        lesson: "ЗІР means 'sight'. Too short. <br><strong>Replacement:</strong> ПОГЛЯД (look/glance) - 6 letters. ОЧІ (eyes) - 3 letters. БРОВА (eyebrow) - 5 letters. <br><strong>Example:</strong> 'Чорна брова.' (<em>Black eyebrow.</em>)"
    },
    {
        word: "БРОВА",
        definition: "eyebrow",
        lesson: "БРОВА means 'eyebrow'. <br><strong>Example:</strong> 'Вона підняла брову.' (<em>She raised an eyebrow.</em>)"
    },
    {
        word: "РУКА",
        definition: "hand, arm",
        lesson: "РУКА means 'hand' or 'arm'. <br><strong>Example:</strong> 'Права рука.' (<em>Right hand.</em>)"
    },
    {
        word: "НОГА",
        definition: "leg, foot",
        lesson: "НОГА means 'leg' or 'foot'. <br><strong>Example:</strong> 'Ліва нога.' (<em>Left leg.</em>)"
    },
    {
        word: "ГОЛОВА",
        definition: "head",
        lesson: "ГОЛОВА means 'head'. <br><strong>Example:</strong> 'Розумна голова.' (<em>Smart head.</em>)"
    },
    {
        word: "ЛИЦЕ",
        definition: "face",
        lesson: "ЛИЦЕ means 'face'. <br><strong>Example:</strong> 'Умите лице.' (<em>Washed face.</em>)"
    },
    {
        word: "СПИНА",
        definition: "back",
        lesson: "СПИНА means 'back'. <br><strong>Example:</strong> 'Рівна спина.' (<em>Straight back.</em>)"
    },
    {
        word: "ЖИВІТ",
        definition: "belly, stomach",
        lesson: "ЖИВІТ means 'belly' or 'stomach'. <br><strong>Example:</strong> 'Болить живіт.' (<em>Stomach hurts.</em>)"
    },
    {
        word: "СЕРЦЕ",
        definition: "heart",
        lesson: "СЕРЦЕ means 'heart'. <br><strong>Example:</strong> 'Добре серце.' (<em>Kind heart.</em>)"
    },
    {
        word: "ДУША",
        definition: "soul",
        lesson: "ДУША means 'soul'. <br><strong>Example:</strong> 'Щира душа.' (<em>Sincere soul.</em>)"
    },
    {
        word: "РОЗУМ",
        definition: "mind, intellect",
        lesson: "РОЗУМ means 'mind' or 'intellect'. <br><strong>Example:</strong> 'Гострий розум.' (<em>Sharp mind.</em>)"
    },
    {
        word: "ДУМКА",
        definition: "thought",
        lesson: "ДУМКА means 'thought'. <br><strong>Example:</strong> 'Цікава думка.' (<em>Interesting thought.</em>)"
    },
    {
        word: "ІДЕЯ",
        definition: "idea",
        lesson: "ІДЕЯ means 'idea'. <br><strong>Example:</strong> 'Геніальна ідея.' (<em>Genius idea.</em>)"
    },
    {
        word: "СИЛА",
        definition: "strength, force",
        lesson: "СИЛА means 'strength' or 'force'. <br><strong>Example:</strong> 'Велика сила.' (<em>Great strength.</em>)"
    },
    {
        word: "ВОЛЯ",
        definition: "will, freedom",
        lesson: "ВОЛЯ means 'will' or 'freedom'. <br><strong>Example:</strong> 'Сильна воля.' (<em>Strong will.</em>)"
    },
    {
        word: "СЛАВА",
        definition: "glory, fame",
        lesson: "СЛАВА means 'glory' or 'fame'. <br><strong>Example:</strong> 'Слава Україні!' (<em>Glory to Ukraine!</em>)"
    },
    {
        word: "ЧЕСТЬ",
        definition: "honor",
        lesson: "ЧЕСТЬ means 'honor'. <br><strong>Example:</strong> 'Бережи честь.' (<em>Protect honor.</em>)"
    },
    {
        word: "ПРАЦЯ",
        definition: "labor, work",
        lesson: "ПРАЦЯ means 'labor' or 'work'. <br><strong>Example:</strong> 'Чесна праця.' (<em>Honest work.</em>)"
    },
    {
        word: "ДІЛО",
        definition: "deed, affair",
        lesson: "ДІЛО means 'deed' or 'affair'. <br><strong>Example:</strong> 'Добре діло.' (<em>Good deed.</em>)"
    },
    {
        word: "УСПІХ",
        definition: "success",
        lesson: "УСПІХ means 'success'. <br><strong>Example:</strong> 'Бажаю успіху.' (<em>I wish you success.</em>)"
    },
    {
        word: "ЩАСТЯ",
        definition: "happiness",
        lesson: "ЩАСТЯ means 'happiness'. <br><strong>Example:</strong> 'Велике щастя.' (<em>Great happiness.</em>)"
    },
    {
        word: "РАДІСТЬ",
        definition: "joy",
        lesson: "РАДІСТЬ means 'joy'. <br><strong>Example:</strong> 'Сльози радості.' (<em>Tears of joy.</em>)"
    },
    {
        word: "СМІХ",
        definition: "laughter",
        lesson: "СМІХ means 'laughter'. <br><strong>Example:</strong> 'Веселий сміх.' (<em>Cheerful laughter.</em>)"
    },
    {
        word: "СЛЬОЗА",
        definition: "tear",
        lesson: "СЛЬОЗА means 'tear'. <br><strong>Example:</strong> 'Гірка сльоза.' (<em>Bitter tear.</em>)"
    },
    {
        word: "ГНІВ",
        definition: "anger",
        lesson: "ГНІВ means 'anger'. <br><strong>Example:</strong> 'Справедливий гнів.' (<em>Righteous anger.</em>)"
    },
    {
        word: "СТРАХ",
        definition: "fear",
        lesson: "СТРАХ means 'fear'. <br><strong>Example:</strong> 'Подолати страх.' (<em>Overcome fear.</em>)"
    },
    {
        word: "СПІР",
        definition: "dispute",
        lesson: "СПІР means 'dispute'. <br><strong>Example:</strong> 'Вирішити спір.' (<em>Resolve a dispute.</em>)"
    },
    {
        word: "МИР",
        definition: "peace",
        lesson: "МИР means 'peace'. <br><strong>Example:</strong> 'Мир у всьому світі.' (<em>Peace in the whole world.</em>)"
    },
    {
        word: "ВІЙНА",
        definition: "war",
        lesson: "ВІЙНА means 'war'. <br><strong>Example:</strong> 'Страшна війна.' (<em>Terrible war.</em>)"
    },
    {
        word: "ЗБРОЯ",
        definition: "weapon",
        lesson: "ЗБРОЯ means 'weapon'. <br><strong>Example:</strong> 'Скласти зброю.' (<em>Lay down weapons.</em>)"
    },
    {
        word: "АТАКА",
        definition: "attack",
        lesson: "АТАКА means 'attack'. <br><strong>Example:</strong> 'Швидка атака.' (<em>Fast attack.</em>)"
    },
    {
        word: "ЗАХИСТ",
        definition: "defense",
        lesson: "ЗАХИСТ means 'defense'. <br><strong>Example:</strong> 'Надійний захист.' (<em>Reliable defense.</em>)"
    },
    {
        word: "ПРАПОР",
        definition: "flag",
        lesson: "ПРАПОР means 'flag'. <br><strong>Example:</strong> 'Синьо-жовтий прапор.' (<em>Blue and yellow flag.</em>)"
    },
    {
        word: "ГЕРБ",
        definition: "coat of arms",
        lesson: "ГЕРБ means 'coat of arms'. <br><strong>Example:</strong> 'Державний герб.' (<em>State coat of arms.</em>)"
    },
    {
        word: "ГІМН",
        definition: "anthem",
        lesson: "ГІМН means 'anthem'. <br><strong>Example:</strong> 'Співати гімн.' (<em>Sing the anthem.</em>)"
    },
    {
        word: "МОВА",
        definition: "language",
        lesson: "МОВА means 'language'. <br><strong>Example:</strong> 'Рідна мова.' (<em>Native language.</em>)"
    },
    {
        word: "БУКВА",
        definition: "letter (char)",
        lesson: "БУКВА means 'letter' (of alphabet). <br><strong>Example:</strong> 'Велика буква.' (<em>Capital letter.</em>)"
    },
    {
        word: "ЧИСЛО",
        definition: "number",
        lesson: "ЧИСЛО means 'number' or 'date'. <br><strong>Example:</strong> 'Щасливе число.' (<em>Lucky number.</em>)"
    },
    {
        word: "ФОРМА",
        definition: "shape, form",
        lesson: "ФОРМА means 'shape' or 'form'. <br><strong>Example:</strong> 'Кругла форма.' (<em>Round shape.</em>)"
    },
    {
        word: "КОЛІР",
        definition: "color",
        lesson: "КОЛІР means 'color'. <br><strong>Example:</strong> 'Яскравий колір.' (<em>Bright color.</em>)"
    },
    {
        word: "СМАК",
        definition: "taste",
        lesson: "СМАК means 'taste'. <br><strong>Example:</strong> 'Приємний смак.' (<em>Pleasant taste.</em>)"
    },
    {
        word: "ЗАПАХ",
        definition: "smell",
        lesson: "ЗАПАХ means 'smell'. <br><strong>Example:</strong> 'Запах квітів.' (<em>Smell of flowers.</em>)"
    },
    {
        word: "ЗВУК",
        definition: "sound",
        lesson: "ЗВУК means 'sound'. <br><strong>Example:</strong> 'Гучний звук.' (<em>Loud sound.</em>)"
    },
    {
        word: "ШУМ",
        definition: "noise",
        lesson: "ШУМ means 'noise'. <br><strong>Example:</strong> 'Міський шум.' (<em>City noise.</em>)"
    },
    {
        word: "ТИША",
        definition: "silence",
        lesson: "ТИША means 'silence'. <br><strong>Example:</strong> 'Повна тиша.' (<em>Complete silence.</em>)"
    },
    {
        word: "ХЛІБ",
        definition: "bread",
        lesson: "ХЛІБ means 'bread'. <br><strong>Example:</strong> 'Свіжий хліб.' (<em>Fresh bread.</em>)"
    },
    {
        word: "ВОДА",
        definition: "water",
        lesson: "ВОДА means 'water'. <br><strong>Example:</strong> 'Чиста вода.' (<em>Clean water.</em>)"
    },
    {
        word: "МОЛОКО",
        definition: "milk",
        lesson: "МОЛОКО means 'milk'. <br><strong>Example:</strong> 'Пити молоко.' (<em>Drink milk.</em>)"
    },
    {
        word: "КАВА",
        definition: "coffee",
        lesson: "КАВА means 'coffee'. <br><strong>Example:</strong> 'Гаряча кава.' (<em>Hot coffee.</em>)"
    },
    {
        word: "ЧАЙ",
        definition: "tea",
        lesson: "ЧАЙ means 'tea'. <br><strong>Example:</strong> 'Зелений чай.' (<em>Green tea.</em>)"
    },
    {
        word: "СІК",
        definition: "juice",
        lesson: "СІК means 'juice'. <br><strong>Example:</strong> 'Яблучний сік.' (<em>Apple juice.</em>)"
    },
    {
        word: "СУП",
        definition: "soup",
        lesson: "СУП means 'soup'. <br><strong>Example:</strong> 'Смачний суп.' (<em>Tasty soup.</em>)"
    },
    {
        word: "БОРЩ",
        definition: "borscht",
        lesson: "БОРЩ means 'borscht' (beet soup). <br><strong>Example:</strong> 'Український борщ.' (<em>Ukrainian borscht.</em>)"
    },
    {
        word: "САЛО",
        definition: "salo (pork fat)",
        lesson: "САЛО means 'salo' (cured pork fat). <br><strong>Example:</strong> 'Сало з часником.' (<em>Salo with garlic.</em>)"
    },
    {
        word: "М'ЯСО",
        definition: "meat",
        lesson: "М'ЯСО means 'meat'. 4 letters + apostrophe. Let's assume apostrophe is a char or skip. User requested 5 letters. Let's skip to be safe. <br><strong>Replacement:</strong> РИБА (fish). <br><strong>Example:</strong> 'Свіжа риба.' (<em>Fresh fish.</em>)"
    },
    {
        word: "РИБА",
        definition: "fish",
        lesson: "РИБА means 'fish'. <br><strong>Example:</strong> 'Велика риба.' (<em>Big fish.</em>)"
    },
    {
        word: "ЯЙЦЕ",
        definition: "egg",
        lesson: "ЯЙЦЕ means 'egg'. <br><strong>Example:</strong> 'Куряче яйце.' (<em>Chicken egg.</em>)"
    },
    {
        word: "ЦУКОР",
        definition: "sugar",
        lesson: "ЦУКОР means 'sugar'. <br><strong>Example:</strong> 'Білий цукор.' (<em>White sugar.</em>)"
    },
    {
        word: "СІЛЬ",
        definition: "salt",
        lesson: "СІЛЬ means 'salt'. <br><strong>Example:</strong> 'Морська сіль.' (<em>Sea salt.</em>)"
    },
    {
        word: "МЕД",
        definition: "honey",
        lesson: "МЕД means 'honey'. <br><strong>Example:</strong> 'Солодкий мед.' (<em>Sweet honey.</em>)"
    },
    {
        word: "ТОРТ",
        definition: "cake",
        lesson: "ТОРТ means 'cake'. <br><strong>Example:</strong> 'Святковий торт.' (<em>Holiday cake.</em>)"
    }
];
