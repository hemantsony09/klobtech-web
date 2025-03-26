import { useState } from "react";

export const useDropdownState = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuHover = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setActiveSubmenu(null);
  };

  const handleSubmenuHover = (submenu: string) => {
    setActiveSubmenu(submenu);
  };

  const handleMobileMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    setActiveSubmenu(null);
  };

  const handleMobileSubmenuClick = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveMenu(null);
      setActiveSubmenu(null);
    }
  };

  return {
    activeMenu,
    activeSubmenu,
    isMobileMenuOpen,
    handleMenuHover,
    handleMenuLeave,
    handleSubmenuHover,
    handleMobileMenuClick,
    handleMobileSubmenuClick,
    toggleMobileMenu,
  };
};
