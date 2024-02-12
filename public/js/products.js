const btns = document.querySelectorAll('.buy-now-button');
console.log(btns);

btns.forEach(btn => {
  btn.addEventListener("click", async e => {
    console.log('a product was clicked')
    const productID = btn.parentElement.getAttribute('data-productID');
    const response = await fetch(`/api/buyproduct/${productID}`, {
      method: 'POST'
    });

    if (response.ok) {
      console.log('added to basket');
    }
  });
})
