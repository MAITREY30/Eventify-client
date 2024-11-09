import { create } from "zustand";
import { UserType } from "../interfaces";

const usersGlobslStore = create((set) => ({
   currentUser:null,
   setCurrentUser : (user: UserType) => set({currentUser:user}),
}))

export default usersGlobslStore;

export interface UsersStoreType {
    currentUser: UserType | null;
    setCurrentUser : (user : UserType) => void;
}