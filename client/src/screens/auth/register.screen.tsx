import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { AuthContext } from "../../context";
import { RoutePaths } from "../../routes";
import { FormContainer } from "./login.screen.styles";

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterScreen = () => {
  const [formData, setFormData] = useState(initialState);
  const [matched, setMatched] = useState(false);
  const navigate = useNavigate();
  //@ts-ignore -fix later
  const { setCurrentUser } = useContext(AuthContext);

  const { userName, email, password, confirmPassword } = formData;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerHandler = async () => {
    // if (password === confirmPassword) {
    //   setMatched(!matched);
    // }

    let { data } = await axios.post("http://localhost:5000/auth/register", {
      userName,
      password,
      email,
    });
    if (data) {
      setCurrentUser(data);
      setFormData(initialState);
      navigate(RoutePaths.login);
    }
  };

  return (
    <Container>
      <FormContainer>
        <div>
          <label htmlFor="title">User Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            name="userName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Email</label>
          <input
            type="text"
            placeholder="Johbdoe@domain.com"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="title">Password</label>
          <input
            type="text"
            placeholder="enter your password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="title">Confirm Password</label>
          <input
            type="text"
            placeholder="Re-enter your password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        {matched && <p>password do not match</p>}
        <p onClick={() => navigate(RoutePaths.login)}>
          Already have an account? <span>Login here</span>
        </p>

        <button onClick={registerHandler}>Register</button>
      </FormContainer>
    </Container>
  );
};
