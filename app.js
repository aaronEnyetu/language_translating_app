// Example static dictionary (this could be saved in localStorage as well)
const dictionary = {
    "arm": {
        "ate": "akan",
        "tur": "ekan",
        "kar": "en'anni",
        "far": "bazoo",
    },
    "axe": {
        "ate": "ayepe",
        "tur": "eap",
        "kar": "aib",
        "far": "tobar",
    },
    "bee": {
        "ate": "awu",
        "tur": "n'wa",
        "kar": "ao",
        "far": "zanboor",
    },
    "blood": {
        "ate": "awokot",
        "tur": "n'akot",
        "kar": "abane",
        "far": "khoon",
    },
    "body": {
        "ate": "akwan",
        "tur": "n'akuan",
        "kar": "n'uan",
        "far": "badan",
    },

    // More entries...
  };
  
  // Function to handle the translation
  function translateText(inputText, sourceLang, targetLang) {
    const lowerCaseText = inputText.trim().toLowerCase(); // Normalize input (case-insensitive)
    
    // If the word is in the dictionary, perform translation
    if (dictionary[lowerCaseText] && dictionary[lowerCaseText][targetLang]) {
      return dictionary[lowerCaseText][targetLang];
    } else {
      return "Translation not found!";
    }
  }
  
  // Event listener for the translate button
  document.getElementById('translateButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;
  
    // Translate the text
    const translatedText = translateText(inputText, sourceLang, targetLang);
  
    // Output the translated text
    document.getElementById('outputText').innerText = translatedText;
  
    // Optionally, store the translation in localStorage
    const history = JSON.parse(localStorage.getItem('translationHistory')) || [];
    history.push({ input: inputText, translated: translatedText });
    localStorage.setItem('translationHistory', JSON.stringify(history));
  });
  
  // You can load previous translations from localStorage (if any)
  window.onload = function() {
    const history = JSON.parse(localStorage.getItem('translationHistory')) || [];
    if (history.length > 0) {
      // Display the last translation as an example
      document.getElementById('outputText').innerText = history[history.length - 1].translated;
    }
  };
  