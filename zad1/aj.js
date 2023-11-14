// document.addEventListener("DOMContentLoaded", function () {
//     // Pobieramy referencję do elementu listy
//     const dynamicList = document.getElementById("dynamicList");

//     // Dodajemy przykładowe elementy do listy
//     dodajElement("Pierwszy element", "idunal.jpg");
//     dodajElement("Drugi element");
//     dodajElement("Trzeci element", "example3.jpg");
// });

// function dodajElement(tekst, sciezkaObrazka) {
//     // Pobieramy referencję do elementu listy
//     const dynamicList = document.getElementById("dynamicList");

//     // Tworzymy nowy element listy
//     const listItem = document.createElement("li");

//     // Tworzymy elementy dla tekstu i obrazka (jeśli dostępny)
//     const textElement = document.createElement("span");
//     textElement.textContent = tekst;

//     if (sciezkaObrazka) {
//         const imageElement = document.createElement("img");
//         imageElement.src = sciezkaObrazka;
//         imageElement.alt = tekst; // Dodałem alternatywny tekst dla obrazka
//         listItem.appendChild(imageElement);
//     }

//     // Dodajemy elementy do listy
//     listItem.appendChild(textElement);

//     // Dodajemy element do listy
//     dynamicList.appendChild(listItem);
// }




// document.addEventListener("DOMContentLoaded", function () {
//     // Pobieramy referencję do elementu listy
//     const productList = document.getElementById("productList");

//     // Pobieramy dane JSON z nowego linku
//     fetchData("https://dummyjson.com/products")
//         .then(data => {
//             // Wywołujemy funkcję do wypisania listy
//             renderList(data, productList);
//         })
//         .catch(error => {
//             console.error("Wystąpił błąd podczas pobierania danych:", error);
//         });
// });

// // Funkcja do pobierania danych z JSON
// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// // Funkcja do wypisania listy
// function renderList(data, productList) {
//     // Iterujemy po elementach z danych JSON i dodajemy je do listy
//     const product = data;

//     // Tworzymy nowy element listy
//     const listItem = document.createElement("li");

//     // Tworzymy elementy dla tekstu i obrazka (jeśli dostępny)
//     const titleElement = document.createElement("h3");
//     titleElement.textContent = product.title;

//     const descriptionElement = document.createElement("p");
//     descriptionElement.textContent = product.description;

//     const thumbnailElement = document.createElement("img");
//     thumbnailElement.src = product.thumbnail;
//     thumbnailElement.alt = product.title;

//     // Dodajemy elementy do listy
//     listItem.appendChild(titleElement);
//     listItem.appendChild(descriptionElement);
//     listItem.appendChild(thumbnailElement);

//     // Dodajemy element do listy
//     productList.appendChild(listItem);
// }


document.addEventListener("DOMContentLoaded", function () {
    // Twój link do danych JSON
    var jsonLink = "https://dummyjson.com/products";
  
    // Pobierz dane JSON z linku
    fetch(jsonLink)
      .then(response => response.json())
      .then(data => {
        // Wyświetl 10 elementów
        for (let i = 0; i < 10; i++) {
          if (data[i]) {
            // Przykładowe argumenty (zmień je na rzeczywiste klucze z twojego JSON)
            var argument1 = data[i].argument1;
            var argument2 = data[i].argument2;
            var argument3 = data[i].argument3;
  
            // Dodaj element do listy na stronie HTML
            var listItem = document.createElement("li");
            listItem.textContent = `Element ${i + 1}: Argument1 - ${argument1}, Argument2 - ${argument2}, Argument3 - ${argument3}`;
            document.getElementById("json-data").appendChild(listItem);
          }
        }
      })
      .catch(error => console.error("Błąd pobierania danych:", error));
  });