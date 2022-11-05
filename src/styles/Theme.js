import styled from 'styled-components';

export const Theme = {
  color: {
    black: '#3A474E',
    gray: '#94A2AD',
    purple: '#586CF5',
    lgPurple: '#EDEFF1',
  },
  text: {
    boldWt: '900',
    middleWt: '700',
    thinWt: '500',
    smallSz: '14px',
    middleSz: '16px',
    bigSz: '26px',
  },
};

export const StyledText = styled.p`
  font-size: ${props => props.fontSize || Theme.text.middleSz};
  font-weight: ${props => props.fontWeight || Theme.text.middleWt};
  color: ${props => props.color || Theme.color.black};
`;

export const StyleDropSelectBox = styled.select`
  width: 100%;
  height: 60px;
  border: 1px solid ${Theme.color.gray};
  border-radius: 10px;
`;

export const StyledFilterButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 20px;
`;
