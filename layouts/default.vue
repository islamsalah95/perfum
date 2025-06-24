<template>
  <div>
    <!-- Header / Navigation -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark py-3">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center gap-2" href="/">
            <img src="/logo.png" alt="Güzel Logo" style="height: 80px; width: auto; object-fit: contain" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="تبديل القائمة">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/#features">مميزاتنا</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#products">العطور الأكثر مبيعًا</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#reviews">آراء العملاء</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#contact">تواصل معنا</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <NuxtPage />

    <!-- Footer -->
    <footer class="footer mt-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 text-center text-md-end mb-3 mb-md-0">
            <div class="footer-logo">Güzel</div>
          </div>
          <div class="col-md-4 text-center mb-3 mb-md-0">
            <a href="#" class="footer-link">من نحن</a>
            <a href="#" class="footer-link">الشروط</a>
            <a href="#" class="footer-link">سياسة الخصوصية</a>
          </div>
          <div class="col-md-4 text-center text-md-start">
            <a href="#" class="social-icon" aria-label="انستجرام"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/share/15KYS1fBEv/" class="social-icon" aria-label="فيسبوك"><i class="bi bi-facebook"></i></a>
            <a href="https://wa.me/201125860865" class="social-icon" aria-label="واتساب">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
        <div class="text-center mt-3" style="font-size: 0.95rem">
          &copy; <span id="year"></span> Güzel. جميع الحقوق محفوظة.
          <div class="developer-credit">
            صمم بواسطة
            <a href="https://islamsalah95.github.io/" target="_blank">Islam Salah</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template> 