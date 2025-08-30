// Simulated response from GET /api/cars (or similar endpoint)
// This would be the data structure your Redux store (cars.carsList) would hold.
export const demoCarsList = [
  {
    id: "CAR001",
    make: "Toyota",
    model: "RAV 4",
    version: "2.0 D-4D Active",
    year: 2020,
    mileage: 45000,
    price: 25000,
    fuelType: "Diesel",
    transmission: "Manual",
    engineSize: 2.0,
    power: 126, // HP
    physicalState: "Good",
    technicalState: "Good",
    tyresState: "Good",
    damages: "Minor scratch on rear bumper",
    description: "Well-maintained Toyota RAV4. Single owner, full service history.",
    image: "/src/assets/images/car1.jpg", // Relative path for demo
    saleType: "auction", // Could be 'auction', 'direct-buy', 'private-sale'
    addedDate: "2023-10-26T10:00:00Z"
  },
  {
    id: "CAR002",
    make: "Audi",
    model: "A4",
    version: "2.0 TDI Sport",
    year: 2019,
    mileage: 52000,
    price: 28500,
    fuelType: "Diesel",
    transmission: "Automatic",
    engineSize: 2.0,
    power: 190,
    physicalState: "Excellent",
    technicalState: "Excellent",
    tyresState: "New",
    damages: "None",
    description: "Audi A4 in pristine condition. Loaded with options.",
    image: "/src/assets/images/car2.jpg",
    saleType: "direct-buy",
    addedDate: "2023-10-26T09:30:00Z"
  },
  {
    id: "CAR003",
    make: "BMW",
    model: "X1",
    version: "sDrive 16d",
    year: 2021,
    mileage: 38000,
    price: 32000,
    fuelType: "Diesel",
    transmission: "Manual",
    engineSize: 2.0,
    power: 116,
    physicalState: "Good",
    technicalState: "Good",
    tyresState: "Good",
    damages: "Small dent on front wing",
    description: "Efficient BMW X1 diesel. Great for city driving.",
    image: "/src/assets/images/car3.jpg",
    saleType: "auction",
    addedDate: "2023-10-26T08:45:00Z"
  },
  {
    id: "CAR004",
    make: "Mercedes-Benz",
    model: "CLS",
    version: "350 CGI",
    year: 2018,
    mileage: 60000,
    price: 45000,
    fuelType: "Petrol",
    transmission: "Automatic",
    engineSize: 3.5,
    power: 306,
    physicalState: "Good",
    technicalState: "Good",
    tyresState: "Good",
    damages: "Light wear on driver's seat",
    description: "Stylish Mercedes CLS Coupe. Luxurious interior and powerful engine.",
    image: "/src/assets/images/car4.jpg",
    saleType: "direct-buy",
    addedDate: "2023-10-25T15:20:00Z"
  },
  {
    id: "CAR005",
    make: "Renault",
    model: "Megane",
    version: "1.5 dCi Energy Intens",
    year: 2020,
    mileage: 35000,
    price: 18000,
    fuelType: "Diesel",
    transmission: "Manual",
    engineSize: 1.5,
    power: 86,
    physicalState: "Excellent",
    technicalState: "Excellent",
    tyresState: "Good",
    damages: "None",
    description: "Fuel-efficient Renault Megane. Perfect family hatchback.",
    image: "/src/assets/images/car5.jpg",
    saleType: "auction",
    addedDate: "2023-10-26T11:10:00Z"
  },
  {
    id: "CAR006",
    make: "Peugeot",
    model: "308",
    version: "1.6 e-HDi Business-Line",
    year: 2019,
    mileage: 48000,
    price: 16500,
    fuelType: "Diesel",
    transmission: "Manual",
    engineSize: 1.6,
    power: 112,
    physicalState: "Good",
    technicalState: "Good",
    tyresState: "Fair",
    damages: "Scratched alloy wheel",
    description: "Reliable Peugeot 308. Business spec with air con and cruise control.",
    image: "/src/assets/images/car6.jpg",
    saleType: "private-sale",
    addedDate: "2023-10-25T14:00:00Z"
  },
  {
    id: "CAR007",
    make: "Alfa Romeo",
    model: "Giulietta",
    version: "1.6 JTDM Progression",
    year: 2017,
    mileage: 55000,
    price: 19500,
    fuelType: "Diesel",
    transmission: "Manual",
    engineSize: 1.6,
    power: 120,
    physicalState: "Good",
    technicalState: "Good",
    tyresState: "Good",
    damages: "Small stone chip on bonnet",
    description: "Sporty Alfa Romeo Giulietta. Fun to drive with great handling.",
    image: "/src/assets/images/car7.jpg", // Placeholder path
    saleType: "auction",
    addedDate: "2023-10-26T07:30:00Z"
  },
  {
    id: "CAR008",
    make: "Land Rover",
    model: "Discovery Sport",
    version: "2.0 Td4 Pure",
    year: 2019,
    mileage: 42000,
    price: 35000,
    fuelType: "Diesel",
    transmission: "Automatic",
    engineSize: 2.0,
    power: 240,
    physicalState: "Excellent",
    technicalState: "Excellent",
    tyresState: "Good",
    damages: "None",
    description: "Capable Land Rover Discovery Sport. Ideal for off-road adventures.",
    image: "/src/assets/images/car8.jpg", // Placeholder path
    saleType: "direct-buy",
    addedDate: "2023-10-26T12:00:00Z"
  },
  {
    id: "CAR009",
    make: "Smart",
    model: "fortwo",
    version: "0.8 CDI Passion",
    year: 2018,
    mileage: 25000,
    price: 8500,
    fuelType: "Diesel",
    transmission: "Automatic",
    engineSize: 0.8,
    power: 45,
    physicalState: "Good",
    technicalState: "Good",
    tyresState: "Good",
    damages: "Light wear on interior plastics",
    description: "Ultra-compact Smart fortwo. Perfect for city parking.",
    image: "/src/assets/images/car9.jpg", // Placeholder path
    saleType: "private-sale",
    addedDate: "2023-10-24T16:45:00Z"
  },
  {
    id: "CAR010",
    make: "Audi",
    model: "Q5",
    version: "2.0 TDI Avus",
    year: 2020,
    mileage: 30000,
    price: 42000,
    fuelType: "Diesel",
    transmission: "Automatic",
    engineSize: 2.0,
    power: 190,
    physicalState: "Excellent",
    technicalState: "Excellent",
    tyresState: "New",
    damages: "None",
    description: "Luxurious Audi Q5 SUV. Loaded with premium features.",
    image: "/src/assets/images/car10.jpg", // Placeholder path
    saleType: "auction",
    addedDate: "2023-10-26T13:15:00Z"
  },
  {
    id: "CAR011",
    make: "Abarth",
    model: "500",
    version: "1.4 Turbo",
    year: 2019,
    mileage: 22000,
    price: 21000,
    fuelType: "Petrol",
    transmission: "Manual",
    engineSize: 1.4,
    power: 145,
    physicalState: "Good",
    technicalState: "Good",
    tyresState: "Good",
    damages: "Minor scuff on side skirt",
    description: "Fun Abarth 500. Sporty performance and distinctive styling.",
    image: "/src/assets/images/car11.jpg", // Placeholder path
    saleType: "direct-buy",
    addedDate: "2023-10-25T11:30:00Z"
  },
  {
    id: "CAR012",
    make: "Opel",
    model: "Astra K",
    version: "1.6 CDTI DPF Edition Start/Stop",
    year: 2021,
    mileage: 18000,
    price: 22500,
    fuelType: "Diesel",
    transmission: "Manual",
    engineSize: 1.6,
    power: 110,
    physicalState: "Excellent",
    technicalState: "Excellent",
    tyresState: "Good",
    damages: "None",
    description: "Efficient and practical Opel Astra. Great value family car.",
    image: "/src/assets/images/car12.jpg", // Placeholder path
    saleType: "auction",
    addedDate: "2023-10-26T14:20:00Z"
  }
];

// Simulated response for GET /api/cars/{id} (e.g., CAR001)
// This would populate cars.selectedCar in Redux.
export const demoSelectedCar = demoCarsList[0]; // Using the first car as an example detail view

// Simulated response for GET /api/dashboard/stats
export const demoDashboardStats = {
  carsForSale: 15,
  activeBids: 8,
  carsSold: 42,
  totalRevenue: 1250000 // Example additional stat
};

// Simulated response for GET /api/orders/history
export const demoOrderHistory = [
  {
    id: "ORD001",
    carMake: "Volkswagen",
    carModel: "Golf",
    date: "2023-10-20T00:00:00Z",
    amount: 18000,
    status: "completed"
  },
  {
    id: "ORD002",
    carMake: "Ford",
    carModel: "Focus",
    date: "2023-10-15T00:00:00Z",
    amount: 15500,
    status: "pending"
  },
  {
    id: "ORD003",
    carMake: "Skoda",
    carModel: "Octavia",
    date: "2023-10-10T00:00:00Z",
    amount: 21000,
    status: "completed"
  },
  {
    id: "ORD004",
    carMake: "Seat",
    carModel: "Leon",
    date: "2023-10-05T00:00:00Z",
    amount: 17200,
    status: "cancelled"
  }
];

// Simulated response from POST /api/auth/login (Buyer)
export const demoBuyerAccount = {
  id: "BUYER123",
  name: "John Buyer",
  email: "john.buyer@example.com",
  company: "City Motors Ltd.",
  vatNumber: "GB123456789",
  role: "buyer" // Or however roles are defined in your backend
};

// Simulated response from POST /api/auth/login (Seller)
export const demoSellerAccount = {
  id: "SELLER456",
  name: "Jane Seller",
  email: "jane.seller@example.com",
  company: "Premier Auto Sales Ltd.",
  vatNumber: "GB987654321",
  role: "seller"
};

// Dummy token for demonstration (in reality, this would be a JWT from the backend)
export const demoToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";