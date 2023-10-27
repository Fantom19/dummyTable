import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  color: black;

  &:hover {
    color: red;
  }

  &.active {
    color: red;
  }
`;
