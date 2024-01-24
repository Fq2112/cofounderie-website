import ZustandHelper from "../zustandHelper";

const setup = (set, get) => ({
  showMenu: false,
  burgerAnimate: false,
  setShowMenu: (state) => set({ showMenu: state }),
  setBurgerAnimate: (state) => set({ burgerAnimate: state }),
});

const useZustand = new ZustandHelper({
  name: "navbar",
  setup,
});

const navbarStore = useZustand.get();

export default navbarStore;
