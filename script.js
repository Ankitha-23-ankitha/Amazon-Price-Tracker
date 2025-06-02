
async function checkPrice() {
    const url = document.getElementById('url').value;
    const affordablePrice = document.getElementById('price').value;
    const email = document.getElementById('email').value;

    if (!url || !affordablePrice || !email) {
        alert('Please fill out all fields.');
        return;
    }

    const response = await fetch(`/check_price?url=${encodeURIComponent(url)}&affordablePrice=${affordablePrice}&email=${email}`);
    const data = await response.json();

    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = data.message;
}
