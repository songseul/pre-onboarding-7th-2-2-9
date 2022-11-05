import React from 'react';
import * as S from '../../styles/components/AdsStatusCSS';
import { Text } from '../../styles/Text/Text';
import { Theme } from '../../styles/Theme';

function AdsTitle() {
  return (
    <S.AdsTitleLayout>
      <Text value={'대시보드'} fontSize={Theme.text.bigSz} />
    </S.AdsTitleLayout>
  );
}

export default AdsTitle;
