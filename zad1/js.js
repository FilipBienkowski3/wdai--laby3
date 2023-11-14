
const productsList = document.querySelector("#products_list");

document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        const products = data.products.slice(0, 30);

        for (let product of products) {
            const { title: productName, description: productDescription, thumbnail: thumbnailUrl } = product;

            const listItem = document.createElement("li");
            const titleElement = document.createElement("h2");
            const descriptionElement = document.createElement("p");
            const thumbnailElement = document.createElement("img");

            titleElement.innerText = productName;
            descriptionElement.innerText = productDescription;
            thumbnailElement.src = thumbnailUrl;

            listItem.appendChild(titleElement);
            listItem.appendChild(descriptionElement);
            listItem.appendChild(thumbnailElement);

            productsList.appendChild(listItem);
        }
    } catch (error) {
        console.error("Wystąpił błąd", error);
    }
}

