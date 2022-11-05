import React from 'react';
import * as S from '../../styles/components/AdsStatusCSS';
import { Text } from '../../styles/Text/Text';
import { Theme } from '../../styles/Theme';

function AdsStatusCards() {
  return (
    <S.AdsStatusCardsLayout>
      <Text value={'ROAS'} fontSize={Theme.text.smallSz} color={Theme.color.gray} />
      <S.AdsStatusCardsTextBox>
        <Text value={'697%'} fontSize={Theme.text.middleSz} />
        <Text value={'18%'} fontSize={Theme.text.smallSz} color={Theme.color.gray} />
      </S.AdsStatusCardsTextBox>
    </S.AdsStatusCardsLayout>
  );
}

export default AdsStatusCards;
