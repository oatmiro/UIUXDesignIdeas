

  // Define an array of words

  const words = ["cafe website", "rock climbing website", "bill splitting app", "notes app"];


  // Get a reference to the button element

  const generateButton = document.getElementById("generateButton");


  // Function to generate a random word

  function generateRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length);

    const randomWord = words[randomIndex];

    document.querySelector("p").textContent = `Design idea: ${randomWord}`;

  }


  // Attach an event listener to the button

  generateButton.addEventListener("click", generateRandomWord);

