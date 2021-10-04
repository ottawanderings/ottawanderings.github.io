// Page JS for the Advent Calendar
// Created 2020-11-24

var app = app || {};

app.showAllDates = 0;

app.spreadsheetId = "1KjwG7FMwj58193-pA-BxasxuXvbEYWKuG2gdYFFsN54";
app.spreadsheetUrl = "https://spreadsheets.google.com/feeds/list/" + app.spreadsheetId + "/1/public/values?alt=json"; 
app.useMarkdown = true;

// Updated for v4 API
app.spreadsheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/" + app.spreadsheetId + "/values/Sheet1";

app.data = [];

app.retrieveSpreadsheetJsonV2 = function () {

  // Manually generated via the Google API explorer (to avoid trying to get authentication working within a GitHub Pages jQuery site!)
  // Retrieve updates manually via:
  // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get?apix_params=%7B%22spreadsheetId%22%3A%221KjwG7FMwj58193-pA-BxasxuXvbEYWKuG2gdYFFsN54%22%2C%22range%22%3A%22Sheet1%22%7D
  // (and authenticate in-browser)
  // then copy and paste JSON data below.

  var responseData = {
    "range": "Sheet1!A1:Z1025",
    "majorDimension": "ROWS",
    "values": [
      [
        "date",
        "title",
        "subtitle",
        "description",
        "image_src",
        "visit_url"
      ],
      [
        "2020-12-24",
        "Eiszeit! Aufwiedersehen!",
        "When a sweet ending is just the beginning",
        "Omigoodness, we made it!\n\nTwenty-four days of Bywardian bites, Carletonian capers, and a Hull of a lot of fun... it really did fly by, and it was all possible thanks to our crazy cool contributors:\n- DA in Old Ottawa South\n- IG in Old Ottawa East and Lowertown\n- JB & SM in Centretown-Hintonburg-Westboro\n- JF, HS & SB (*) in the Glebe\n- LS in Old Ottawa East and Centretown\n\n(* A super special shout-out to SB for the website wizardry -- this thing was whipped up faster than you can say *Bodenseeschifferpatent* (link) )\n\nAt this special time of year it's clear that we have many reasons to be thankful -- and what better way to say *Danke schön* than to take our tour guides out for a frozen treat!  You can join IG for the \"best ice cream in Ottawa\" (her words!) at [Moo Shu](https://www.mooshuicecream.com/) on Bank, then take your pick of:\n- [The Beachconers](https://www.facebook.com/thebeachconers/) at Britannia Beach -- small-batch ice cream with fresh herbs, fruit, and locally sourced jams;\n- [Stella Luna](https://www.slgelato.com/) on Bank -- award-winning gelato (voted the best in Canada) and sorbets with 50% fruit;\n- [Mantovani 1946](https://www.mantovaniicecreamfranchise.com/home) in the Byward Market -- perfect for a gelato-to-go for a Nepean Point sunset; and\n- [The Merry Dairy](https://themerrydairy.com/) in Hintonburg -- try their frozen custard, homemade waffles, and ice cream floats!\n\nAnd for those hot days in the countryside, don't forget about the [Custom Creamery](https://custom-creamery.com/) in Carp, [La Cigale](https://www.lacigaleicecream.com/index.html) in Chelsea, and a Buster Bar or Peanut Buster Parfait at [Dairy Queen](https://www.dairyqueen.com/ca-en/Locator/?s=ottawa) just about everywhere else -- because even AV has his non-hipster guilty pleasures.\n\nFrohe Weihnachten und einen guten Rutsch ins Jahr 2021!",
        "https://blog.flyporter.com/wp-content/uploads/2018/08/Moo-Shu-1200x799.jpg",
        "https://de.wikipedia.org/wiki/Bodenseeschifferpatent"
      ],
      [
        "2020-12-23",
        "Dies und Das",
        "Tips and tricks for a stellar student life",
        "For today's penultimate post, we present a potpurri of picks wich we hope will delight your doctoral daze.  For the student on the go, SB can't say enough good things about the deli sandwiches at [La Bottega](https://www.labottega.ca/pages/eat-in-take-out), an Italian grocery store that offers custom-made creations with a seriously solid selection of breads, cheeses, and toppings.  Foccacia with provolone, eggplant, and peppers, coming right up!  Speaking of students on the go, we thought we'd share a few more ideas for getting around town.  We're confident that you'll sort out OC Transpo (link) on your own, but for those days when you want a little more independence: - Drop into [re-Cycles](http://www.re-cycles.ca/) on Bronson, a community bike shop with an ever-changing offer of refurbished bicyles and plenty of spare parts to give old wheels new life.  - Swing by [The Cyclery](https://www.thecyclery.ca/) in Old Ottawa South anytime you need something shiny and new -- you'll pay a premium but they'll take care of you and your ride long after you roll out the door. - H&S are big fans of the freedom offered by car-sharing with [Communauto](https://ontario.communauto.com/), key to living a car-free life to the fullest.  Finally, DA reminds us that no student life in Ottawa is complete without good times at the [House of Targ](http://www.houseoftarg.com/) in Old Ottawa South, serving up a wonderfully bizarre combination of perogies and pinball that fills a primal need that you never knew you had. ",
        "https://images.squarespace-cdn.com/content/v1/5335e7a1e4b01dab8f088be1/1590517769939-BV76OVWSVAGPWFS9GGFB/ke17ZwdGBToddI8pDm48kD2i7zvGe9YiTm4KoUfgk9sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhSCTzEuvcwUTxe8o5aO5UUcWSd37-V9PsCJQQvAU798P7cJNZlDXbgJNE9ef52e8w/home-page-perogies.jpg?format=1500w",
        "https://www.octranspo.com/en/"
      ],
      [
        "2020-12-22",
        "Essen",
        "Round #3: Centretown",
        "Hope you're hungry, 'cause this last edition of Tuesday Foods-day is densely packed -- let's see what's going down in Centretown.\n\nDA starts things off in the heart of Ottawa at the [Tavern on the Hill](https://www.tavernonthehillottawa.com/) hidden away in Major's Hill Park.  The Tavern was voted Ottawa's top patio for one simple reason: stunning views of the river and Parliament Hill.  Toss in their second kiosk at the Rideau Falls with live jazz at both locations and we're sure you'll find a few summer delights.\n\nAlso they have ice cream.  \n\nOnce you've got your fill of riverside sunshine, head back into civilization where JB has great Japanese at [Genji](https://www.genji.ca/) off Elgin and raves about the ramen being dished out at [Wei's Noodle House](https://www.facebook.com/WeisNoodleHouse/) on Bronson.  SM continues the Eastern theme on Somerset West at [Hung Sum](https://www.facebook.com/HungSumRestaurant) -- \"my go-to for dim sum (but go with someone who knows what they're doing!)\".  \n\nHang a left off Somerset onto Preston to jump all the way from [Chinatown](https://ottawatourism.ca/en/about-ottawa/neighbourhoods/chinatown) to [Little Italy](https://ottawatourism.ca/en/about-ottawa/neighbourhoods/little-italy) -- the legitimacy of these neighbourhood names being a topic for another time -- and head on down to [Haldi](http://www.haldi.ca/) where DA promises you'll get your tumeric fix (photo).  From their website: \"Our restaurant utilizes and promotes this key ingredient in everyday cooking simply because of its purity, diversity, and fertility abilities\" -- and if you don't believe us, check out the street view (link) -- even the building is yellow!  \n\nAs our last stop on this culinary tour, slide one block off Preston to gaze in awe at [Atelier](https://www.atelierrestaurant.ca/).  In SM's own words, this one is best saved \"for a suuuper special occiasion\" -- but with the towers of Carleton over Dow's Lake coming into view, we daresay the opportunity may just present itself...",
        "https://fastly.4sqi.net/img/general/600x600/22321983_dZ7UNI18mtJVgpkwbiElhudDiGppBpbx_Xi4tU9OrVM.jpg",
        "https://www.google.com/maps/@45.3988886,-75.708449,3a,41.4y,41.68h,92.06t/data=!3m7!1e1!3m5!1sg5_dRaJNli29HNmXtpVQ7A!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3Dg5_dRaJNli29HNmXtpVQ7A%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D26.063192%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?hl=en"
      ],
      [
        "2020-12-21",
        "Sportabend",
        "'Cause there's no night quite like league night",
        "To kick off our last working week, we thought we'd take a wax-covered tablet out of the Greek playbook and share a few strategies to keep your education a little bit physical for all that frosty fieldwork ahead.\n\nStarting things close to home are the well-priced options at Carleton (link).  Included in your student fees are a whole host of [sporting facilities](https://athletics.carleton.ca/campus-rec/) -- LS was a big fan of the lane swims while AV bounced off the walls in the nearby squash courts.  Throw in a couple of winter walks around the fieldhouse and the chance to firm up your footwork during public skating and you'll find plenty of indoor options to stay sane during the long winter months.\n\nIf you don't feel like going it alone, check out Carleton's slate of [group classes](https://athletics.carleton.ca/fitness/group-classes/) -- in addition to the usual yoga, pilates, spin, and core hiits, the university offers a [skating course](https://athletics.carleton.ca/cu-fitness/skatingbeginnerintermediate/) which will make your canal cavorting all that more enjoyable.  Be sure to sign up for the grad students' [softball](https://gsacarleton.ca/softball/) league -- no prior experience is required for \"a minimum of seriousness and a maximum of fun\" (their words!).  Grad student softball was a perennial favourite for AV and his motley crew, a team mostly assembled at the Wednesday [trivia night](https://gsacarleton.ca/mikes-place/) held at the Carleton grad students' pub.\n\nWhen it comes to the most Ultimate of hobbies, JB will happily be your guide to the myriad of offerings at [Carleton Athletics](https://athletics.carleton.ca/cu-leagues/intramural-ultimate/), the dedicated folks at the [Ottawa-Carleton Ultimate Association](https://www.ocua.ca/), and the jacks-of-all-trades at the [Ottawa Sport and Social Club](https://ossc.ca/).  Trust us when we say that there is a league, level, and location to suit your style, with indoor offerings in the winter to complement the outdoor leagues in spring and fall.\n\nSpeaking of the OSSC, they run a seriously impressive number of [leagues](https://ossc.ca/sport-listing/leagues), including:\n\n- floor hockey to improve your stickwork,\n- dodgeball for your tundra agility needs,\n- all-sorts-of-sports for a new game every week, and\n- curling for a full taste of Canadiana.\n\nNot yet on offer by OSSC but a sure-fire warmup for your glacier gear is your local [axe throwing](https://batlgrounds.com/axe-throwing-ottawa/#league-info) league, an axe-cellent recommendation from JB which will hatchet up the excitement -- and if these hacked-out puns have you splitting mad (wood you cut it out already!), please know that I'll compensate with some random axe of kindness, chop-chop!\n\nThank you, thank you, I'll be here all week.",
        "https://athletics.carleton.ca/wp-content/uploads/open-rec-open-swim.jpg",
        "https://athletics.carleton.ca/"
      ],
      [
        "2020-12-20",
        "Tagesausflug: Ostontario",
        "Out for a lark in old Lanark",
        "On this last sweet Sunday, we thought it was high time for a tour of the Ontario countryside.  As you spend more time in the various counties of Eastern Ontario, it won't take long for you to realize that there are dozens of outposts in Ottawa's orbit, each one with its own special charm and all of them variations on a common theme.\n\nTake **Perth**, for example.  Perth is a lovely little town of around six thousand people on the Tay River, named after the much larger city/river pair in Scotland (a common theme in Ontario).  When you [visit Perth](https://www.perth.ca/en/explore-perth/Explore-Perth.aspx) -- stopping on the way for some [seriously tasty cheddar cheese](https://baldersoncheese.ca/) -- you'll be naturally drawn to the stone storefronts on Main Street and the shady reaches of [Stewart Park](https://www.beautifulperth.com/stewartpark.html) on the \"\"island\"\" in the middle of town.  Depending on the season, you can check out:\n- the [Festival of the Maples](https://festivalofthemaples.com/) in April, \n- the local [Farmers' Market](https://www.perthfarmersmarket.ca/) on summer Saturdays,\n- the famous [Kilt Run](https://www.perthkiltrun.ca/) in June,\n- [Stewart Park Festival](https://www.stewartparkfestival.com/) in July (*), and\n- the [Garlic Festival](http://www.perthgarlicfestival.com/) in August.\n\n(* In case you were wondering what happens at the Stewart Park Festival, you can check out this nifty virtual concert by [David Francey](http://video.stewartparkfestival.com/) from just a few weeks ago.)\n\nThe story is much the same a few miles down County Road 43 where you find the nine thousand folks who call **Smiths Falls** home.  Among their [many attractions](https://www.smithsfalls.ca/experience/), they've got their own stretch of water (the Rideau River this time) with inner-city islands, plenty of parks, and a smattering of stony shops -- if you don't believe us, you can take the [tour](https://www.smithsfalls.ca/media/2020/05/SmithsFallsWalkingTour-WebPrint.pdf)!  They also have [locks](https://www.pc.gc.ca/en/lhn-nhs/on/rideau/activ/accueil_info), [trains](http://rmeo.org/), and a [theatre](https://smithsfallstheatre.com/) where the trains used to be.  Just be careful not to eat too much [chocolate](https://www.cbc.ca/news/canada/ottawa/chocolate-infused-cannabis-production-tweed-smiths-falls-1.5207114)!\n\nNot to be outdone, the village of **Merrickville** is the hands-down favourite for many of our moms (LS, AV, guilty as charged).  If you're curious to [find out why](https://www.merrickville-wolford.ca/visitors), take a stroll around the [locks](https://www.pc.gc.ca/en/docs/r/on/rideau/whl-lhm/chap2/chap2A1/chap2A1i) or check out the lovely [house and garden tour](https://www.merrickville-house-tour.ca/), after which the ladies lunch at the [Yellow Canoe](https://www.yellowcanoecafe.com/) and browse another suite of shops headlined by (we're not making this up) [mustard](https://www.mustard.ca/) -- and if you don't believe us, just check out their URL.  Last (but certainly not least!), AV has a local line on the always-changing ice cream scene -- give him enough advance notice and he'll make sure you get the scoop you're looking for.\n\nRounding out today's out-of-Ottawa offerings:\n- [Murphy's Point Provincial Park](https://www.ontarioparks.com/park/murphyspoint), a prime pick for H&S for rocks/trees/water with a little mining history thrown in;\n- the old mill town of [Almonte](https://almonte.com/), another H&S favourite for its Millfall waterworks and Mill Street charm (photo); and \n- soothing your Heimweh in [Constance Bay](https://www.openstreetmap.org/node/364553897), an aptly-named stretch of the Ottawa river which LS recommends for its pleasantly surprising amount of sand -- just make sure you [play nice with the locals](https://ottawacitizen.com/news/local-news/how-many-is-too-many-and-whos-deciding-constance-bay-grapples-with-influx-of-beach-goers) (would seem that the two Konstanzes have that in common!);\n\n...and this is mostly just (link) Lanark County!  Should you decide that you rather feel like heading downriver towards Montréal, you can fill up on cheese curds in [St. Albert](https://fromagestalbert.com/?lang=en), then burn them all off jumping in Grenville's [old canal](http://www.capitalgems.ca/grenville-canal.html) or skate-skiing around the stunning [Château Montebello](https://www.fairmont.com/montebello/)... but that's a tale for another time.\n\nHappy exploring and don't forget to write!",
        "https://i.redd.it/r8f0sdz05ji41.jpg",
        "https://lanarkcountytourism.com/"
      ],
      [
        "2020-12-19",
        "Die Gute Hirten",
        "From Good Hope to Green Valley Crescent",
        "Welcome back to the weekend!\n\nThis time we're going to start things off a little differently.  It's the third Saturday of the month and IG warmly welcomes you to join the [Shepherds Crew](https://www.stjbshrine.ca/soup-kitchen/) for a morning of peeling potatoes, chopping carrots, and building and bagging a serious number of sandwiches.  These mornings hold a special meaning for LS, AV, and many others besides -- we honestly haven't found a better way to start the weekend, plus, that soup!\n\nSpending a Saturday morning at Shepherds (link) is also a great way to hear about the goings-on at the local [Ukrainain Catholic church](https://www.stjbshrine.ca/), ranging from the tranquility of weekly Vespers (Saturdays at 18) to the various choral concerts and dinner/dances held throughout the year.  Leading the charge is the [Capital Ukrainian Festival](https://www.capitalukrainianfestival.com/), a packed weekend of dance, music, art, workshops, demonstrations, and to top it all off: enough perogies to merit one ton of caramelized onions and five hundred litres of sour cream.\n\nNot to be outdone, the Greek Orthodox church just down the street hosts the summer spectacular known as [GreekFest](http://www.ottawagreekfest.com/), which runs for a long summer week in August and features fabulous food, superb seminars on crafts/cuisine/culture, traditional tunes, and the zany Zorba show to end every evening.  Rumour has it you might even find a Greek language lesson or two --  study hard, we might finally find out what they put in those magical Loukoumades!\n",
        "https://www.stjbshrine.ca/wp-content/uploads/2020/11/SGH-4.jpg",
        "https://www.sghottawa.com/soup-kitchen/\r\n"
      ],
      [
        "2020-12-18",
        "Mikrobrauerei",
        "Pub Tour #3: Craft beer",
        "Let's be honest: this last pub tour really isn't for you.  However, on the off-chance you entertain a couple Kbachers keen on quality quaffing, we thought it best that you be prepared.\n\nAmong our honoured contributors, JB is the acknowleged expert on all things brewed, a title well-earned through theory, practise, and committed consumption.  His current highlights are:\n- [Flora Hall](https://florahallbrewing.ca/) in Centretown,\n- [Overflow](https://overflowbeer.com/) on south Bank, and\n- [Beyond the Pale](https://btpshop.ca/) in Little Italy,\n\nthat last one being source of many a Pink Fuzzy memory (photo/link) for AV.\n\nOn the other side of the river, AV recommends a sunny afternoon on the aptly named *Ruisseau de la Brasserie* for a [pleasant stroll](https://www.gatineau.ca/portail/default.aspx?p=activites_evenements_idees_sorties/activites_patrimoniales/circuits_pedestres/circuit_pedestre_ruisseau_brasserie) in the summer and a [peaceful *patinage*](https://www.gatineau.ca/portail/default.aspx?p=activites_evenements_idees_sorties/patinage_glace_exterieure/patinoire_ruisseau) in the winter.  Once you've worked up a thirst, pop on over to [Les Brasseurs du Temps](https://www.brasseursdutemps.com/) to try to beat the clock or continue all the way to [Laval-Aubrey-Kent](https://www.tourismeoutaouais.com/en/attractions/downtown-gatineau/) for a dozen different drink/dine destinations packed into a single block in often-overlooked Gatineau.\n\nFinally (if you've made it this far!), you can take on the wider world of the Ottawa craft beer scene with confidence thanks to SM: \"A super fun day is to go on a pub crawl to the gazillion breweries in and around Ottawa -- JB and I can sketch out routes for East and West as we've already done them!\"\n",
        "https://cdn.where.ca/wp-content/uploads/2013/10/Beyond-The-Pale-Brewery-Ottawa.jpg",
        "https://btpshop.ca/products/pink-fuzz-single-can-473ml-grapefruit-american-wheat-6"
      ],
      [
        "2020-12-17",
        "Ausgehabend",
        "Cinemas, theatres, galleries -- oh my!",
        "Welcome back to our final round of Student Friday where we all think it's high time you took your permafrost pals out for a bit of Ottawa fun.  That's right: it's date night!\n\nStarting close to Carleton, JB suggests that you head into Old Ottawa South and take in a flick at the [Mayfair](https://mayfairtheatre.ca/), one of the oldest surviving independent movie houses in Canada featuring plenty of second-run, classic, and [cult films](https://apt613.ca/rocky-horror-halloween-and-monthly-midnight-debauchery-at-the-mayfair/) throughout the year.  Should you find yourself becoming a fan of independent theatre, keep your fingers crossed for the [Bytowne](https://ottawacitizen.com/news/bytowne-cinema-announces-permanent-closure-i-wish-things-could-be-different) which we all hope will find a way to turn the lights back on before too long.\n\nIf you prefer your theatre a bit more three-dimensional, SM shares her passion for all things performing by recommending a show, play, or musical at any (or all!) of Ottawa's fine theatre venues.  High on her list are [Arts Court](https://artscourt.ca/), [The Gladstone](https://www.thegladstone.ca/), the [Great Canadian Theatre Company](https://www.gctc.ca/), the [Ottawa Little Theatre](http://www.ottawalittletheatre.com/), and the [Kanata Theatre](https://kanatatheatre.ca/) -- and if you're hankering for more, the link will guide you to all the community theatre you could ever ask for.\n\nRounding out our date night offering are:\n- art and music nights at the [Orange Gallery](https://www.orangeartgallery.ca/), a personal favourite for DA;\n- indoor-outdoor lawn games at [Playback](https://www.playbackottawa.ca/) where JB will happily challenge you to shuffleboard or bocce ball (Canada's *pétanque*); and\n- the June extravaganza that is [Doors Open Ottawa](https://ottawa.ca/en/arts-heritage-and-events/museums-and-historic-sites/doors-open-ottawa), a red-letter date on AV's calendar and many others besides.\n\nEnjoy your evening and get your Thursday nerds home safe -- you'll all need a good sleep to get ready for real Friday, just around the corner!",
        "http://www.ideasontheedge.com/wp-content/gallery/production-ottawa-2-2013-1/ACAROUSEL.JPG",
        "http://www.communitytheatreottawa.com/"
      ],
      [
        "2020-12-16",
        "Kalorienbomben",
        "The true Canadian bakeries",
        "Today has a few sweet surprises in store but we're going to make you work for them -- make sure you've got your trusty two-wheeler and Capital Pathway map (link) along for the ride!\n\nStarting off in the heart of Centretown, LS goes for the gluten-free goodies at [Thimble Cakes](https://thimblecakes.ca/) on Bank -- once upon a time, they even served rhubarb coconut ice cream, though that may well be the stuff of legend by now.\n\nSticking around Centretown, merge onto the [O'Connor Street Bikeway](http://ottawa.ca/en/residents/transportation-and-parking/cycling/oconnor-street-bikeway) and make your way to the downtown [SconeWitch](https://sconewitch.ca/) -- in SM's own words: \"Must go for scones -- breakfast, lunch, brunch, I don't care, just go!\"  What's more, they even offer frozen scones for the lazy Sundays when you'd rather bake at home.\n\nNext, jump onto the [Rideau Canal Eastern Pathway](https://en.wikipedia.org/wiki/Capital_Pathway#Rideau_Canal_Pathway) and cycle around the Golden Triangle, enjoying the lovely Pretoria and Flora McDonald bridges before exiting at the Bank Street Bridge.  Sneak past Kettleman's to visit [La Brioche](https://la-brioche.business.site/) where AV first found his fondness for Lebanese desserts.  We would try to give you tips, but we don't know what any of the dainties are called -- luckily the prices are so good you can try them all until you find the one you like!\n\nNow that you're sufficiently sugared, jump back on the Rideau Canal Pathway and enjoy the lovely stretch of the canal leading to Dow's Lake.  At Carling Ave, switch over to the Trillium Pathway and make your way northward along the Trillium Line (O-Train Line 2) to Bayview Station and the [Ottawa River Pathway](https://en.wikipedia.org/wiki/Capital_Pathway#Ottawa_River_Pathway), a crucial east-west corridor for burning off all that baklava.  \n\nMake your way up the river all the way to Westboro Beach, noting all the lovely islands for later adventures.  Cross the Sir John A. Parkway and wander into Westboro, where JB (apple) fritters away his doughnut dollars at [Maverick's](http://www.mavericksdonuts.com/) and LS suggests another serving of gluten-free goodness at [Strawberry Blonde](https://www.strawberryblondebakery.com/).  \n\nFinally -- if you haven't yet succumbed to the sugar rush! -- heave your trusty two-wheeler down to Hintonburg where JB is a big fan of the fresh take on Finnish *munkki* which can be found at [SuzyQ](https://suzyq.ca/).  Have fun with their fabulous flavours and give yourself a high-five -- you've covered a lot of ground today and seen enough sweets to carry you through seven times seven thousand words!",
        "https://images.squarespace-cdn.com/content/v1/57ed7b10d2b857477bc64449/1593963041127-1S76WZ6HLKGO3AZS1JEJ/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/honey+glazed+web.jpg",
        "https://ncc-ccn.gc.ca/places/capital-pathway\r\n"
      ],
      [
        "2020-12-15",
        "Essen",
        "Round #2: Go west!",
        "For today's Tuesday Foodsday tour, we're going to write a little West Side Story...\n\nShould you find yourself bopping around Britannia Bay, H&S have the [Little India Café](http://www.littleindiacafe.com/index.html) on standby: \"If you're coming in from the west side you can call ahead and get delicious takeout\".  JB's own pick for Indian food, [Taj](https://tajindiancuisine.com/), is just a couple blocks away -- sounds like a delicious showdown is in the offing!\n\nSticking around Britannia for a bit, JB points us to the [Shawarma Palace](http://shawarmapalace.ca/) on Carling, his personal pick for Ottawa's version of Döner Kebab.  Shawarma can be found *überall* in Ottawa thanks to the city's large Lebanese community.  It has a different flavour profile than the one you're used to, largely owing to the sauces and toppings -- AV is a big fan of the pickled turnips and hummus while the garlic sauce is an absolute game-changer.  \n\nIf a little falafel isn't quite the taste of home you were looking for, JB is also a big fan of the [Central Bierhaus](https://www.centralbierhaus.com/) -- want to take three guesses what they have on their menu? If you said Perogies, Bao, and Poutine, you've already integrated!  All of the wurst jokes aside, a good plate of Spätzle may well be worth the trek to Kanata, especially since the Bierhaus is right on the Transitway.  \n\nRounding out our (Wellington) west side story, head back into Hintonburg to \"sea food and eat it\" with SB at [Supply and Demand](https://www.supplyanddemandfoods.ca/) -- rumour has it they run the place locally, sustainably, and most of all: deliciously!  After you finish tucking in, tiptoe up to Tunney's Pasture (link) and catch the night train on the Confederation Line -- you're going to need a good sleep to handle all the delights tomorrow will bring...\n",
        "https://shawarmapalace.ca/wp-content/uploads/2020/05/Netflix-1080x640.jpg",
        "https://www.octranspo.com/en/our-services/stations1/tunneys-pasture1/"
      ],
      [
        "2020-12-14",
        "Bücherwürmchen",
        "“I guess there are never enough books.” – J. Steinbeck\r\n",
        "Wowee, what a weekend!  \n\nAssuming you survived the harrowing return journey across the mighty river Ottawa, we thought you might appreciate a more relaxed pace to start off the week.\n\nBookshops, anyone?\n\nStarting things off close to Carleton is the third (and final?) appearance of [Black Squirrel Books](https://www.blacksquirrelbooks.ca/) in Old Ottawa South -- in addition to IG's coffee and DA's live music, they do also sell books!  \n\nMeandering down the canal towards Centretown will take you past two top picks on LS's reading list: [Singing Pebble Books](https://www.singingpebblebooks.ca/) on Main and [Perfect Books](http://perfectbooks.ca/wp/) on Elgin (SM: \"My fav non-2nd hand bookshop\").\n\nSpeaking of SM (\"Books? BOOKS!\"), she'll swing us back to Bank for her go-to 2nd hand bookshop, [Book Bazaar](https://www.bookbazaar.ca/), the one-time home of many fine tomes including the well-Serviced volume now adorning a shelf in the humble abode of H&S.  Heading back towards Carleton takes us past [Octopus Books](https://octopusbooks.ca/) in the Glebe, SM's favourite progressive bookshop.\n\nAnd finally, as a surpisingly intelligent aardvark (link) once said:  \n*Having fun, isn't hard,*\n*when you've got a [library card](https://biblioottawalibrary.ca/en/getacard)!*\n\nGuten appetit!",
        "https://i.pinimg.com/originals/45/44/55/4544556125a23b6de563138501573bf6.png",
        "https://www.youtube.com/watch?v=p2WdtpNZjnU"
      ],
      [
        "2020-12-13",
        "Tagesausflug: Les Collines-de-l'Outaouais",
        "Another world, right next door",
        "Seeing as you made all that effort to cross the interprovincial border, we thought we'd round out the weekend with a couple lovely locales among the local francophonie.  \n\nThe darling of the lower Gatineau Valley is the village of **Wakefield** and its postcard-perfect covered bridge (link), a mid-90s replica of the 1915 original which is as useful as it is beautiful:  \n- It's the star of the show during the [Covered Bridge Run](https://www.coursewakefieldrun.com/wakefield-covered-bridge-run), an annual tradition for LS that got AV hooked on the 10k high.  \n- Should you want to spend a bit more quality time with the lovely lumber, SM recommends chilling out in the shade with Laura's [Bridge Yoga](https://www.yogachelsea.ca/teaching-schedule).\n- You can also take in the terrific timber from below as you [float on by](https://ottawariverlifestyle.com/blogs/news/what-to-do-in-the-town-of-wakefield-quebec) -- though SM reminds you to [float responsibly](https://www.cbc.ca/news/canada/ottawa/wakefield-inflatable-toys-garbage-1.5241403)!  \n\nOnce you've finally had your fill of the fixed link, head on over to the [Black Sheep Inn](https://www.theblacksheepinn.com/) and raise a pint to memory of the [Hull-Chelsea-Wakefield Railway](https://ottawacitizen.com/news/local-news/sad-sight-as-wakefield-steam-train-is-dismantled) and the day that AV finally became the engineer he always dreamed of.\n\nA few miles down the track from Wakefield lies the village of **Chelsea**, the perfect destination for refueling after a long day spent in Gatineau Park.  SM gets her mojo back by partaking in \n- a quick bite at [Biscotti](https://www.biscottichelsea.ca/en) (DA: \"Great coffee\"),\n- a pint at the [Chelsea Pub](https://www.chelseapub.ca/en),\n- a frozen treat at [La Cigale](https://www.lacigaleicecream.com/index.html),\n- and (!!) take-home pastries from [Une Boulangerie dans un Village](https://www.facebook.com/Une-Boulangerie-dans-un-Village-834474803287863/).\n\nShould you be looking to dust off your boots and enjoy a touch of class, Chelsea also has you covered:\n- Pop back into the Park and visit the [Mackenzie King Estate](https://ncc-ccn.gc.ca/places/mackenzie-king-estate), the summer retreat of Canada's most eccentric prime minister.  Wander the grounds and enjoy King's [follies](https://en.wikipedia.org/wiki/Folly) before enjoying one of the finest [tea times](http://tandco.ca/english) Ottawa has to offer.  \n- If you're really in mood for getting spoiled, JB and SM have fond memories of their escapes to [Nordik Spa](https://chelsea.lenordik.com/en/), a luxurious bathing/sauna experience with a solid offering of rest and relaxation.",
        "https://i.pinimg.com/originals/b8/75/e4/b875e44d60006e254e413e78d3eb2953.jpg",
        "http://www.capitalgems.ca/wakefield-covered-bridge.html"
      ],
      [
        "2020-12-12",
        "Waldeinsamkeit",
        "...though please don't go to the forest alone!",
        "Rise and shine, it's border-jumping time!\n\nHope you got plenty of pineapple juice last night because we've got a full weekend ahead of us.  An easy thirty-minute bike ride from Carleton brings you to the front gates of Gatineau Park.  We're all a bit biased, but we think that Ottawa's pretty lucky to have its own bit of the Canadian Shield in its backyard and we're delighted to give you a few tips on how you can make the most of it.\n\nThe park and its many trails (link) present a four-season delight: \n- blooming white trilliums of spring on the Lauriault Trail, \n- beating the summer heat in [Lac Philippe](https://ncc-ccn.gc.ca/places/philippe-lake), \n- scrambling through autumn colours on the heights of the Camp Fortune [disc golf](https://www.odgc.ca/courses/camp-fortune/) course, \n- and snowshoeing through a crystal-clear winter's night. \n\nIf you're looking to dust off your hiking boots, DA's top trail picks are Wolf Trail on the Eardley Escarpment (providing a picturesque panorama some 270m over the Ottawa Valley) and the [Carbide Willson Ruins](https://ncc-ccn.gc.ca/places/carbide-willson-ruins), a remarkable mixture of natural and technical history with one heck of a nice hike and swimming hole thrown in for good measure.  If you're more in the mood for a bike ride, LS recommends [Sunday mornings](https://ncc-ccn.gc.ca/places/sunday-bikedays) when cars are verboten and you can enjoy the puzzling yet pristine [Pink Lake](https://ncc-ccn.gc.ca/places/pink-lake) in peace.\n\nOn those hot summer days when you're ready to jump right in, AV recommends driving the extra miles to reach [Lac La Pêche](https://ncc-ccn.gc.ca/places/la-peche-lake), complete with a postcard-perfect \"cliff dive\" from the rocks hugging the left-hand bend of the beach.  While you're in the neighbourhood, be sure to stop by the local [casse-croûte](https://goo.gl/maps/uPkvHoXDdTFer4TM7) to pick up a poutine the way it was meant to be made.  When winter rolls around, take a leaf out of SM's favourite playbook and pack your bag for a ski or snowshoe into one of the park's [overnight cabins](https://ncc-ccn.gc.ca/blog/overnight-park-enjoy-winter).  It may take a bit of planning but it's an absolute joy every time -- and trust us, they provide plenty of firewood.\n\nLast but not least, a perennial favourite on everyone's \"you gotta see it to believe it\" is the wondrous [Lusk Cave](https://ncc-ccn.gc.ca/places/lusk-cave), reached after a lovely hike in the forest around Lac Philippe.  The cave is home to Lusk Creek which dives underground to meander through a hundred metres of marble tunnels and chambers before popping back out onto the forest floor.  The entire cave is navigable and the water is never more than a metre deep -- a bathing suit and a headlamp are all you need to enjoy a waterslide no amusement park can rival.  Visit in the spring to feel the force of the water and return in the late summer to enjoy a bathtub's temperature and traquility.\n\n...and we guess that should be enough to get you started!  If you need any more ideas, just drop by the [Visitor's Centre](https://ncc-ccn.gc.ca/places/gatineau-park-visitor-centre) where some friendly young students will do their best to warn you about recent bear sightings in both official languages.  C'est là -- vie!",
        "https://www.planetware.com/wpimages/2018/12/canada-quebec-gatineau-attractions-gatineau-park.jpg",
        "https://ncc-ccn.gc.ca/places/hiking-and-walking-gatineau-park"
      ],
      [
        "2020-12-11",
        "Getränkekarte, bitte!",
        "Pub Tour #2: Centre(town) Stage",
        "It's been another long week and we're certain that you're itching to get out of town and into the greenery.  However, your labmates might have other ideas -- and assuming you don't want to wind up in Mike's Place every week (link), we want you to be ready!\n\nIn today's Pub Tour, we're going to hops all over town as we mix up something special for you and your wine friends...\n\nJF and AV both have a soft spot for [Quinn's Ale House](https://www.quinnsalehouse.com/), a postage-stamp pub on Bank in Old Ottawa South serving Carleton students their ABCs (that's right, the Ashton Brewing Company).  If you're not in the mood to support the draft, keep heading up Bank to the [Fourth Avenue Wine Bar](https://107fourthavenue.com/), JF's first choice for the fruits of the vine.\n\nBopping a little further along Bank finds us on the 300 block of Somerset, a somewhat-hidden strip of pubs and restaurants highlighted by [Union Local 613](https://www.union613.ca/).  Their southern USA cuisine packs a punch AV can still recall and SM wholeheartedly recommends their solid cocktail list.  H&S remind you to case the joint -- the basement boasts a bookcase-shielded speakeasy while the second floor (with its own access) serves as the home of the sister establishment Jabberwocky, complete with vegan plates and its own delicious cocktails.\n\nContinuing our cocktail-driven romp, SM gives another couple shouts-out to Centretown's [Rabbit Hole](https://rabbitholeott.ca/) on Sparks (where when the summer sun shines, you might be lucky enough to see a busker or two!) and Lowertown's [Atari](http://www.atariottawa.com/) in the Byward Market for solid eats and drinks on a supremely sunny rooftop patio.  Should you need an even stronger shot of Vitamin D, H&S are only too happy to elevate your game to the 16th floor at [Copper Spirits and Sights](https://www.hyatt.com/en-US/hotel/canada/andaz-ottawa-byward-market/yowaz/dining) in the Andaz hotel, easily the city's tallest rooftop bar.\n\nNext, catch the Confederation Line westward from the Market (or the Trillium Line north from Carleton!) and make your way to Little Italy, where the oddly-named (and even more oddly-decorated) [Pub Italia](https://pubitalia.ca/) boasts a \"BEvERage bible\" that DA happily peruses whenever the mood to sift through some 200 varieties of bottled brews strikes.  Not to be outdone, SM routinely takes her guests to [Ward 14](https://www.wardfourteen.com/) for the one-two combo of tater-tot poutine and \"the funkiest consignment bar in town\".  Rounding out SM's west-side story is [Bar Lupulus](https://barlupulus.ca/), a special-occassion celebration of all things fermented: craft beer, natural wine, and a seriously tasty charcuterie.",
        "https://images.squarespace-cdn.com/content/v1/553f9790e4b08a278f364482/1525451861818-0R5HQWXIV5PXEK95IM9R/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/IMG_6294-2_958cc5e0ce9e8b61b7d8ceb036d1f79e.jpg",
        "https://gsacarleton.ca/mikes-place/"
      ],
      [
        "2020-12-10",
        "Live Musik",
        "A whole different flavour of frequency analysis",
        "Welcome back to Student Friday (we missed you!) and throw on your fancy wool -- it's time to hit the town for a little live music!\n\nStarting close to Carleton, IG recommends the chill coffeeshop vibe at [Black Squirrel Books](https://www.blacksquirrelbooks.ca/) in Old Ottawa South where brewing and browsing occassionally give way to some good vibrations.  After the sun goes down on the Glebe, DA kicks back at [Irene's](https://irenes-pub-restaurant.myshopify.com/) when he's in the mood for walkable local music almost any night of the week.  \n\nHeading into the Centre of Town, the [National Arts Centre](https://nac-cna.ca/en/) features many a musical majesty from its hexagonal heights -- luckily, you can fight off altitude sickness from the sometimes sky-high ticket prices through student discounts and [Live Rush](https://nac-cna.ca/en/tickets/save).  What's more, SB and HS encourage you to poke your head past the prominence and check out the [NAC Fourth Stage](https://nac-cna.ca/en/venue/fourth-stage) for \"inexpensive, chill concerts with awesome Canadian musicians\".\n\nIf your wool is itching to get out of town, DA and H&S both tell you to look no further than the famed [Black Sheep Inn](https://www.theblacksheepinn.com/) (Auberge Le Mouton Noir) in the idyllic village of Wakefield on the Gatineau River.  It's the perfect finale to a day spent in Gatineau Park (more on that soon!) with a solid slate of concerts and a friendly feeling of la francophonie (beer selection included).\n\nDA would also like to remind you of the many (many!) music festivals that dot the Ottawa calendar -- his top three are:\n- the [Tulip Festival](https://tulipfestival.ca/) at Dow's Lake in May, which features a fabulous free classical/jazz festival alongside the flowers and fireworks,\n- the [Jazz Festival](https://ottawajazzfestival.com/) at Confederation Park in June, with a solid offering of free outdoor concerts and day passes for a student budget,\n- [Bluesfest](https://ottawabluesfest.ca/) at Lebreton Flats in July, showcasing much (much!) more than blues (their [2019 lineup](https://media.resources.festicket.com/www/admin/uploads/images/bluesfest%20(1).jpg) was legendary, AV recognizes at least eighteen acts),\n- ...and, for something completely different, there is plenty of brass band action at the unique spectacle that is the Sunset Ceremony of the [RCMP Musical Ride](https://www.rcmp-grc.gc.ca/en/musical-ride/canadian-sunset-ceremonies) held in late June.\n\n...but we promise, this was just a Probe.  Enjoy the auditory odyssey!",
        "https://naccna-venues.s3.amazonaws.com/763/fourthstage_desktop_cover__hero_large.jpg",
        "https://nac-cna.ca/en/venue/fourth-stage"
      ],
      [
        "2020-12-09",
        "Hier kommt die Bagels",
        "A scrumptious showdown awaits",
        "Today's post may not be the longest, but it comes packed with emotion.\n\nToday, we are talking about bagels.\n\nDon't let yourself be drawn into fantasies about New York bagels -- in Ottawa, the Montréal-style bagel (link) is king and the battle lines are drawn.  \n\nHolding down the fort in Hintonburg, the [Ottawa Bagelshop](https://ottawabagelshop.com/) is the city's oldest source for the holey slice of heaven.  Alongside their bagels, the shop features a small deli and grocery with a European flair.  Rumour has it they also make a mean homemade soup -- we leave it to you to see if the rumours are true.\n\nLocated just around the corner from the place HS, SB, and AV used to call Holm, [Kettleman's](https://www.kettlemansbagels.ca/) has been a Bank Street stalwart since before you were born.  Their homemade cream cheese is the stuff of legend (think Frischkäse in a dozen flavours) and they are hands-down the best option for 24-hour eats in town.\n\n...but don't let our editorial bias have the last word -- give both bagelshops the college try and decide for yourself!  \n\np.s. As a bakery bonus: for some of the best bread and baguettes in town, head to [Art Is In](https://www.artisinbakery.com/) for lunch, pastries, and some seriously solid sourdough -- all of which should help take the edge off any Brötchen-induced Heimweh, at least until you master the art of homemade Laugen.",
        "https://www.kettlemansbagels.ca/wp-content/uploads/2011/12/M3F4942.jpg",
        "https://en.wikipedia.org/wiki/Montreal-style_bagel"
      ],
      [
        "2020-12-08",
        "Essen",
        "Round #1: Bank Street",
        "At press time, Tripadvisor lists some 2551 restaurants in Ottawa (link), a stunning number that works out to one restaurant for every 400 residents.  Even the longest-lasting PhD student would be hard-pressed to visit them all, so we thought you might appreciate a bit of guidance for those nights when your cold hard research funding is exchanged for some serious Bioprene.  Welcome to Tuesday Foods-Day!\n\nThis week, we'll kick things off close to Carleton with a stroll along Bank Street:\n\n- [The Belmont](https://www.belmontottawa.com/) at 1169 Bank  \nHS: \"Tiny upscale restaurant in Old Ottawa South, total delight, reservation req'd\"\n- [The Rowan](http://www.therowan.ca/) at 915 Bank  \nJF: \"Gastropub by Ottawa's Fraser brothers, a nice restaurant in the Glebe\"\n- [Jericho](https://www.yelp.ca/biz/jericho-lebanese-food-ottawa) at 840 Bank  \nSB: \"Inexpensive, tasty, delightful Mediterranean food\"\n- [Light of India](https://www.lightofindia.ca/) at 730 Bank  \nLS: \"My favourite Indian food\"\n- [Erling's Variety](https://www.erlingsvariety.com/) at 225 Strathcona (corner of 603 Bank)  \nJF: \"Another nice restauraunt in the Glebe, this one offering tapas\"\n- [The Whalesbone](https://thewhalesbone.com/) at 430 Bank (among others)  \nSM: \"One of my top two for seafood\"\n- [Gonfu Bao](https://www.gongfu.ca/) at 365 Bank  \nJB: \"Seriously delicious dumplings\"",
        "https://www.ottawalife.com/admin/cms/images/medium/best-of-ottawa-2020-international-cuisine-image-5-jericho.png",
        "https://www.tripadvisor.ca/Restaurants-g155004-Ottawa_Ontario.html"
      ],
      [
        "2020-12-07",
        "Aus dem Zweiten Hand",
        "Living la vida low-cost!",
        "No matter how well you packed your suitcase, sooner or later you'll need a few things to get settled in and start living like a local.  Luckily, the locals have got your back.\n\nStarting things off with a bang, SM recommends your neighbourhood [Buy Nothing](https://buynothingproject.org/) group for all things secondhand -- she'll even offer a free tutorial!\n\nShould your closet has a few empty clotheshangers, you can check out: \n- [Saint Vincent de Paul](https://saintvincentdepaul.ca/) on Wellington in Hintonburg  \nIG: \"Good for clothing and home goods\"\n- [Rikochet Resale](https://rikochetresale.com/) in Westboro and [The Clothes Secret](https://www.theclothessecret.com/) on Bank  \nSM: \"Consignment shops I have liked\"\n- [Ragtime](https://onthegrid.city/ottawa/centretown/ragtime) on Flora tucked away in Centretown  \nIG: \"Thrift clothing, mostly vintage\" \n\nOn that fateful day when your toque doesn't quite fit and you'd like someone else to do something about that, you can take your pick between [Teaze](http://teazehairandspa.ca/) on MacLaren (LS: \"Simple women's cuts for a good price, can't verify for anything fancier!\") and [On Edge Studio](https://onedgestudio.com/) on Wellington (SM: \"Where I go when I want rainbow unicorn hair\").\n\nAnd finally, a tip near to AV's heart is the [House of Lazarus](https://hol.community/) -- it's a [bit of a trek](https://goo.gl/maps/zf6JPCm541D8HCfD6) but the little shop of wonders has everything your apartment needs, from teaspoons and trinkets to tottering bookshelves at an exceptionally fair price that does wonders for the community.  The same can't be said for Canada's biggest thrift store chain (link), but if you can't make it out to the countryside you might be able to get what you need at \"The Boutique\" a bit closer to home -- especially when it's time to get costumed up!",
        "https://onthegrid.city/imager/s3_amazonaws_com/onthegrid.city/assets/grid/ottawa/centretown/ragtime/IMG_9919_299006722e285f47655d17d1c9136337.jpg?fbclid=IwAR36L9jQCdUSmg7lrk6n8a2oaM-brNXu6zrM_elkpNzOWraJ80zVep106rA",
        "https://www.valuevillage.com/"
      ],
      [
        "2020-12-06",
        "Stadtgartentour",
        "Fresh air is closer than you think!",
        "Today's post is brought to you almost entirely by DA, who thought it best to round out this first weekend by exploring a bit more of Ottawa's \"green lung\".  Ottawa, being Canada's capital, has a great deal of urban green space which is funded by the federal coffers through the National Capital Commission (*Commission de la capitale nationale*, link).  It's not our job to discuss whether this perk is particularly fair to the rest of Conderation -- instead, fill up your backpack with all the fresh goodies you bought at the Ottawa Farmer's Market this morning (Sunday, sweet!) and jump on your bike for a quick tour of the town!\n\nWe'll start our journey at [Hog's Back Falls](https://ncc-ccn.gc.ca/places/hogs-back-park), the first of two waterfalls that gave rise to the Ottawa portion of the Rideau Canal.  The falls are an impressive mix of water/rock/foliage and reach their pinnacle in the springtime as the waters of the swollen Rideau River race their way northward.  Have fun taking in the falls from all sorts of angles (the rocks are scramble-friendly) then check out one of the nearby parks -- Mooney's Bay features one of Ottawa's [city-run beaches](https://ottawa.ca/en/recreation-and-parks/swimming#beaches) while [Vincent Massey Park](https://ncc-ccn.gc.ca/places/vincent-massey-park) is perfect for a summertime picnic.  \n\nFollowing the canal northward from the falls will bring you to the [Arboretum](https://friendsofthefarm.ca/plan-your-visit/attractions/), a tree-lover's refuge just a frisbee throw away from Carleton.  Solitude in the summer gives way to a surprisingly fun toboggan hill in the winter -- combined with a trip to the Experimental Farm it can be just the ticket for a case of the February blues.  \n\nAfter getting your fill of the Greater Carleton Greenery, JB suggests that make your way downtown and breathe in the majesty of the Ottawa River from [Major's Hill Park](https://ncc-ccn.gc.ca/places/majors-hill-park) and the nearby [Nepean Point](https://ncc-ccn.gc.ca/places/nepean-point), two wonderful bits of tranquility in Ottawa's political and cultural heart.  Take in the views of Gatineau and the Alexandra Bridge before making your way (carefully!) down the escarpment to step all over the eight-lock staircase that completes the Rideau Canal's journey from Kingston.  Cross the canal on any (or all!) of the closed locks and find a way to climb Parliament Hill -- if you time it right, you might just get a chance to hear a [carillon concert](https://www.ourcommons.ca/About/HistoryArtsArchitecture/carillon/programme-e.htm#2020-12-10) or a little [light show](https://www.canada.ca/en/canadian-heritage/campaigns/sound-light-show.html), both of which are an absolute must.\n\nFrom Parliament, you can head west along the waterline -- SM recommends Sundays when the [Macdonald Parkway](https://ncc-ccn.gc.ca/news/nokia-sunday-bikedays-starts-this-weekend) is closed to vehicle traffic and open for lovely little pop-up cafés along the way where you can pick up a coffee to enjoy on the wonderfully tranquil Bate Island in the middle of the Champlain Bridge.  Conversely, heading eastbound and downstream from Major's Hill will take you to the hidden gem of [Rockcliffe Park](https://ncc-ccn.gc.ca/places/rockcliffe-park-and-the-rockeries), perched high above the river in remarkable seclusion from surrounding city.  DA recommends daffodil season when hundreds of thousands (!!) of flowers dot the park's green lawns.\n\nAs a final tip from SB and HS (which makes use of the \"expanded\" definition of the City of Ottawa), make sure you find a Sunday to visit the [Mer Bleue Bog](https://ncc-ccn.gc.ca/places/mer-bleue) which has (we are not making this up) \"a northern ecosystem that is more typical of the Arctic than the Ottawa Valley\".  We trust you'll be able the handle the logistics on your own -- might even be a good place for a bit of PermafrostNetworking...",
        "https://hikebiketravel.com/wp-content/uploads/2018/08/Mer-Bleu-2-of-1.jpg",
        "https://ncc-ccn.gc.ca/places-to-visit"
      ],
      [
        "2020-12-05",
        "Leben am Kanal",
        "A reason in every season",
        "A fellow by the name of Will Ferguson once proposed three fundamental themes of Canadian History: keeping the French in, keeping the Americans out, and trying to make the Indigenous Canadians disappear.  Such a statement is well worth its own Adventskalender, but today we'll stick with Theme #2 and head back to times gone by -- Colonel John By, specifically.\n\nAnother one of the old white guys of Canadian history, Colonel By was charged with the construction of a canal connecting Kingston on Lake Ontario with Montréal on the Ottawa-St. Lawrence system, effectively bypassing the Ontario portion of the St. Lawrence River which directly bordered the expansionist Americans in New York State.  Though the Rideau Canal never quite realized its original military purpose, it gave birth to the settlement of Bytown-come-Ottawa and served in its time as an essential inland waterway for goods and passengers alike. \n\nFast-forward 175 years and the canal has been transformed into a UNESCO world heritage site (link) and an artery for all manners of human-powered transport -- and none more beloved than a pair of freshly-sharpened skates.  At the first sign of a frozen canal, all eyes are on the [Skateway website](https://ncc-ccn.gc.ca/places/rideau-canal-skateway) as the National Capital Commission works day and night to prepare and maintain some 7.8 kilometres of icy bliss.  Once the season has opened, countless possibilities await:\n\n- commuting to Carleton and enjoying a lunchtime lap around Dow's lake;\n- booking it to the Bank Street Bridge for after-school errands;\n- watching sun set on Parliament from the shelter by Laurier Bridge; and\n- skating home under starry skies after a long night on Elgin Street.\n\nAnd as the icing on top, the frozen canal is the backbone of the equally legendary [Winterlude](https://ottawatourism.ca/en/see-and-do/winterlude), a February fortnight festival which is a winter highlight for DA (and many others besides!).  Grab yourself a [BeaverTail](https://beavertails.com/) from one of their on-ice kiosks and let the ice sculptures in Confederation Park take your breath away.  \n\nDespite what the locals tell you, winter does eventually come to an end and with the first buds of spring comes a whole new slate of waterway delights.  The [Dow's Lake Pavilion](https://www.dowslake.com/) offers a rental fleet of pedal boats, paddle boards, canoes, and kayaks -- though if you ask nicely, IG can show you the way to a two-seater hidden by the Flora Footbridge at a price that just can't be beat. Once you get on the water, be sure to explore the unique character of the canal's many bends, with AV giving a special shout-out to the hidden tranquility of [Patterson Creek](https://ncc-ccn.gc.ca/places/patterson-creek-park).\n\nLast but certainly not least, you can also enjoy the canal from dry land!  Both banks have a well-maintained multi-purpose path which welcomes walkers, runners, cyclists, roller-skaters, and even the occasional cross-country skier desparately staying in shape for another year on the trails.  There are plenty of chances to cross the canal, none more adventurous than crossing across the gates of any closed lock -- you'll learn the unwritten rules of foot (and bike!) traffic before too long, especially since [Hartwells Locks](https://www.pc.gc.ca/en/docs/r/on/rideau/whl-lhm/chap2/chap2A1/chap2A1b) by Carleton are your gateway to the delights of the Arboretum and Experimental Farm.  \n\nWhether serving as a human-powered superhighway or a chance to hang out with a few of our feathered friends, the Rideau Canal is a gem to be enjoyed in every season -- just try not to go for a swim!",
        "https://ncc-website-2.s3.amazonaws.com/images/_1200x630_crop_center-center_82_none/MG_3968.jpg",
        "https://whc.unesco.org/en/list/1221/"
      ],
      [
        "2020-12-04",
        "Hoch die Hände, Wochenende!",
        "Pub Tour #1: Elgin Street",
        "Good thing you saved all that money going to free museums on Student Friday, 'cause actual Friday might get a little pricey...\n\nWop bop a loo bop, the weekend's here!  Before you set out for your first taste of Ottawa nightlife, we thought we'd give you a chance to continue the [best way to start the weekend](https://www.visitnorway.com/media/news-from-norway/in-oslo-every-day-is-taco-friday/) by popping over to Vanier for LS's taco favourite at [Ola Cocina](http://www.olacocina.ca/) -- if the weather's nice, you can even grab your grub to go and enjoy the often-overlooked linear parks along the Rideau River right up to the waterfall that gives the river its name.\n\nOnce you've had your fill of fresh air and fajitas, come on back to Centretown and immerse yourself in the legacy of James Bruce (photo/link), the 8th Earl of Elgin who served as a surprisingly competent and transformational colonial governor.  Among other admirable old white guy achievements, he allowed the colony to achieve responsible government for the first time -- and in gratitude, the city of Ottawa named their longest stretch of pubs in his honour.\n\nLong-time Elgin Street local LS has plenty of suggestions: \n- the basement vibe at the [Manx Pub](https://www.manxpub.com/) (AV vaguely remembers good eats!),\n- the labyrinthine [Lieutenant's Pump](https://www.lieutenantspump.ca/) where every seat is a corner booth,\n- the [Fox and Feather](https://www.foxandfeather.ca/) anytime from brunch until (way past) bedtime,\n- [Pancho Villa](https://www.panchovilla.ca/) for their margaritas, \n- and a new wine bar called [Gitanes](https://www.gitanes.co/) for fancier evenings.\n\nIf cocktails are the order of the evening, SM doubles down on Elgin with two picks of her own: [Charlotte](https://www.charlotteottawa.com/) and [Datsun](https://datsun.mobi2go.com/), with the latter serving up some mean Asian fusion cuisine.\n\nAnd of course, no discussion of Elgin Street could be complete without mention of \"\"the hockey\"\" -- under the erstwhile moniker Sens Mile the street serves as something of a Public Viewing hotspot whenever the local hockey team is scoring a statistically significant number of goals.  AV caught his last game at [MacLaren's](https://maclarens.com/), but if Lord Stanley is coming anywhere close to Lord Elgin you'll have just as much fun out on the street.  \n\nNo matter where you go, be sure to enjoy responsibly -- the way James Bruce would have wanted!",
        "http://www.biographi.ca/bioimages/w200.3815.jpg",
        "https://lordelginhotel.ca/just-who-was-lord-elgin/"
      ],
      [
        "2020-12-03",
        "Lange Woche der KOSTENLOSEN Museen",
        "Did we mention they were free?",
        "As I guess you've gathered from Carleton's silly slogan, Ottawa serves as the capital of the Dominion of Canada, a decision made by Queen Victoria herself after a fascinating bidding process by various cities in the former colonies... but I digress.\n\nOttawa may not quite be the sort of national capital that you're familiar with, but as the talented [Paul Wells](https://www.macleans.ca/news/canada/world-class-whine-why-ottawas-haters-are-wrong/) once noted, that's not necessarily a bad thing.  Ottawa enjoys a great many perks as Canada's capital, not the least of which is a staggering array of national museums -- all of which you can visit for free!\n\nTo kick things off, let's talk about Thursday, one of the best days of the week.  In addition to being Student Friday, it's also the day you can get free evening admission (17-20) at the big three:\n- Go say hi to Maman and take in some of Kurulek's finest at the [National Gallery](https://www.gallery.ca/) -- IG kindly reminds you to stay off the sculptures, no matter how climbable they may seem!\n- Dive into the surprisingly thoughtful galleries at the [War Museum](https://www.warmuseum.ca/) for an across-the-Atlantic perspective on history you know well, bookended by poignant perspectives on the past and present.\n- Jump across the border to Gatineau and visit the highly civilized [Canadian Museum of History](https://www.historymuseum.ca/), an all-time SB favourite with highlights too many to mention.  AV recommends borrowing a child for the Canadian Children's Museum, while you can ask IG for a special invitation to the yearly service for Heilige Drei Könige (a.k.a. Theophany) held at a chapel within museum's walls.\n\nIf you get that museum itch and you just can't wait until Thursday, the trio of tech museums known as Ingenium offer free admission for the last hour every day:\n- Go for a bike ride along the Ottawa river through Rockcliffe Park and let your dreams take flight at the [Aviation and Space Museum](https://ingeniumcanada.org/aviation), featuring a great deal of flight hardware complemented by a small yet worthwhile exhibition on human spaceflight and remote sensing.\n- Sneak out of the lab at Carleton and cross the Rideau Canal to reach the [Agriculture and Food Museum](https://ingeniumcanada.org/agriculture) -- an exceptional escape any time of the year with a hands-down highlight in the spring when the barns overflow with new life.  \n_(read: baby animals, for free, every day of the week, right when you need that PhD pickup the most)_\n- The dark horse of the group is the [Science and Technology Museum](https://ingeniumcanada.org/scitech), a personal favourite from AV's childhood that has been completely rebuilt following a leaky roof episode.  Rumour has it they kept the trains and the kitchen -- if so, it's an hour worth spending.\n\nRounding out the roster of national museums is the [Nature Museum](https://nature.ca/en/home), which just to be different is free Wed-Fri for the last hour-and-a-quarter.  It's absolute gem in a stunning building right off the Ridau Canal and features plenty of Canadian flora and fauna, including an Arctic Gallery!  DA can recommend an outstanding tour guide by day, while SM and JB have magical memories from many a Nature Nocturne when the lights go down and the volume turns up on a fabulous night at the museum (link/photo).\n\nLast (but certainly not least!) are the always-free tours of the [Canadian Parliament](https://visit.parl.ca/sites/Visit/default/en_CA) and [Rideau Hall](https://www.gg.ca/en/visit-us/rideau-hall/plan-your-visit), though given the ongoing renovations which will most definitely last longer than any possible PhD... maybe you'd better stick with the scientists!",
        "https://media-cdn.tripadvisor.com/media/photo-s/19/4e/07/17/in-the-queens-lantern.jpg",
        "https://nature.ca/en/plan-your-visit/nature-nocturne"
      ],
      [
        "2020-12-02",
        "Kaffeepause",
        "Large double trouble, coming right up!",
        "Rumour has it that PhD students drink a lot of coffee... luckily, Ottawa's got you covered no matter which neighbourhood you find yourself in.  \n\nIG starts things off with a hot tip close to Carleton: [Black Squirrel Books and Espresso Bar](https://www.blacksquirrelbooks.ca/), which will be a repeat performer in this year's Adventskalender -- stay tuned!  \n\nKeeping things in Old Ottawa South/East, LS thinks you should know about [Café Qui Pense](https://www.facebook.com/Caf%C3%A9-qui-pense-551681391529962/), though be warned -- we haven't crossed enough water for you to order your coffee in French just yet.  \n\nAlso making an appearance on Main Street is SM's personal favourite, [Happy Goat Coffee](https://www.happygoatcoffee.com/) -- she's even happier to recommend the Laurel Street location in Hintonburg: \"It feels like a secret, tucked away in an industrial-ish area.  It's the hippest feeling one!\"  \n\nIf you find yourself hanging out in Centretown, grab a nice coffee at [Grounded Kitchen and Coffeebar](https://groundedkitchencoffee.com/) (SM recommends their breaklubrunch!) or head on over to the [Ministry of Coffee](https://theministryofcoffee.com/) where, sometime in the last decade, AV first encountered the tantalizingly mysterious cortado.  \n\nFinally if it's too much trouble to keep track of all these tips, you can always count on [Bridgehead](https://www.bridgehead.ca/) -- they have a staggering nineteen locations in town, led by JB's personal favourite, their flagship roastery on Preston.  \n\nNow that you're properly fed and caffeinated, grab a waterbottle and get ready -- we've got a national capital to explore!",
        "https://media-cdn.tripadvisor.com/media/photo-s/08/62/cc/da/the-ministry-of-coffee.jpg",
        "https://theministryofcoffee.com/"
      ],
      [
        "2020-12-01",
        "Wilkommen!  Lebensmittel!!",
        "And all sorts of other marketable skills",
        "Oh my goodness, we're live!\n\nWelcome to the unoffical start of the Ottawa chapter of this crazy adventure we call life.  Thanks to some incredibly kind and creative locals (and one web wizard!) we're excited to present a little series of tips and tricks that we all hope will make your transatlantic transition a little more bearable.\n\nSo, without further ado... let's get some groceries!\n\nSM recommends the many markets for their unique offerings and motivation to visit new neighbourhoods.  You can check out:\n- [Byward Market](https://byward-market.com/en/about-us/outdoor-market/), daily downtown\n- [Parkdale Market](https://wellingtonwest.ca/parkdalemarket/), daily in Hintonburg\n- [Ottawa Farmers' Market](https://ottawafarmersmarket.ca/westboro-market/), summer Saturdays in Westboro \n- [Main St. Farmers' Market](https://mainfarmersmarket.org/), summer Saturdays in Old Ottawa East\n- [Ottawa Farmers' Market](https://ottawafarmersmarket.ca/lansdowne-market/), Sundays in the Glebe (photo/link) \r\n\nFor those days when the farmers go on vacation, Ottawa also features some actual grocery stores!  We think you'll find the big ones on your own, so we'd like to highlight:\n- [McKeen's Grocery](https://mckeenmetroglebe.com/) (Glebe)  \nLS: \"Good for recycling plastic bags\"\n- [Nicastro](https://negozio.ca/) (Glebe)  \nJF: \"Great for olive oil, balsamic, cheese\"\n- [Pelican](https://www.pelicanseafood.ca/) (Byward Market)  \nJF: \"Top fishmonger with superb fish & chips\"\n- [Herb and Spice](https://www.herbandspiceshop.com/) (Bank, Wellington)\nSM: \"When it's just gotta be organic\"\n- [Nu Grocery](https://nugrocery.com/) (Old Ottawa East)\nAV: \"Zero waste and full taste\"\n\nAnd last but certainly not least, sign up for some community-supported agriculture -- the down-to-earth CSA!  SM couldn't be happier with her produce basket from [Roots and Shoots](https://www.rootsandshootsfarm.com/) -- nothing like a good supply of root vegetables to give your permafrost research the firm foundation it deserves.",
        "https://ottawatourism.ca/sites/default/files/styles/facebook_share/public/images/2020/03/Ottawa-Farmers-Market-Lansdowne_RT_9380-credit-Ottawa-Tourism.jpg",
        "https://ottawafarmersmarket.ca/"
      ]
    ]
  };

  // console.log(responseData.values);

  // Skip the first row, which is header data:
  responseData.values.shift();

  $.each(responseData.values, function(index, value) {

    // Convert JSON data above to the format expected by the Lodash template:
    var item = {
      date: value[0],
      title: value[1],
      subtitle: value[2],
      description: value[3],
      imagesrc: value[4],
      visiturl: value[5],
    };

    console.log(item);

    // Optionally change Markdown-formatted text in the description field to HTML
    if(app.useMarkdown !== false) {
      item.description = app.converter.makeHtml(item.description);
      // console.log(item.description);
    }
  
    // Check if the date is in the past
    // Thanks to
    // https://momentjs.com/docs/#/query/is-same-or-before/
    if(app.showAllDates || moment(item.date).isSameOrBefore()) {
      app.data.push(item)
    }
    else {
      console.log('Skipping ' + item.date);
    }

  });

  // Display loaded items:
  app.displayLoadedCardData();
  app.hideLoadingMessage();
  

}

app.retrieveSpreadsheetJson = function () {
  
  // Thanks to
  // http://bionicteaching.com/google-sheets-json-with-jquery/
  $.getJSON(app.spreadsheetUrl, function(data) {
                      
    var entry = data.feed.entry;
    // console.log(entry);
                      
    $(entry).each(function(){
      //make sure this matches your column labels when you change the source sheet
      // $('.results').prepend('<h2>'+this.gsx$title.$t+'</h2><p>'+this.gsx$url.$t+'</p>');
      var item = {
        date: this.gsx$date.$t,
        title: this.gsx$title.$t,
        subtitle: this.gsx$subtitle.$t,
        description: this.gsx$description.$t,
        imagesrc: this.gsx$imagesrc.$t,
        visiturl: this.gsx$visiturl.$t,
      };

      // Optionally change Markdown-formatted text in the description field to HTML
      if(app.useMarkdown !== false) {
        item.description = app.converter.makeHtml(item.description);
        // console.log(item.description);
      }
    
      // Check if the date is in the past
      // Thanks to
      // https://momentjs.com/docs/#/query/is-same-or-before/
      if(app.showAllDates || moment(item.date).isSameOrBefore()) {
        app.data.push(item)
      }
      else {
        console.log('Skipping ' + item.date);
      }
      
    });
                    
  }).done(function() {
    console.log("Successfully loaded spreadsheet data");
    app.displayLoadedCardData();

    app.hideLoadingMessage();

  }).fail(function() {
    console.log("Failed to load spreadsheet data");

    app.showErrorMessage("Couldn’t load spreadsheet data, try again later!");

    app.hideLoadingMessage();

  });

}

app.hideLoadingMessage = function () {
  $("#acLoadingMessage").hide();
}

app.showErrorMessage = function(message) {
  $("#acCardListPlaceholder").html(
    app.itemCardPlaceholderTemplate({
      message: message
    })
  );
}

app.displayLoadedCardData = function () {

  // var data = JSON.parse(app.sampleData);

  if(app.data.length === 0) {
    app.showErrorMessage("(It’s not Dec. 1 yet, come back soon…!)");
    return;
  }

  $(app.data).each(function(index, item){
    // console.log(index);
    // console.log(item);

    $("#acCardList").append(
      app.itemCardTemplate({item: item})
    );

  });

  console.log('Loaded card HTML elements');

}

$(function () {
  // Initial page load config
  console.log("Running!");

  app.itemCardTemplate = _.template($("#itemCardTemplate").html());
  app.itemCardPlaceholderTemplate = _.template($("#itemCardPlaceholderTemplate").html());

  app.converter = new showdown.Converter({
    simpleLineBreaks: true,
    openLinksInNewWindow: true,
    ghCompatibleHeaderId: true,
    emoji: true
  });

  // Run the spreadsheet lookup!
  // app.retrieveSpreadsheetJson(app.spreadsheetUrl);
  app.retrieveSpreadsheetJsonV2(app.spreadsheetUrl);

});
