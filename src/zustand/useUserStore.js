import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUp : false,
  setUser: (userData) => set({ user: userData }),
  setSetUp: ()=> set({setUp : true}),
  
  logout: () => set({ user: null }), //will be implemented later
}));

export default useUserStore;
