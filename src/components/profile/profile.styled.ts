import styled from "@emotion/styled";
import {ContentContainer} from "../../app.styled";

export const DataField = styled.dt`
    opacity: .4;
    float: left;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
`;

export const DataValue = styled.dd`
    padding-left: 100px;
    margin-bottom: 15px;
    margin-left: 0;
    display: block;
`;

export const ProfileName = styled.p`
    font-size: 44px;
    line-height: 50px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const ProfileOccupation = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
`;

export const ProfileAvatar = styled.img`
    border-radius: 5px;
    box-shadow: 0 0 27px rgb(96 96 96 / 34%);
    width: 90%;
    height: 380px;
    object-fit: cover;
    margin-top: 10px;
`

export const ProfileAvatarContainer = styled.div`
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    width: 100%;
    min-height: 1px;
`

export const ProfileContainer = styled(ContentContainer)`
    padding: 0 15px;
    padding-top: 90px;
    display: flex;
    flex-wrap: wrap;
`

export const ProfileDetailsContainer = styled.div`
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
`


export const ProfileIconsContainer = styled.div`
    font-size: 24px;
    
    a {
        margin-right: 15px;
        color: ${({theme}) => theme.colors.FadedLight};
    }
`




