import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-beige py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading title="Our Customer Review" />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-14 !pt-2"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto">
              <div className="relative flex h-full flex-col rounded-[30px] bg-card p-8 shadow-medium">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/30" />
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <p className="mt-4 grow leading-relaxed text-subtle">
                  "{t.review}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-light-gold font-600 text-white">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-600 text-chocolate">{t.name}</p>
                    <p className="text-xs text-subtle">{t.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
