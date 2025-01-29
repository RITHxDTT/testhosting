// Example of how you can handle "Add to Cart" button clicks
const buttons = document.querySelectorAll('.food-item button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to your cart!');
    });
});
