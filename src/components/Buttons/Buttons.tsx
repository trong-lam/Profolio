import styles from "./Buttons.module.scss"

type ButtonItem = {
    title: string,
    type: string,
    onClick: () => void,
    className?: string
}

const getButton = (type: string) => {
    let _class = ""
    switch(type){
        case "banner_btn":
            _class =  styles.bannerBtn
            break
        case "demo_btn":
            _class = styles.demoBtn
            break
        default:
            break
    }
    return _class
}
const Buttons = ({title, type, onClick, className}: ButtonItem)  => {
    
    const _class = getButton(type);

    return <button type="button" className={`${styles.btn} ${_class} ${className || ""} noselect`} onClick={onClick}>{title}</button>
}

export default Buttons