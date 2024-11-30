import styles from "./DropdownMenu.module.scss"
import animations from "../../assets/animations/animations.module.scss"

type DropDownOptionItem = {
    id: number,
    value: any
}

type DropdownList = {
    data: {
      dropdownOptions: DropDownOptionItem[],
      callback: Function
    },
    onClose: Function
    
} 
const DropdownMenu = ({data, onClose}: DropdownList)  => {
    const {dropdownOptions, callback} = data
    const handleClickDropdownItem = (item: DropDownOptionItem) => {
      
      callback && callback(item)
      onClose && onClose()
    }
    return (
      <div className={`${styles.container} ${animations.fadeIn} shadow-lg dropdown-menu`}>
            {dropdownOptions.map((item: DropDownOptionItem) => {
                return <div key={item.id} onClick={() => handleClickDropdownItem(item)}>{item.value}</div>
            })}
      </div>
    );
}
  
export default DropdownMenu;
  