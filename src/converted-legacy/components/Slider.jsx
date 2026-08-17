import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  { img: '/img/slider/monel-seamless-u-tubes-supplier.jpg', text: 'Manufacturer & Exporter of <span class="font-black">SEAMLESS U TUBES</span>' },
  { img: '/img/slider/forgings-products-manufacturer.jpg', text: 'Buy Premium Quality <span class="font-black">FORGED PRODUCTS</span>' },
  { img: '/img/slider/cladded-tubes-sheets-supplier.jpg', text: 'Manufacturer & Exporter of High Quality <span class="font-black">CLADDED TUBE SHEETS</span>' },
  { img: '/img/slider/vision.jpg', text: 'Having A <span class="font-black">VISION FOR BIG ENTERPRISE</span>' },
  { img: '/img/slider/perfection-quality.jpg', text: 'An eagles eye for <span class="font-black">PERFECTION & QUALITY</span>' },
  { img: '/img/slider/excellence-service.jpg', text: 'Passion for Excellence & meeting <span class="font-black">CUSTOMER EXPECTATION </span>at any cost' },
  { img: '/img/slider/customers-requirement.jpg', text: 'Though old school thought but listen to <span class="font-black">CUSTOMERS REQUIREMENT</span>' },
  { img: '/img/slider/commitment.jpg', text: '..And a casual & flexible approach in dealing without loosing the seriousness of <span class="font-black">COMMITTMENTS</span>.' },
];

export default function Slider() {
  return (
    <div className="w-full relative" style={{ height: '450px' }}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <img src={slide.img} alt="Slider Image" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end justify-end pb-8 pr-4 sm:pb-12 sm:pr-8 md:pb-16 md:pr-16 lg:pr-[10%]">
              <div 
                className="bg-[#005d65]/90 text-white text-xl md:text-2xl font-semibold max-w-md text-left p-4 md:px-6 md:py-4 shadow-xl"
                dangerouslySetInnerHTML={{ __html: slide.text }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        /* Make pagination bullets significantly larger */
        .swiper-pagination-bullet {
          width: 14px !important;
          height: 14px !important;
          background-color: #9ca3af !important; /* Grey fill for inactive */
          opacity: 1 !important;
          border: 2px solid white;
          box-shadow: 0 0 2px rgba(0,0,0,0.3);
        }
        .swiper-pagination-bullet-active {
          background-color: #005d65 !important;
          border: 2px solid white;
        }
        /* Make navigation arrows a dark circle with custom SVG chevron */
        .swiper-button-next, .swiper-button-prev {
          color: transparent !important; /* Hide default text if any */
          background-color: rgba(30, 30, 30, 0.7) !important;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50%;
          background-repeat: no-repeat !important;
          background-position: center !important;
          background-size: 20px !important; /* Makes the white portion slightly larger */
        }
        .swiper-button-prev {
          left: 12px !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m15 18-6-6 6-6'/%3E%3C/svg%3E") !important;
        }
        .swiper-button-next {
          right: 12px !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m9 18 6-6-6-6'/%3E%3C/svg%3E") !important;
        }
        @media (min-width: 768px) {
          .swiper-button-prev { left: 24px !important; }
          .swiper-button-next { right: 24px !important; }
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.9) !important;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          content: '' !important; /* Hide Swiper's default icon */
        }
        /* Shift the bottom pagination up a bit */
        .swiper-pagination-bullets {
          bottom: 20px !important;
        }
      `}</style>
    </div>
  );
}
