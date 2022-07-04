import { useContext } from "react";
import { SidebarContext } from "../contexts/Sidebar";

export function useSidebar() {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    return { isOpen, setIsOpen };
}