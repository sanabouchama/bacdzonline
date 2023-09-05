import "./studentBar.css";
import booksquare from "../assets/img/booksquare.svg";
import bubble from "../assets/img/bubble.svg";
import category from "../assets/img/category.svg";
import category2 from "../assets/img/category2.svg";
import Vector from "../assets/img/Vector.svg";
import Vector2 from "../assets/img/Vector2.svg";
import userpic from "../assets/img/userpic.svg";
import camera from "../assets/img/camera.svg";
export const StudentBar = () => {
  function clickHandler() {
    console.log("hello");
  }

  return (
    <div className="bar">
      <form className="inside-bar">
        <div className="camera-style">
          <img src={userpic} alt="userpic" className="userpic-style"></img>
          <button className="camera-bouton">
            <img src={camera} alt="camera" className="svglogo7" />
          </button>
        </div>
        <p className="text-style01">!مرحبا، ريان </p>
        <p className="text-style02"> طالب (ة)</p>
        <div className="style01"></div>
        <button type="button" className="button-style2" onClick={clickHandler}>
          الدورات
          <img src={booksquare} alt="booksquare" className="svgbooksquare" />
        </button>
        <button type="button" className="button-style2">
          المواد
          <img src={bubble} alt="bubble" className="svglogo2" />
        </button>
        <button type="button" className="button-style2">
          الوحدات
          <img src={category} alt="category" className="svglogo3" />
        </button>
        <button type="button" className="button-style2">
          الدروس
          <img src={category2} alt="category2" className="svglogo4" />
        </button>
        <button type="button" className="button-style2">
          الأساتذة
          <img src={Vector} alt="Vector" className="svglogo5" />
        </button>
        <div className="style01"></div>
        <button type="button" className="button-style3">
          تسجيل الخروج
          <img src={Vector2} alt="Vector2" className="svglogo6" />
        </button>
      </form>
    </div>
  );
};
