import {createContext} from "react";
import {TUserModelInstance, UserModel} from "./models/user.model";

const userStoreInitialData = {
    name: ""
} as const;

export const userStore = UserModel.create(userStoreInitialData);
export const userStoreContext = createContext<TUserModelInstance>(userStore);
