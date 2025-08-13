import Image from "next/image";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-[#0A2A66] text-white">
      <div className="flex items-center space-x-2">
        <div className="relative h-[90px] w-[200px]">
          <Image
            src="/logos/retailer.png"
            alt="Logo"
            fill
            objectFit="contain"
            className="object-contain"
          />
        </div>
      </div>
      <div className="hidden md:flex nav-container">
        {[
          { href: "#about", label: "About us" },
          { href: "#services", label: "What we provide" },
          { href: "#why", label: "Why Local Retailer" },
          { href: "#faq", label: "FAQ's" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-orange-400 text-[clamp(14px,1vw,20px)]"
          >
            {item.label}
          </a>
        ))}
      </div>
      <button className="bg-[#FF8A00] h-[40px] w-[120px] rounded-full font-medium text-white-500 hover:opacity-90 text-[clamp(14px,1vw,20px)] cursor-pointer">
        Login
      </button>
    </nav>
  );
};
