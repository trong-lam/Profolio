import styles from "./Projects.module.scss"
import { DEMO_PRJ } from "../../assets/images"
import Buttons from "../Buttons/Buttons"
import { updateDialog } from "../../store/features/multipleDialogSlice"
import { useAppDispatch, useAppSelector } from "../../store/store"
const items = [
    {
        id: 1,
        name: "Mine Optimization",
        content:"",
        preview_img: DEMO_PRJ
    },
    {
        id: 2,
        name: "Project 2",
        content:"",
        preview_img: DEMO_PRJ
    },
    {
        id: 3,
        name: "Project 3",
        content:"",
        preview_img: DEMO_PRJ
    },
    {
        id: 4,
        name: "Project 4",
        content:"",
        preview_img: DEMO_PRJ
    },
    {
        id: 5,
        name: "Project 5",
        content:"",
        preview_img: DEMO_PRJ
    },
    {
        id: 6,
        name: "Project 6",
        content:"",
        preview_img: DEMO_PRJ
    },
]
const Projects = ()  => {
    const dialogs = useAppSelector((state: any) => state.multipleDialog.dialogs)
    const dispatch = useAppDispatch()
    const onClickLiveDemo = () => {
        dispatch(updateDialog({
            newdia:[...dialogs].concat("demo")
        }))
    }
    
    const renderCardboard = () => {
        return items.map(item => {
            return <div className={styles.cardboard}>
                <div className={`${styles.name}`}>
                    <span>{item.name}</span>
                </div>
                <div className={styles.carboardContent}>
                    <img src={item.preview_img} alt=""/>
                    <Buttons 
                        title="Live Demo"
                        type="demo_btn"
                        onClick={onClickLiveDemo}
                        className="dialogActivate"
                    />

                </div>
            </div>
        })
        
    }
    return (
        <div className={styles.container} id="Projects">
            <div className={styles.title}>
                <h1>Projects</h1>
            </div>
            <div className={`${styles.projectContent} cs-scrollbar`}>
                <div className={styles.slideLeft}>
                </div>
                {renderCardboard()}
            </div>
        </div>
    )

}

export default Projects