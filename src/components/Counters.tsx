import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Store, Users, Truck } from "lucide-react";
import { stats } from "@/data/site";

const icons = [Award, Store, Users, Truck];

function formatValue(value: number, format?: boolean) {
  if (format) return value.toLocaleString("en-IN");
  return value.toString();
}

function Counter({
  value,
  suffix,
  format,
}: {
  value: number;
  suffix: string;
  format?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-800 text-gold md:text-5xl">
      {formatValue(count, format)}
      {suffix}
    </span>
  );
}

export function Counters() {
  return (
    <section className="bg-card py-[60px] md:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-5 px-5 md:px-8 lg:grid-cols-4 lg:gap-7">
        {stats.map((stat, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-card bg-beige p-6 text-center shadow-soft transition-shadow duration-300 hover:shadow-medium md:p-8"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-light-gold text-white shadow-soft">
                <Icon className="h-7 w-7" />
              </span>
              <Counter value={stat.value} suffix={stat.suffix} format={stat.format} />
              <p className="mt-2 text-sm font-500 text-subtle md:text-base">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
