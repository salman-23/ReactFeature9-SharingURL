import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const Logo = styled(Link)`
  padding: "0.25em 1em";
  color: ${(props) => props.theme.blue} !important;
  img {
    width: 200px;
  }
`;

export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: "0.25em 1em";
  &.active {
    color: blue;
  }
  text-decoration: none;
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const AddButtonStyled = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-left: 10px;
  border-radius: 1rem;
  color: #000;
  background-color: #00af91;
`;

export const SubmitButtonStyled = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-left: 10px;
  border-radius: 1rem;
  color: #000;
  background-color: #00aff1;
`;

export const UpdateButtonStyled = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-left: 10px;
  border-radius: 1rem;
  color: #fff;
  background-color: #8f0048;
`;
