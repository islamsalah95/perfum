<template>
  <!-- Hero Section -->
  <section class="hero position-relative">
    <div class="hero-bg"></div>
    <div class="container hero-content text-center py-5">
      <h1 class="hero-title mb-3">اكتشف الفخامة مع عطور Güzel في مصر</h1>
      <p class="hero-subtitle mb-4">
        عطور أصلية، روائح تأسر الحواس وتدوم طويلاً. لأنك تستحق الأفضل دائمًا.
      </p>
      <a href="#products" class="btn btn-gold shadow-lg">تسوق الآن</a>
    </div>
  </section>

  <!-- Intro Video Section -->
  <section class="container my-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-lg-6 mb-4 mb-lg-0">
        <video src="/present.mp4" class="w-100 rounded shadow" controls
          poster="/logo.png"
          style="background: #23222a; max-height: 340px; object-fit: cover" preload="none"></video>
      </div>
      <div class="col-12 col-lg-6 text-center text-lg-end">
        <h2 class="mb-3" style="color: #e0b973">تعرف على عطور Güzel</h2>
        <p style="font-size: 1.15rem; line-height: 2">
          شاهد هذا الفيديو القصير لتتعرف على جودة وروعة عطورنا الفاخرة، ولماذا يثق بنا آلاف العملاء في مصر والعالم العربي. اكتشف أسرار التميز في كل زجاجة!
        </p>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="features-section container my-5">
    <div class="row text-center g-4">
      <div class="col-6 col-md-3">
        <div class="feature-icon mb-2">
          <i class="bi bi-patch-check-fill"></i>
        </div>
        <h3 class="h5 mb-2">عطور أصلية</h3>
        <p class="mb-0">ضمان 100% على جميع المنتجات</p>
      </div>
      <div class="col-6 col-md-3">
        <div class="feature-icon mb-2"><i class="bi bi-truck"></i></div>
        <h3 class="h5 mb-2">توصيل سريع</h3>
        <p class="mb-0">خدمة توصيل سريعة وآمنة لجميع أنحاء مصر</p>
      </div>
      <div class="col-6 col-md-3">
        <div class="feature-icon mb-2"><i class="bi bi-gift"></i></div>
        <h3 class="h5 mb-2">عروض حصرية</h3>
        <p class="mb-0">خصومات وعروض مميزة طوال العام</p>
      </div>
      <div class="col-6 col-md-3">
        <div class="feature-icon mb-2">
          <i class="bi bi-shield-lock"></i>
        </div>
        <h3 class="h5 mb-2">ثقة وأمان</h3>
        <p class="mb-0">تسوق بثقة مع حماية بياناتك</p>
      </div>
    </div>
  </section>

  <!-- Category Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4" style="color: #e0b973">تسوق حسب الفئة</h2>
    <div class="row justify-content-center g-4">
      <div class="col-12 col-md-6">
        <NuxtLink to="/men" class="text-decoration-none">
          <div class="card department-card h-100 shadow-sm animate__animated animate__fadeInUp text-center">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              class="card-img-top department-img" alt="عطور رجالية" loading="lazy" />
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <h3 class="card-title" style="color: #e0b973; font-size: 2rem">
                رجالى
              </h3>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="col-12 col-md-6">
        <NuxtLink to="/women" class="text-decoration-none">
          <div class="card department-card h-100 shadow-sm animate__animated animate__fadeInUp text-center">
            <img
              src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              class="card-img-top department-img" alt="عطور نسائية" loading="lazy" />
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <h3 class="card-title" style="color: #e0b973; font-size: 2rem">
                حريمى
              </h3>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Best-Selling Perfumes Section -->
  <section id="products" class="container my-5">
    <h2 class="text-center mb-4" style="color: #e0b973">
      العطور الأكثر مبيعًا
    </h2>
    <div class="row g-4 justify-content-center">
      <template v-if="pending">
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">جار التحميل...</span>
          </div>
        </div>
      </template>
      <template v-else>
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="col-12 col-sm-6 col-lg-3"
        />
        <div v-if="!products.length" class="col-12 text-center py-5">
          <p class="text-muted">لا توجد منتجات متاحة حالياً</p>
        </div>
      </template>
    </div>
  </section>

  <!-- How to Choose Your Perfume Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4" style="color: #e0b973">
      كيف تختار عطرك المناسب؟
    </h2>
    <div class="row text-center g-4">
      <div class="col-12 col-md-4">
        <div class="p-3 rounded bg-dark h-100">
          <i class="bi bi-person-arms-up" style="font-size: 2rem; color: #e0b973"></i>
          <h4 class="mt-3">حسب شخصيتك</h4>
          <p>
            اختر العطر الذي يعكس شخصيتك، سواء كنت هادئًا أو جريئًا أو كلاسيكيًا.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="p-3 rounded bg-dark h-100">
          <i class="bi bi-calendar2-week" style="font-size: 2rem; color: #e0b973"></i>
          <h4 class="mt-3">حسب المناسبة</h4>
          <p>عطور للعمل، للمناسبات الخاصة، أو للاستخدام اليومي.</p>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="p-3 rounded bg-dark h-100">
          <i class="bi bi-sun" style="font-size: 2rem; color: #e0b973"></i>
          <h4 class="mt-3">حسب الموسم</h4>
          <p>عطور صيفية منعشة أو عطور شتوية دافئة.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Reviews Section -->
  <section id="reviews" class="container my-5">
    <h2 class="text-center mb-4" style="color: #e0b973">آراء العملاء</h2>
    <div class="row justify-content-center g-4">
      <div class="col-md-4">
        <div class="review animate__animated animate__fadeInUp bg-dark text-light p-3 rounded">
          <div class="stars mb-2 text-warning">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p>
            أفضل تجربة اشتريت فيها عطرًا أصليًا! الرائحة مميزة وتدوم طويلاً،
            وسرعة التوصيل مذهلة.
          </p>
          <div class="fw-bold mt-2">سارة محمد</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="review animate__animated animate__fadeInUp bg-dark text-light p-3 rounded">
          <div class="stars mb-2 text-warning">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </div>
          <p>
            خدمة ممتازة! العطور فاخرة وتعطي انطباع أول رائع. Guzel أصبحت
            وجهتي الأولى للعطور.
          </p>
          <div class="fw-bold mt-2">أحمد علي</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="review animate__animated animate__fadeInUp bg-dark text-light p-3 rounded">
          <div class="stars mb-2 text-warning">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p>
            عطر رجالي فخم ورائحة تدوم لأكثر من 8 ساعات. تغليف رائع وخدمة
            راقية. أنصح به بشدة!
          </p>
          <div class="fw-bold mt-2">خالد مصطفى</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="review animate__animated animate__fadeInUp bg-dark text-light p-3 rounded">
          <div class="stars mb-2 text-warning">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p>
            الطلب سهل وسريع، واستلمت العطر خلال يومين فقط. تجربة رائعة وخدمة
            مميزة جداً!
          </p>
          <div class="fw-bold mt-2">منى جمال</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="review animate__animated animate__fadeInUp bg-dark text-light p-3 rounded">
          <div class="stars mb-2 text-warning">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </div>
          <p>
            عطر نسائي أنيق وثابت. التصميم فخم ويصلح كهدية راقية. شكراً Guzel
            على الخدمة الاحترافية.
          </p>
          <div class="fw-bold mt-2">هالة يوسف</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="review animate__animated animate__fadeInUp bg-dark text-light p-3 rounded">
          <div class="stars mb-2 text-warning">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p>
            من أفضل المتاجر الإلكترونية في العطور. الجودة ممتازة والأسعار
            مناسبة، سأطلب مرة أخرى بالتأكيد.
          </p>
          <div class="fw-bold mt-2">زياد محمود</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="container my-5">
    <h2 class="text-center mb-4" style="color: #e0b973">
      لماذا تختار Guzel؟
    </h2>
    <div class="bg-dark text-light p-4 rounded shadow-sm">
      <div class="mb-4">
        <h5 style="color: #e0b973">
          ما الذي يميز عطور Guzel من حيث الجودة؟
        </h5>
        <p>
          نعتمد في Guzel على زيوت عطرية طبيعية ونقية، مع مكونات فاخرة مثل
          العود والمسك، لنمنحك عطرًا فاخرًا يدوم طويلًا ويترك انطباعًا لا
          يُنسى.
        </p>
      </div>
      <div class="mb-4">
        <h5 style="color: #e0b973">هل عطور Guzel تدوم طويلًا؟</h5>
        <p>
          نعم، تركيبتنا المتقدمة تضمن ثبات العطر لساعات طويلة بفضل تركيز
          الزيوت العالي ودقة المزج بين الطبقات العطرية.
        </p>
      </div>
      <div class="mb-4">
        <h5 style="color: #e0b973">هل عطور Guzel مناسبة كهدية؟</h5>
        <p>
          بالتأكيد، نقدم عبوات أنيقة وفاخرة تناسب جميع المناسبات وتجعل Guzel
          الخيار الأمثل لهدية راقية تُعبر عن الذوق الرفيع.
        </p>
      </div>
      <div class="mb-4">
        <h5 style="color: #e0b973">هل تمتزج العطور بين التراث والحداثة؟</h5>
        <p>
          نستلهم من التراث العربي العريق، ونضيف إليه لمسات عصرية مبتكرة
          لتلبية أذواق الجيل الجديد دون التنازل عن الأصالة.
        </p>
      </div>
      <div class="mb-0">
        <h5 style="color: #e0b973">لماذا يثق العملاء بعطور Guzel؟</h5>
        <p>
          لأننا نوفر منتجات أصلية 100%، خدمة عملاء متميزة، وشحن آمن وسريع،
          مما يجعل تجربة الشراء لدينا موثوقة وسلسة.
        </p>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section id="contact" class="container my-5">
    <h2 class="text-center mb-4" style="color: #e0b973">تواصل معنا</h2>
    <form class="mx-auto" style="max-width: 500px">
      <div class="mb-3">
        <label for="name" class="form-label">الاسم</label>
        <input type="text" class="form-control" id="name" placeholder="اكتب اسمك" required />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">رقم الهاتف</label>
        <input type="tel" class="form-control" id="phone" placeholder="01000000000" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">رسالتك</label>
        <textarea class="form-control" id="message" rows="4" placeholder="اكتب رسالتك هنا" required></textarea>
      </div>
      <button type="submit" class="btn btn-gold w-100">إرسال</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useProducts } from '~/composables/useProducts';
import ProductCard from '~/components/ProductCard.vue';
import { useHead } from '#app';
import { NuxtLink } from '#components';

const { products, pending } = useProducts({ best_seller: true });

useHead({
  title: 'العطور الأكثر مبيعًا | Güzel',
  meta: [
    { name: 'description', content: 'أفضل العطور الأكثر مبيعًا من متجر Güzel. اكتشف تشكيلتنا المختارة من العطور الفاخرة.' },
  ],
});
</script> 