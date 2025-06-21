// Perfume data
const perfumes = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    alt: 'زجاجة عطر فاخر',
    name: 'عطر ليالي القاهرة',
    desc: 'مزيج شرقي فاخر يدوم طويلاً ويمنحك حضورًا لا يُنسى.',
    price: 'EGP 950'
  },
  {
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    alt: 'عطر زهري فاخر',
    name: 'عطر روز جولد',
    desc: 'عبير الزهور مع لمسة فاخرة تناسب جميع الأوقات.',
    price: 'EGP 1,100'
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    alt: 'عطر رجالي فاخر',
    name: 'عطر أمبر نايت',
    desc: 'نفحات العنبر الدافئة مع لمسة خشبية فاخرة.',
    price: 'EGP 1,250'
  },
  {
    img: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
    alt: 'عطر فواكه منعش',
    name: 'عطر فواكه الصيف',
    desc: 'انتعاش الفواكه مع لمسة عصرية تدوم طوال اليوم.',
    price: 'EGP 1,050'
  },
  {
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    alt: 'عطر نسائي فاخر',
    name: 'عطر ملكة الليل',
    desc: 'رائحة زهرية غنية تعكس الأنوثة والفخامة.',
    price: 'EGP 1,300'
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    alt: 'عطر شرقي فاخر',
    name: 'عطر عبق الشرق',
    desc: 'نفحات شرقية أصيلة مع لمسة من الفانيليا.',
    price: 'EGP 1,200'
  }
];

// Category data
const categories = {
  men: [
    {
      img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
      alt: 'عطر رجالي كلاسيكي',
      name: 'عطر كلاسيك مان',
      desc: 'عطر رجالي أنيق بنفحات خشبية منعشة.',
      price: 'EGP 1,100'
    },
    {
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      alt: 'عطر رجالي عصري',
      name: 'عطر مودرن سبيريت',
      desc: 'عطر عصري يدوم طويلاً مع لمسة من الحمضيات.',
      price: 'EGP 1,200'
    },
    {
      img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
      alt: 'عطر رجالي فاخر',
      name: 'عطر ليالي الشرق',
      desc: 'مزيج شرقي فاخر يعكس الرجولة.',
      price: 'EGP 1,350'
    }
  ],
  women: [
    {
      img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      alt: 'عطر نسائي زهري',
      name: 'عطر روز ديفا',
      desc: 'عطر زهري ناعم يدوم طوال اليوم.',
      price: 'EGP 1,150'
    },
    {
      img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
      alt: 'عطر نسائي فواكه',
      name: 'عطر فواكه الحب',
      desc: 'انتعاش الفواكه مع لمسة أنثوية ساحرة.',
      price: 'EGP 1,250'
    },
    {
      img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      alt: 'عطر نسائي فاخر',
      name: 'عطر ملكة الليل',
      desc: 'رائحة غنية تعكس الفخامة والأنوثة.',
      price: 'EGP 1,300'
    }
  ]
};

let currentIndex = 0;
const cardsToShow = 3;

function renderPerfumeCards() {
  const carousel = document.getElementById('perfumeCarousel');
  carousel.innerHTML = '';
  for (let i = 0; i < cardsToShow; i++) {
    const idx = (currentIndex + i) % perfumes.length;
    const p = perfumes[idx];
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-lg-4';
    card.innerHTML = `
      <div class="card h-100 shadow-sm animate__animated animate__fadeInUp">
        <img src="${p.img}" class="card-img-top" alt="${p.alt}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">${p.name}</h3>
          <p class="card-text">${p.desc}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <span class="card-price">${p.price}</span>
            <button class="btn btn-add">أضف إلى السلة</button>
          </div>
        </div>
      </div>
    `;
    carousel.appendChild(card);
  }
}

function showPrevPerfumes() {
  currentIndex = (currentIndex - 1 + perfumes.length) % perfumes.length;
  renderPerfumeCards();
}
function showNextPerfumes() {
  currentIndex = (currentIndex + 1) % perfumes.length;
  renderPerfumeCards();
}

function renderCategoryCards(category) {
  const container = document.getElementById('categoryCards');
  container.innerHTML = '';
  categories[category].forEach(p => {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-lg-4';
    card.innerHTML = `
      <div class="card h-100 shadow-sm animate__animated animate__fadeInUp">
        <img src="${p.img}" class="card-img-top" alt="${p.alt}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">${p.name}</h3>
          <p class="card-text">${p.desc}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <span class="card-price">${p.price}</span>
            <button class="btn btn-add">أضف إلى السلة</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Perfume carousel
  renderPerfumeCards();
  document.getElementById('perfumePrev').addEventListener('click', showPrevPerfumes);
  document.getElementById('perfumeNext').addEventListener('click', showNextPerfumes);
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') showNextPerfumes();
    if (e.key === 'ArrowRight') showPrevPerfumes();
  });

  // Footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple form validation
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك قريبًا.');
      this.reset();
    });
  }

  // Category section logic
  let currentCategory = 'men';
  renderCategoryCards(currentCategory);
  document.getElementById('tab-men').addEventListener('click', function() {
    currentCategory = 'men';
    this.classList.add('active');
    document.getElementById('tab-women').classList.remove('active');
    renderCategoryCards('men');
  });
  document.getElementById('tab-women').addEventListener('click', function() {
    currentCategory = 'women';
    this.classList.add('active');
    document.getElementById('tab-men').classList.remove('active');
    renderCategoryCards('women');
  });

  // Additional JavaScript from HTML files
  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Soft scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Simple form validation (optional)
  const form2 = document.querySelector('form');
  if (form2) {
    form2.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك قريبًا.');
      this.reset();
    });
  }
  
  // WhatsApp order button logic for static cards
  function setupWhatsAppOrderButtons() {
    document.querySelectorAll('.whatsapp-order').forEach(function (btn) {
      btn.onclick = function () {
        var card = btn.closest('.card-body');
        var product = card ? card.querySelector('.card-title').textContent.trim() : '';
        var url = 'https://wa.me/201125860865?text=' + encodeURIComponent('مرحبًا، أود طلب منتج: ' + product);
        window.open(url, '_blank');
        return false;
      };
    });
  }
  
  setupWhatsAppOrderButtons();
  
  // Initialize any other functionality
  console.log('Güzel Perfumes website loaded successfully!');
}); 