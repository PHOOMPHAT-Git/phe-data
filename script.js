function loadCustomerData() {
    fetch('Users.txt')
        .then(response => response.text())
        .then(data => {
            const customerData = document.getElementById('customerData');
            let totalPrice = 0;
            let totalOrders = 0;

            customerData.innerHTML = data;

            const rows = customerData.querySelectorAll('tr');

            rows.forEach(row => {
                const priceCell = row.querySelector('td:nth-child(3)');

                if (priceCell) {
                    const priceText = priceCell.textContent.trim();
                    const price = parseFloat(priceText.replace(' Baht', '').replace(',', ''));
                    if (!isNaN(price)) {
                        totalPrice += price;
                        totalOrders++
                    }
                }
            });

            document.getElementById('totalPrice').textContent = totalPrice.toLocaleString() + " Baht";
            document.getElementById('totalOrder').textContent = totalOrders;
        })
        .catch(error => {
            console.error('Error loading customer data:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadCustomerData);