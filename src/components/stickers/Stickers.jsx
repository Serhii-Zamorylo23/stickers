import { Component } from 'react'
import style from './stickers.module.css'
import Choice from '../Choice/Choice'
class Stickers extends Component{
    render(){
        const {SelectedSticker}=this.props
        return(
            <>
            <div className={style.item} onClick={()=>SelectedSticker(this.props.label)}>
                <img src={this.props.img} alt={this.props.label} />
            </div>
            </>
        )
    }
}
export default Stickers