        document.addEventListener('DOMContentLoaded', () => {
            const params = new URLSearchParams(window.location.search);
            document.getElementById('vehicle-title').textContent = params.get('title');
            document.getElementById('vehicle-image').src = params.get('image');
            document.getElementById('vehicle-year').textContent = `Year of Manufacture: ${params.get('year')}`;
            document.getElementById('vehicle-people').textContent = `Total No of Seats: ${params.get('seats')}`;
            document.getElementById('vehicle-fuel').textContent = `Fuel Type: ${params.get('fuel')}`;
            document.getElementById('vehicle-mileage').textContent = `Average Mileage: ${params.get('mileage')}`;
            document.getElementById('vehicle-transmission').textContent = `Transmission: ${params.get('transmission')}`;
            document.getElementById('vehicle-price').textContent = `Price of the Vechile: ${params.get('price')}`;
        });

        document.getElementById('confirm-rent').addEventListener('click', () => {
            alert('Please log in to rent the vehicle.');
        });