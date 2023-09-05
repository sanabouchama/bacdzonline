import logo from "../assets/img/logo.svg";
import googlelogo from "../assets/img/googlelogo.svg";
export const SignUpComponent = () => {
  return (
    <div>
      <form className="absolute">
        <img src={logo} alt="Logobacdz" />
        <p className="strongFont">جد سعداء بانضمامك للمنصة </p>

        <div>
          <input
            className="input-style"
            type="text"
            placeholder="الإسم و اللقب"
            required
          ></input>
        </div>
        <div>
          <input
            className="input-style"
            type="password"
            placeholder="الولاية"
          ></input>
        </div>
        <div>
          <input
            className="input-style"
            type="password"
            placeholder="رقم الهاتف"
          ></input>
        </div>
        <div>
          <input
            className="input-style"
            type="password"
            placeholder="البريد الإلكتروني"
          ></input>
        </div>
        <div>
          <input
            className="input-style"
            type="password"
            placeholder="كلمة المرور"
          ></input>
        </div>
        <div className="text-center">
          <button type="submit" className="signinbutton2-style ">
            التسجيل
          </button>
        </div>
        <div class="container">
          <div>
            <img src={googlelogo} alt="googlelogo" />
          </div>
          <div>
            <div>
              <p className="font-style"> Google تسجيل بواسطة حساب </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
