import styled from "styled-components";
import { IPath } from "../types";

const NavigationStyle = styled.nav`
  position: sticky;
  padding-block: 30px;
  padding-left: 50px;
  height: 100px;

  a {
    color: white;
    text-decoration: none;
    padding-inline: 5px;
    padding-bottom: 5px;
    font-size: 1.5rem;
    position: relative;

    :after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      border-bottom: 1px solid white;
      transform: scaleX(0);
      transition: transform 0.1s linear;
    }
    :hover:after {
      transform: scaleX(1);
    }
    span {
      padding-left: 10px;
    }
  }
`;

interface IProps {
  directoryPath: IPath[];
  onClick: (index: number) => void;
}

const Navigation: React.FC<IProps> = ({ directoryPath, onClick }) => {
  return (
    <NavigationStyle>
      {directoryPath.map((path, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#"
          onClick={() => {
            onClick(index);
          }}
        >
          {path.name}
          {index !== directoryPath.length - 1 && <span>/</span>}
        </a>
      ))}
    </NavigationStyle>
  );
};

export default Navigation;
