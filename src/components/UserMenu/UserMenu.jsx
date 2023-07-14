import { Button } from "pages/Pages.styled";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <h4>{user.email}</h4>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default UserMenu;
