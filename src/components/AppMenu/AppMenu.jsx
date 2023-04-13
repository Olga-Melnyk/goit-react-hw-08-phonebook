import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/operations';
import { SlHome } from 'react-icons/sl';
import { SlCallEnd } from 'react-icons/sl';

import {
  Header,
  HomeButton,
  NavMenu,
  NavItem,
  HeaderLayout,
  ContactsButton,
  NavGreeting,
} from './AppMenu.styled';

const AppMenu = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <HeaderLayout>
      <Header>
        <NavMenu>
          <HomeButton to="/">
            <SlHome />
            {/* <HomeIcon sx={{ fontSize: 45 }} /> */}
          </HomeButton>
          {isLoggedIn && (
            <ContactsButton to="/contacts">
              <SlCallEnd />
              {/* <PersonIcon sx={{ fontSize: 45 }} /> */}
            </ContactsButton>
          )}
        </NavMenu>
        {isLoggedIn ? (
          <NavMenu>
            <NavGreeting>Welcome, {user.name}</NavGreeting>
            <NavItem onClick={handleLogOut}>Log out</NavItem>
          </NavMenu>
        ) : (
          <NavMenu>
            <NavItem to="/register">Registration</NavItem>
            <NavItem to="/login">Log in</NavItem>
          </NavMenu>
        )}
      </Header>
    </HeaderLayout>
  );
};
export default AppMenu;
