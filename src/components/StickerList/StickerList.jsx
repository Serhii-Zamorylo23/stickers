import { Component } from "react";
import Stickers from "../stickers/Stickers";
import style from "./stickersList.module.css";
import stickersData from "../stickers.json";
class StickerList extends Component {
  render() {
    const {SelectedSticker}=this.props
    return (
      <>
        <ul className={style.list}>
          {stickersData.map((stickerData, index) => (
            <Stickers
              key={index}
              img={stickerData.img}
              label={stickerData.label}
              SelectedSticker={SelectedSticker}
            />
          ))}
        </ul>
      </>
    );
  }
}
export default StickerList;
