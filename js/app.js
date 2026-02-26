/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const categories = [
  { id: 'breakfast',  label: 'Breakfast',      icon: '🍳',  desc: 'Rise, shine & eat well' },
  { id: 'appetizers', label: 'Appetizers',      icon: '🥗',  desc: 'First impressions matter' },
  { id: 'lunch',      label: 'Lunch',           icon: '🥪',  desc: 'Midday fuel done right' },
  { id: 'dinner',     label: 'Dinner',          icon: '🍽️', desc: 'The main event' },
  { id: 'pasta',      label: 'Pasta & Grains',  icon: '🍝',  desc: 'Carbs without guilt' },
  { id: 'desserts',   label: 'Desserts',        icon: '🍰',  desc: 'Always save room' },
];

const recipes = {
  breakfast: [
    {
      id: 'french-toast',
      title: 'Classic French Toast',
      icon: '🍞',
      time: '15 min',
      servings: '2',
      difficulty: 'Easy',
      description: 'Thick-cut brioche soaked in a spiced custard and pan-fried to golden perfection.',
      ingredients: [
        '4 thick slices brioche or challah',
        '2 large eggs',
        '½ cup whole milk',
        '1 tsp vanilla extract',
        '½ tsp cinnamon',
        '1 tbsp butter',
        'Maple syrup & powdered sugar to serve',
      ],
      steps: [
        'Whisk together eggs, milk, vanilla, and cinnamon in a shallow bowl until smooth.',
        'Heat a non-stick skillet over medium heat and melt the butter until foamy.',
        'Dip each bread slice into the custard for 20 seconds per side — let it soak in.',
        'Cook slices 2–3 minutes per side until deep golden brown.',
        'Serve immediately with maple syrup, a dusting of powdered sugar, and fresh berries.',
      ],
      tip: 'Day-old bread works best — it absorbs the custard without falling apart.',
    },
    {
      id: 'avocado-egg',
      title: 'Avocado Toast & Poached Egg',
      icon: '🥑',
      time: '12 min',
      servings: '1',
      difficulty: 'Medium',
      description: 'Creamy smashed avocado on sourdough crowned with a perfectly runny poached egg.',
      ingredients: [
        '1 slice thick sourdough, toasted',
        '1 ripe avocado',
        '1 large egg',
        '1 tsp white vinegar',
        'Flaky sea salt & red pepper flakes',
        'Juice of ½ lemon',
        'Everything bagel seasoning (optional)',
      ],
      steps: [
        'Bring a small saucepan of water to a gentle simmer and add the white vinegar.',
        'Halve and pit the avocado. Scoop flesh into a bowl with lemon juice and mash with a fork — leave some texture.',
        'Crack the egg into a small cup. Create a gentle whirlpool in the water and slide the egg in. Poach 3 minutes for a runny yolk.',
        'Spread avocado generously on the toasted sourdough.',
        'Remove egg with a slotted spoon, blot dry, and place on top.',
        'Finish with flaky salt, red pepper flakes, and bagel seasoning.',
      ],
      tip: 'Fresh eggs poach best — the whites stay together instead of spreading.',
    },
    {
      id: 'pancakes',
      title: 'Fluffy Buttermilk Pancakes',
      icon: '🥞',
      time: '20 min',
      servings: '4',
      difficulty: 'Easy',
      description: 'Tall, cloud-like pancakes with a golden crust and pillowy interior.',
      ingredients: [
        '1½ cups all-purpose flour',
        '1 tbsp sugar',
        '1 tsp baking powder',
        '½ tsp baking soda',
        '½ tsp salt',
        '1¼ cups buttermilk',
        '1 large egg',
        '2 tbsp melted butter',
        '1 tsp vanilla extract',
      ],
      steps: [
        'Whisk all dry ingredients together in a large bowl.',
        'In a separate bowl, whisk buttermilk, egg, melted butter, and vanilla.',
        'Pour wet into dry and fold gently — lumps are fine. Do not overmix.',
        'Let batter rest 5 minutes. This is the secret to tall, fluffy pancakes.',
        'Cook on a lightly greased griddle over medium heat until bubbles form on top, then flip once.',
        'Serve with real maple syrup and butter.',
      ],
      tip: "Never press down on pancakes while cooking — you'll deflate all those air bubbles you worked for.",
    },
  ],

  appetizers: [
    {
      id: 'bruschetta',
      title: 'Classic Tomato Bruschetta',
      icon: '🍅',
      time: '15 min',
      servings: '6',
      difficulty: 'Easy',
      description: 'Toasted garlic rubbed crostini piled high with marinated fresh tomatoes and basil.',
      ingredients: [
        '1 baguette, sliced on the diagonal',
        '4 ripe Roma tomatoes, diced small',
        '3 cloves garlic (2 minced, 1 halved)',
        '¼ cup fresh basil, chiffonade',
        '2 tbsp extra-virgin olive oil',
        '1 tsp balsamic glaze',
        'Flaky salt & black pepper',
      ],
      steps: [
        'Broil baguette slices 1–2 minutes until golden. Watch carefully.',
        'While hot, rub each slice firmly with the cut garlic clove — the bread acts as a grater.',
        'Combine diced tomatoes, minced garlic, olive oil, basil, salt, and pepper. Toss and let sit 5 minutes.',
        'Spoon tomato mixture generously over each crostini.',
        'Drizzle with balsamic glaze and serve immediately.',
      ],
      tip: 'Salt the tomatoes early and drain any excess liquid so the bread stays crispy longer.',
    },
    {
      id: 'spinach-dip',
      title: 'Warm Spinach Artichoke Dip',
      icon: '🌿',
      time: '30 min',
      servings: '8',
      difficulty: 'Easy',
      description: 'Bubbling, cheesy, crowd-pleasing dip with spinach and artichoke hearts.',
      ingredients: [
        '1 (10oz) package frozen spinach, thawed & squeezed dry',
        '1 (14oz) can artichoke hearts, drained & chopped',
        '8oz cream cheese, softened',
        '½ cup sour cream',
        '½ cup mayonnaise',
        '1 cup shredded mozzarella',
        '½ cup grated Parmesan',
        '3 cloves garlic, minced',
        'Salt, pepper, red pepper flakes',
      ],
      steps: [
        'Preheat oven to 375°F (190°C).',
        'Beat cream cheese until smooth. Mix in sour cream and mayo.',
        'Fold in spinach, artichokes, garlic, and half of each cheese. Season well.',
        'Spread into an oven-safe dish. Top with remaining cheese.',
        'Bake 20–25 minutes until bubbly and golden on top.',
        'Serve hot with pita chips, crostini, or sliced baguette.',
      ],
      tip: 'Squeeze every drop of water from the spinach — excess moisture is the enemy of a creamy dip.',
    },
    {
      id: 'caprese-skewers',
      title: 'Caprese Skewers',
      icon: '🧀',
      time: '10 min',
      servings: '4',
      difficulty: 'Easy',
      description: 'Fresh mozzarella, tomato, and basil drizzled with aged balsamic — the ultimate no-cook appetizer.',
      ingredients: [
        '8oz fresh mozzarella balls (ciliegine)',
        '1 pint cherry tomatoes',
        '20 fresh basil leaves',
        '3 tbsp extra-virgin olive oil',
        '2 tbsp balsamic glaze',
        'Flaky sea salt & cracked black pepper',
        '20 small skewers or toothpicks',
      ],
      steps: [
        'Thread each skewer: one basil leaf (folded), one cherry tomato, one mozzarella ball.',
        'Arrange on a serving platter.',
        'Drizzle generously with olive oil and balsamic glaze.',
        'Season with flaky salt and plenty of cracked pepper.',
        'Serve immediately at room temperature.',
      ],
      tip: 'Use the best balsamic you can find — a thick aged balsamic glaze makes all the difference here.',
    },
  ],

  lunch: [
    {
      id: 'blt',
      title: 'The Perfect BLT',
      icon: '🥓',
      time: '15 min',
      servings: '2',
      difficulty: 'Easy',
      description: 'Crispy bacon, vine-ripened tomatoes, and iceberg on toasted white — a timeless classic.',
      ingredients: [
        '6 slices thick-cut bacon',
        '4 slices white sandwich bread, toasted',
        '2 ripe tomatoes, sliced thick',
        '4 leaves iceberg lettuce',
        '3 tbsp real mayonnaise',
        'Flaky salt & black pepper',
      ],
      steps: [
        "Cook bacon in a cold skillet over medium heat, flipping occasionally, until deeply crispy. Drain on paper towels.",
        "Toast bread to golden — this structural integrity matters.",
        "Spread mayo generously on all four slices. Don't skimp.",
        'Season tomato slices with flaky salt and pepper.',
        'Layer: lettuce → tomatoes → bacon. Close sandwich, cut diagonally.',
        'Eat immediately before the steam makes anything soggy.',
      ],
      tip: 'Cold skillet start for bacon = flat, evenly crispy strips, not curled ones.',
    },
    {
      id: 'caprese-grilled-cheese',
      title: 'Caprese Grilled Cheese',
      icon: '🧀',
      time: '12 min',
      servings: '1',
      difficulty: 'Easy',
      description: 'A luxurious upgrade — fresh mozzarella, tomato, and basil pesto melted between crusty sourdough.',
      ingredients: [
        '2 slices sourdough bread',
        '3oz fresh mozzarella, sliced',
        '1 ripe tomato, sliced & patted dry',
        '2 tbsp basil pesto',
        '1 tbsp salted butter, softened',
      ],
      steps: [
        'Pat tomato slices completely dry with paper towels — moisture ruins the crunch.',
        'Spread butter on the outside of each bread slice.',
        'Spread pesto on the inside faces.',
        'Layer mozzarella, then tomato, on one slice. Close sandwich.',
        'Cook in a skillet over medium-low heat, pressing gently, 3–4 min per side until deeply golden and cheese melts.',
        'Let rest 1 minute before cutting.',
      ],
      tip: 'Medium-low heat is key — gives the cheese time to melt before the bread burns.',
    },
    {
      id: 'chicken-caesar-wrap',
      title: 'Chicken Caesar Wrap',
      icon: '🌯',
      time: '20 min',
      servings: '2',
      difficulty: 'Easy',
      description: 'Juicy seared chicken, crisp romaine, shaved Parmesan, and creamy Caesar in a toasted wrap.',
      ingredients: [
        '2 boneless chicken breasts',
        '2 large flour tortillas',
        '2 cups romaine lettuce, chopped',
        '¼ cup shaved Parmesan',
        '¼ cup Caesar dressing',
        '½ cup croutons, crushed slightly',
        '1 tbsp olive oil',
        'Salt, pepper, garlic powder',
      ],
      steps: [
        'Season chicken with salt, pepper, and garlic powder.',
        'Sear in olive oil over medium-high heat 5–6 min per side until cooked through. Rest 5 min, then slice thin.',
        'Warm tortillas in a dry skillet 30 seconds per side.',
        'Toss romaine with Caesar dressing, Parmesan, and croutons.',
        'Layer salad and sliced chicken on each tortilla.',
        'Roll tightly, tucking in sides, then slice diagonally.',
      ],
      tip: 'Let the chicken rest before slicing — rushing it loses all the juices.',
    },
  ],

  dinner: [
    {
      id: 'shrimp-pasta',
      title: 'Garlic Butter Shrimp Pasta',
      icon: '🍤',
      time: '25 min',
      servings: '4',
      difficulty: 'Medium',
      description: 'Juicy shrimp in a silky garlic-butter white wine sauce tossed with linguine.',
      ingredients: [
        '12oz linguine',
        '1 lb large shrimp, peeled & deveined',
        '6 cloves garlic, minced',
        '4 tbsp unsalted butter',
        '2 tbsp olive oil',
        '⅓ cup dry white wine',
        '¼ cup pasta water (reserved)',
        'Juice of 1 lemon',
        'Handful fresh parsley, chopped',
        'Red pepper flakes, salt & pepper',
      ],
      steps: [
        'Cook pasta in well-salted water until al dente. Reserve ¼ cup pasta water before draining.',
        'Season shrimp with salt, pepper, and red pepper flakes.',
        'Heat olive oil in a large skillet over medium-high. Sear shrimp 1–2 min per side until pink. Remove and set aside.',
        'In same pan, melt butter over medium. Add garlic, cook 1 minute until fragrant.',
        'Add white wine, simmer 2 minutes until reduced by half.',
        'Add drained pasta and pasta water. Toss to coat. Return shrimp to pan.',
        'Finish with lemon juice and parsley. Serve immediately.',
      ],
      tip: "Don't overcook the shrimp — they go from perfect to rubbery in 30 seconds.",
    },
    {
      id: 'roast-chicken',
      title: 'Herb-Crusted Roast Chicken',
      icon: '🍗',
      time: '1 hr 20 min',
      servings: '4',
      difficulty: 'Medium',
      description: 'Crispy golden skin, incredibly juicy meat, and herb-infused butter under the skin.',
      ingredients: [
        '1 whole chicken (3½–4 lbs)',
        '4 tbsp softened butter',
        '4 cloves garlic, minced',
        '2 tsp fresh thyme leaves',
        '1 tsp fresh rosemary, chopped',
        '1 lemon, halved',
        '1 head garlic, halved crosswise',
        'Olive oil, salt & pepper',
      ],
      steps: [
        "Preheat oven to 425°F (220°C). Pat chicken completely dry — moisture is the enemy of crispy skin.",
        'Mix butter with garlic, thyme, rosemary, salt, and pepper.',
        'Gently loosen skin over breasts and thighs. Push herb butter underneath and massage it in.',
        'Rub outside with olive oil, season generously with salt and pepper.',
        'Stuff cavity with lemon halves and garlic head.',
        "Roast 55–65 minutes until juices run clear and skin is deeply golden. Internal temp: 165°F.",
        'Rest 10 minutes before carving — non-negotiable.',
      ],
      tip: 'Dry-brine by salting the chicken uncovered in the fridge overnight for the crispiest skin of your life.',
    },
    {
      id: 'beef-stir-fry',
      title: 'Beef & Broccoli Stir-Fry',
      icon: '🥩',
      time: '30 min',
      servings: '4',
      difficulty: 'Medium',
      description: 'Tender beef strips and crisp broccoli in a savory-sweet glossy sauce better than takeout.',
      ingredients: [
        '1 lb flank steak, sliced thin against the grain',
        '3 cups broccoli florets',
        '4 cloves garlic, minced',
        '1 tbsp fresh ginger, grated',
        '¼ cup soy sauce',
        '2 tbsp oyster sauce',
        '1 tbsp sesame oil',
        '1 tbsp cornstarch + 2 tbsp water',
        '2 tbsp vegetable oil',
        'Cooked white rice to serve',
      ],
      steps: [
        'Toss sliced beef with 1 tbsp soy sauce and cornstarch slurry. Let marinate 15 min.',
        'Blanch broccoli in boiling salted water 2 minutes. Drain and set aside.',
        'Mix remaining soy sauce, oyster sauce, and sesame oil in a bowl for the sauce.',
        "Heat wok or large skillet over high heat until smoking. Add oil and sear beef in a single layer — 90 seconds, don't stir. Flip, cook 30 more seconds. Remove.",
        'Add garlic and ginger to the wok, stir-fry 30 seconds.',
        'Add broccoli, then pour in sauce. Return beef. Toss everything to coat and glaze.',
        'Serve over white rice immediately.',
      ],
      tip: "The secret is a screaming-hot wok — get it as hot as your stove will allow before adding anything.",
    },
  ],

  pasta: [
    {
      id: 'cacio-e-pepe',
      title: 'Cacio e Pepe',
      icon: '🧀',
      time: '20 min',
      servings: '2',
      difficulty: 'Hard',
      description: "Rome's greatest pasta — just three ingredients, but requires mastery of technique.",
      ingredients: [
        '200g tonnarelli or spaghetti',
        '100g Pecorino Romano, finely grated',
        '50g Parmesan, finely grated',
        '2 tsp coarsely cracked black pepper',
        '1 tbsp kosher salt (for pasta water)',
      ],
      steps: [
        'Toast cracked pepper in a dry, wide skillet over medium heat 1 minute until fragrant.',
        'Cook pasta in lightly salted water (less than usual — the pasta water will be starchy).',
        'Reserve 1 cup pasta water before draining. Add ½ cup water to the pepper skillet.',
        'Add slightly undercooked pasta to the skillet and toss over medium-low heat.',
        'Remove pan from heat. Add grated cheeses a handful at a time, tossing and adding pasta water as needed to create a creamy, glossy sauce. Work quickly.',
        'Serve immediately — cacio e pepe waits for no one.',
      ],
      tip: 'Never add cold cheese to hot pasta over heat — it will clump. Pull the pan off the heat first.',
    },
    {
      id: 'bolognese',
      title: 'Sunday Bolognese',
      icon: '🍝',
      time: '2 hrs',
      servings: '6',
      difficulty: 'Medium',
      description: 'A slow-simmered meat sauce that fills the kitchen with warmth and makes the whole week better.',
      ingredients: [
        '1 lb ground beef',
        '½ lb ground pork',
        '1 onion, finely diced',
        '2 carrots, finely diced',
        '2 stalks celery, finely diced',
        '4 cloves garlic, minced',
        '2 tbsp tomato paste',
        '1 cup dry red wine',
        '1 (28oz) can whole San Marzano tomatoes',
        '½ cup whole milk',
        '½ cup beef stock',
        'Fresh pasta or rigatoni to serve',
      ],
      steps: [
        'Cook onion, carrot, and celery in olive oil over medium heat 8 min until softened.',
        'Add garlic, cook 1 minute. Add tomato paste, cook 2 minutes until it darkens slightly.',
        'Add beef and pork. Cook, breaking up, until browned and most liquid evaporates.',
        'Pour in red wine. Simmer until fully absorbed, about 5 minutes.',
        'Add crushed tomatoes and stock. Season well. Simmer uncovered on lowest heat for 90 minutes, stirring occasionally.',
        'Stir in milk in the last 10 minutes — it softens any acidity.',
        'Toss with fresh pasta and plenty of Parmesan.',
      ],
      tip: 'The longer it simmers, the better it gets. This sauce is even better the next day.',
    },
    {
      id: 'risotto',
      title: 'Mushroom Risotto',
      icon: '🍄',
      time: '40 min',
      servings: '4',
      difficulty: 'Hard',
      description: 'Creamy, restaurant-worthy risotto with earthy mushrooms and truffle-kissed Parmesan.',
      ingredients: [
        '1½ cups Arborio rice',
        '1 lb mixed mushrooms (cremini, shiitake), sliced',
        '1 shallot, minced',
        '3 cloves garlic, minced',
        '½ cup dry white wine',
        '5 cups warm chicken or vegetable stock',
        '3 tbsp butter',
        '½ cup Parmesan, grated',
        '2 tbsp olive oil',
        'Fresh thyme, salt & pepper',
        'Truffle oil to finish (optional)',
      ],
      steps: [
        'Keep stock warm in a separate saucepan over low heat — cold stock kills the cooking.',
        'Sauté mushrooms in olive oil over high heat until golden. Season, set aside.',
        'In a wide heavy pot, sweat shallot in 1 tbsp butter 2 min. Add garlic, 30 sec.',
        'Add rice, stir to toast for 1 minute until edges look translucent.',
        'Add wine, stir until absorbed.',
        'Add warm stock one ladle at a time, stirring constantly and adding the next ladle only when the previous is absorbed. This takes 20–22 minutes.',
        'When rice is al dente and sauce is creamy, remove from heat. Beat in remaining butter and Parmesan. Fold in mushrooms.',
        'Season, drizzle with truffle oil, and serve immediately.',
      ],
      tip: 'Risotto waits for no one — your guests wait for the risotto, never the reverse.',
    },
  ],

  desserts: [
    {
      id: 'lava-cake',
      title: 'Chocolate Lava Cake',
      icon: '🍫',
      time: '25 min',
      servings: '4',
      difficulty: 'Medium',
      description: 'Individual chocolate cakes with a warm, flowing molten center. Pure drama on a plate.',
      ingredients: [
        '4 oz (115g) dark chocolate (70%), chopped',
        '4 tbsp unsalted butter',
        '2 eggs + 2 egg yolks',
        '¼ cup powdered sugar',
        '2 tbsp all-purpose flour',
        '1 tsp vanilla extract',
        'Pinch of salt',
        'Cocoa powder & butter to prep ramekins',
        'Vanilla ice cream to serve',
      ],
      steps: [
        'Preheat oven to 425°F (220°C). Butter 4 ramekins and dust with cocoa powder.',
        'Melt chocolate and butter together in a double boiler or microwave in 30-sec bursts. Stir smooth.',
        'Whisk eggs, yolks, powdered sugar, and vanilla until pale and slightly thickened.',
        'Fold chocolate mixture into eggs. Fold in flour and salt.',
        'Divide batter among ramekins. At this point, you can refrigerate up to 24 hours.',
        'Bake 12–13 minutes — the edges will be set but center will jiggle. Do not overbake.',
        'Rest 1 minute, run a knife around the edge, and invert onto a plate. Serve immediately with ice cream.',
      ],
      tip: 'Test bake one first to dial in your oven — 30 seconds makes the difference between lava and cake.',
    },
    {
      id: 'tiramisu',
      title: 'Classic Tiramisu',
      icon: '☕',
      time: '30 min + 4 hrs chill',
      servings: '8',
      difficulty: 'Medium',
      description: 'The Italian classic — espresso-soaked ladyfingers layered with silky mascarpone cream.',
      ingredients: [
        '6 egg yolks',
        '¾ cup sugar',
        '1 lb (450g) mascarpone cheese',
        '1½ cups heavy cream',
        '2 cups strong espresso, cooled',
        '2 tbsp dark rum or Marsala (optional)',
        '24 ladyfinger cookies (Savoiardi)',
        'Cocoa powder for dusting',
      ],
      steps: [
        'Beat egg yolks and sugar with a hand mixer 3–4 minutes until thick and pale yellow.',
        'Add mascarpone and beat until smooth. Do not overbeat.',
        'In a separate bowl, whip heavy cream to stiff peaks. Fold gently into mascarpone mixture.',
        'Mix espresso with rum in a shallow bowl. Working quickly, dip each ladyfinger for 2 seconds per side — not a soak, a dip.',
        'Layer dipped ladyfingers in a 9x13 dish. Spread half the cream over the top.',
        'Repeat with remaining ladyfingers and cream.',
        'Dust generously with cocoa powder. Refrigerate at least 4 hours, ideally overnight.',
      ],
      tip: 'Two-second dip, not a soak — soggy ladyfingers are the number one tiramisu sin.',
    },
    {
      id: 'lemon-tart',
      title: 'Classic Lemon Tart',
      icon: '🍋',
      time: '45 min + 2 hrs chill',
      servings: '8',
      difficulty: 'Hard',
      description: 'A buttery shortcrust shell filled with silky, intensely lemony curd.',
      ingredients: [
        '1¼ cups all-purpose flour',
        '½ cup powdered sugar',
        '½ cup cold butter, cubed',
        '1 egg yolk',
        '4 eggs',
        '1 cup sugar',
        '½ cup fresh lemon juice (about 4 lemons)',
        'Zest of 2 lemons',
        '½ cup cold butter, cubed (for curd)',
        'Powdered sugar to finish',
      ],
      steps: [
        'Pulse flour, powdered sugar, and cold butter in a food processor until sandy. Add egg yolk, pulse until dough just comes together. Press into a tart pan, chill 30 min.',
        'Blind bake crust at 375°F for 15 min with weights, then 5 min without until pale gold.',
        'For the curd: whisk eggs, sugar, lemon juice, and zest in a saucepan over medium-low heat, stirring constantly, until thickened enough to coat a spoon — about 8–10 min.',
        'Remove from heat. Whisk in cold butter cubes a few at a time until silky.',
        'Strain through a fine mesh sieve into the warm crust.',
        'Bake at 300°F for 15 min until just barely set — it should still wobble in the center.',
        'Cool completely, then refrigerate 2 hours. Dust with powdered sugar before serving.',
      ],
      tip: 'Strain the curd — it removes zest bits and any scrambled egg traces for the smoothest possible texture.',
    },
  ],
};

/* ═══════════════════════════════════════════════════════
   SUPABASE
═══════════════════════════════════════════════════════ */
const { createClient } = supabase;
const db = createClient(
  'https://nnwovviyrpyagjbtmjrs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ud292dml5cnB5YWdqYnRtanJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNjE2MzMsImV4cCI6MjA4NzYzNzYzM30.cuOhoDPpgtHixUbL55SbbccNlR6-zu7J8w7VxFPNI0g'
);

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS / QUOTES
═══════════════════════════════════════════════════════ */
const testimonials = [
  { text: 'This website has changed me from a grilled cheese protégé to a Michelin star chef.', author: 'Jamie R.' },
  { text: 'I used to burn water. Now I make Sunday Bolognese that my whole family fights over.', author: 'Sarah M.' },
  { text: "Zach's Cacio e Pepe recipe saved my first dinner party. Ten out of ten, would recommend.", author: 'Marco T.' },
  { text: "The chocolate lava cake recipe is genuinely unhinged. I've made it 14 times in two months.", author: 'Ashley K.' },
  { text: 'My partner thought I hired a private chef. I just used Zach Cooks the Books.', author: 'Chris B.' },
  { text: "Finally a recipe site that doesn't bury the recipe under a 2,000 word life story.", author: 'Devon P.' },
  { text: 'Made the herb-crusted roast chicken for my in-laws. I am now their favorite person.', author: 'Taylor W.' },
  { text: 'The tiramisu recipe is so good it should come with a warning label.', author: 'Priya K.' },
];

function buildQuotes() {
  const track = document.getElementById('quotes-track');
  if (!track) return;
  // Duplicate for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];
  track.innerHTML = doubled.map(q => `
    <div class="quote-card">
      <blockquote>"${q.text}"</blockquote>
      <cite>— ${q.author}</cite>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════
   SESSION ID  (one permanent ID per browser)
═══════════════════════════════════════════════════════ */
function getSessionId() {
  let id = localStorage.getItem('zctb_session_id');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('zctb_session_id', id);
  }
  return id;
}
const SESSION_ID = getSessionId();

/* ═══════════════════════════════════════════════════════
   REACTIONS  (Supabase — shared across all visitors)
═══════════════════════════════════════════════════════ */
async function handleVote(recipeId, vote) {
  const likeBtn    = document.getElementById('like-btn-' + recipeId);
  const dislikeBtn = document.getElementById('dislike-btn-' + recipeId);
  if (likeBtn)    likeBtn.disabled    = true;
  if (dislikeBtn) dislikeBtn.disabled = true;

  const { data: existing } = await db
    .from('votes')
    .select('vote')
    .eq('recipe_id', recipeId)
    .eq('session_id', SESSION_ID)
    .maybeSingle();

  if (existing && existing.vote === vote) {
    // Same button clicked again — remove vote
    await db.from('votes')
      .delete()
      .eq('recipe_id', recipeId)
      .eq('session_id', SESSION_ID);
  } else {
    // New vote or switching vote
    await db.from('votes').upsert(
      { recipe_id: recipeId, session_id: SESSION_ID, vote },
      { onConflict: 'recipe_id,session_id' }
    );
  }

  await renderReactions(recipeId);
}

async function renderReactions(recipeId) {
  const [countsRes, myVoteRes] = await Promise.all([
    db.from('votes').select('vote').eq('recipe_id', recipeId),
    db.from('votes').select('vote').eq('recipe_id', recipeId).eq('session_id', SESSION_ID).maybeSingle(),
  ]);

  const counts   = countsRes.data || [];
  const likes    = counts.filter(v => v.vote === 'like').length;
  const dislikes = counts.filter(v => v.vote === 'dislike').length;
  const userVote = myVoteRes.data ? myVoteRes.data.vote : null;

  const likeBtn    = document.getElementById('like-btn-' + recipeId);
  const dislikeBtn = document.getElementById('dislike-btn-' + recipeId);
  if (!likeBtn || !dislikeBtn) return;

  likeBtn.className    = 'reaction-btn' + (userVote === 'like'    ? ' liked'    : '');
  likeBtn.innerHTML    = '👍 <span class="reaction-count">' + likes    + '</span>';
  likeBtn.disabled     = false;

  dislikeBtn.className = 'reaction-btn' + (userVote === 'dislike' ? ' disliked' : '');
  dislikeBtn.innerHTML = '👎 <span class="reaction-count">' + dislikes + '</span>';
  dislikeBtn.disabled  = false;
}

/* ═══════════════════════════════════════════════════════
   COMMENTS  (Supabase — shared across all visitors)
═══════════════════════════════════════════════════════ */
function escapeHtml(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
}

async function renderComments(recipeId) {
  const list = document.getElementById('comments-list-' + recipeId);
  if (!list) return;

  list.innerHTML = '<p class="no-comments">Loading comments...</p>';

  const { data, error } = await db
    .from('comments')
    .select('*')
    .eq('recipe_id', recipeId)
    .order('created_at', { ascending: false });

  if (error || !data || data.length === 0) {
    list.innerHTML = '<p class="no-comments">No comments yet — be the first to share your experience!</p>';
    return;
  }

  list.innerHTML = data.map(c => `
    <div class="comment-item">
      <div class="comment-meta">
        <span class="comment-author">${escapeHtml(c.name)}</span>
        <span class="comment-date">${new Date(c.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
      </div>
      <p class="comment-text">${escapeHtml(c.text)}</p>
    </div>
  `).join('');
}

async function submitComment(recipeId) {
  const nameEl = document.getElementById('comment-name-' + recipeId);
  const textEl = document.getElementById('comment-text-' + recipeId);
  const name   = nameEl ? nameEl.value.trim() : '';
  const text   = textEl ? textEl.value.trim() : '';

  if (!name || !text) {
    alert('Please enter your name and a comment before posting.');
    return;
  }

  const btn = document.querySelector('.comment-submit-btn');
  if (btn) { btn.textContent = 'Posting...'; btn.disabled = true; }

  const { error } = await db.from('comments').insert({ recipe_id: recipeId, name, text });

  if (error) {
    alert('Failed to post comment. Please try again.');
    if (btn) { btn.textContent = 'Post Comment'; btn.disabled = false; }
    return;
  }

  nameEl.value = '';
  textEl.value = '';
  if (btn) { btn.textContent = 'Post Comment'; btn.disabled = false; }
  await renderComments(recipeId);
}

/* ═══════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════ */
let currentCategory = null;

/* ═══════════════════════════════════════════════════════
   NAVIGATION HELPERS
═══════════════════════════════════════════════════════ */
function showView(id) {
  ['view-home', 'view-category', 'view-recipe'].forEach(v => {
    document.getElementById(v).classList.toggle('hidden', v !== id);
  });
}

function setBreadcrumb(parts) {
  const nav = document.getElementById('breadcrumb');
  nav.innerHTML = '';
  parts.forEach((p, i) => {
    if (i > 0) {
      const sep = document.createElement('span');
      sep.textContent = '›';
      nav.appendChild(sep);
    }
    if (p.action) {
      const a = document.createElement('a');
      a.textContent = p.label;
      a.onclick = p.action;
      nav.appendChild(a);
    } else {
      const s = document.createElement('span');
      s.className = 'current';
      s.textContent = p.label;
      nav.appendChild(s);
    }
  });
}

/* ═══════════════════════════════════════════════════════
   PAGES
═══════════════════════════════════════════════════════ */
function goHome() {
  currentCategory = null;
  showView('view-home');
  setBreadcrumb([{ label: 'Home' }]);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goCategory(catId) {
  const cat = categories.find(c => c.id === catId);
  currentCategory = catId;
  showView('view-category');
  setBreadcrumb([
    { label: 'Home', action: goHome },
    { label: cat.label },
  ]);

  const header = document.getElementById('cat-header');
  header.innerHTML = '<span class="icon">' + cat.icon + '</span><h2>' + cat.label + '</h2>';

  const grid = document.getElementById('recipe-grid');
  grid.innerHTML = '';
  (recipes[catId] || []).forEach(r => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => goRecipe(catId, r.id);
    card.innerHTML = `
      <div class="recipe-thumb">${r.icon}</div>
      <div class="recipe-info">
        <h3>${r.title}</h3>
        <div class="meta">
          <span>⏱ ${r.time}</span>
          <span>👥 Serves ${r.servings}</span>
          <span>📊 ${r.difficulty}</span>
        </div>
        <p style="font-size:.82rem;color:#666;margin-top:.5rem;font-style:italic;">${r.description}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goRecipe(catId, recipeId) {
  const cat = categories.find(c => c.id === catId);
  const r   = (recipes[catId] || []).find(x => x.id === recipeId);
  if (!r) return;

  showView('view-recipe');
  setBreadcrumb([
    { label: 'Home',    action: goHome },
    { label: cat.label, action: () => goCategory(catId) },
    { label: r.title },
  ]);

  document.getElementById('back-to-cat').onclick = () => goCategory(catId);

  const detail = document.getElementById('recipe-detail');

  detail.innerHTML = `
    <div class="recipe-hero">
      <span class="r-icon">${r.icon}</span>
      <h2>${r.title}</h2>
      <p>${r.description}</p>
      <div class="recipe-stats">
        <div class="stat"><div class="label">Time</div><div class="value">${r.time}</div></div>
        <div class="stat"><div class="label">Serves</div><div class="value">${r.servings}</div></div>
        <div class="stat"><div class="label">Difficulty</div><div class="value">${r.difficulty}</div></div>
      </div>
    </div>

    <div class="recipe-body">
      <div class="recipe-section">
        <h3>🛒 Ingredients</h3>
        <ul class="ingredients-list">
          ${r.ingredients.map(i => '<li>' + i + '</li>').join('')}
        </ul>
      </div>
      <div class="recipe-section">
        <h3>👨‍🍳 Method</h3>
        <ol class="steps-list">
          ${r.steps.map(s => '<li>' + s + '</li>').join('')}
        </ol>
        ${r.tip ? '<div class="chef-tip"><strong>Chef Zach\'s Tip:</strong> ' + r.tip + '</div>' : ''}
      </div>
    </div>

    <div class="recipe-reactions">
      <h3>Rate this recipe:</h3>
      <button id="like-btn-${r.id}" class="reaction-btn" onclick="handleVote('${r.id}', 'like')" disabled>
        👍 <span class="reaction-count">…</span>
      </button>
      <button id="dislike-btn-${r.id}" class="reaction-btn" onclick="handleVote('${r.id}', 'dislike')" disabled>
        👎 <span class="reaction-count">…</span>
      </button>
    </div>

    <div class="comments-section">
      <h3>💬 Comments</h3>
      <div class="comment-form">
        <input  type="text"
                id="comment-name-${r.id}"
                placeholder="Your name"
                maxlength="60" />
        <textarea id="comment-text-${r.id}"
                  placeholder="Share your experience, tips, or questions about this recipe..."></textarea>
        <button class="comment-submit-btn" onclick="submitComment('${r.id}')">Post Comment</button>
      </div>
      <div class="comments-list" id="comments-list-${r.id}"></div>
    </div>
  `;

  renderReactions(r.id);
  renderComments(r.id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */
(function init() {
  // Category cards
  const grid = document.getElementById('category-grid');
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.onclick = () => goCategory(cat.id);
    card.innerHTML = `
      <span class="icon">${cat.icon}</span>
      <h3>${cat.label}</h3>
      <p>${cat.desc}</p>
    `;
    grid.appendChild(card);
  });

  buildQuotes();
  goHome();
})();
