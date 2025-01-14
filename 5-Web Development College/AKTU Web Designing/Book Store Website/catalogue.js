// Sample data for books
const books = [
    { id: 1, title: "XML Bible", author: "Winston", publisher: "Wiley", price: 40.5, image: "book1.jpg" },
    { id: 2, title: "AI", author: "S. Russel", publisher: "Princetonhall", price: 63, image: "book2.jpg" },
    { id: 3, title: "Java 2", author: "Watson", publisher: "BPB Publications", price: 35.5, image: "book3.jpg" },
    { id: 4, title: "HTML in 24 Hours", author: "Sam Peter", publisher: "Sam Publication", price: 50, image: "book4.jpg" },
];

// Function to add book to cart
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        let cartItem = cart.find(item => item.id === bookId);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...book, quantity: 1 });
        }

        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert(`${book.title} has been added to your cart!`);
    }
}

// Attach event listeners to "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach((button, index) => {
        button.addEventListener('click', () => addToCart(books[index].id));
    });
});
