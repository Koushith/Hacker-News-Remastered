import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { FormContainer } from "./login.screen.styles";

export const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FormContainer>
        <div>
          <label htmlFor="title">Email</label>
          <input type="text" placeholder="Johbdoe@domain.com" />
        </div>

        <div>
          <label htmlFor="title">Password</label>
          <input type="text" placeholder="enter your password" />
        </div>

        <p onClick={() => navigate("/register")}>
          New user? <span> Create an account</span>
        </p>

        <button onClick={() => ""}>Login</button>
      </FormContainer>
    </Container>
  );
};
