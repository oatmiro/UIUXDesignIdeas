// Web design button

  // Define an array of web design ideas

  const webWords = ["cafe website", "rock climbing website", "furniture retailer website", "clothing ecommerce website"];


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

  const mobileWords = ["notes app", "bill splitting app", "rock climbing climb process app", "cute habit tracking app", "work shift and punch out app", "transit app"];


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

  const bothWords = ["hiring saas", "marketing saas", "travel site"];


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

