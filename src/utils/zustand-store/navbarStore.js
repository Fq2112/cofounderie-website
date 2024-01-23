import ZustandHelper from "../zustandHelper";

const setup = (set, get) => ({
  showMenu: false,
  setShowMenu: (state) => set({ showMenu: state }),
});

const useZustand = new ZustandHelper({
  name: "navbar",
  setup,
});

const navbarStore = useZustand.get();

export default navbarStore;
