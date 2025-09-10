document.addEventListener('DOMContentLoaded', () => {
    const dishes = [
        // Pizzas
        { id: 1, name: "Margherita Pizza", image: "images/margherita-pizza.jpg", price: 350, rating: 4.8, category: "Pizza" },
        { id: 2, name: "Pepperoni Passion", image: "images/pepperoni-pizza.jpg", price: 450, rating: 4.9, category: "Pizza" },
        { id: 3, name: "Veggie Supreme", image: "images/veggie-supreme-pizza.jpg", price: 420, rating: 4.7, category: "Pizza" },
        { id: 4, name: "Spicy Paneer Pizza", image: "images/spicy-paneer-pizza.jpg", price: 480, rating: 4.8, category: "Pizza" },
        { id: 18, name: "BBQ Chicken Feast", image: "images/bbq-chicken-pizza.jpg", price: 520, rating: 4.9, category: "Pizza" },
        { id: 19, name: "Four Cheese Pizza", image: "images/four-cheese-pizza.jpg", price: 550, rating: 5.0, category: "Pizza" },

        // Burgers
        { id: 5, name: "Classic Cheeseburger", image: "images/classic-cheeseburger.jpg", price: 280, rating: 4.9, category: "Burgers" },
        { id: 6, name: "Double Decker Beast", image: "images/double-decker-burger.jpg", price: 380, rating: 5.0, category: "Burgers" },
        { id: 7, name: "Crispy Chicken Burger", image: "images/crispy-chicken-burger.jpg", price: 320, rating: 4.8, category: "Burgers" },
        { id: 8, name: "Spicy Veggie Burger", image: "images/spicy-veggie-burger.jpg", price: 250, rating: 4.6, category: "Burgers" },
        { id: 20, name: "Mushroom Swiss Burger", image: "images/mushroom-swiss-burger.jpg", price: 340, rating: 4.7, category: "Burgers" },
        { id: 21, name: "Avocado Ranch Burger", image: "images/avocado-ranch-burger.jpg", price: 360, rating: 4.8, category: "Burgers" },

        // Indian
        { id: 9, name: "Butter Chicken", image: "images/butter-chicken.jpg", price: 450, rating: 5.0, category: "Indian" },
        { id: 10, name: "Paneer Tikka Masala", image: "images/paneer-tikka-masala.jpg", price: 420, rating: 4.9, category: "Indian" },
        { id: 11, name: "Chicken Biryani", image: "images/chicken-biryani.jpg", price: 380, rating: 4.8, category: "Indian" },
        { id: 12, name: "Chole Bhature", image: "images/chole-bhature.png", price: 250, rating: 4.7, category: "Indian" },
        { id: 13, name: "Masala Dosa", image: "images/masala-dosa.jpg", price: 200, rating: 4.8, category: "Indian" },
        { id: 22, name: "Dal Makhani", image: "images/dal-makhani.png", price: 350, rating: 4.9, category: "Indian" },
        { id: 23, name: "Rogan Josh", image: "images/rogan-josh.png", price: 550, rating: 4.9, category: "Indian" },
        
        // Asian
        { id: 24, name: "Pad Thai Noodles", image: "images/pad-thai-noodles.jpg", price: 380, rating: 4.8, category: "Asian" },
        { id: 25, name: "Chicken Ramen", image: "images/chicken-ramen.jpg", price: 420, rating: 4.9, category: "Asian" },
        { id: 26, name: "Sushi Platter", image: "images/sushi-platter.jpg", price: 650, rating: 5.0, category: "Asian" },
        { id: 27, name: "Kung Pao Chicken", image: "images/kung-pao-chicken.jpg", price: 400, rating: 4.7, category: "Asian" },

        // Desserts
        { id: 14, name: "Chocolate Lava Cake", image: "images/chocolate-lava-cake.jpg", price: 220, rating: 5.0, category: "Desserts" },
        { id: 15, name: "New York Cheesecake", image: "images/ny-cheesecake.jpg", price: 280, rating: 4.9, category: "Desserts" },
        { id: 16, name: "Gulab Jamun", image: "images/gulab-jamun.jpg", price: 150, rating: 4.8, category: "Desserts" },
        { id: 17, name: "Tiramisu", image: "images/tiramisu.jpg", price: 300, rating: 4.9, category: "Desserts" },
        { id: 28, name: "Red Velvet Pastry", image: "images/red-velvet-pastry.jpg", price: 250, rating: 4.8, category: "Desserts" },
        { id: 29, name: "Apple Crumble", image: "images/apple-crumble.jpg", price: 260, rating: 4.7, category: "Desserts" },
        { id: 30, name: "Panna Cotta", image: "images/panna-cotta.jpg", price: 290, rating: 4.9, category: "Desserts" }
    ];
    let reviews = JSON.parse(localStorage.getItem('foodReviews')) || [
        { author: 'Sarvesh Verma', rating: 5, comment: 'The Double Decker Beast burger was absolutely mind-blowing! Best I have ever had.' },
        { author: 'Akriti Patel', rating: 5, comment: 'Incredible Butter Chicken and the delivery was surprisingly fast. Will be ordering again!' },
        { author: 'Karan Singh', rating: 4, comment: 'Loved the Veggie Supreme pizza. The crust was perfect. A little more topping would make it 5 stars.' }
    ];
    let cart = JSON.parse(localStorage.getItem('foodCart')) || [];
    let ordersHistory = JSON.parse(localStorage.getItem('foodOrdersHistory')) || [];

    // --- DOM KA SELECTORS ---
    const themeToggle = document.getElementById('themeToggle');
    const dishesGrid = document.getElementById('dishes-grid');
    const dishFiltersContainer = document.getElementById('dish-filters');
    const favoritesGrid = document.getElementById('favorites-grid');
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewForm = document.getElementById('reviewForm');
    const contactForm = document.getElementById('contactForm');
    const cartButton = document.getElementById('cartButton');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCountBadge = document.getElementById('cart-count-badge');
    const cartTotalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const finishBtn = document.getElementById('finishBtn');
    const dropdownMenu = document.querySelector('.dropdown__menu');

    const renderDishes = (filter = 'all') => {
        dishesGrid.innerHTML = '';
        const filteredDishes = dishes.filter(d => filter === 'all' || d.category === filter);
        filteredDishes.forEach(d => {
            const card = document.createElement('div');
            card.className = 'dish-card';
            card.innerHTML = `
                <div class="dish-card__image-container">
                    <img src="${d.image}" alt="${d.name}" class="dish-card__image" loading="lazy" onerror="this.src='https://placehold.co/600x400/C0392B/FFFFFF?text=Image+Not+Found'">
                </div>
                <div class="dish-card__content">
                    <h3 class="dish-card__name">${d.name}</h3>
                    <p class="dish-card__price">₹${d.price.toLocaleString()}</p>
                    <div class="dish-card__rating" aria-label="Rating: ${d.rating} out of 5 stars">
                        ${"★".repeat(Math.round(d.rating))}${"☆".repeat(5 - Math.round(d.rating))}
                    </div>
                    <button class="dish-card__btn" data-id="${d.id}">Add to Cart</button>
                </div>
            `;
            dishesGrid.appendChild(card);
        });
    };
    
    const renderFilterButtons = () => {
        const categories = ['all', ...new Set(dishes.map(d => d.category))];
        dishFiltersContainer.innerHTML = '';
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.dataset.filter = category;
            button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            if (category === 'all') {
                button.classList.add('active');
            }
            dishFiltersContainer.appendChild(button);
        });
    };

    const renderFavorites = () => {
        favoritesGrid.innerHTML = '';
        const favoriteDishes = dishes.filter(d => d.rating >= 4.9).slice(0, 4);
        favoriteDishes.forEach(d => {
            const card = document.createElement('div');
            card.className = 'favorite-card';
            card.innerHTML = `
                <img src="${d.image}" alt="${d.name}" onerror="this.src='https://placehold.co/120x120/C0392B/FFFFFF?text=Fav'">
                <h3>${d.name}</h3>
                <p>${d.category}</p>
            `;
            favoritesGrid.appendChild(card);
        });
    };

    const renderReviews = () => {
        reviewsContainer.innerHTML = '';
        reviews.slice().reverse().forEach(review => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <p>"${review.comment}"</p>
                <div class="dish-card__rating" style="text-align: right;">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
                <p class="author" style="text-align: right;">- ${review.author}</p>
            `;
            reviewsContainer.appendChild(card);
        });
    };

    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; color: var(--text-secondary);">Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const dish = dishes.find(d => d.id === item.id);
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <img src="${dish.image}" alt="${dish.name}" onerror="this.src='https://placehold.co/80x80/C0392B/FFFFFF?text=Food'">
                    <div class="cart-item-info">
                        <h4>${dish.name}</h4>
                        <p>₹${(dish.price * item.quantity).toLocaleString()}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button class="quantity-change" data-id="${item.id}" data-change="-1">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-change" data-id="${item.id}" data-change="1">+</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
        }
        updateCartTotal();
        updateCartBadge();
    };

    const addToCart = (dishId) => {
        const existingItem = cart.find(item => item.id === dishId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: dishId, quantity: 1 });
        }
        showToast(`${dishes.find(d => d.id === dishId).name} added to cart!`);
        saveAndRenderCart();
    };

    const updateCartQuantity = (dishId, change) => {
        const itemInCart = cart.find(item => item.id === dishId);
        if (itemInCart) {
            itemInCart.quantity += change;
            if (itemInCart.quantity <= 0) {
                cart = cart.filter(item => item.id !== dishId);
            }
        }
        saveAndRenderCart();
    };

    const updateCartTotal = () => {
        const total = cart.reduce((sum, item) => {
            const dish = dishes.find(d => d.id === item.id);
            return sum + dish.price * item.quantity;
        }, 0);
        cartTotalEl.textContent = `₹${total.toLocaleString()}`;
    };
    
    const updateCartBadge = () => {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountBadge.textContent = count;
        cartCountBadge.style.display = count > 0 ? 'flex' : 'none';
    };
    
    const saveAndRenderCart = () => {
        localStorage.setItem('foodCart', JSON.stringify(cart));
        renderCart();
    };

    const toggleTheme = () => {
        const html = document.documentElement;
        html.classList.toggle('dark');
        html.classList.toggle('light');
        themeToggle.textContent = html.classList.contains('dark') ? '🌞' : '🌙';
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    };

    const showToast = (message) => {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.getElementById('toastContainer').appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
    };
    
    const initScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.content-section').forEach(section => {
            observer.observe(section);
        });
    };

    // --- EVENT LISTENERS ---
    themeToggle.addEventListener('click', toggleTheme);
    cartButton.addEventListener('click', () => cartSidebar.classList.add('active'));
    closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('active'));
    checkoutBtn.addEventListener('click', () => {
        if(cart.length === 0) {
            showToast("Your cart is empty!");
            return;
        }
        cartSidebar.classList.remove('active');
        checkoutModal.style.display = 'flex';
        document.getElementById('step1').style.display = 'block';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'none';
        document.getElementById('addressForm').reset();
    });
    closeModalBtn.addEventListener('click', () => checkoutModal.style.display = 'none');
    finishBtn.addEventListener('click', () => checkoutModal.style.display = 'none');
    
    dishesGrid.addEventListener('click', (e) => {
        if (e.target.matches('.dish-card__btn')) {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        }
    });

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.quantity-change')) {
            const id = parseInt(e.target.dataset.id);
            const change = parseInt(e.target.dataset.change);
            updateCartQuantity(id, change);
        }
    });
    
    dishFiltersContainer.addEventListener('click', (e) => {
        if(e.target.matches('.filter-btn')) {
            dishFiltersContainer.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            renderDishes(e.target.dataset.filter);
        }
    });
    
    dropdownMenu.addEventListener('click', (e) => {
        if(e.target.matches('a')) {
            const filter = e.target.dataset.filter;
            dishFiltersContainer.querySelector('.active').classList.remove('active');
            dishFiltersContainer.querySelector(`[data-filter="${filter}"]`).classList.add('active');
            renderDishes(filter);
        }
    });

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(reviewForm);
        const newReview = {
            author: formData.get('author'),
            rating: parseInt(formData.get('rating')),
            comment: formData.get('comment')
        };
        if (!newReview.rating) {
            showToast('Please select a star rating!');
            return;
        }
        reviews.push(newReview);
        localStorage.setItem('foodReviews', JSON.stringify(reviews));
        renderReviews();
        reviewForm.reset();
        showToast('Thank you for your review!');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Thank you! We'll get back to you soon.");
        contactForm.reset();
    });

    // Checkout ke time pe
    let orderDetails = {};
    document.getElementById('addressForm').addEventListener('submit', e => {
        e.preventDefault();
        orderDetails.custName = document.getElementById('custName').value;
        orderDetails.custEmail = document.getElementById('custEmail').value;
        orderDetails.custPhone = document.getElementById('custPhone').value;
        orderDetails.custAddress = document.getElementById('custAddress').value;
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    });

    document.getElementById('paymentForm').addEventListener('submit', e => {
        e.preventDefault();
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        if(!paymentMethod) {
            showToast('Please select a payment method.');
            return;
        }
        const total = cart.reduce((sum, item) => {
            const dish = dishes.find(d => d.id === item.id);
            return sum + dish.price * item.quantity;
        }, 0);
        const finalOrder = {
            ...orderDetails,
            paymentMethod: paymentMethod.value,
            items: cart,
            total,
            timestamp: Date.now(),
            orderId: `THS-${Date.now()}`
        };
        ordersHistory.push(finalOrder);
        localStorage.setItem('foodOrdersHistory', JSON.stringify(ordersHistory));
        const receiptText = `
          Order ID: #${finalOrder.orderId.slice(-6)}
          ---------------------------------
          Customer: ${finalOrder.custName}
          Total:    ₹${finalOrder.total.toLocaleString()}
          Payment:  ${finalOrder.paymentMethod}
          
          Thank you for your order!
          It will be delivered shortly.
          Till then take care and don't forget to give honest review.
        `;
        document.getElementById('receipt').textContent = receiptText.trim();
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
        cart = [];
        saveAndRenderCart();
    });

    // Starting ya initiallize
    const init = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.className = savedTheme;
        themeToggle.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
        document.getElementById('year').textContent = new Date().getFullYear();
        renderFilterButtons();
        renderDishes();
        renderFavorites();
        renderReviews();
        renderCart();
        initScrollAnimations();
        updateCartBadge();
    };
    
    init();
});
