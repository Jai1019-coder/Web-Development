document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#cart-table tbody');
    const grandTotalElement = document.querySelector('#grand-total');
    
    let grandTotal = 0;
    
    cart.forEach(book => {
        let totalPrice = book.price * book.quantity;
        grandTotal += totalPrice;
        
        let row = document.createElement('tr');
        
        row.innerHTML = `
            <td><img src="${book.image}" alt="${book.title} Cover" height="100"></td>
            <td>${book.author}</td>
            <td>${book.publisher}</td>
            <td>$${book.price.toFixed(2)}</td>
            <td>${book.quantity}</td>
            <td>$${totalPrice.toFixed(2)}</td>
        `;
        
        cartTableBody.appendChild(row);
    });
    
    grandTotalElement.textContent = `$${grandTotal.toFixed(2)}`;
});
