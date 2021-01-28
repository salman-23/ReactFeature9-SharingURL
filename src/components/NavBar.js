// Styling
import { ThemeButton, Logo, NavProduct } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo exact to="/">
        <img
          className="navbar-brand"
          src="https://media.discordapp.net/attachments/797449550616068106/804257167925706762/light-logo.png?width=959&height=382"
        ></img>
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavProduct to="/products" className="nav-item">
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
