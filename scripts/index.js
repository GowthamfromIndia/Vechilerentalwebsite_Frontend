
        document.addEventListener('DOMContentLoaded', () => {
            const rentNowButtons = document.querySelectorAll('.rent-now-btn');

            rentNowButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const card = button.closest('.featured-car-card');
                    const title = card.querySelector('.card-title a').textContent;
                    const image = card.querySelector('.card-banner img').src;
                    const year = card.querySelector('.year').value;
                    const seats = card.querySelector('.card-list-item:nth-child(1) .card-item-text').textContent.split(' ')[0];
                    const fuel = card.querySelector('.card-list-item:nth-child(2) .card-item-text').textContent;
                    const mileage = card.querySelector('.card-list-item:nth-child(3) .card-item-text').textContent;
                    const transmission = card.querySelector('.card-list-item:nth-child(4) .card-item-text').textContent;
                    const price = card.querySelector('.card-price strong').textContent;

                    const urlParams = new URLSearchParams({
                        title,
                        image,
                        year,
                        seats,
                        fuel,
                        mileage,
                        transmission,
                        price
                    });

                    window.location.href = `Rent.html?${urlParams.toString()}`;
                });
            });
        });
