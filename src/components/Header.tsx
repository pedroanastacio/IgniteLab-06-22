import { List, X } from "phosphor-react";
import { useSidebar } from "../hooks/useSidebar";
import { Logo } from "./Logo";

export function Header() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <header className="w-full sticky top-0 lg:relative p-5 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600 z-10">
      <Logo />
      <button className="text-yellow-700 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <List size={32} />}
      </button>
    </header>
  );
}
