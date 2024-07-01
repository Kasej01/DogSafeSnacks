const foodData = [
    { name: 'Apple', isSafe: true},
    { name: 'Banana', isSafe: true},
    { name: 'Blueberries', isSafe: true},
    { name: 'Strawberries', isSafe: true},
    { name: 'Raspberries', isSafe: true},
    { name: 'Blackberries', isSafe: true},
    { name: 'Cantaloupe', isSafe: true},
    { name: 'Watermelon', isSafe: true},
    { name: 'Peaches', isSafe: true},
    { name: 'Pears', isSafe: true},
    { name: 'Pineapple', isSafe: true},
    { name: 'Mango', isSafe: true},
    { name: 'Kiwi', isSafe: true},
    { name: 'Oranges', isSafe: true},
    { name: 'Tangerines', isSafe: true},
    { name: 'Papaya', isSafe: true},
    { name: 'Pumpkin', isSafe: true},
    { name: 'Sweet Potatoes (Cooked)', isSafe: true},
    { name: 'Potatoes (Cooked)', isSafe: true},
    { name: 'Carrots', isSafe: true},
    { name: 'Green Beans', isSafe: true},
    { name: 'Cucumber', isSafe: true},
    { name: 'Zucchini', isSafe: true},
    { name: 'Spinach', isSafe: true},
    { name: 'Kale', isSafe: true},
    { name: 'Broccoli', isSafe: true},
    { name: 'Cauliflower', isSafe: true},
    { name: 'Brussels Sprouts', isSafe: true},
    { name: 'Celery', isSafe: true},
    { name: 'Bell Peppers', isSafe: true},
    { name: 'Peas', isSafe: true},
    { name: 'Lettuce', isSafe: true},
    { name: 'Squash', isSafe: true},
    { name: 'Applesauce (unsweetened)', isSafe: true},
    { name: 'Yogurt (plain)', isSafe: true},
    { name: 'Cottage Cheese (moderate amounts)', isSafe: true},
    { name: 'Cheese (moderate amounts)', isSafe: true},
    { name: 'Eggs', isSafe: true},
    { name: 'Chicken', isSafe: true},
    { name: 'Turkey', isSafe: true},
    { name: 'Beef', isSafe: true},
    { name: 'Lamb', isSafe: true},
    { name: 'Duck', isSafe: true},
    { name: 'Salmon', isSafe: true},
    { name: 'Tuna', isSafe: true},
    { name: 'Trout', isSafe: true},
    { name: 'Whitefish', isSafe: true},
    { name: 'Cod', isSafe: true},
    { name: 'Shrimp', isSafe: true},
    { name: 'Crab', isSafe: true},
    { name: 'Oatmeal', isSafe: true},
    { name: 'Rice', isSafe: true},
    { name: 'Quinoa', isSafe: true},
    { name: 'Barley', isSafe: true},
    { name: 'Pumpkin Seeds', isSafe: true},
    { name: 'Sunflower Seeds', isSafe: true},
    { name: 'Peanut Butter (unsweetened)', isSafe: true},
    { name: 'Almond Butter', isSafe: true},
    { name: 'Cashew Butter', isSafe: true},
    { name: 'Flaxseed', isSafe: true},
    { name: 'Chia Seeds', isSafe: true},
    { name: 'Coconut (unsweetened)', isSafe: true},
    { name: 'Coconut Oil', isSafe: true},
    { name: 'Olive Oil', isSafe: true},
    { name: 'Honey', isSafe: true},
    { name: 'Cranberries', isSafe: true},
    { name: 'Cranberry Sauce (unsweetened)', isSafe: true},
    { name: 'Nectarines', isSafe: true},
    { name: 'Apricots', isSafe: true},
    { name: 'Cherries (pitted)', isSafe: true},
    { name: 'Figs (fresh)', isSafe: true},
    { name: 'Dates (fresh)', isSafe: true},
    { name: 'Persimmons', isSafe: true},
    { name: 'Guava', isSafe: true},
    { name: 'Lychee', isSafe: true},
    { name: 'Dragon Fruit', isSafe: true},
    { name: 'Passion Fruit', isSafe: true},
    { name: 'Pomegranate Seeds', isSafe: true},
    { name: 'Starfruit', isSafe: true},
    { name: 'Durian', isSafe: true},
    { name: 'Jicama', isSafe: true},
    { name: 'Parsnips', isSafe: true},
    { name: 'Turnips', isSafe: true},
    { name: 'Beets', isSafe: true},
    { name: 'Artichokes', isSafe: true},
    { name: 'Asparagus', isSafe: true},
    { name: 'Eggplant', isSafe: true},
    { name: 'Okra', isSafe: true},
    { name: 'Radishes', isSafe: true},
    { name: 'Fennel', isSafe: true},
    { name: 'Water Chestnuts', isSafe: true},
    { name: 'Bok Choy', isSafe: true},
    { name: 'Swiss Chard', isSafe: true},
    { name: 'Arugula', isSafe: true},
    { name: 'Collard Greens', isSafe: true},
    { name: 'Mustard Greens', isSafe: true},
    { name: 'Peaches (fresh)', isSafe: true},
    { name: 'Plums (fresh)', isSafe: true},
    { name: 'Cantaloupe (fresh)', isSafe: true},
    { name: 'Grapefruit', isSafe: true},
    { name: 'Rutabaga', isSafe: true},
    { name: 'Napa Cabbage', isSafe: true},
    { name: 'Butternut Squash', isSafe: true},
    { name: 'Acorn Squash', isSafe: true},
    { name: 'Spaghetti Squash', isSafe: true},
    { name: 'Coconut Meat', isSafe: true},
    { name: 'Mango (fresh)', isSafe: true},
    { name: 'Lychee (fresh)', isSafe: true},
    { name: 'Kumquat', isSafe: true},
    { name: 'Clementine', isSafe: true},
    { name: 'Boysenberries', isSafe: true},
    { name: 'Gooseberries', isSafe: true},
    { name: 'Mulberries', isSafe: true},
    { name: 'Cloudberries', isSafe: true},
    { name: 'Huckleberries', isSafe: true},
    { name: 'Salmonberries', isSafe: true},
    { name: 'Lingonberries', isSafe: true},
    { name: 'Pine Nuts', isSafe: true},
    { name: 'Hemp Seeds', isSafe: true},
    { name: 'Watermelon (seedless)', isSafe: true},
    { name: 'Passionfruit', isSafe: true},
    { name: 'Celeriac', isSafe: true},
    { name: 'Chayote', isSafe: true},
    { name: 'Jackfruit', isSafe: true},
    { name: 'Tamarind', isSafe: true},
    { name: 'Horned Melon', isSafe: true},
    { name: 'Quince', isSafe: true},
    { name: 'Sapodilla', isSafe: true},
    { name: 'Soursop', isSafe: true},
    { name: 'Breadfruit', isSafe: true},
    { name: 'Longan', isSafe: true},
    { name: 'Mung Beans', isSafe: true},
    { name: 'Adzuki Beans', isSafe: true},
    { name: 'Navy Beans', isSafe: true},
    { name: 'Lima Beans', isSafe: true},
    { name: 'Fava Beans', isSafe: true},
    { name: 'Black Beans', isSafe: true},
    { name: 'Kidney Beans', isSafe: true},
    { name: 'Chickpeas', isSafe: true},
    { name: 'Lentils', isSafe: true},
    { name: 'Split Peas', isSafe: true},
    { name: 'Butter Beans', isSafe: true},
    { name: 'Garbanzo Beans', isSafe: true},
    { name: 'Pigeon Peas', isSafe: true},
    { name: 'Cannellini Beans', isSafe: true},
    { name: 'Soybeans', isSafe: true},
    { name: 'Edamame', isSafe: true},
    { name: 'Tempeh', isSafe: true},
    { name: 'Tofu', isSafe: true},
    { name: 'Bamboo Shoots', isSafe: true},
    { name: 'Sprouts', isSafe: true},
    { name: 'Microgreens', isSafe: true},
    { name: 'Alfalfa', isSafe: true},
    { name: 'Cilantro', isSafe: true},
    { name: 'Parsley', isSafe: true},
    { name: 'Basil', isSafe: true},
    { name: 'Mint', isSafe: true},
    { name: 'Thyme', isSafe: true},
    { name: 'Rosemary', isSafe: true},
    { name: 'Oregano', isSafe: true},
    { name: 'Sage', isSafe: true},
    { name: 'Tarragon', isSafe: true},
    { name: 'Dill', isSafe: true},
    { name: 'Chives', isSafe: true},
    { name: 'Garlic (in small amounts)', isSafe: true},
    { name: 'Leeks', isSafe: true},
    { name: 'Shallots', isSafe: true},
    { name: 'Green Onions', isSafe: true},
    { name: 'Beet Greens', isSafe: true},
    { name: 'Turnip Greens', isSafe: true},
    { name: 'Radish Greens', isSafe: true},
    { name: 'Mustard Greens', isSafe: true},
    { name: 'Dandelion Greens', isSafe: true},
    { name: 'Purslane', isSafe: true},
    { name: 'Chicory', isSafe: true},
    { name: 'Endive', isSafe: true},
    { name: 'Frisée', isSafe: true},
    { name: 'Escarole', isSafe: true},
    { name: 'Romaine Lettuce', isSafe: true},
    { name: 'Butter Lettuce', isSafe: true},
    { name: 'Iceberg Lettuce', isSafe: true},
    { name: 'Boston Lettuce', isSafe: true},
    { name: 'Radicchio', isSafe: true},
    { name: 'Sunchokes', isSafe: true},
    { name: 'Taro', isSafe: true},
    { name: 'Yams', isSafe: true},
    { name: 'Jerusalem Artichokes', isSafe: true},
    { name: 'Yucca', isSafe: true},
    { name: 'Jalapeno Peppers', isSafe: true},
    { name: 'Habanero Peppers', isSafe: true},
    { name: 'Poblano Peppers', isSafe: true},
    { name: 'Anaheim Peppers', isSafe: true},
    { name: 'Serrano Peppers', isSafe: true},
    { name: 'Bell Peppers (all colors)', isSafe: true},
    { name: 'Cranberry Beans', isSafe: true},
    { name: 'Pole Beans', isSafe: true},
    { name: 'Snap Beans', isSafe: true},
    { name: 'Runner Beans', isSafe: true},
    { name: 'Soy Beans', isSafe: true},
    { name: 'Broad Beans', isSafe: true},
    { name: 'Scarlet Runner Beans', isSafe: true},
    { name: 'Wax Beans', isSafe: true},
    { name: 'Chinese Long Beans', isSafe: true},
    { name: 'Asparagus Beans', isSafe: true},
    { name: 'Yardlong Beans', isSafe: true},
    { name: 'Lima Beans', isSafe: true},
    { name: 'Fava Beans', isSafe: true},
    { name: 'Pinto Beans', isSafe: true},
    { name: 'Navy Beans', isSafe: true},
    { name: 'Anasazi Beans', isSafe: true},
    { name: 'Black-Eyed Peas', isSafe: true},
    { name: 'Pigeon Peas', isSafe: true},
    { name: 'Yellow Peas', isSafe: true},
    { name: 'Green Peas', isSafe: true},
    { name: 'Split Peas', isSafe: true},
    { name: 'Garbanzo Beans', isSafe: true},
    { name: 'Adzuki Beans', isSafe: true},
    { name: 'Mung Beans', isSafe: true},
    { name: 'Tepary Beans', isSafe: true},
    { name: 'Red Beans', isSafe: true},
    { name: 'White Beans', isSafe: true},
    { name: 'Green Beans', isSafe: true},
    { name: 'Yellow Beans', isSafe: true},
    { name: 'Pink Beans', isSafe: true},
    { name: 'Cranberry Beans', isSafe: true},
    { name: 'Calypso Beans', isSafe: true},
    { name: 'Christmas Lima Beans', isSafe: true},
    { name: 'Italian Flat Beans', isSafe: true},
    { name: 'Dragon Tongue Beans', isSafe: true},
    { name: 'Rattlesnake Beans', isSafe: true},
    { name: 'Tongue of Fire Beans', isSafe: true},
    { name: 'Royal Burgundy Beans', isSafe: true},
    { name: 'Blue Lake Beans', isSafe: true},
    { name: 'Borlotti Beans', isSafe: true},
    { name: 'Cranberry Beans', isSafe: true},
    { name: 'Scarlet Runner Beans', isSafe: true},
    { name: 'Yellow Wax Beans', isSafe: true},
    { name: 'Purple Podded Beans', isSafe: true},
    { name: 'Dragon Langerie Beans', isSafe: true},
    { name: 'Fagiolo di Trasimeno Beans', isSafe: true},
    { name: 'Rodelle di Pratolino Beans', isSafe: true},
    { name: 'Badda Beans', isSafe: true},
    { name: 'Canario Beans', isSafe: true},
    { name: 'Christmas Lima Beans', isSafe: true},
    { name: 'Cannelini Beans', isSafe: true},
    { name: 'Cranberry Beans', isSafe: true},
    { name: 'Boulder Beans', isSafe: true},
    { name: 'Chocolate', isSafe: false},
    { name: 'Grapes', isSafe: false},
    { name: 'Raisins', isSafe: false},
    { name: 'Avocado', isSafe: false},
    { name: 'Onions', isSafe: false},
    { name: 'Garlic', isSafe: false},
    { name: 'Chives', isSafe: false},
    { name: 'Macadamia Nuts', isSafe: false},
    { name: 'Walnuts', isSafe: false},
    { name: 'Pecans', isSafe: false},
    { name: 'Almonds', isSafe: false},
    { name: 'Alcohol', isSafe: false},
    { name: 'Coffee', isSafe: false},
    { name: 'Tea', isSafe: false},
    { name: 'Caffeine', isSafe: false},
    { name: 'Raw Yeast Dough', isSafe: false},
    { name: 'Xylitol (found in sugar-free gum, candies, and baked goods)', isSafe: false},
    { name: 'Salt', isSafe: false},
    { name: 'Fatty Foods', isSafe: false},
    { name: 'Bones (cooked)', isSafe: false},
    { name: 'Corn on the Cob', isSafe: false},
    { name: 'Mushrooms (wild)', isSafe: false},
    { name: 'Nutmeg', isSafe: false},
    { name: 'Raw Eggs', isSafe: false},
    { name: 'Raw Meat', isSafe: false},
    { name: 'Raw Fish', isSafe: false},
    { name: 'Candy', isSafe: false},
    { name: 'Gum', isSafe: false},
    { name: 'Fat Trimmings', isSafe: false},
    { name: 'Spoiled Food', isSafe: false},
    { name: 'Cooked Bones', isSafe: false},
    { name: 'Large Amounts of Dairy Products', isSafe: false},
    { name: 'High-Sodium Foods', isSafe: false},
    { name: 'Sugary Foods', isSafe: false},
    { name: 'Citrus Fruits (large amounts)', isSafe: false},
    { name: 'Apple Seeds', isSafe: false},
    { name: 'Cherry Pits', isSafe: false},
    { name: 'Peach Pits', isSafe: false},
    { name: 'Plum Pits', isSafe: false},
    { name: 'Persimmon Seeds', isSafe: false},
    { name: 'Rhubarb Leaves', isSafe: false},
    { name: 'Tomato Leaves and Stems', isSafe: false},
    { name: 'Potato Leaves and Stems', isSafe: false},
    { name: 'Artificial Sweeteners', isSafe: false},
    { name: 'Blue Cheese', isSafe: false},
    { name: 'Green Tomatoes', isSafe: false},
    { name: 'Unripe Potatoes', isSafe: false},
    { name: 'Wild Cherry', isSafe: false},
    { name: 'Poppy Seeds', isSafe: false},
    { name: 'Mustard Seeds', isSafe: false},
    { name: 'Hops', isSafe: false},
    { name: 'Raw Honey', isSafe: false},
    { name: 'Black Walnuts', isSafe: false},
    { name: 'Stone Fruit Pits', isSafe: false},
    { name: 'Coconut Oil (large amounts)', isSafe: false},
    { name: 'Baking Powder', isSafe: false},
    { name: 'Baking Soda', isSafe: false},
    { name: 'Spices (like garlic powder, onion powder, etc.)', isSafe: false},
    { name: 'Energy Drinks', isSafe: false},
    { name: 'Human Medications', isSafe: false},
    { name: 'Vitamin D Supplements', isSafe: false},
    { name: 'Iron Supplements', isSafe: false},
    { name: 'Pain Relievers (like aspirin, ibuprofen, acetaminophen)', isSafe: false},
    { name: 'Mothballs', isSafe: false},
    { name: 'Detergents', isSafe: false},
    { name: 'Fabric Softener Sheets', isSafe: false},
    { name: 'Antifreeze', isSafe: false},
    { name: 'Rodent Poison', isSafe: false},
    { name: 'Insecticides', isSafe: false},
    { name: 'Weed Killers', isSafe: false},
    { name: 'De-icing Salts', isSafe: false},
    { name: 'Household Cleaners', isSafe: false},
    { name: 'Certain Houseplants', isSafe: false},
    { name: 'Garlic (large amounts)', isSafe: false},
    { name: 'Grapes (fresh and dried)', isSafe: false},
    { name: 'Sugar-Free Candies', isSafe: false},
    { name: 'Marijuana', isSafe: false},
    { name: 'Canned Beans', isSafe: false},
    { name: 'Baked Beans', isSafe: false},
    { name: 'Refried Beans', isSafe: false},
    { name: 'Raw Beans', isSafe: false}
    ];

const ingredientData = [
    { name: 'sugar', isSafe: false },
    { name: 'xylitol', isSafe: false },
    { name: 'chocolate', isSafe: false },
    { name: 'caffeine', isSafe: false },
    { name: 'alcohol', isSafe: false },
    { name: 'onions', isSafe: false },
    { name: 'garlic', isSafe: false },
    { name: 'grapes', isSafe: false },
    { name: 'raisins', isSafe: false },
    { name: 'macadamia nuts', isSafe: false },
    { name: 'avocado', isSafe: false },
    { name: 'mushrooms', isSafe: false },
    { name: 'yeast dough', isSafe: false },
    { name: 'raw eggs', isSafe: false },
    { name: 'raw meat', isSafe: false },
    { name: 'bones', isSafe: false },
    { name: 'milk', isSafe: false },
    { name: 'cheese', isSafe: false },
    { name: 'salt', isSafe: false },
    { name: 'sodium nitrate', isSafe: false },
    { name: 'sodium nitrite', isSafe: false },
    { name: 'fat trimmings', isSafe: false },
    { name: 'cooked bones', isSafe: false },
    { name: 'peach pits', isSafe: false },
    { name: 'plum pits', isSafe: false },
    { name: 'cherry pits', isSafe: false },
    { name: 'apple seeds', isSafe: false },
    { name: 'cinnamon', isSafe: false },
    { name: 'nutmeg', isSafe: false },
    { name: 'mustard seeds', isSafe: false },
    { name: 'curry powder', isSafe: false },
    { name: 'hot spices', isSafe: false },
    { name: 'salt substitutes', isSafe: false },
    { name: 'moldy food', isSafe: false },
    { name: 'citrus oil extracts', isSafe: false },
    { name: 'cocoa powder', isSafe: false },
    { name: 'baking powder', isSafe: false },
    { name: 'baking soda', isSafe: false },
    { name: 'vinegar', isSafe: false },
    { name: 'potato leaves', isSafe: false },
    { name: 'tomato leaves', isSafe: false },
    { name: 'rhubarb leaves', isSafe: false },
    { name: 'raw potatoes', isSafe: false },
    { name: 'green tomatoes', isSafe: false },
    { name: 'chives', isSafe: false },
    { name: 'poppy seeds', isSafe: false },
    { name: 'persimmons', isSafe: false },
    { name: 'pears', isSafe: false },
    { name: 'peanuts', isSafe: false },
    { name: 'walnuts', isSafe: false },
    { name: 'almonds', isSafe: false },
    { name: 'cashews', isSafe: false },
    { name: 'pecans', isSafe: false },
    { name: 'sunflower seeds', isSafe: false },
    { name: 'pistachios', isSafe: false },
    { name: 'soy', isSafe: false },
    { name: 'tofu', isSafe: false },
    { name: 'liver', isSafe: false },
    { name: 'broccoli', isSafe: false },
    { name: 'coffee', isSafe: false },
    { name: 'tea', isSafe: false },
    { name: 'energy drinks', isSafe: false },
    { name: 'soda', isSafe: false },
    { name: 'high-fat foods', isSafe: false },
    { name: 'spicy foods', isSafe: false },
    { name: 'human vitamins', isSafe: false },
    { name: 'raw fish', isSafe: false },
    { name: 'cooked fish bones', isSafe: false },
    { name: 'ham', isSafe: false },
    { name: 'bacon', isSafe: false },
    { name: 'sausage', isSafe: false },
    { name: 'corn cobs', isSafe: false },
    { name: 'pickles', isSafe: false },
    { name: 'jalapenos', isSafe: false },
    { name: 'habaneros', isSafe: false },
    { name: 'chili peppers', isSafe: false },
    { name: 'hot sauce', isSafe: false },
    { name: 'blue cheese', isSafe: false },
    { name: 'gorgonzola', isSafe: false },
    { name: 'brie', isSafe: false },
    { name: 'camembert', isSafe: false },
    { name: 'stilton', isSafe: false },
    { name: 'cheddar', isSafe: false },
    { name: 'mozzarella', isSafe: false },
    { name: 'parmesan', isSafe: false },
    { name: 'brussels sprouts', isSafe: false },
    { name: 'kale', isSafe: false },
    { name: 'spinach', isSafe: false },
    { name: 'lettuce', isSafe: false },
    { name: 'celery', isSafe: false },
    { name: 'cabbage', isSafe: false },
    { name: 'carrots', isSafe: false },
    { name: 'beets', isSafe: false },
    { name: 'radishes', isSafe: false },
    { name: 'turnips', isSafe: false },
    { name: 'collard greens', isSafe: false },
    { name: 'mustard greens', isSafe: false },
    { name: 'arugula', isSafe: false },
    { name: 'endive', isSafe: false },
    { name: 'escarole', isSafe: false },
    { name: 'dandelion greens', isSafe: false },
    { name: 'bok choy', isSafe: false },
    { name: 'watercress', isSafe: false },
    { name: 'swiss chard', isSafe: false },
    { name: 'rapini', isSafe: false },
    { name: 'horseradish', isSafe: false },
    { name: 'wasabi', isSafe: false },
    { name: 'cilantro', isSafe: false },
    { name: 'parsley', isSafe: false },
    { name: 'basil', isSafe: false },
    { name: 'mint', isSafe: false },
    { name: 'rosemary', isSafe: false },
    { name: 'thyme', isSafe: false },
    { name: 'oregano', isSafe: false },
    { name: 'sage', isSafe: false },
    { name: 'tarragon', isSafe: false },
    { name: 'marjoram', isSafe: false },
    { name: 'dill', isSafe: false },
    { name: 'fennel', isSafe: false },
    { name: 'lemon balm', isSafe: false },
    { name: 'chamomile', isSafe: false },
    { name: 'lavender', isSafe: false },
    { name: 'lemon verbena', isSafe: false },
    { name: 'bay leaves', isSafe: false },
    { name: 'xylitol', isSafe: false },
    { name: 'sorbitol', isSafe: false },
    { name: 'erythritol', isSafe: false },
    { name: 'mannitol', isSafe: false },
    { name: 'propylene glycol', isSafe: false },
    { name: 'benzoic acid', isSafe: false },
    { name: 'sodium benzoate', isSafe: false },
    { name: 'potassium sorbate', isSafe: false },
    { name: 'calcium propionate', isSafe: false },
    { name: 'sodium nitrate', isSafe: false },
    { name: 'sodium nitrite', isSafe: false },
    { name: 'monosodium glutamate (MSG)', isSafe: false },
    { name: 'butylated hydroxyanisole (BHA)', isSafe: false },
    { name: 'butylated hydroxytoluene (BHT)', isSafe: false },
    { name: 'tert-Butylhydroquinone (TBHQ)', isSafe: false },
    { name: 'sodium metabisulfite', isSafe: false },
    { name: 'calcium disodium EDTA', isSafe: false },
    { name: 'sulfur dioxide', isSafe: false },
    { name: 'sodium sulfite', isSafe: false },
    { name: 'sodium bisulfite', isSafe: false },
    { name: 'nitrates', isSafe: false },
    { name: 'nitrites', isSafe: false },
    { name: 'titanium dioxide', isSafe: false },
    { name: 'artificial flavor', isSafe: false },
    { name: 'artificial color', isSafe: false },
    { name: 'caramel color', isSafe: false },
    { name: 'annatto', isSafe: false },
    { name: 'allura red AC', isSafe: false },
    { name: 'tartrazine', isSafe: false },
    { name: 'sunset yellow FCF', isSafe: false },
    { name: 'brilliant blue FCF', isSafe: false },
    { name: 'quinoline yellow', isSafe: false },
    { name: 'indigotine', isSafe: false },
    { name: 'carminic acid', isSafe: false },
    { name: 'sodium erythorbate', isSafe: false },
    { name: 'azodicarbonamide', isSafe: false },
    { name: 'dimethylpolysiloxane', isSafe: false },
    { name: 'sodium caseinate', isSafe: false },
    { name: 'hydrolyzed vegetable protein', isSafe: false },
    { name: 'partially hydrogenated oil', isSafe: false },
    { name: 'hydrogenated oil', isSafe: false },
    { name: 'carrageenan', isSafe: false },
    { name: 'polysorbate 80', isSafe: false },
    { name: 'cellulose gum', isSafe: false },
    { name: 'xanthan gum', isSafe: false },
    { name: 'guar gum', isSafe: false },
    { name: 'locust bean gum', isSafe: false },
    { name: 'maltodextrin', isSafe: false },
    { name: 'high fructose corn syrup', isSafe: false },
    { name: 'corn syrup', isSafe: false },
    { name: 'fructose', isSafe: false },
    { name: 'sucrose', isSafe: false },
    { name: 'dextrose', isSafe: false },
    { name: 'glyceryl monostearate', isSafe: false },
    { name: 'calcium stearate', isSafe: false },
    { name: 'sodium stearate', isSafe: false },
    { name: 'stearic acid', isSafe: false },
    { name: 'glycerin', isSafe: false },
    { name: 'mono- and diglycerides', isSafe: false },
    { name: 'sodium lauryl sulfate', isSafe: false },
    { name: 'sodium laureth sulfate', isSafe: false },
    { name: 'polydextrose', isSafe: false },
    { name: 'sodium acid pyrophosphate', isSafe: false },
    { name: 'triacetin', isSafe: false },
    { name: 'calcium chloride', isSafe: false },
    { name: 'magnesium sulfate', isSafe: false },
    { name: 'potassium chloride', isSafe: false },
    { name: 'disodium inosinate', isSafe: false },
    { name: 'disodium guanylate', isSafe: false },
    { name: 'acetylated distarch phosphate', isSafe: false },
    { name: 'sodium carboxymethyl cellulose', isSafe: false },
    { name: 'propylene glycol alginate', isSafe: false },
    { name: 'ethyl vanillin', isSafe: false },
    { name: 'vanillin', isSafe: false },
    { name: 'artificial sweeteners', isSafe: false },
    { name: 'aspartame', isSafe: false },
    { name: 'sucralose', isSafe: false },
    { name: 'saccharin', isSafe: false },
    { name: 'acesulfame potassium', isSafe: false },
    { name: 'neotame', isSafe: false },
    { name: 'hydroxyanisole', isSafe: false },
    { name: 'butylhydroxytoluene', isSafe: false },
    { name: 'water', isSafe: true },
    { name: 'rice', isSafe: true },
    { name: 'oats', isSafe: true },
    { name: 'barley', isSafe: true },
    { name: 'quinoa', isSafe: true },
    { name: 'millet', isSafe: true },
    { name: 'corn', isSafe: true },
    { name: 'flaxseed', isSafe: true },
    { name: 'chia seeds', isSafe: true },
    { name: 'pumpkin seeds', isSafe: true },
    { name: 'sunflower oil', isSafe: true },
    { name: 'fish oil', isSafe: true },
    { name: 'olive oil', isSafe: true },
    { name: 'coconut oil', isSafe: true },
    { name: 'canola oil', isSafe: true },
    { name: 'gelatin', isSafe: true },
    { name: 'peanut butter', isSafe: true },
    { name: 'brewer’s yeast', isSafe: true },
    { name: 'honey', isSafe: true },
    { name: 'molasses', isSafe: true },
    { name: 'carob', isSafe: true },
    { name: 'turmeric', isSafe: true },
    { name: 'ginger', isSafe: true },
    { name: 'parsley', isSafe: true },
    { name: 'thyme', isSafe: true },
    { name: 'rosemary', isSafe: true },
    { name: 'basil', isSafe: true },
    { name: 'mint', isSafe: true },
    { name: 'cinnamon', isSafe: true },
    { name: 'vanilla', isSafe: true },
    { name: 'carrot powder', isSafe: true },
    { name: 'kelp', isSafe: true },
    { name: 'alfalfa', isSafe: true },
    { name: 'spinach powder', isSafe: true },
    { name: 'spirulina', isSafe: true },
    { name: 'carrageenan', isSafe: true },
    { name: 'agar-agar', isSafe: true },
    { name: 'pectin', isSafe: true },
    { name: 'guar gum', isSafe: true },
    { name: 'locust bean gum', isSafe: true },
    { name: 'xanthan gum', isSafe: true },
    { name: 'beet pulp', isSafe: true },
    { name: 'inulin', isSafe: true },
    { name: 'chicory root', isSafe: true },
    { name: 'fructooligosaccharides', isSafe: true },
    { name: 'lactic acid', isSafe: true },
    { name: 'calcium carbonate', isSafe: true },
    { name: 'potassium chloride', isSafe: true },
    { name: 'sodium chloride', isSafe: true },
    { name: 'magnesium sulfate', isSafe: true },
    { name: 'zinc sulfate', isSafe: true },
    { name: 'iron sulfate', isSafe: true },
    { name: 'copper sulfate', isSafe: true },
    { name: 'manganese sulfate', isSafe: true },
    { name: 'selenium yeast', isSafe: true },
    { name: 'choline chloride', isSafe: true },
    { name: 'tocopherol', isSafe: true },
    { name: 'niacin', isSafe: true },
    { name: 'riboflavin', isSafe: true },
    { name: 'thiamine mononitrate', isSafe: true },
    { name: 'pyridoxine hydrochloride', isSafe: true },
    { name: 'vitamin B12 supplement', isSafe: true },
    { name: 'folic acid', isSafe: true },
    { name: 'biotin', isSafe: true },
    { name: 'vitamin D3 supplement', isSafe: true },
    { name: 'vitamin E supplement', isSafe: true },
    { name: 'ascorbic acid (vitamin C)', isSafe: true },
    { name: 'menadione sodium bisulfite complex (vitamin K)', isSafe: true }
    ]
      
      
  
    
export const searchFood = (query) => {
    if (!query) return [];
    
    const foodResults = foodData.filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const ingredientResults = ingredientData.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(query.toLowerCase())
    );
    
    return [...foodResults, ...ingredientResults];
};
