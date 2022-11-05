import React from 'react';
import * as S from '../../styles/components/AdsStatusCSS';
import { Text } from '../../styles/Text/Text';
import AdsStatusCards from './AdsStatusCards';

function AdsStatusBoard() {
  return (
    <S.AdsStatusBoardLayout>
      <Text value={'통합 광고 현황'} />
      <S.AdsStatusBoardBox>
        <AdsStatusCards />
      </S.AdsStatusBoardBox>
    </S.AdsStatusBoardLayout>
  );
}

export default AdsStatusBoard;
