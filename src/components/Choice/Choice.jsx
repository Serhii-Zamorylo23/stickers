import { Component } from "react"
import Style from "./Choice.module.css"
class Choice extends Component{
    render(){
        return(
            <p className={Style.choice}>{this.props.stickerLabel}</p>
        )
    }
}
export default Choice