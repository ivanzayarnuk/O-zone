const cart = () => {
    "use strict";

    const cartBtn = document.getElementById('cart'),
          cartModal = document.querySelector('.cart'),
          cartCloseBtn = cartModal.querySelector('.cart-close');

    const openCart = () => {
        cartModal.style.display = 'flex';
    };


    function closeCart() {
        cartModal.style.display = '';
    }

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);


    console.log(cartBtn);
};

export default cart;