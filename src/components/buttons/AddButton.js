import { AddButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div>
      <Link to="/products/create">
        <AddButtonStyled>Create</AddButtonStyled>
      </Link>
    </div>
  );
};

export default AddButton;
