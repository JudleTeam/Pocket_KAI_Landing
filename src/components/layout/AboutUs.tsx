import { motion } from 'framer-motion';

export function AboutUs() {
  return (
    <div className=" py-10 flex flex-col items-center text-center text-white bg-gradient-to-b from-[#000000] to-[#272525]">
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0 }}
        className="text-4xl text-white"
      >
        Мы -{' '}
        <span className="bg-clip-text bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] text-transparent">
          Judle Team.
        </span>
      </motion.h3>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl"
      >
        И мы верим, что жизнь студентов можно сделать проще.
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-lg"
      >
        Следите за PocketKAI и другими проектами в нашем{' '}
        <a target="_blank" href="https://t.me/pocket_kai" className="underline">
          Telegram-канале
        </a>
        .
      </motion.p>
    </div>
  );
}
