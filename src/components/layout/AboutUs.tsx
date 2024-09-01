export function AboutUs() {
  return (
    <div className=" py-3 flex flex-col items-center text-center text-white bg-gradient-to-b from-[#000000] to-[#272525]">
      <h3 className="text-4xl text-white">
        Мы -{' '}
        <span className="bg-clip-text bg-gradient-to-r from-[#8454C8] via-[#C850C0] to-[#FFCC70] text-transparent">
          Judle Team.
        </span>
      </h3>
      <p className="text-2xl">
        И мы верим, что жизнь студентов можно сделать проще.
      </p>
      <p className="text-lg">
        Следите за PocketKAI и другими проектами в нашем{' '}
        <a target="_blank" href="https://t.me/pocket_kai" className="underline">
          Telegram-канале
        </a>
        .
      </p>
    </div>
  );
}
