import DropdownMenu from "../DropdownMenu/DropdownMenu";
import styles from "./ContextMenu.module.scss"
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { updateContextList } from "../../store/features/contextSlice";

type ContextMenuType = {
    type: string,
    x: number,
    y: number, 
    width: number,
    height: number,
    data: any
} 

const ContextMenu = ()  => {
    const contextMenuList = useAppSelector((state: any) => state.contextMenu.contextMenuList)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        document.addEventListener("click",  handleRemoveElement)

        return () => {
            document.removeEventListener("click", handleRemoveElement)
        }
    }, [])


    const onClose = () => {
      dispatch(updateContextList({
          newContextList:[]
      }))
    }
    const handleRemoveElement = (event:any) => {
        const element = event.target.closest(".dropdown-menu") || event.target.className.includes("context-menu");
        if (element) return

        onClose()
    }
    return (
      <div className={styles.ctnContextMenu}>
        {contextMenuList.map((cxtItem: ContextMenuType) => 
            (<div className={styles.container} style={
              {top:cxtItem.x, left: cxtItem.y, width: cxtItem.width || 200, height: cxtItem.height || 300}}>
                {["dropdown"].includes(cxtItem.type) && <DropdownMenu data={cxtItem.data} onClose={onClose}/>}
            </div>
          ))}
      </div>
    )
    
    
    
}
  
export default ContextMenu;
  