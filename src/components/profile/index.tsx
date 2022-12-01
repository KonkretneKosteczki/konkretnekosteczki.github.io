import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef} from "react";
import avatar from "../../assets/images/avatar.jpg"
import { motion, useScroll } from "framer-motion"
import {
    DataField,
    DataValue,
    ProfileAvatar,
    ProfileAvatarContainer, ProfileContainer,
    ProfileDetailsContainer,
    ProfileIconsContainer,
    ProfileName,
    ProfileOccupation
} from "./profile.styled";
import {faGithubSquare, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import {faSquare} from "@fortawesome/free-solid-svg-icons";

const Profile: React.FC = () => {
    const userData = {
        age: new Date().getFullYear() - 1997,
        phone: "720-332-342",
        email: "krzysztofadamkrzeszewski@gmail.com",
        address: "I live here",
        firstName: "Krzysztof",
        lastName: "Krzeszewski",
        occupation: "Fullstack Web Developer"
    } as const;
    const links = {
        stackoverflow: "https://stackoverflow.com/users/10429793/krzysztof-krzeszewski",
        github: "https://github.com/KonkretneKosteczki",
        linkedin: "https://www.linkedin.com/in/krzysztof-krzeszewski-7175ab190"
    } as const;

    const {firstName, lastName, occupation, ...personData} = userData

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end start", "start start"]
    });

    return (
        <motion.div style={{opacity: scrollYProgress}}>
            <ProfileContainer ref={ref}>
                <ProfileAvatarContainer>
                    <ProfileAvatar src={avatar} alt="avatar"/>
                </ProfileAvatarContainer>
                <ProfileDetailsContainer>
                    <ProfileName>{firstName} {lastName}</ProfileName>
                    <ProfileOccupation>{occupation}</ProfileOccupation>
                    <dl>
                        {Object.entries(personData).map(([dataField, dataValue]) => (
                            <React.Fragment key={dataField}>
                                <DataField>{dataField}:</DataField>
                                <DataValue>{dataValue}</DataValue>
                            </React.Fragment>
                        ))}
                    </dl>
                    <ProfileIconsContainer>
                        <a href={links.github}><FontAwesomeIcon icon={faGithubSquare}/></a>
                        <a href={links.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href={links.stackoverflow}><FontAwesomeIcon icon={faStackOverflow} mask={faSquare}/></a>
                        {/*<a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>*/}
                    </ProfileIconsContainer>
                </ProfileDetailsContainer>
            </ProfileContainer>
        </motion.div>
    );
};

export default Profile;
