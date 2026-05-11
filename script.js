(function(){
        // Konfigurasi marketplace
        const TOKO_WA_NOMOR = '628127392635';
        const TOKO_SHOPEE = 'https://id.shp.ee/TWnLxXNH';
        const TOKO_TIKTOK = 'https://www.tiktok.com/@sabina.collection?_r=1&_t=ZS-95X8nxxV3EA';

        const products = [
            { id: 1, name: 'ALUNA',discountPercent: 20, price: 375000, images: ['Poto Produk/aluna/alunabag.png'] },
            { id: 2, name: 'AYYA', price: 150000,  images: ['Poto Produk/ayya/ayyabag.png'] },
            { id: 3, name: 'ALORA', price: 55000,  images: ['Poto Produk/alora/alorabag.png'] },
            { id: 23, name: 'BIGGY', price: 200000,  images: ['Poto Produk/biggy/biggybag.jpg'] },
            { id: 4, name: 'CLARISSA', price: 75000, images: ['Poto Produk/clarissa/clarissabag.png', 'Poto Produk/clarissa/clarissa2bag.png','Poto Produk/clarissa/clarissa3bag.png'] },
            { id: 5, name: 'CYLINDRIA', price: 175000,  images: ['Poto Produk/cylindria/cylindria.png'] },
            { id: 6, name: 'DARA', price: 200000,  images: ['Poto Produk/dara/darabag.png','Poto Produk/dara/dara2bag.jpeg'] },
            { id: 7, name: 'FOLDIE', price: 50000,  images: ['Poto Produk/foldie/foldiebag.png','Poto Produk/foldie/foldie2bag.png','Poto Produk/foldie/foldie3bag.png','Poto Produk/foldie/foldie4bag.png','Poto Produk/foldie/foldie5bag.png'] },
            { id: 8, name: 'GRIPA', price: 200000,  images: ['Poto Produk/gripa/gripabag.png','Poto Produk/gripa/gripa2bag.png','Poto Produk/gripa/gripa3bag.png','Poto Produk/gripa/gripa4bag.png','Poto Produk/gripa/gripa5bag.png'] },
            { id: 24, name: 'GRIPA NEW', price: 265000,  images: ['Poto Produk/gripanew/gripanew.png','Poto Produk/gripanew/gripa2new.png','Poto Produk/gripanew/gripa3new.jpg','Poto Produk/gripanew/gripa4new.jpg'] },
            { id: 9, name: 'HIBY', price: 225000,  images: ['Poto Produk/hiby/hibybag.png'] },
            { id: 10, name: 'KAYLA', price: 250000,  images: ['Poto Produk/kayla/kaylabag.png'] },
            { id: 11, name: 'LAYA', price: 225000,  images: ['Poto Produk/laya/layabag.png','Poto Produk/laya/laya2bag.png'] },
            { id: 25, name: 'LAULI', price: 125000,  images: ['Poto Produk/lauli/Laulibag.png'] },
            { id: 26, name: 'LIFY', price: 65000,  images: ['Poto Produk/lify/Lify.jpg','Poto Produk/lify/Lify2.jpg'] },
            { id: 27, name: 'LILY', price: 250000,  images: ['Poto Produk/lily/Lilybag.jpg','Poto Produk/lily/Lily2bag.jpg','Poto Produk/lily/Lily3bag.png'] },
            { id: 12, name: 'LOKA', price: 175000,  images: ['Poto Produk/loka/Lokabag.png','Poto Produk/loka/Loka2bag.png'] },
            { id: 28, name: 'LUCY', price: 165000,  images: ['Poto Produk/lucy/Lucybag.PNG'] },
            { id: 29, name: 'LULU', price: 150000,  images: ['Poto Produk/lulu/Lulubag.png'] },
            { id: 13, name: 'LUNA', price: 250000,  images: ['Poto Produk/luna/Luna5bag.png','Poto Produk/luna/lunabag.png','Poto Produk/luna/Luna2bag.png','Poto Produk/luna/Luna3bag.PNG','Poto Produk/luna/Luna4bag.jpg'] },
            { id: 34, name: 'MARISA', price: 2000000,  images: ['Poto Produk/marisa/marisa.PNG'] },
            { id: 35, name: 'MAYA', price: 300000,  images: ['Poto Produk/maya/maya.png'] },
            { id: 14, name: 'NOAH', price: 125000,  images: ['Poto Produk/noah/noahbag.png'] },
            { id: 15, name: 'OVILIA', price: 200000,  images: ['Poto Produk/ovilia/oviliabag.png'] },
            { id: 30, name: 'POUCH', price: 25000,  images: ['Poto Produk/pouch/pouch1.png','Poto Produk/pouch/pouch2.png','Poto Produk/pouch/Pouch 3.png','Poto Produk/pouch/Pouch 4.png','Poto Produk/pouch/Pouch 5.png'] },
            { id: 16, name: 'RUCA', price: 500000, discountPercent: 50, images: ['Poto Produk/ruca/rucabag.png'] },
            { id: 17, name: 'SHEILA', price: 300000, discountPercent: 0, images: ['Poto Produk/sheila/sheilabag.png','Poto Produk/sheila/sheila2bag.png','Poto Produk/sheila/sheila3bag.png'] },
            { id: 19, name: 'SOFIA', price: 285000,  images: ['Poto Produk/sofia/sofiabag.png','Poto Produk/sofia/sofia2bag.jpeg','Poto Produk/sofia/sofia3bag.jpeg'] },
            { id: 31, name: 'TARA', price: 300000,  images: ['Poto Produk/tara/tarabag.PNG','Poto Produk/tara/tara2bag.PNG'] },
            { id: 20, name: 'TERA', price: 175000,  images: ['Poto Produk/tera/terabag.jpeg','Poto Produk/tera/tera2bag.png','Poto Produk/tera/tera3bag.png'] },
            { id: 32, name: 'TIFFANY', price: 350000,  images: ['Poto Produk/tiffany/tiffanybag.PNG','Poto Produk/tiffany/tiffany2bag.PNG','Poto Produk/tiffany/tiffany3bag.PNG','Poto Produk/tiffany/tiffany4bag.PNG'] },
            { id: 21, name: 'TIARA', price: 250000,  images: ['Poto Produk/tiara/tiarabag.jpeg','Poto Produk/tiara/tiara2bag.jpeg','Poto Produk/tiara/tiara3bag.jpeg'] },
            { id: 22, name: 'ZALEA', price: 125000,  images: ['Poto Produk/zalea/zaleabag.jpeg','Poto Produk/zalea/zalea2bag.jpeg','Poto Produk/zalea/zalea3bag.jpeg'] },
            { id: 33, name: 'ZIA', price: 20000,  images: ['Poto Produk/zia/zia.jpg','Poto Produk/zia/zia2.jpg','Poto Produk/zia/zia3.jpg','Poto Produk/zia/zia4.jpg'] },
        ];
        
        function getDiscountedPrice(product) {
            if (!product.discountPercent || product.discountPercent <= 0) return product.price;
            return Math.round(product.price * (100 - product.discountPercent) / 100);
        }

        function formatRupiah(amount) {
            return 'Rp' + amount.toLocaleString('id-ID');
        }

        let cart = JSON.parse(localStorage.getItem('jabutasCart')) || [];
        let currentProduct = null;
        let currentImageIndex = 0;
        const productGrid = document.getElementById('productGrid');
        const cartItems = document.getElementById('cartItemsList');
        const cartTotal = document.getElementById('cartTotalPrice');
        const cartCount = document.getElementById('cart-count');
        const cartPanel = document.getElementById('cartPanel');
        const modal = document.getElementById('productModal');
        const modalName = document.getElementById('modalName');
        const modalPriceContainer = document.getElementById('modalPriceContainer');
        const modalQty = document.getElementById('modalQty');
        const galleryDots = document.getElementById('galleryDots');
        const prevBtn = document.getElementById('galleryPrev');
        const nextBtn = document.getElementById('galleryNext');
        const body = document.body;

        const modalWa = document.getElementById('modalWa');
        const modalShopee = document.getElementById('modalShopee');
        const modalTiktok = document.getElementById('modalTiktok');

        document.getElementById('themeToggle').addEventListener('click', () => {
            body.classList.toggle('dark');
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-moon'); icon.classList.toggle('fa-sun');
        });

        function renderProducts() {
            productGrid.innerHTML = products.map(p => {
                const discounted = getDiscountedPrice(p);
                const hasDiscount = p.discountPercent > 0;
                let priceHtml = '';
                if (hasDiscount) {
                    priceHtml = `<span class="price-original">${formatRupiah(p.price)}</span> <span class="price-discount">${formatRupiah(discounted)}</span> <span class="discount-badge">-${p.discountPercent}%</span>`;
                } else {
                    priceHtml = `<span>${formatRupiah(p.price)}</span>`;
                }
                return `
                    <div class="product-card">
                        <img src="${p.images[0]}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.src='https://via.placeholder.com/300?text=Gambar+Not+Found'">
                        <div class="product-name">${p.name}</div>
                        <div class="product-price">${priceHtml}</div>
                        <button class="btn-card btn-detail" data-id="${p.id}"><i class="fas fa-eye"></i> Lihat Produk</button>
                    </div>`;
            }).join('');
            document.querySelectorAll('.btn-detail').forEach(btn => {
                btn.addEventListener('click', () => {
                    const product = products.find(p => p.id === parseInt(btn.dataset.id));
                    openModal(product);
                });
            });
        }

        function updateGallery() {
            if (!currentProduct) return;
            const images = currentProduct.images;
            document.getElementById('modalImage').src = images[currentImageIndex];
            galleryDots.innerHTML = '';
            images.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (idx === currentImageIndex) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentImageIndex = idx;
                    updateGallery();
                });
                galleryDots.appendChild(dot);
            });
            if (images.length <= 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'flex';
                nextBtn.style.display = 'flex';
            }
        }

        function openModal(product) {
            currentProduct = product;
            currentImageIndex = 0;
            modalName.textContent = product.name;
            const discountedPrice = getDiscountedPrice(product);
            if (product.discountPercent > 0) {
                modalPriceContainer.innerHTML = `<span class="modal-price-original">${formatRupiah(product.price)}</span> <span class="modal-price-discount">${formatRupiah(discountedPrice)}</span> <span class="discount-badge" style="background:#e67e22; font-size:0.7rem;">-${product.discountPercent}%</span>`;
            } else {
                modalPriceContainer.innerHTML = `<span class="modal-price-discount" style="font-size:1.3rem;">${formatRupiah(product.price)}</span>`;
            }
            updateGallery();
            modalQty.value = 1;
            
            const waMessage = `Halo%20Jabutas,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}.%20Bisa%20informasi%20lebih%20lanjut?`;
            modalWa.href = `https://wa.me/${TOKO_WA_NOMOR}?text=${waMessage}`;
            modalShopee.href = TOKO_SHOPEE;
            modalTiktok.href = TOKO_TIKTOK;
            
            modal.classList.add('active');
        }

        function updateCartUI() {
            const qty = cart.reduce((s, i) => s + i.quantity, 0);
            cartCount.textContent = qty;
            if (!cart.length) cartItems.innerHTML = '<li style="list-style:none;padding:1rem;">Keranjang kosong</li>';
            else {
                cartItems.innerHTML = cart.map(i => `
                    <li class="cart-item" style="display:flex;justify-content:space-between;padding:0.8rem 0;">
                        <div><span>${i.name} (x${i.quantity})</span><br><small>${formatRupiah(i.price * i.quantity)}</small></div>
                        <button class="remove-item" data-id="${i.id}" style="background:none;border:none;color:#a05a5a;"><i class="fas fa-trash"></i></button>
                    </li>`).join('');
                document.querySelectorAll('.remove-item').forEach(b => b.addEventListener('click', () => removeFromCart(parseInt(b.dataset.id))));
            }
            const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
            cartTotal.textContent = formatRupiah(total);
            localStorage.setItem('jabutasCart', JSON.stringify(cart));
        }

        function addToCart(product, qty) {
            const discountedPrice = getDiscountedPrice(product);
            const ex = cart.find(i => i.id === product.id);
            if (ex) {
                ex.quantity += qty;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: discountedPrice,
                    quantity: qty
                });
            }
            updateCartUI();
        }

        function removeFromCart(id) { 
            cart = cart.filter(i => i.id !== id); 
            updateCartUI(); 
        }

        prevBtn.addEventListener('click', () => {
            if (currentProduct && currentProduct.images.length > 0) {
                currentImageIndex = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
                updateGallery();
            }
        });
        nextBtn.addEventListener('click', () => {
            if (currentProduct && currentProduct.images.length > 0) {
                currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length;
                updateGallery();
            }
        });

        document.getElementById('modalAddToCart').addEventListener('click', ()=>{
            if(currentProduct) addToCart(currentProduct, parseInt(modalQty.value));
            modal.classList.remove('active');
        });
        document.getElementById('qtyPlus').addEventListener('click', ()=> modalQty.value = parseInt(modalQty.value)+1);
        document.getElementById('qtyMinus').addEventListener('click', ()=> { if(modalQty.value>1) modalQty.value--; });
        document.getElementById('closeModalBtn').addEventListener('click', ()=> modal.classList.remove('active'));
        modal.addEventListener('click', (e)=> { if(e.target === modal) modal.classList.remove('active'); });

        document.getElementById('cartIcon').addEventListener('click', ()=>{ cartPanel.classList.add('active'); });
        document.getElementById('closeCartBtn').addEventListener('click', ()=>{ cartPanel.classList.remove('active'); });
        
        // ========== HAMBURGER MENU YANG DIPASTIKAN BERFUNGSI DI HP (tanpa overlay) ==========
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const hamburgerIcon = hamburger.querySelector('i');

        function closeMenu() {
            navMenu.classList.remove('active');
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }

        function toggleMenu() {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-times');
            } else {
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
            }
        }

        // Event hamburger
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            toggleMenu();
        });

        // Tutup menu ketika salah satu link di navMenu diklik
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // Jika layar di-resize ke ukuran desktop, tutup menu
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // ========== AKHIR HAMBURGER ==========

        document.getElementById('whatsappOrderBtn').addEventListener('click', ()=>{
            if(!cart.length) return alert('Keranjang kosong');
            let msg = 'Halo Jabutas, pesan:%0A';
            cart.forEach(i => msg += `- ${i.name} (${i.quantity}) = ${formatRupiah(i.price * i.quantity)}%0A`);
            msg += `%0ATotal: ${formatRupiah(cart.reduce((s,i)=>s+i.price*i.quantity,0))}`;
            window.open(`https://wa.me/${TOKO_WA_NOMOR}?text=${msg}`, '_blank');
        });

        document.getElementById('sendServiceWA').addEventListener('click', ()=>{
            const nama = document.getElementById('fullName').value, wa = document.getElementById('waNumber').value, tas = document.getElementById('interestedTas').value, pesan = document.getElementById('message').value;
            if(!nama||!wa) return alert('Nama dan WA wajib diisi');
            window.open(`https://wa.me/${TOKO_WA_NOMOR}?text=Halo%20Jabutas,%20saya%20${encodeURIComponent(nama)}%20(${encodeURIComponent(wa)}).%0ATas:%20${encodeURIComponent(tas)}.%0APesan:%20${encodeURIComponent(pesan)}`, '_blank');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', function(e){
            const href = this.getAttribute('href'); if(href==="#") return;
            const target = document.querySelector(href); if(target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
        }));

        const scrollTopBtn = document.getElementById('scrollTop');
        window.addEventListener('scroll', ()=> scrollTopBtn.classList.toggle('show', window.scrollY>300));
        scrollTopBtn.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

        renderProducts();
        updateCartUI();

        const observer = new IntersectionObserver((entries)=>{ entries.forEach(en=> { if(en.isIntersecting) en.target.classList.add('visible'); }); }, {threshold:0.1});
        document.querySelectorAll('.fade-in').forEach(el=> observer.observe(el));
    })();