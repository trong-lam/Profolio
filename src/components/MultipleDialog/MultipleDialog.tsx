import styles from "./MultipleDialog.module.scss"
import { useAppDispatch, useAppSelector } from "../../store/store";
import Dialog from "../Dialog/Dialog";
import { updateDialog } from "../../store/features/multipleDialogSlice";

const MultipleDialog = () => {
    const dialogs = useAppSelector((state: any) => state.multipleDialog.dialogs)
    const dispatch = useAppDispatch()

    const onClose = (type:String) => {
        dispatch(updateDialog({
            newdia: dialogs.filter((i:String) => i !== type)
        }));
    }
    return <>
        {dialogs.map((type: String) => {
            switch(type){
                case "demo":
                    return <Dialog
                            type={type} 
                            onClose={() => onClose(type)}>{
                                <div></div>
                        }
                    </Dialog>
                default:
                    return <></>
            }
        })}
    </>
}

export default MultipleDialog