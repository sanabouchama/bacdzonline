import { NavBar } from "../components/NavBar";
import { SignUpComponent } from "../../components/signupcomponent";
import "./loginSignup.css";
export const SignUp = () => {
  return (
    <section className="signUpBackground " id="login">
      <NavBar />
      <SignUpComponent />
    </section>
  );
};
