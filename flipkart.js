let cartCount = 0;

const developer = {
    name: "Ashik Jatav",
    role: "Frontend Developer",
    email: "aashikjhajiya@jmail.com"
};

function addToCart(productName) {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
    alert(productName + " added to cart!");
}

function showCart() {
    if (cartCount === 0) {
        alert("Your cart is empty.");
    } else {
        alert("You have " + cartCount + " item(s) in your cart.");
    }
}

function searchProduct() {
    const search = document.getElementById("search").value.trim();

    if (search === "") {
        alert("Please enter a product name.");
        return;
    }

    alert("Searching for: " + search);
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

console.log("Flipkart Clone developed by " + developer.name + " | " + developer.role);
