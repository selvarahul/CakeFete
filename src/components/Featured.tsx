import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredCakes } from "@/data/site";

export function Featured() {
  return (
    <section id="featured" className="bg-cream py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading
          title="Featured Cakes"
          subtitle="A Slice of Sweet Perfection – Just for You"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1.15}
          centeredSlides={false}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {featuredCakes.map((cake) => (
            <SwiperSlide key={cake.title}>
              <article className="group overflow-hidden rounded-[25px] bg-card shadow-soft transition-shadow duration-300 hover:shadow-large">
                <div className="h-[280px] overflow-hidden md:h-[350px]">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-600 text-chocolate">
                    {cake.title}
                  </h3>
                  <p className="mt-1 text-sm text-subtle">
                    Freshly baked &amp; handcrafted
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
