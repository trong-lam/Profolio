
import styles from "./IntroductionHeader.module.scss"
import { DROP_DOWN_ARROW } from "../../assets/images";
import { switchLanguage } from "../../store/features/configSlice";
import { updateContextList } from "../../store/features/contextSlice";
import { LANGUAGES } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Buttons from "../Buttons/Buttons";


const IntroductionHeader = ()  => {
  const language = useAppSelector((state: any) => state.config.language)
  const dispatch = useAppDispatch()

  const handleChangeLanguage = (event:any) => {
      const element = event.target.getBoundingClientRect(); 

      dispatch(updateContextList({
          newContextList: [{
            type: "dropdown",
            x: element.bottom, 
            y: element.right - 10,
            width: 150,
            height: 80,
            data: {
              dropdownOptions: LANGUAGES,
              callback: (item: {id: number, value: string}) => {
                  dispatch(switchLanguage({
                    newLang: item.value
                  }));
              }
            }
          }]
      }))
  }
  const onClickToPage = (page: string) => {
      document.getElementById(page)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const renderNavItem = () => {
      const navItems = ["About", "Experience", "Projects", "Contact"]
      return <div className={styles.navbar}>
          {navItems.map(v => {
              return <div className={styles.navItem} onClick={() => onClickToPage(v)}>{v}</div>
          })}
      </div>

       
  }
  return (
      <div className={styles.container}>
        <div className={styles.heading}>
            <div className={styles.left}></div>
            <div>My Portfolio. Lamnt</div>
            <div className={styles.right}>
                <div className={styles.language}>
                  <div>{language}</div>
                  <img src={DROP_DOWN_ARROW} alt="dropdown_arrow" className="context-menu" onClick={handleChangeLanguage}></img>
                </div>
            </div>          
        </div>

        <div className={styles.header}>
            {renderNavItem()}
        </div>

        <div className={styles.banner}>
            <div className={styles.wrapper}>
              <div className={styles.summery}> 
                  <h2>Hello, I'm Lam Nguyen</h2>
                  <div>
                    <p>
                      I'm a Python and JavaScript developer with 3 years of experience. I specialize in Flask and React frameworks, and stay updated on the latest Python libraries and front-end web development frameworks. I also have expertise in machine learning, particularly computer vision.
                    </p>
                  </div>
                  <Buttons 
                    title="Download CV" 
                    type="banner_btn"
                    onClick={() => {}}
                  />
              </div>
            </div>
        </div>

      </div>
    );
}
  
export default IntroductionHeader;
  