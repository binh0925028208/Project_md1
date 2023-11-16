const products = [
  {
    id: 1,
    productName: "Hi-resolution Astray Gundam",
    price: 75,
    stock: 10,
    scale: "hr",
    brand: "Bandai",
    scaleDetail: "Hi-Resolution",
    isDelete: 1,
    img: "../Assets/img_product/sp_1.jpg",
    desc: "A pre-assembled frame using die-cast has been adopted. The color division of the pre-assembled hand parts have been recreated. Certain sections of the frame have also adopted muscle-like forms, and other sections have emboss processing applied to create texture. The Gerbera straight has had emboss processing and plating applied to recreate the tempered patterns. The armor on the upper arm slides as the arm moves. The pre-painted and pre-assembled frame was created using die-cast, recreating an intricate texture and heft. The armor on the shoulder blades is linked to the movements of the arms. Different open hand pareds are included for left and right hands. The layered structures of the frame and armor create dense movements. Details that resemble the shape of muscles have also been recreated. The big toes on each foot are divided for articulation to recreate poses where the kit is stepping in. Certain sections have had emboss processing applied, creating surface textures that give density to its design.",
  },
  {
    id: 2,
    productName: "SD 78-RX-2 Gundam",
    price: 15,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_2.jpg",
    desc: "The SD EX-Standard series is a revitalization of the Super Deformed Gundam style, which features chibi sized Gundams. The new EX-Standard series has stronger proportions for the limbs which allow increased articulation.",
  },
  {
    id: 3,
    productName: "RG God Gundam",
    price: 30,
    stock: 10,
    scale: "rg",
    brand: "Bandai",
    scaleDetail: "Real Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_3.jpg",
    desc: "Pursue movements that trace the human body unique to mobile fighters. With the advanced MS joints introduced in the shoulders and wrists, you can reproduce the characteristic 'arms crossed' pose. Equipped with a movable axis on the base of the nail and the thumb cover to reproduce the god finger. Original arranged sun effect is included",
  },
  {
    id: 4,
    productName: "HG GN-001 Exia Gundam",
    price: 22,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_4.jpg",
    desc: "PThe Gundam Exia as it appeared in the original Mobile Suit Gundam 00. In addition to a GN Sword, includes the GN Longblade and Shortblade variants to expand your display possibilities! The huge GN Sword can be displayed stowed away as well. [Set Contents]Main Body, Optional pair of hands, GN Sword, GN Longblade, GN Shortblade, Tamashii Stage Joint. Look for origin of shipment: Only items shipped from within North America are being sold by authorized U.S. Retailers. The product box will have a Bluefin / Bandai Namco warning label, which is proof that you are purchasing an officially licensed Bandai product, distributed by its sole and authorized distributor (Bluefin) for the U.S. Markets. This product has been thoroughly tested for safety and meets all North American consumer product safety regulations. The affixed label also entitles the purchaser to product support assistance within the United States.",
  },
  {
    id: 5,
    productName: "SD 002 Banshee gundam",
    price: 10,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_5.jpg",
    desc: "Cute chibi form of the Full Amor Unicorn Gundam with its full payload of weapons. A new mold that allows leg and elbow articulation and retains the ability to transform between Unicorn and Destroy mode also allows the ability to switch between pupil eyes and eye sensors",
  },
  {
    id: 6,
    productName: "MG Buster Gundam",
    price: 35,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_6.jpg",
    desc: "This Bombardment Type Gundam from Gundam seed was created with new styling in celebration of the 10th anniversary of Gundam seed. The iconic combining gimmick between the high energy rifle and gun launcher has been perfectly recreated to allow display of a very large combined projectile gun. Hatches for missile pods can be opened to reveal individual colored missiles. Runner x 12, foil sticker x1, dry decal x1, Instruction manual x1.",
  },
  {
    id: 7,
    productName: "PG Exia gundam",
    price: 85,
    stock: 10,
    scale: "pg",
    brand: "Bandai",
    scaleDetail: "Perfect Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_7.jpg",
    desc: "The latest Perfect Grade, Perfect Grade Gundam Exia has arrived! Biggest feature of this kit, the 'GN Drive', was under supervision of Mechanical Designer Ebike Kanetake. The mechanism in which the GN particles transmit from the GN Drive throughout the whole body has been replicated. Contents include: 40 runners, 1 sheet of marking stickers, 1 sheet of metallic stickers, 1 sheet of foil stickers, 1 sheet of dry transfer decals, 2 sheets of silicone.",
  },
  {
    id: 8,
    productName: "Metal Build Freedom Gundam",
    price: 85,
    stock: 10,
    scale: "mb",
    brand: "Bandai",
    scaleDetail: "Metal Build",
    isDelete: 1,
    img: "../Assets/img_product/sp_8.jpg",
    desc: "The birth of the Metal Build series, which began with 00 Gundam Seven Sword in March 2011 was nothing less than a game changer for high-end robot action figures. A year after the initial release, Metal Build will continue with the Freedom Gundam from the Gundam SEED series",
  },
  {
    id: 9,
    productName: "HG Gundam Avalanche Exia",
    price: 35,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_9.jpg",
    desc: '[Set contents] Main body, replacement wrist, GN sword, GN Long Blade, GN Short Blade, GN beam saber. Gunpla is a dimensionalized plastic model of mobile suits that appears in the series of "Mobile Suit Gundam"',
  },
  {
    id: 10,
    productName: "HG Sengoku Astray Gundam",
    price: 25,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_10.jpg",
    desc: "A Musha styled Gundam from the Gundam Build Fighters anime, based on the HG Red Frame Astray. Featuring 2 katanas mounted on hidden additional arms in the shoulder binders, this custom Gundam also features a devil shield on its back that can be hand held. With numerous samurai like parts this crazy Gundam is also compatible with the Matsuri Weapon set to make this themed Gundam even more powerful! Includes Kiku-ichimonji and Kotetsu katanas, Devil shield.",
  },
  {
    id: 11,
    productName: "MG Barbatos Gundam",
    price: 45,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_11.jpg",
    desc: "Here it is, the main MS from the Iron-Blooded Orphans series! This fully-articulated and snap-together kit will come with the suit and its first two weapons, the hammer pike and the sword, and you'll also be able to add other accessories with add-on packs as the show and suit progress! You'll also be able to choose from two modes to display the kit in, and you'll be able to combine and modify the suit with other kits from the same line in the future!s",
  },
  {
    id: 12,
    productName: "MG Gundam Kyrios",
    price: 45,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_12.jpg",
    desc: "",
  },
  {
    id: 13,
    productName: "HG Gundam Blazing",
    price: 22,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_13.jpg",
    desc: "A customized God Gundam that uses leg moves for its finisher is here! [Set Contents] Beam Blade x2, Beam Tonfa x2,Grip for Beam Saber x2, Kick effect parts x1, Foil stickers x1, Hand parts x1 set",
  },
  {
    id: 14,
    productName: "RG Exia Gundam",
    price: 27,
    stock: 10,
    scale: "rg",
    brand: "Bandai",
    scaleDetail: "Real Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_14.jpg",
    desc: "Real Grade version of the Gundam Exia combines the intricate part complexity of the higher end MG and PG lines with the size and affordability of the HG and SD lines into a new product that draws inspiration from real world. This version of the Exia was supervised by its creator Kanetake Ebikawa and features custom markings. All of Exia's equipment is included, with melee weapons having chromed blades and GN condensers feature transparent plastic. New Advanced MS Joint allows feats of impressive movement to replicate combat scenes in the Gundam 00 anime series.",
  },
  {
    id: 15,
    productName: "HG Gundam Lfrith",
    price: 22,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_15.jpg",
    desc: "Started ahead of the latest Gundam series [Mobile Suit Gundam: Witch of Mercury]!! Two MSs that are active in the prequel [PROLOGUE] of the main story appear a little early! Shell units are ion mold parts and clear parts. selection formula. The in-mold parts express the brilliance of the chest shell unit and reproduce the luminous state, and the clear parts reproduce the non-luminous state. The shield can be separated into 7 bit staves and connected to the backpack and receiver gun. It is possible to attach a huge beam blade effect part to the receiver gun. Colorful finish just by assembling due to discerning parts division.",
  },
  {
    id: 16,
    productName: "RG Destiny Gundam",
    price: 32,
    stock: 10,
    scale: "rg",
    brand: "Bandai",
    scaleDetail: "Real Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_16.jpg",
    desc: "Second unit used in the last half of Gundam Seed Destiny features the characteristic Advanced MS Joint System to allow for distinctive mid air poses and realistic mechanical detail. Full load out of weapons including being rifle, palm cannons, high energy beam cannon, composite shield, beam shield, anti ship sword, beam boomerang and beam sabers are included.",
  },
  {
    id: 17,
    productName: "MG Gundam Assault",
    price: 48,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_17.jpg",
    desc: "Product DETAILS duel Gundam equipped with the Assault shroud joins the MG series. The new X-100 frames allow the kit an incredible range of motion, even when it wears the Assault shroud. The mechanical design for mg is newly drawn. The cockpit hatch in the chest can be opened and the inside of the cockpit is faithfully recreated. The Assault shroud can [of course] be attached or detached. 15 runners, 1 foil sticker sheet, 1 Gundam decal sheet, instruction manual",
  },
  {
    id: 18,
    productName: "Robot Spirit GF13-001 Master Gundam",
    price: 35,
    stock: 10,
    scale: "rs",
    brand: "Bandai",
    scaleDetail: "Robot Spirits",
    isDelete: 1,
    img: "../Assets/img_product/sp_18.jpg",
    desc: "The Master Gundam, which battled Burning Gundam in Mobile Fighter G Gundam, joins Gundam Universe!",
  },
  {
    id: 19,
    productName: "Metal Build ASW-G-08 Gundam Barbatos Lupus Rex",
    price: 40,
    stock: 10,
    scale: "mb",
    brand: "Bandai",
    scaleDetail: "Metal Build",
    isDelete: 1,
    img: "../Assets/img_product/sp_19.jpg",
    desc: 'A beast joins the Gundam Universe: Gundam Barbatos Lupus Rex! The tail blade is detachable from the back, and can be combined with a Tamashii STAGE stand (sold separately) to re-create dramatic attacks! A super-posable Ultra Large Mace is included as well. Stands approximately 6.3" tall',
  },
  {
    id: 20,
    productName: "Robot Spirit GNT-0000 00 QAN[T]",
    price: 45,
    stock: 10,
    scale: "rs",
    brand: "Bandai",
    scaleDetail: "Robot Spirits",
    isDelete: 1,
    img: "../Assets/img_product/sp_20.jpg",
    desc: 'From the movie "Mobile Suit Gundam00 -Awakening of the Trailblazer" comes Setsuna F. Seieis GNT-0000 00 QAN[T] Standing approximately 6" tall, it boasts the large size, dynamic sculpting, and play value youve come to expect from Gundam Universe! [Set Contents] Main body, Optional pair of hands, GN Sword V, GN Sword bit set, Tamashii STAGE joint part set. Look for origin of shipment: Only items shipped from within North America are being sold by authorized U.S. Retailers. The product box will have a Bandai Namco warning label, which is proof that you are purchasing an officially licensed Bandai Spirits product, distributed by its sole and authorized distributor (Bandai Namco) for the U.S. Markets. This product has been thoroughly tested for safety and meets all North American consumer product safety regulations. The affixed label also entitles the purchaser to product support assistance within the United States.',
  },
  {
    id: 21,
    productName: "MG Gundam RX-78-2 Version 3.0",
    price: 37,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_21.jpg",
    desc: "Kabushiki-gaisha Bandai is a Japanese producer of many plastic model kits as well as a former video game company. Some ex-Bandai group companies produce anime and tokusatsu programs. All bandai kits are precision crafted and provide a stimulating building experience. Wether you want a quick super fun SD build to display, or all the class and scale brought by Master Grade Series, Bandai has a model for you!",
  },
  {
    id: 22,
    productName: "RG Zeta Gundam",
    price: 28,
    stock: 10,
    scale: "rg",
    brand: "Bandai",
    scaleDetail: "Real Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_22.jpg",
    desc: 'Product DETAILS msz-006 Zeta Gundam appears as the 10th RG model kit. The newly adopted "advanced ms joints" Enable to expand the range of motion. Many gimmicks of the RG "real system" Can be found such as the opening and closing of the cockpit hatch and more. 13 runner, realistic decal, and instruction manual',
  },
  {
    id: 23,
    productName: "RG MSN-06S Sinanju Gundam",
    price: 42,
    stock: 10,
    scale: "rg",
    brand: "Bandai",
    scaleDetail: "Real Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_23.jpg",
    desc: "The crimson Mobile Suit Sinanju, piloted by  the leader of the Sleeves, Full Frontal, has finally launched in the RG line-up! The model includes movable rear-mounted thrusters, which are based on the thrust control mechanisms of real rocket engines and internal skeletal detailed from drawings by Hajime Katoki. The texture of the brilliant gold engravings have been faithfully recreated as individual parts while the its main body is made in a glossy red plastic",
  },
  {
    id: 24,
    productName: "HGUC 02 Banshee Norn",
    price: 27,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_24.jpg",
    desc: "Banshee Norn in its Destroy mode configuration with all new translucent orange frame parts. Beam magnum with revolving launcher can mount a beam jitter and also comes with spare magazine clip. Armed Armor XC and Armed Armor DE are fully deployed",
  },
  {
    id: 25,
    productName: "SD Gundam Ex-Standard Wing Gundam Zero",
    price: 10,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_25.jpg",
    desc: "The globally popular Wing Gundam Zero TV Ver. will be available as a completely new design Comes with a wide variety of weapons. Enjoy posing the figure with the Twin Buster Rifle aimed. Customization unique to plastic model kits can be enjoyed by combining armaments.",
  },
  {
    id: 26,
    productName: "SD Gundam Red Lander",
    price: 15,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_26.jpg",
    desc: "SD GUNDAM Figure from Banpresto!",
  },
  {
    id: 27,
    productName: "SD Hi-Nu Gundam",
    price: 27,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_27.jpg",
    desc: "Cute small version of the hi nu gundam reproduced in elegant super deformed appearance features switchable Eye part's beam rifle hyper bazooka, 2 removable funnels with shooting effect part, beam saber and also display stand",
  },
  {
    id: 28,
    productName: "SD  Knight Unicorn Gundam",
    price: 36,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_28.jpg",
    desc: "Cute chibi styled version of the Unicorn Gundam as it appears in the BB senshi series with medieval attire. Can convert between forms just like the original Unicorn Gundam and is compatible with the previously released BB Legend Knight Gundam to make a centaur like form",
  },
  {
    id: 29,
    productName: "SD Sangoku Soketsuden",
    price: 15,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_29.jpg",
    desc: "Sun Shangxiang Strike Rouge: SD Sangoku Soketsuden x Bandai SD Model Kit",
  },
  {
    id: 30,
    productName: "SDW Heroes Arthur Gundam Mk-III",
    price: 36,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_30.jpg",
    desc: "This is a plastic model kit and assembly is required. Made in Japan [Accessories] Sword x 1 Facial expression hand (right) x 1 Clear parts x 1 set Foil seal x 1",
  },
  {
    id: 31,
    productName: "SD Gundam RX-78 GPO3D",
    price: 22,
    stock: 10,
    scale: "sd",
    brand: "Bandai",
    scaleDetail: "Super Deformed",
    isDelete: 1,
    img: "../Assets/img_product/sp_31.jpg",
    desc: 'Gunpla is a dimensionalized plastic model of mobile suits that appears in the series of "Mobile Suit Gundam", robots and battleships called mobile armour. Since they were born in 1980 as "1/144 Gundam", 445 million units of them have been sold',
  },
  {
    id: 32,
    productName: "HGUC 1/144 Moon Gundam",
    price: 34,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_32.jpg",
    desc: 'The “forbidden side of the universal century” that leads to mobile suit Gundam: Chars Counterattack is coming to the HG Series line-up!  based on a story concept that led to the creation of the hit series "Gundam unicorn", "mobile suit moon Gundam" Is being written by writer harutoshi Fukui, with mechanical design by ippei gyobu who did a number of Gundam Iron-Blooded Orphans And reconguista in G Mobile suits',
  },
  {
    id: 33,
    productName: "HG Gundam Asmoday",
    price: 25,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_33.jpg",
    desc: "Gundam Asmodeus, one of the 72 Gundam Frame units, will be available for the first time! The extending/retracting gimmick of Grand Tonfas on the arms can be recreated by exchanging parts. The anchor gimmick of Gigant Javelin can be recreated with a wire. The Rifle can be mounted onto the rear skirt. Certain parts of the back thrusters can be moved. New armor parts and certain new frame parts have been used to recreate its design. Includes: Rifle ×1, Gigant Javelin ×1, Grand Tonfas ×2, Wire ×1, Stickers ×1.",
  },
  {
    id: 34,
    productName: "HG Gundam  Astaroth",
    price: 23,
    stock: 10,
    scale: "hg",
    brand: "Bandai",
    scaleDetail: "High Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_34.jpg",
    desc: "HG Mobile Suit Gundam: Iron-Blooded Orphans 1/144 Gundam Astaroth Plastic Model",
  },
  {
    id: 35,
    productName: "MG Providence Gundam",
    price: 57,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_35.jpg",
    desc: "The Providence Gundam, the God who bears the noise of Thunder on his back, has now launched in the mg line-up! The Providence Gundam shares its genealogy with the freedom Gundam and utilizes some of the same frame parts incorporating a highly Dynamic joint structure and balanced proportion.",
  },
  {
    id: 36,
    productName: "MG  Justice Gundam Seed",
    price: 55,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_36.jpg",
    desc: 'From the TV series "Gundam Seed", the Justice Gundam has finally been made into a Master Grade kit!  Justice Gundams multipurpose sublifter with movable beam cannons and machine cannons, the Fatum-00,  can be configured into different flight positions on back and also as a flying mount for it to stand on.  Pair with MG Freedom 2.0 and MG Providence to complete ZAFTs Gundam Seed lineup! .',
  },
  {
    id: 37,
    productName: "MG Gundam Dynames",
    price: 51,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_37.jpg",
    desc: "The long awaited Gundam dynamic from Gundam 00 is finally available as a master grade. The model has an all new Inner frame and can easily recreate its iconic sniper poses. Runner x 17, Sticker x 1 and manual x 1.",
  },
  {
    id: 38,
    productName: "MG Rx-93 Nu Gundam",
    price: 71,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_38.jpg",
    desc: "This modern version of the Nu Gundam has been designed by esteemed mechanical designer Hajime Katoki as part of the G-Dome at the Gundam Front Tokyo exhibit. Featuring new modeling technology refined since the original MG Nu Gundam release, this Ver. Ka incorporates new gimmicks such as foldable tabs on weapons to allow for better gripping and a head with light up eyes using an LED (sold separately).",
  },
  {
    id: 39,
    productName: "MG RX-93-2 Hi-Nu Gundam Ver.Ka",
    price: 73,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_39.jpg",
    desc: "The massive intimidating power of the Hi-Nu Gundam from the novel Char's Counterattack Beltorchika Children appears once more in Bandai's popular Master Grade series line! Based on its original aggressive illustration, this Ver. Ka brings its original proportions into modern kit form.",
  },
  {
    id: 40,
    productName: "MG RX-0 Unicorn Gundam OVA Version",
    price: 45,
    stock: 10,
    scale: "mg",
    brand: "Bandai",
    scaleDetail: "Master Grade",
    isDelete: 1,
    img: "../Assets/img_product/sp_40.jpg",
    desc: "This xFrom the OVA series, Gundam unicorn, comes this highly detailed and fully transformable model kit of the titular Gundam. Features translucent pink plastic that glows under UV black light to simulate the nt-d mode and sliding panels for transformation to unicorn mode. Comes with beam Magnum, bazooka, beam sabers. Ova version of Gundam unicorn features Molded vulcans in the head, an extra v-fin, differeng Caution markings, Blue beam sabers and different leg parts to allow farther bending of the knee",
  },
  {
    id: 41,
    productName: "Hi-Resolution Gundam Wing",
    price: 190,
    stock: 10,
    scale: "hr",
    brand: "Bandai",
    scaleDetail: "Hi-Resolution",
    isDelete: 1,
    img: "../Assets/img_product/sp_41.jpg",
    desc: "A Bandai Hobby P-Bandai Online Shop exclusive release of the Wing Gundam from Gundam Wing in its EW appearance. New opening gimmicks have been incorporated into the design of the wings while still allowing it to be able to transform into Bird Mode. The Hi-Resolution model series comes with a combination plastic and diecast pre-built frame that offers extraordinary detailing and posing capabilities.",
  },
  {
    id: 42,
    productName: "Hi-Resolution Gundam Barbatos",
    price: 259,
    stock: 10,
    scale: "hr",
    brand: "Bandai",
    scaleDetail: "Hi-Resolution",
    isDelete: 1,
    img: "../Assets/img_product/sp_42.jpg",
    desc: "A new hybrid product that combines the premium high end stylized die-cast figure format with the signature construction of GunPla! Features preassembled mechanical skeleton with die-cast in the joints and functional areas such as pistons to provide both weight and stability when static or in dynamic poses! Outer armor and weapons are traditional GunPla parts that can attach to the mechanical skeleton and features a mixture of different finishes including metallic pearl, gloss, and matte to recreate the appearance of different mechanical textures. Includes Smooth Bore Gun and Sword weapons along with 6 interchangeable hand parts. Runner x 13.",
  },
  {
    id: 43,
    productName: "Hi-Resolution Gundam Zero EW Gundam Wing",
    price: 229,
    stock: 10,
    scale: "hr",
    brand: "Bandai",
    scaleDetail: "Hi-Resolution",
    isDelete: 1,
    img: "../Assets/img_product/sp_43.jpg",
    desc: 'The impressive wing Gundam zero from the OVA "Gundam wing: endless Waltz" is getting the hi-resolution BAN216746 treatment!  based on its new appearance in the Gundam wing EW manga, it now features a transforming Neo-Bird mode, opening armor gaps for zero system use, and 6 wings',
  },
  {
    id: 44,
    productName: "Megasize Model 1/48 Gundamver",
    price: 171,
    stock: 10,
    scale: "ms",
    brand: "Bandai",
    scaleDetail: "Mega Size",
    isDelete: 1,
    img: "../Assets/img_product/sp_44.jpg",
    desc: 'This is the official goods of "Gundam Front Tokyo". Is linked with the specification of the life-size Gundam 18m statue, it is a limited specification that reproduced the magnet coating specifications of the Gundam statue.',
  },
  {
    id: 45,
    productName: "Megasize Model 1/48 Unicorn Gundam",
    price: 172,
    stock: 10,
    scale: "ms",
    brand: "Bandai",
    scaleDetail: "Mega Size",
    isDelete: 1,
    img: "../Assets/img_product/sp_45.jpg",
    desc: 'This is the official goods of "Gundam Front Tokyo". Is linked with the specification of the life-size Gundam 18m statue, it is a limited specification that reproduced the magnet coating specifications of the Gundam statue.',
  },
  {
    id: 46,
    productName: "Robot Spirits Gundam GP00 Blossom ver. A.N.I.M.E",
    price: 86,
    stock: 10,
    scale: "rs",
    brand: "Bandai",
    scaleDetail: "Robot Spirits",
    isDelete: 1,
    img: "../Assets/img_product/sp_46.jpg",
    desc: "The Gundam GP00 Blossom was an experimental Mobile Suit developed by Anaheim Electronics as part of the Gundam Development Project. It was piloted into battle almost immediately after assembly, loaded with prototype weaponry designed to assist in the defense of Livermore Factory.",
  },
  {
    id: 47,
    productName: "Robot Spirits RX-78GP04G Gundam GP04 Gerbera ver. A.N.I.M.E.",
    price: 69,
    stock: 10,
    scale: "rs",
    brand: "Bandai",
    scaleDetail: "Robot Spirits",
    isDelete: 1,
    img: "../Assets/img_product/sp_47.jpg",
    desc: "The RX-78GP04G GUNDAM GP04 GERBERA joins the ver. A.N.I.M.E. series! In the anime, it was designed as part of the Anaheim Electronics Gundam Development Project, with a great deal of feedback from former Zeonic employees. Designed for high speed attack capabilities, it was never formally approved and the prototype eventually recycled into the Gerbera Tetra. [Set Contents] Main body, Four pairs of optional hands, Hand storage deck, Sturm Booster (L, R, center), Long range rifle, Shield, Extra Gatling guns (x2), Shield joint, Various effect parts.",
  },
  {
    id: 48,
    productName: "Robot Spirits MS-08TX (EXAM) Efreet Custom ver. A.N.I.M.E.",
    price: 94,
    stock: 10,
    scale: "rs",
    brand: "Bandai",
    scaleDetail: "Robot Spirits",
    isDelete: 1,
    img: "../Assets/img_product/sp_48.jpg",
    desc: "It possesses both excellent firepower and close-combat capabilities. With Nimbus Schterzen at the controls, it is designed to exceed the abilities of the BLUE DESTINY UNIT 1.",
  },
  {
    id: 49,
    productName: "Robot Spirits Side MS Gundam Vidal",
    price: 272,
    stock: 10,
    scale: "rs",
    brand: "Bandai",
    scaleDetail: "Robot Spirits",
    isDelete: 1,
    img: "../Assets/img_product/sp_49.jpg",
    desc: "roduct Description Gundam Vidal, a Gundam frame bearing the name of a masked man, appears in the METAL ROBOT soul. The proportions that imaged in the play are a heavy finish that reproduces the hunter edges of the frame and legs with metal. The exterior is matte painted and marked to give it a realistic presence. Well-thought-out movable performance and three types of eye light effects faithfully reproduce the dynamic action in the play",
  },
  {
    id: 50,
    productName: "Robot Spirits FA-78-1 Full Armor Gundam Version A.N.I.M.E.",
    price: 66,
    stock: 10,
    scale: "rs",
    brand: "Bandai",
    scaleDetail: "Robot Spirits",
    isDelete: 1,
    img: "../Assets/img_product/sp_50.jpg",
    desc: "The FA-78-1 FULL ARMOR GUNDAM ver. A.N.I.M.E. comes with a fully detachable set of armor and weapon effect parts that make it a highly valuable addition to the Robot Spirits (Robot Spirits ver. A.N.I.M.E.) figure line for Mobile Suit Gundam. This figure adds on additional armor and weapons to the ROBOT SPIRITS RX-78-2 GUNDAM ver. A.N.I.M.E. that was used as its base. Use the various option parts to create dynamic scenes!",
  },
  // {
  //   id: 50,
  //   productName: "RoboE.",
  //   price: 66,
  //   stock: 10,

  //   scale: "rs",
  //   brand: "Bandai",
  //   scaleDetail: "Robot Spirits",
  //   isDelete: 1,
  //   img: "../Assets/img_product/sp_50.jpg",
  //   desc: "The FA-7enes!",
  // },
];
// if (!JSON.parse(localStorage.getItem("products"))) {
//   localStorage.setItem("products", JSON.stringify(products));
// }
// localStorage.setItem("products", JSON.stringify(products));