require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Single Origin', sortOrder: 10},
        {name: 'Blends', sortOrder: 20},
        {name: 'Instant Coffee', sortOrder: 30},
        {name: 'Merchandise', sortOrder: 40},
    ]);

await Item.deleteMany({});
const items = await Item.create([ 
    {name: 'Ethiopia Worka Sakaro', image: 'https://i.imgur.com/a2zi24Z.png', category: categories[0], price: 20.00, detail: 'The Worka Sakaro delivers the top-notch qualities we look for in an Ethiopian coffee: juiciness, a crisp acidity and some lovely floral tones. The cup is filled with notes of ripe raspberries and vanilla cream soda.'}, 
    {name: 'Columbia Juan Francisco', image: 'https://i.imgur.com/qP6tTfu.png', category: categories[0], price: 20.00, detail: 'This micro-lot, from the farm of producer Juan Francisco, is rich and tropical. The cup features notes of fruit salad, strawberries and agave, with a balanced body and juicy acidity.'}, 
    {name: 'Colombia La Joya Natural', image: 'https://i.imgur.com/LSY666x.png', category: categories[0], price: 21.00, detail: 'This year we decided to bring in the natural processed lot from La Joya, due to its intense, sweet and unique flavor profile. The cup reminds us of both bananas foster and a caramel covered apple, complete with burnt sugar notes and a hint of rum sauce. This coffee is perfect for those looking for something a bit out of the ordinary.'}, 
    {name: 'Honduras Jose Perez', image: 'https://i.imgur.com/nECnJNz.png', category: categories[0], price: 20.00, detail: 'This single-producer lot has a pleasing nuttiness that pairs perfectly with sweet notes of apple pie and dried fruit. The body is well-rounded, with a rich, creamy finish.'}, 
    {name: 'Epiphany House Blend', image: 'https://i.imgur.com/C4K9iCo.png', category: categories[1], price: 18.00, detail: 'Our top-selling coffee for good reason. Rich and balanced, with notes of toffee and chocolate, the Epiphany is delicious any way you like to drink it.'},
    {name: 'Hi-Five Blend', image: 'https://i.imgur.com/mHjV1il.png', category: categories[1], price: 18.00, detail: 'Our boldest blend, for when you’re craving the richness of a darker roast. Naturally earthy and full-bodied, with notes of cocoa, nut and spice.'}, 
    {name: 'Decaf Colombia', image: 'https://i.imgur.com/0CUTIHx.png', category: categories[1], price: 19.00, detail: 'The best decaf, ever. Look for notes of chocolate and raisin, with a hint of roastiness.'}, 
    
    // ALSO CATEGORY 2 in instant coffee
    {name: 'Instant Coffee - Epiphany Blend', image: 'https://i.imgur.com/a4M3Xei.png', category: [categories[1], categories[2]], price: 16.00, detail: 'Make craft coffee anytime, anywhere. We\'ve partnered with our friends at Swift Cup to bring some of our favorite coffees to a whole new level of ease. These lightweight, individual servings of craft instant coffee are convenient for taking on the trail, camping or traveling. Heck, even a lazy morning at home is a great excuse!'}, 
    {name: 'Instant Coffee - Decaf Colombia', image: 'https://i.imgur.com/QWgYuYO.png', category: categories[2], price: 16.00, detail: 'Make craft coffee anytime, anywhere. We\'ve partnered with our friends at Swift Cup to bring some of our favorite coffees to a whole new level of ease. These lightweight, individual servings of craft instant coffee are convenient for taking on the trail, camping or traveling. Heck, even a lazy morning at home is a great excuse! '}, 

    // Merch
    {name: 'Case Knit Beanie', image: 'https://i.imgur.com/19UNt4b.png', category: categories[3], price: 25.00, detail: 'Make all your hipster friends jealous in this super soft, reversible cuffed beanie. The CASE label is woven in and reversible, allowing for these beanies to be worn cuffed or relaxed. These 100% soft acrylic beanies are shallow fit, but not so shallow as a skull cap. One size fits all.'},
    
    {name: '12oz KeepCup Brew Cork', image: 'https://i.imgur.com/Cco0PbK.png', category: categories[3], price: 30.00, detail: 'This super sleek KeepCup Brew Cork is made from durable, tempered glass with a sustainably harvested cork band for a comfortable hold. This 12 oz glass features a press-fit, splash-free sipper lid. Its lovely to drink from lid on or off lightweight, easy to carry and fits comfortably in your hand and cup holders.'}, 
    
    {name: '12oz Insulated Travel Tumbler', image: 'https://i.imgur.com/vjPSTss.png', category: categories[3], price: 29.00, detail:'Take your favorite drink out and about in style with our sleek travel mug. Hot or cold, this double-wall design from MiiR will keep your drink fresh - without any metallic aftertaste. 12 oz capacity. Thermo 3D ™ Double Wall Vacuum Insulation Technology | BPA Free | Cup holder and Ice Cube Compatible'}, 
    
    {name: 'Stagg EKG Electric Kettle .09L | Matte Black', image: 'https://i.imgur.com/IntA6dj.png', category: categories[3], price: 149.00, detail:'Whether you\'re a coffee aficionado or a brewing beginner, Stagg EKG will be your countertop partner in the pursuit of a ridiculously good cup of coffee. The Stagg EKG Electric Kettle features a precision pour spout, variable temperature control, LCD screen, 60-minute hold mode, a brew stopwatch, and a small, minimalist base. When the toggle on the back is switched to HOLD mode, the Stagg EKG will maintain your desired temperature in either Fahrenheit or Celsius for 60 minutes. The pour-over, perfected.'},
    
    {name: 'Moccamaster KBG Coffee Brewer Off-White', image: 'https://i.imgur.com/gSVX5vc.png', category: categories[3], price: 359.00, detail:'In our humble opinion this is the best, most ingenious coffee maker on the planet. This Moccamaster KBG Coffee Brewer is handmade in the Netherlands and backed by an industry leading 5-year warranty. The Moccamaster KBG model in off-white features a glass carafe and an automatic drip-stop brew-basket that stops the flow of coffee if the carafe is pulled away. The KBG brews a full 40oz pot of coffee in six minutes. Coffee is then held on the unique hot plate; which is engineered with a separate, independent element that rolls heat into the coffee to ensure an even taste from the first cup to the last drop. The hot plate has two settings, giving you the choice to hold your coffee at 175° or 185° F, while never burning your coffee. After 100 minutes, the hot plate will automatically turn off.'}, 
    
    {name: 'Gift Card - Brick & Mortar', image: 'https://i.imgur.com/AFFb6nz.png', category: categories[3], price: 25.00, detail:'Gift Card redeemable at our brick and mortar stores in Ashland, Oregon. Not valid or redeemable online.'}, 
 ]);
    

console.log(items)

process.exit();

})();