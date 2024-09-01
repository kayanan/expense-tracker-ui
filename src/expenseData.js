

function getRandomAmount(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomTitle() {
    const titles = [
        'Groceries', 'Electricity Bill', 'Water Bill', 'Gasoline', 'Laptop',
        'Phone', 'Clothing', 'Books', 'Restaurant', 'Gym Membership', 'Furniture',
        'Kitchen Appliances', 'Toys', 'Medicine', 'Parking Fee', 'Coffee Machine',
        'Concert Tickets', 'Shoes', 'Backpack', 'Car Service', 'Subscription Fee',
        'Gift', 'Snacks', 'Movie Tickets', 'Garden Supplies', 'Pet Food', 'Sports Equipment',
        'Flight Tickets', 'Hotel Booking', 'Car Rental', 'Phone Charger', 'USB Drive',
        'Headphones', 'Tablet', 'Monitor', 'Keyboard', 'Mouse', 'Chair', 'Bicycle',
        'Printer', 'Blender', 'Microwave', 'Vacuum Cleaner', 'Hair Dryer', 'Sunglasses',
        'Watch', 'Handbag', 'Wallet', 'Perfume', 'Cosmetics', 'Skin Care', 'Shaving Kit',
        'Jewelry', 'Lamp', 'Fan', 'Heater', 'Air Conditioner', 'Tool Kit', 'Drill',
        'Lawn Mower', 'Grill', 'BBQ Supplies', 'Camping Gear', 'Fishing Gear', 'Hiking Boots',
        'Skateboard', 'Yoga Mat', 'Fitness Tracker', 'Smartwatch', 'Gloves', 'Scarf',
        'Hat', 'Belt', 'Socks', 'Underwear', 'T-shirt', 'Jeans', 'Jacket', 'Suit', 'Tie',
        'Dress', 'Skirt', 'Blouse', 'Sweater', 'Coat', 'Bathrobe', 'Slippers', 'Sandals',
        'Boots', 'Sneakers', 'Running Shoes', 'Dress Shoes', 'Loafers', 'Suitcase', 'Travel Bag'
    ];
    return titles[Math.floor(Math.random() * titles.length)];
}

export default function generateDummyData(numEntries) {
    let data = [];
    for (let i = 0; i < numEntries; i++) {
        data.push({
            id: 'e' + (i + 1),
            title: getRandomTitle(),
            amount: parseFloat(getRandomAmount(10, 1000)),
            date: new Date(Math.random() * (2023 - 2019) + 2019,Math.random()*12,Math.random() * (29- 1) + 1)
        });
    }
    return data;
}


