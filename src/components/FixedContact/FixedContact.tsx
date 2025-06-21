import styles from "./FixedContact.module.scss"
import {LINKEDIN_LOGO, GITHUB_LOGO } from "../../assets/images"

const FixedContact = ()  => {
    return (
        <div className={`${styles.container} fadeIn`}>
            <img src={GITHUB_LOGO} alt="linkedin logo"/>
            <img src={LINKEDIN_LOGO} alt="linkedin logo"/>
        </div>
    )

}

export default FixedContact