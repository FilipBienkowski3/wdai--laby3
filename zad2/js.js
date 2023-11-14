
const productsList = document.querySelector("#products_list");
const filterButton = document.querySelector("#filterButton");
const sortSelect = document.querySelector("#sortSelect");
const nameFilterInput = document.querySelector("#nameFilter");

let allProducts = [];

document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        allProducts = data.products.slice(0, 30);

        filterButton.addEventListener("click", function () {
            const nameFilter = nameFilterInput.value.toLowerCase();
            const filteredProducts = filterProducts(allProducts, nameFilter);
            const sortedProducts = sortProducts(filteredProducts, sortSelect.value);
            renderProducts(sortedProducts);
        });

        sortSelect.addEventListener("change", function () {
            const filteredProducts = filterProducts(allProducts, nameFilterInput.value.toLowerCase());
            const sortedProducts = sortProducts(filteredProducts, sortSelect.value);
            renderProducts(sortedProducts);
        });

        renderProducts(allProducts);
    } catch (error) {
        console.error("Wystąpił błąd", error);
    }
}

function renderProducts(products) {
    productsList.innerHTML = "";

    if (products.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.innerText = "Brak pasujących produktów.";
        productsList.appendChild(noResultsMessage);
    } else {
        for (let product of products) {
            const { title: productName, description: productDescription, thumbnail: thumbnailUrl } = product;
            const listItem = document.createElement("li");
            const titleElement = document.createElement("h2");
            const descriptionElement = document.createElement("p");
            const thumbnailElement = document.createElement("img");

            titleElement.innerText = productName.toLowerCase();
            descriptionElement.innerText = productDescription;
            thumbnailElement.src = thumbnailUrl;

            listItem.appendChild(titleElement);
            listItem.appendChild(descriptionElement);
            listItem.appendChild(thumbnailElement);

            productsList.appendChild(listItem);
        }
    }
}

function sortProducts(products, order) {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (order === "asc") {
            return titleA.localeCompare(titleB);
        } else if (order === "desc") {
            return titleB.localeCompare(titleA);
        } else {
            return 0;
        }
    });

    return sortedProducts;
}

function filterProducts(products, nameFilter) {
    return products.filter(product => {
        const firstWord = product.title.toLowerCase().split(' ')[0];
        const filteredLetters = firstWord.substring(0, nameFilter.length);
        return filteredLetters === nameFilter.toLowerCase();
    });
}