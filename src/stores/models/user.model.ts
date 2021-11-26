import {Instance, types} from "mobx-state-tree"

export const UserModel = types
    .model({
        name: types.string
    })
    .actions((self) => ({
        setUserName(name: string): void {
            self.name = name;
        }
    }))

export type TUserModelInstance = Instance<typeof UserModel>;
