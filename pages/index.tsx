import Link from "next/link";
import { motion } from "framer-motion";

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={href}>
      <a>
        <div className="relative h-20 md:h-40 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition ease-in duration-300">
          <motion.img
            src={"/img/" + imgSrc}
            className="w-full h-full"
            layoutId={layoutId}
          />
        </div>
      </a>
    </Link>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-gray-900 sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight flex justify-center">
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </h1>

      <div className="grid w-full grid-cols-1 grid-rows-3 gap-4 mt-10 md:mt-24 md:grid-cols-3 md:grid-rows-1">
        <Card href={"/nextjs"} imgSrc={"nextjs.svg"} layoutId={"nextjs-logo"} />
        <Card
          href={"/tailwindcss"}
          imgSrc={"tailwind.svg"}
          layoutId={"tailwind-logo"}
        />
        <Card
          href={"/framermotion"}
          imgSrc={"framermotion.svg"}
          layoutId={"framermotion-logo"}
        />
      </div>
    </div>
  );
}
