import styles from "./About.module.scss"
import { DEMO_AVATAR, GRADUATE_HAT, ACHIEVEMENT_ICON, CERTIFCATION_ICON, ARROW_RIGHT_ICON, DROP_DOWN_ARROW, MY_AVATAR } from "../../assets/images"




const About = ()  => {
    
    return (
        <div className={styles.container} id="About">
            <div className={styles.title}>
                <div>Get To Know More</div>
                <h1>About Me</h1>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.contentWrapper}>
                    <div className={styles.avatar}>
                        <img src={MY_AVATAR} alt="Demo avatar" />
                    </div>
                    <div className={styles.content}>
                        <div className={`${styles.education} ${styles.subject}`}>
                            <div className={styles.title}>
                                <img src={GRADUATE_HAT} alt="graduate-hat"/>Education
                            </div>
                            <ul className="list-none list-inside">
                                <li className="text-xl flex items-center"><img src={DROP_DOWN_ARROW} className="h-2 w-2 mr-1" alt="arrowRight" />B.Sc. Barchelors Degree University of Engineering and Technology - VietNam National University</li>
                                <li>
                                    <ul className="list-none list-inside">
                                        <li className="flex items-center"><img src={ARROW_RIGHT_ICON} className="h-2 w-2 mr-1" alt="arrowRight" />Major: Computer Science</li>
                                        <li className="flex items-center"><img src={ARROW_RIGHT_ICON} className="h-2 w-2 mr-1" alt="arrowRight" /> GPA: 3.45/4 </li>
                                    </ul> 
                                </li>
                            </ul>
                            <ul className="list-none list-inside">
                                <li className="text-xl flex items-center"><img src={DROP_DOWN_ARROW} className="h-2 w-2 mr-1" alt="arrowRight" />M.Sc. Masters Degree University of Engineering and Technology - VietNam National University</li>
                                <li>
                                    <ul className="list-none list-inside">
                                        <li className="flex items-center"><img src={ARROW_RIGHT_ICON} className="h-2 w-2 mr-1" alt="arrowRight" />Major: Computer Science</li>
                                        <li className="flex items-center"><img src={ARROW_RIGHT_ICON} className="h-2 w-2 mr-1" alt="arrowRight" />GPA: 3.3/4</li>
                                    </ul> 
                                </li>
                                      
                            </ul>
                        </div>
                        <div className={`${styles.achievement} ${styles.subject}`}>
                            <div className={styles.title}>
                                <img src={ACHIEVEMENT_ICON} alt="achievement-icon"/>Achievement
                            </div>
                            <ul className="list-none list-inside">
                                <li className="mt-2 flex items-center text-xl"><img src={ARROW_RIGHT_ICON} className="h-2 w-2 mr-1" alt="arrowRight" />2019 - Scholarship for excellent students</li>
                                <li className="flex items-center text-xl"><img src={ARROW_RIGHT_ICON} className="h-2 w-2 mr-1" alt="arrowRight" />2021 - Scholarship for excellent students</li>
                            </ul>
                        </div> 
                        <div className={`${styles.certification} ${styles.subject}`}>
                            <div className={styles.title}>
                                <img src={CERTIFCATION_ICON} alt="achievement-icon"/>Certification
                            </div>
                            <ul className="list-none list-inside">
                                <li className="mt-0.5 flex items-center text-xl"><img src={ARROW_RIGHT_ICON} className="h-2 w-2 mr-1" alt="arrowRight" />TOEIC: 805</li>
                                <li className="mt-0.5 flex items-center text-xl"><img src={ARROW_RIGHT_ICON} className="h-2 w-2 mr-1" alt="arrowRight" />IELTS: 6.5</li>
                            </ul> 
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )

}

export default About