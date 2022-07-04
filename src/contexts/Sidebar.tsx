import { createContext, Dispatch } from "react";

interface ISidebarContext {
    isOpen: boolean
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = createContext<ISidebarContext>({
    isOpen: false,
    setIsOpen: () => {}
})