import { PropsWithChildren, useMemo, useState } from "react";
import { SidebarContext } from "../contexts/Sidebar";

export function SidebarProvider(props: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const contextValues = useMemo(() => ({
        isOpen,
        setIsOpen
    }), [isOpen]);

    return (
        <SidebarContext.Provider value={contextValues}>
            {props.children}
        </SidebarContext.Provider>
    );
}