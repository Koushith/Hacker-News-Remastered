import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { FormContainer } from "./login.screen.styles";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FormContainer>
        <div>
          <label htmlFor="title">User Name</label>
          <input type="text" placeholder="Enter your name" value="sdfsdfsdf" />
        </div>
        <div>
          <label htmlFor="title">Email</label>
          <input
            type="text"
            placeholder="Johbdoe@domain.com"
            value="sdfsdfsdf"
          />
        </div>

        <div>
          <label htmlFor="title">Password</label>
          <input
            type="text"
            placeholder="enter your password"
            value="sdfsdfsdf"
          />
        </div>

        <div>
          <label htmlFor="title">Confirm Password</label>
          <input
            type="text"
            placeholder="Re-enter your password"
            value="sdfsdfsdf"
          />
        </div>
        <p onClick={() => navigate("/login")}>
          Already have an account? <span>Login here</span>
        </p>

        <button>Register</button>
      </FormContainer>
    </Container>
  );
};
