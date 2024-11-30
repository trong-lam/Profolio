import { useRef, ReactNode, useEffect  } from "react";
import styles from "./Dialog.module.scss"
import { useAppDispatch, useAppSelector } from "../../store/store";
import { updateDialog } from "../../store/features/multipleDialogSlice";

interface DialogContent {
    onClose: () => void;
    children: ReactNode; // Add this to allow passing children
    type: String;
    
}
const Dialog = (props: DialogContent) => {
    const {type, onClose, children} = props;
    const dialogRef = useRef<HTMLInputElement>(null)

    const onShowDialog = () => {
        if (dialogRef.current){
            Object.assign(dialogRef.current.style, {
                top: `${window.scrollY}px`,
                left: `${window.scrollX}px`
            })
        }
    }

    const onHideDialog = (event:any) => {
        event.preventDefault()
        const element = event.target.closest(".contentDialog") || event.target.classList.contains("contentDialog") || event.target.classList.contains("dialogActivate");
        if (element) return;
        
        if (dialogRef.current){
            const element = dialogRef.current.querySelector(".contentDialog")
            element?.classList.add("slideBot")
        }
        setTimeout(() => {
            onClose();
        }, 350)
        
    }


    useEffect(() => {
        document.body.style.overflow = "hidden"
        document.addEventListener("click" , onHideDialog)
        onShowDialog();
        return () => {
            document.body.style.overflow = "auto"
            document.removeEventListener("click", onHideDialog)
        }
    }, [])

    return <div className={`${styles.dialogContainer}`} ref={dialogRef}>
        <div className={`${styles.dialogWrapper}`}>
            <div className={`${styles.dialogContent} contentDialog slideTop`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Live Demo</h2>
                </div>
                {children}
            </div>
        </div>
    </div>
}

export default Dialog