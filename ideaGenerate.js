// Web design button

  // Define an array of web design ideas

  const webWords = ["Cafe website", "Rock climbing website", "Furniture retailer website", "Clothing ecommerce website", "Online Artisanal Bakery",
  "Luxury Watch Boutique", "Subscription Flower Delivery", "Sneaker Resale Platform", "Sustainable Furniture Store", "Independent Bookstore",
  "Gaming Peripheral Store", "Digital Software Marketplace", "Vintage Vinyl Records", "Custom Stationery Shop", "Project Management Tool",
  "Cloud Storage Landing Page", "Customer Support CRM", "SEO Analytics Dashboard", "HR Onboarding Portal", "API Documentation Site",
  "Video Conferencing Home", "Virtual Event Platform", "Inventory Management System", "AI Image Generator Interface", "Boutique Hotel Booking",
  "Glamping/Camping Map", "Cruise Line Itinerary", "Local Restaurant Finder", "Museum Virtual Tour", "Airline Search Results", "City Guide Blog",
  "Exotic Car Rental", "Travel Insurance Quote", "Co-working Space Booking", "Architectural Portfolio", "Indie Film Streaming", "Online Magazine",
  "Podcast Directory", "Photography Gallery", "Graphic Designer Portfolio", "Daily News Aggregator", "Recipe Blog", "Stock Photo Library",
  "Creative Writing Platform", "Online Course Platform", "Coding Bootcamp Landing Page", "Language Learning Hub", "Non-Profit Donation Page",
  "Scientific Journal Database", "Community Forum", "Skill-Sharing Platform", "University Department Site", "Music Theory School",
  "Historical Timeline", "Mental Health Directory", "City Council Portal", "Blood Donation Scheduler", "Vet Clinic Portal", "Public Library Catalog",
  "Fitness Challenge Tracker", "Emergency Weather Alert", "Nutrition Calculator", "Eco-Footprint Calculator", "Job Board for Social Impact"
  ];


  // Get a reference to the button element

  const webDesignButton = document.getElementById("webDesignButton");


  // Function to generate a random web design idea

  function generateWebWord() {

    const randomIndex = Math.floor(Math.random() * webWords.length);

    const randomWord = webWords[randomIndex];

    document.querySelector("p").textContent = `Web design project idea: ${randomWord}`;

  }


  // Attach an event listener to the button

  webDesignButton.addEventListener("click", generateWebWord);


// Mobile design button


  // Define an array of mobile design ideas

  const mobileWords = ["Notes App", "Bill Splitting App", "Rock Climbing Climb Process App", "Cute Habit Tracking App", "Work Shift and Punch Out app", "Transit App", "Medication Tracker",
  "Mental Health Journal", "Water Intake Reminder", "Gym Equipment Guide", "Sleep Sounds Mixer", "Allergy Scanner", "Symptom Checker",
  "Period Tracker", "Home Workout Generator", "Telemedicine Portal", "Split-Bill App", "Micro-Investing Platform", "Crypto Wallet",
  "Subscription Manager", "Focus Timer", "Job Search Dashboard", "Shared Grocery List", "Digital Business Card", "Budgeting for Teens", "Freelance Invoice Generator",
  "Plant Shop", "Vintage Clothing Marketplace", "Local Farmers Market Map", "Custom Sneaker Builder", "Subscription Box Builder",
  "Furniture Rental", "Beauty Product Matcher", "Gift Finder", "Ethical Brand Directory", "Pet Adoption Portal", "Solo Traveler Safety",
  "Language Exchange", "Event Discovery", "Road Trip Planner", "Book Club Hub", "Lost & Found Pets", "Volunteer Matcher", "City Hidden Gems",
  "Digital Postcard", "Hobby Finder", "Flashcard Master", "Sign Language Tutor", "Recipe Converter", "Musical Instrument Tuner", "Astronomy Guide",
  "Coding Playground", "Museum Tour Guide", "Daily Quote/Poem", "Skill Swap", "Public Speaking Coach", "Smart Home Hub", "EV Charging Finder",
  "Parking Spot Locator", "Wardrobe Organizer", "Waste Sorting Guide", "Weather for Gardeners", "Password Manager", "Inventory for Collectors",
  "Minimalist Launcher", "Public Transport Tracker" ];


  // Get a reference to the button element

  const mobileDesignButton = document.getElementById("mobileDesignButton");


  // Function to generate a random web design idea

  function generateMobileWord() {

    const randomIndex = Math.floor(Math.random() * mobileWords.length);

    const randomWord = mobileWords[randomIndex];

    document.querySelector("p").textContent = `Mobile design project idea: ${randomWord}`;

  }


  // Attach an event listener to the button

  mobileDesignButton.addEventListener("click", generateMobileWord);



  // Both web and mobile design button


  // Define an array of web/mobile design ideas

  const bothWords = ["Hiring saas", "Marketing saas", "Travel site", "Recipe & Meal Planner", "Language Learning App", "Personal Finance Dashboard", 
  "Task & Project Manager", "Streaming Service", "Real Estate Marketplace", "Job Search Portal", "Digital Banking", "Fitness & Activity Tracker", 
  "E-commerce Marketplace", "Event Ticketing System", "Flight Booking Engine", "Cloud Storage Drive", "Online Learning (LMS)", "Inventory Management", 
  "Music Production Tool", "Shared Family Calendar", "Mental Health Tracker", "News Aggregator", "Crypto Exchange", "Car Rental Service", 
  "Pet Health Portal", "Restaurant POS System", "Smart Home Controller", "Collaborative Whiteboard", "Subscription Manager", "Travel Itinerary Builder", 
  "Photography Cloud", "Customer Support Portal", "Volunteer Coordination", "Gaming Social Network", "Habit Tracker", "Garden Planner", 
  "Digital Portfolio Builder", "Public Transport Planner", "Coupon & Deal Finder", "Podcast Studio", "Wine/Beer Cellar Tracker", "Crowdfunding Platform", 
  "Skill-Sharing Marketplace", "Donation/Charity Hub", "Recipe Nutrition Scanner", "Employee Directory", "Yoga & Meditation Hub", "Property Management", 
  "Graphic Design Tool", "Weather Station", "Fashion Stylist", "Book Cataloger", "Feedback/Survey Tool", "Interior Design App", 
  "Golf/Sports Tracker", "Video Editor (Cloud-based)", "Tutoring Marketplace", "Vehicle Diagnostics", "Dietary Restriction Guide", "Password Vault", 
  "Art Commission Hub", "Conference Guide", "Budgeting for Couples"
  ];


  // Get a reference to the button element

  const bothButton = document.getElementById("bothButton");


  // Function to generate a random web design idea

  function generateBothWord() {

    const randomIndex = Math.floor(Math.random() * bothWords.length);

    const randomWord = bothWords[randomIndex];

    document.querySelector("p").textContent = `Mobile and web design project idea: ${randomWord}`;

  }


  // Attach an event listener to the button

  bothButton.addEventListener("click", generateBothWord);

