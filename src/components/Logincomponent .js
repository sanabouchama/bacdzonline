import logo from "../assets/img/logo.svg";
import appstore from "../assets/img/appstore.svg";
import googleplaylogo from "../assets/img/googleplaylogo.svg";
export const Logincomponent = () => {
  return (
    <div>
      <form className="absolute">
        <img src={logo} alt="Logobacdz" />
        <p className="strongFont">: من Bacdzonline يمكنك تحميل تطبيق </p>
        <div className="two-buttn">
          <button
            type="button"
            className="button-style"
            style={{ marginRight: 5 + "px" }}
          >
            <img src={appstore} alt="appstorelogo" className="svgappstore" />
          </button>
          <button
            type="button"
            className="button-style"
            style={{ marginLeft: 5 + "px" }}
          >
            <img
              src={googleplaylogo}
              alt="googleplaylogo"
              className="svggoogleplay"
            />
          </button>
        </div>
        <p className="lightFont">إن كنت مسجل من قبل أهلا بعودتك</p>
        <div>
          <input
            className="input-style"
            type="text"
            placeholder="البريد الإلكتروني"
            required
          ></input>
        </div>
        <div>
          <input
            className="input-style"
            type="password"
            placeholder="كلمة المرور"
          ></input>
        </div>
        <div className="remember">
          <a href="#" className="lightFontlink ">
            هل نسيت كلمة المرور ؟
          </a>
          <label className="lightFontlabel">
            <input type="checkbox" />
            تذكرني
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="loginbutton-style ">
            تسجيل الدخول
          </button>
        </div>
        <div className="text-center">
          <p className="lightFont">
            إن كنت تلميذ جديد في المنصة سجل حسابك من هنا
          </p>
        </div>
        <div className="text-center">
          <button className="signinbutton-style">سجل حساب جديد</button>
        </div>
      </form>
    </div>
  );
};
