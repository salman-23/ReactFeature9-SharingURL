import { UpdateButtonStyled } from "../../styles";
import { Link } from "react-router-dom";

const UpdateButton = ({ productSlug }) => {
  return (
    <div>
      <Link to={`/products/${productSlug}/edit`}>
        <UpdateButtonStyled>Edit</UpdateButtonStyled>
      </Link>
    </div>
  );
};

export default UpdateButton;
