import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 10px;
    justify-content: space-evenly;
}
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-bottom: 0px;
    position: fixed;
    background: rgba(255,255,255,1);
    top: 0;
    left: 0;
    z-index: 50;

    @media screen and (max-width: 800px) {
        height: 60px;
    }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;

  @media screen and (max-width: 800px) {
    width: 30px;
    padding: 0;
    display: none;
}
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 60px;

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: space-evenly;
    margin-right: 0;
}
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const StyledDiv = styled.div`
    display: flex;
    position: relative;
    color: black;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0px;
        bottom: 0;
        left: 0;
        background-color: black;
        transform-origin: bottom right;
        transition: height 0.2s ease-out;

    }

    &:hover:after {
        height: 3px;

        @media screen and (max-width: 800px) {
            height: 0px;
        }
    }
`;