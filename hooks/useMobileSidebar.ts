import { create } from "zustand"

type mobileSibebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileSidebar = create<mobileSibebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))


// equivalent recoil code - 
/*
import { atom, selector } from 'recoil';

// Define an atom to store the mobile sidebar state
export const mobileSidebarState = atom({
  key: 'mobileSidebarState',
  default: {
    isOpen: false,
  },
});

// Define selectors to handle opening and closing the mobile sidebar
export const mobileSidebarStateSelectors = {
  isOpen: selector({
    key: 'mobileSidebarIsOpen',
    get: ({ get }) => get(mobileSidebarState).isOpen,
  }),
};

export const mobileSidebarStateActions = {
  onOpen: selector({
    key: 'mobileSidebarOnOpen',
    set: ({ set }) => set(mobileSidebarState, { isOpen: true }),
  }),
  onClose: selector({
    key: 'mobileSidebarOnClose',
    set: ({ set }) => set(mobileSidebarState, { isOpen: false }),
  }),
};

*/