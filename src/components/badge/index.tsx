import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {userStoreContext} from "../../stores/user.store";
import {BadgeText, Image} from "./badge.styled";

const UserBadge: React.FC = () => {
    const {name, setUserName} = useContext(userStoreContext)
    return (
        <div>
            <BadgeText>Name: {name}</BadgeText>
            <button onClick={() => setUserName("changed")}>Change</button>
            <Image src="https://picsum.photos/200/300"/>
        </div>
    );
};

export default observer(UserBadge);
