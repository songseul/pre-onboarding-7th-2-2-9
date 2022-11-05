import styled from 'styled-components';
import { Theme } from '../Theme';

export const AsideLayout = styled.div`
  width: 100%;
  max-width: 320px;
  background-color: #fff;
  padding: 0px 40px;
`;
export const AsideLogoBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid #edeff1;
`;
export const AsideLogoImg = styled.img`
  height: 30px;
`;
export const AdsServiceDropText = styled.div`
  height: 30px;
  width: 100%;
  padding: 0px 10px;
`;

export const AdsServiceDropBoxLayout = styled.div`
  margin: 53px 0px;
`;

export const AdsCenterLayout = styled.div`
  width: 100%;
  button {
    margin: 10px 0px;
  }
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    color: ${Theme.color.black};
    padding: 0 20px;
    font-size: ${Theme.text.middleSz};
    font-weight: ${Theme.text.middleWt};
    cursor: pointer;
    border-radius: 5px;
  }

  a.active {
    color: ${Theme.color.purple};
    background: ${Theme.color.lgPurple};
  }
`;
