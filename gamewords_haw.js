const gameWords = [
    // --- VERIFIED 5-CHARACTER WORDS (Originals + Replacements) ---
    // Note: These words strictly have 5 symbols (Letters + ʻokina)

    {
        word: "ʻāina",
        definition: "land, earth",
        lesson: "ʻĀina means land or earth, and it is central to Hawaiian identity. It provides sustenance and is considered an ancestor. <br><strong>Example:</strong> 'Ua mālama mākou i ka ʻāina.' (<em>Translation: We cared for the land.</em>)"
    },
    {
        word: "aloha",
        definition: "love, greeting",
        lesson: "Aloha is the most famous Hawaiian word, meaning love, affection, compassion, and greeting. It represents a way of life centered on kindness. <br><strong>Example:</strong> 'Aloha nui loa i kou ʻohana.' (<em>Translation: Much love to your family.</em>)"
    },
    {
        word: "nāʻau",
        definition: "intestines; heart (figurative)",
        lesson: "Nāʻau refers to the intestines, but figuratively it is the heart or moral center where emotions and knowledge reside. <br><strong>Example:</strong> 'Ua ʻōlelo mai koʻu nāʻau iaʻu.' (<em>Translation: My gut told me.</em>)"
    },
    {
        word: "nōhea",
        definition: "handsome, lovely",
        lesson: "Nōhea describes someone or something as handsome or lovely. It is often used in songs to praise beauty. <br><strong>Example:</strong> 'He kāne nōhea kēlā.' (<em>Translation: That is a handsome man.</em>)"
    },
    {
        word: "lehua",
        definition: "Lehua blossom",
        lesson: "Lehua is the flower of the ʻōhiʻa tree, sacred to the goddess Pele. It is famous in legends and lei making. <br><strong>Example:</strong> 'Ua pua ka lehua i ka ua.' (<em>Translation: The lehua bloomed in the rain.</em>)"
    },
    {
        word: "lūʻau",
        definition: "Hawaiian feast; taro leaf",
        lesson: "Lūʻau refers to the young taro leaf and the feast named after it. It is a celebration featuring food and hula. <br><strong>Example:</strong> 'E hele ana mākou i ka lūʻau.' (<em>Translation: We are going to the feast.</em>)"
    },
    {
        word: "ʻaiea",
        definition: "Place name; Nothocestrum tree",
        lesson: "ʻAiea is a town on Oʻahu, named after the native ʻaiea tree (Nothocestrum) that once grew there abundantly. <br><strong>Example:</strong> 'Noho koʻu ʻanakala ma ʻAiea.' (<em>Translation: My uncle lives in ʻAiea.</em>)"
    },
    {
        word: "alohi",
        definition: "bright, shining",
        lesson: "Alohi describes something bright or shining, like eyes or the sun. <br><strong>Example:</strong> 'Alohi nā hōkū i ka pō.' (<em>Translation: The stars are bright in the night.</em>)"
    },
    {
        word: "mauka",
        definition: "toward the mountains",
        lesson: "Mauka is a direction meaning inland or toward the mountains, opposite of makai. <br><strong>Example:</strong> 'E hele mauka e ʻike i ka wailele.' (<em>Translation: Go inland to see the waterfall.</em>)"
    },
    {
        word: "makai",
        definition: "toward the sea",
        lesson: "Makai is a direction meaning seaward or toward the ocean. <br><strong>Example:</strong> 'Aia ka hale ma ka ʻaoʻao makai.' (<em>Translation: The house is on the seaward side.</em>)"
    },
    {
        word: "kaona",
        definition: "hidden meaning",
        lesson: "Kaona refers to the hidden meaning or symbolism in Hawaiian poetry and speech. <br><strong>Example:</strong> 'He kaona hohonu ko ke mele.' (<em>Translation: The song has a deep hidden meaning.</em>)"
    },
    {
        word: "hānai",
        definition: "to feed, foster, adopt",
        lesson: "Hānai means to feed or to adopt. A hānai child is raised by someone other than biological parents with deep love. <br><strong>Example:</strong> 'Ua hānai ʻia ʻo ia e kona tūtū.' (<em>Translation: He was raised by his grandmother.</em>)"
    },
    {
        word: "ʻimua",
        definition: "forward, ahead",
        lesson: "ʻImua means to move forward. It is a famous motto: 'Imua Kamehameha!' (Forward Kamehameha!). <br><strong>Example:</strong> 'E nānā ʻimua, mai nānā hope.' (<em>Translation: Look forward, don't look back.</em>)"
    },
    {
        word: "kūlia",
        definition: "to strive",
        lesson: "Kūlia means to strive or try hard. Queen Kapiʻolani's motto was 'Kūlia i ka nuʻu' (Strive for the summit). <br><strong>Example:</strong> 'E kūlia i ka maikaʻi.' (<em>Translation: Strive for goodness.</em>)"
    },
    {
        word: "maile",
        definition: "maile vine",
        lesson: "Maile is a fragrant native vine used for leis on special occasions like weddings and graduations. <br><strong>Example:</strong> 'Onaona ka lei maile.' (<em>Translation: The maile lei is fragrant.</em>)"
    },
    {
        word: "kālua",
        definition: "to bake in an imu",
        lesson: "Kālua is the traditional method of cooking food underground in an imu (earth oven). <br><strong>Example:</strong> 'ʻOno ka puaʻa kālua.' (<em>Translation: The roasted pig is delicious.</em>)"
    },
    {
        word: "ʻeleu",
        definition: "active, energetic",
        lesson: "ʻEleu describes someone who is alert, active, and energetic. <br><strong>Example:</strong> 'ʻEleu nā keiki i ke kakahiaka.' (<em>Translation: The children are energetic in the morning.</em>)"
    },
    {
        word: "keola",
        definition: "the life",
        lesson: "Keola means 'the life' (ke ola). It is a common name and refers to health and well-being. <br><strong>Example:</strong> 'Mālama i keola o ka ʻāina.' (<em>Translation: Preserve the life of the land.</em>)"
    },
    {
        word: "kālai",
        definition: "to carve",
        lesson: "Kālai means to carve, usually wood or stone. It implies shaping something with care. <br><strong>Example:</strong> 'Ke kālai nei ʻo ia i ka waʻa.' (<em>Translation: He is carving the canoe.</em>)"
    },
    {
        word: "hōlua",
        definition: "sled; to sled",
        lesson: "Hōlua is the ancient Hawaiian sport of sledding down grassy slopes on a wooden sled. <br><strong>Example:</strong> 'He hana leʻaleʻa ka hōlua.' (<em>Translation: Sledding is a fun activity.</em>)"
    },
    {
        word: "ʻemae",
        definition: "to wane; pain",
        lesson: "ʻEmae traditionally refers to a pain in the side or the waning of the moon (acting feebly). <br><strong>Example:</strong> 'Ke ʻemae nei ka mahina.' (<em>Translation: The moon is waning.</em>)"
    },
    {
        word: "loina",
        definition: "custom, rule",
        lesson: "Loina refers to rules, customs, or protocols that guide behavior in Hawaiian culture. <br><strong>Example:</strong> 'E mālama i nā loina o ka hula.' (<em>Translation: Observe the customs of the hula.</em>)"
    },
    {
        word: "pākea",
        definition: "white, clear",
        lesson: "Pākea means white or clear, often referring to a type of kapa (cloth) or clarity. <br><strong>Example:</strong> 'He ao pākea i ka lani.' (<em>Translation: A white cloud in the sky.</em>)"
    },
    {
        word: "hulia",
        definition: "to be sought",
        lesson: "Hulia is the passive form of huli (to seek/turn). It means to be sought after or turned. <br><strong>Example:</strong> 'Ua hulia ka ʻoiaʻiʻo.' (<em>Translation: The truth was sought.</em>)"
    },
    {
        word: "keala",
        definition: "the path",
        lesson: "Keala means 'the path' or 'the road'. It is a metaphor for one's journey in life. <br><strong>Example:</strong> 'Pololei keala i ke kai.' (<em>Translation: The path to the sea is straight.</em>)"
    },
    {
        word: "leina",
        definition: "leap, place to leap",
        lesson: "Leina refers to a leaping place, often where spirits were believed to leap into the next world (Leina-a-ka-ʻuhane). <br><strong>Example:</strong> 'Ka leina o ka wai.' (<em>Translation: The leaping of the water.</em>)"
    },
    {
        word: "alani",
        definition: "orange (fruit/color)",
        lesson: "Alani refers to the orange fruit and the color orange. It is also a native tree (Pelea). <br><strong>Example:</strong> 'Ua ʻai au i ka alani.' (<em>Translation: I ate the orange.</em>)"
    },
    {
        word: "kauka",
        definition: "doctor",
        lesson: "Kauka is the Hawaiian transliteration for 'doctor'. It refers to a medical physician. <br><strong>Example:</strong> 'E hele i ke kauka.' (<em>Translation: Go to the doctor.</em>)"
    },
    {
        word: "maiʻa",
        definition: "banana",
        lesson: "Maiʻa is the banana plant, a vital food source brought by early Polynesians. <br><strong>Example:</strong> 'Palu ka maiʻa.' (<em>Translation: The banana is ripe.</em>)"
    },
    {
        word: "mālie",
        definition: "calm, quiet",
        lesson: "Mālie describes calm weather or a gentle temperament. <br><strong>Example:</strong> 'Mālie ke kai.' (<em>Translation: The sea is calm.</em>)"
    },
    {
        word: "oʻahu",
        definition: "Oʻahu (island)",
        lesson: "Oʻahu is the 'Gathering Place', the third largest island in Hawaiʻi. <br><strong>Example:</strong> 'Noho au ma Oʻahu.' (<em>Translation: I live on Oʻahu.</em>)"
    },
    {
        word: "uluna",
        definition: "pillow",
        lesson: "Uluna is a pillow or a headrest. It implies comfort and rest. <br><strong>Example:</strong> 'Palupalu ka uluna.' (<em>Translation: The pillow is soft.</em>)"
    },
    {
        word: "wikiō",
        definition: "video",
        lesson: "Wikiō is the modern Hawaiian word for video. <br><strong>Example:</strong> 'Nānā i ke wikiō.' (<em>Translation: Watch the video.</em>)"
    },
    {
        word: "lāʻie",
        definition: "Lāʻie (place)",
        lesson: "Lāʻie is a place on Oʻahu. It also refers to the 'ie vine leaf. <br><strong>Example:</strong> 'Ua hele mākou i Lāʻie.' (<em>Translation: We went to Lāʻie.</em>)"
    },
    {
        word: "pāhoa",
        definition: "dagger; Pāhoa town",
        lesson: "Pāhoa is a short dagger or a town on Hawaiʻi Island. <br><strong>Example:</strong> 'Oi ka pāhoa.' (<em>Translation: The dagger is sharp.</em>)"
    },
    {
        word: "koloa",
        definition: "Hawaiian duck",
        lesson: "Koloa is the native Hawaiian duck. It is also a district on Kauaʻi (Kōloa). <br><strong>Example:</strong> 'ʻAu ke koloa i ka wai.' (<em>Translation: The koloa duck swims in the water.</em>)"
    },
    {
        word: "wākea",
        definition: "Sky Father",
        lesson: "Wākea is the Sky Father in Hawaiian mythology, partner to Papa (Earth Mother). <br><strong>Example:</strong> 'ʻO Wākea ke lani.' (<em>Translation: Wākea is the heavens.</em>)"
    },
    {
        word: "iluna",
        definition: "up, above",
        lesson: "Iluna means upward or above. <br><strong>Example:</strong> 'Nānā iluna.' (<em>Translation: Look up.</em>)"
    },
    {
        word: "ilalo",
        definition: "down, below",
        lesson: "Ilalo means downward or below. <br><strong>Example:</strong> 'Noho ilalo.' (<em>Translation: Sit down.</em>)"
    },
    {
        word: "waiho",
        definition: "to leave, place",
        lesson: "Waiho means to leave something alone or to place an item down. <br><strong>Example:</strong> 'Waiho i ka pōhaku.' (<em>Translation: Put down the stone.</em>)"
    },
    {
        word: "paukū",
        definition: "section, verse",
        lesson: "Paukū is a section of land, a verse of a song, or a paragraph. <br><strong>Example:</strong> 'Heluhelu i ka paukū.' (<em>Translation: Read the verse.</em>)"
    },
    {
        word: "kinai",
        definition: "to extinguish",
        lesson: "Kinai means to put out a fire or extinguish a light. <br><strong>Example:</strong> 'Kinai i ke ahi.' (<em>Translation: Put out the fire.</em>)"
    },
    {
        word: "laiki",
        definition: "rice",
        lesson: "Laiki is the Hawaiian word for rice. <br><strong>Example:</strong> 'ʻAi i ka laiki.' (<em>Translation: Eat the rice.</em>)"
    },
    {
        word: "maika",
        definition: "rolling stone game",
        lesson: "Maika is a traditional game where stone disks are rolled for accuracy. <br><strong>Example:</strong> 'Pāʻani maika kākou.' (<em>Translation: Let's play maika.</em>)"
    },
    {
        word: "pilau",
        definition: "rot, stench",
        lesson: "Pilau means bad-smelling or rotten. It can also describe bad behavior. <br><strong>Example:</strong> 'Pilau ka iʻa.' (<em>Translation: The fish is rotten.</em>)"
    },
    {
        word: "palai",
        definition: "to fry",
        lesson: "Palai means to fry food. It is distinct from traditional baking (kālua). <br><strong>Example:</strong> 'Palai i ka hua.' (<em>Translation: Fry the egg.</em>)"
    },
    {
        word: "pehea",
        definition: "how",
        lesson: "Pehea asks 'how' or 'what'. 'Pehea ʻoe?' means 'How are you?'. <br><strong>Example:</strong> 'Pehea ka lā?' (<em>Translation: How is the day?</em>)"
    },
    {
        word: "loaʻa",
        definition: "got, obtained",
        lesson: "Loaʻa means to find, get, or obtain. It implies success in finding. <br><strong>Example:</strong> 'Ua loaʻa iaʻu.' (<em>Translation: I got it/I found it.</em>)"
    },
    {
        word: "niele",
        definition: "curious, nosy",
        lesson: "Niele means inquisitive or curious, sometimes to a fault (nosy). <br><strong>Example:</strong> 'Mai niele.' (<em>Translation: Don't be nosy.</em>)"
    },
    {
        word: "aumoe",
        definition: "late night",
        lesson: "Aumoe is the time of night when everyone is asleep (midnight). <br><strong>Example:</strong> 'Hiamoe i ke aumoe.' (<em>Translation: Sleep at midnight.</em>)"
    },
    {
        word: "honua",
        definition: "earth, world",
        lesson: "Honua means the earth or the world. 'Mālama honua' means caring for the world. <br><strong>Example:</strong> 'Nani ka honua.' (<em>Translation: The world is beautiful.</em>)"
    },
    {
        word: "keiki",
        definition: "child",
        lesson: "Keiki means child. It is a term of endearment and responsibility. <br><strong>Example:</strong> 'Aloha ke keiki.' (<em>Translation: The child is loved.</em>)"
    },
    {
        word: "kōkua",
        definition: "help, assist",
        lesson: "Kōkua means to help or assist. Cooperation is key to Hawaiian culture. <br><strong>Example:</strong> 'E kōkua mai.' (<em>Translation: Please help.</em>)"
    },
    {
        word: "lānai",
        definition: "porch, veranda",
        lesson: "Lānai is a porch or balcony, an essential part of Hawaiian architecture. <br><strong>Example:</strong> 'Noho ma ka lānai.' (<em>Translation: Sit on the porch.</em>)"
    },
    {
        word: "hānau",
        definition: "born, birth",
        lesson: "Hānau means to give birth or to be born. <br><strong>Example:</strong> 'Lā hānau.' (<em>Translation: Birthday / Day of birth.</em>)"
    },
    {
        word: "heiau",
        definition: "temple",
        lesson: "Heiau is a traditional place of worship or shrine. <br><strong>Example:</strong> 'Kapu ka heiau.' (<em>Translation: The temple is sacred.</em>)"
    },
    {
        word: "lāʻau",
        definition: "plant, medicine",
        lesson: "Lāʻau means plant, tree, or wood. It also means medicine. <br><strong>Example:</strong> 'Inu i ka lāʻau.' (<em>Translation: Drink the medicine.</em>)"
    },
    {
        word: "ʻuala",
        definition: "sweet potato",
        lesson: "ʻUala is the sweet potato, a staple food crop. <br><strong>Example:</strong> 'kanu i ka ʻuala.' (<em>Translation: Plant the sweet potato.</em>)"
    },
    {
        word: "ipuka",
        definition: "door, entrance",
        lesson: "Ipuka means doorway or entrance. <br><strong>Example:</strong> 'Pani i ka ipuka.' (<em>Translation: Close the door.</em>)"
    },
    {
        word: "moena",
        definition: "mat",
        lesson: "Moena is a woven mat, usually made of lauhala leaves. <br><strong>Example:</strong> 'Hohola i ka moena.' (<em>Translation: Spread out the mat.</em>)"
    },
    {
        word: "kukui",
        definition: "candlenut",
        lesson: "Kukui is the state tree. Its nuts provided oil for light (symbolizing wisdom). <br><strong>Example:</strong> 'Ua pū ka iwi kukui.' (<em>Translation: The kukui shell broke.</em>)"
    },
    {
        word: "loulu",
        definition: "fan palm",
        lesson: "Loulu is the only palm native to Hawaiʻi. <br><strong>Example:</strong> 'Kiʻekiʻe ka loulu.' (<em>Translation: The loulu palm is tall.</em>)"
    },
    {
        word: "aliʻi",
        definition: "chief, royal",
        lesson: "Aliʻi refers to the chiefly class who ruled old Hawaiʻi. <br><strong>Example:</strong> 'Hōʻea ke aliʻi.' (<em>Translation: The chief arrives.</em>)"
    },
    {
        word: "kauwā",
        definition: "servant",
        lesson: "Kauwā referred to the outcast or servant class in ancient times. <br><strong>Example:</strong> 'Hana ke kauwā.' (<em>Translation: The servant works.</em>)"
    },
    {
        word: "nīnau",
        definition: "question",
        lesson: "Nīnau means to ask or a question. <br><strong>Example:</strong> 'He nīnau kaʻu.' (<em>Translation: I have a question.</em>)"
    },
    {
        word: "waena",
        definition: "middle, center",
        lesson: "Waena means the middle or center. <br><strong>Example:</strong> 'I waena o ke kai.' (<em>Translation: In the middle of the sea.</em>)"
    },
    {
        word: "kōlea",
        definition: "plover (bird)",
        lesson: "Kōlea is the Pacific Golden Plover, a migratory bird. <br><strong>Example:</strong> 'Lele ke kōlea.' (<em>Translation: The plover flies.</em>)"
    },
    {
        word: "nenue",
        definition: "chub fish",
        lesson: "Nenue is a grey inshore fish, also known as enenue. <br><strong>Example:</strong> 'ʻOno ka nenue.' (<em>Translation: The nenue fish is delicious.</em>)"
    },
    {
        word: "ʻeono",
        definition: "six",
        lesson: "ʻEono is the number six. <br><strong>Example:</strong> 'ʻEono iʻa.' (<em>Translation: Six fish.</em>)"
    },
    {
        word: "kākau",
        definition: "to write; tattoo",
        lesson: "Kākau means to write or to tattoo (taping ink into skin). <br><strong>Example:</strong> 'Kākau i ka inoa.' (<em>Translation: Write the name.</em>)"
    },
    {
        word: "kaula",
        definition: "rope, string",
        lesson: "Kaula means rope, cord, or string. It connects things together. <br><strong>Example:</strong> 'Huki i ke kaula.' (<em>Translation: Pull the rope.</em>)"
    },
    {
        word: "kūʻai",
        definition: "to buy, sell",
        lesson: "Kūʻai means to trade, buy, or sell. 'Kūʻai mai' (buy), 'Kūʻai aku' (sell). <br><strong>Example:</strong> 'Hele i ka hale kūʻai.' (<em>Translation: Go to the store.</em>)"
    },
    {
        word: "laulā",
        definition: "broad, wide",
        lesson: "Laulā means broad or wide. It can refer to land or knowledge. <br><strong>Example:</strong> 'Laulā ka ʻike.' (<em>Translation: The knowledge is broad.</em>)"
    },
    {
        word: "mākau",
        definition: "ready, skilled",
        lesson: "Mākau means ready, capable, or skilled. <br><strong>Example:</strong> 'Ua mākau ʻoe?' (<em>Translation: Are you ready?</em>)"
    },
    {
        word: "pīkai",
        definition: "sprinkle with sea water",
        lesson: "Pīkai is a ceremonial purification by sprinkling salt water. <br><strong>Example:</strong> 'Pīkai i ka hale.' (<em>Translation: Bless/sprinkle the house.</em>)"
    },
    {
        word: "pōniu",
        definition: "dizzy",
        lesson: "Pōniu means dizzy or giddy. It can come from spinning or illness. <br><strong>Example:</strong> 'Pōniu ke poʻo.' (<em>Translation: The head is dizzy.</em>)"
    },
    {
        word: "wāwae",
        definition: "leg, foot",
        lesson: "Wāwae refers to the leg or foot. <br><strong>Example:</strong> 'ʻEha ka wāwae.' (<em>Translation: The foot is sore.</em>)"
    },
    {
        word: "kaʻao",
        definition: "legend, tale",
        lesson: "Kaʻao is a legend or tale, often fictional or fanciful (distinct from moʻolelo, which is history). <br><strong>Example:</strong> 'Haʻi mai i ke kaʻao.' (<em>Translation: Tell me the tale.</em>)"
    },
    {
        word: "ʻīlio",
        definition: "dog",
        lesson: "ʻĪlio is the Hawaiian word for dog. <br><strong>Example:</strong> 'Holo ka ʻīlio.' (<em>Translation: The dog runs.</em>)"
    },
    {
        word: "hālau",
        definition: "long house; hula school",
        lesson: "Hālau was a long thatched house for canoes, now commonly refers to a hula school. <br><strong>Example:</strong> 'Aia ka hālau hula i ke kai.' (<em>Translation: The hula school is by the sea.</em>)"
    },
    {
        word: "makua",
        definition: "parent",
        lesson: "Makua means parent or generation of the parents. 'Makua kāne' (father), 'Makuahine' (mother). <br><strong>Example:</strong> 'Aloha nā makua.' (<em>Translation: Respect the parents.</em>)"
    },
    {
        word: "akule",
        definition: "bigeye scad",
        lesson: "Akule is a fish found in large schools, important for food. <br><strong>Example:</strong> 'Ka iʻa akule.' (<em>Translation: The akule fish.</em>)"
    },
    {
        word: "ʻeleu",
        definition: "energetic",
        lesson: "ʻEleu means alert, agile, and energetic. <br><strong>Example:</strong> 'ʻEleu ke kino.' (<em>Translation: The body is energetic.</em>)"
    },
    {
        word: "hōʻao",
        definition: "to try; marriage",
        lesson: "Hōʻao means to try or taste. Historically it also referred to marriage (trying out the relationship). <br><strong>Example:</strong> 'Hōʻao e hana.' (<em>Translation: Try to do it.</em>)"
    },
    {
        word: "luana",
        definition: "relax, enjoy leisure",
        lesson: "Luana means to be at leisure, to relax and enjoy surroundings. <br><strong>Example:</strong> 'Noho a luana.' (<em>Translation: Sit and relax.</em>)"
    },
    {
        word: "lāhui",
        definition: "nation, race, people",
        lesson: "Lāhui refers to a nation, race, or tribe. 'Lāhui Hawaiʻi' is the Hawaiian nation. <br><strong>Example:</strong> 'Aloha lāhui.' (<em>Translation: Love for the nation.</em>)"
    }
];