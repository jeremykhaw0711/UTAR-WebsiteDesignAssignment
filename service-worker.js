const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'shop.html',
  'cart.html',
  'about.html',
  'blog.html',
  'blog-single.html',
  'checkout.html',
  'contact.html',
  'index.html',
  'menu.html',
  'placeorder.html',
  'product-single.html',
  'services.html',
  'termandconditions.html',

  'css/bootstrap/bootstrap-grid.css',
  'css/bootstrap/bootstrap-reboot.css',
  'css/css/mixins/_text-hide.css',
  'css/css/bootstrap-reboot.css',
  'css/ajax-loader.gif',
  'css/animate.css',
  'css/aos.css',
  'css/bootstrap.min.css',
  'css/bootstrap-datepicker.css',
  'css/cart.css',
  'css/flaticon.css',
  'css/icomoon.css',
  'css/ionicons.min.css',
  'css/jquery.timepicker.css',
  'css/magnific-popup.css',
  'css/open-iconic-bootstrap.min.css',
  'css/owl.carousel.min.css',
  'css/owl.theme.default.min.css',
  'css/style.css',
  

  'images/about.jpg',
  'images/Apple-juice.png',
  'images/Banana-smoothie.jpg',
  'images/Better-than-sex-cake.jpg',
  'images/bg_1.jpg',
  'images/bg_2.jpg',
  'images/bg_3.jpg',
  'images/bg_4.jpg',
  'images/bg1.jpg',
  'images/Blueberry-smoothie.jpg',
  'images/Burgers.jpg',
  'images/Carrot-Cake.jpg',
  'images/Chicken-Chop.jpg',
  'images/Chocolate-Cake.jpg',
  'images/Cucumber-juice.png',
  'images/Grilled-Pork-Chop.jpg',
  'images/Lemon-Garlic-Permesan-Shrimp-Pasta.jpg',
  'images/Lemon-juice.png',
  'images/loc.png',
  'images/Mango-smoothie.jpg',
  'images/Orange-juice.png',
  'images/Oreo-Cake.jpg',
  'images/Papaya-juice.png',
  'images/Pasta-Cabonara.jpg',
  'images/Pineapple-juice.png',
  'images/Red-Velvet-Cake.jpg',
  'images/Strawberry-Cake.jpg',
  'images/Strawberry-smoothie.jpg',
  'images/Tacos.jpg',
  'images/touchngo.PNG',
  'images/Watermelon-juice.png',


  'js/aos.js',
  'js/bootstrap.min.js',
  'js/bootstrap-datepicker.js',
  'js/cart.js',
  'js/google-map.js',
  'js/jquery.animateNumber.min.js',
  'js/jquery.easing.1.3.js',
  'js/jquery.magnific-popup.min.js',
  'js/jquery.min.js',
  'js/jquery.stellar.min.js',
  'js/jquery.timepicker.min.js',
  'js/jquery.waypoints.min.js',
  'js/jquery-3.2.1.min.js',
  'js/jquery-migrate-3.0.1.min.js',
  'js/main.js',
  'js/owl.carousel.min.js',
  'js/popper.min.js',
  'js/range.js',
  'js/scrollax.min.js',



  'scss/style.scss'
];

self.addEventListener('install', event => {
  alert("Install");
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
      );
    });
    
    self.addEventListener('activate', event => {
      alert("activated!!");
      console.log('Service worker activate event!');
    });
    
    self.addEventListener('fetch', event => {
      console.log('Fetch intercepted for:', event.request.url);
      event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return fetch(event.request);
          })
        );
    });
    
