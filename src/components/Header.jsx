import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header>
      <h1>Header</h1>
      {isAuth && <button onClick={logoutHandler}>Logout</button>}
    </header>
  );
};

export default Header;
