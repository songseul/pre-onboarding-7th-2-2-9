import { StyledText } from '../Theme';

export const Text = ({ fontSize, fontWeight, color, value }) => {
  return (
    <StyledText color={color} fontWeight={fontWeight} fontSize={fontSize}>
      {value}
    </StyledText>
  );
};
