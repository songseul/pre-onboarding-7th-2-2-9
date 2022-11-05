import React from 'react';
import * as S from '../styles/components/AdsStatusPageCSS';
import { AdsStatusPageLayout } from '../styles/components/AdsStatusPageCSS';
import UserBar from '../components/User/UserBar';
import AdsTitle from '../components/AdsStatus/AdsTitle';
import AdsStatusBoard from '../components/AdsStatus/AdsStatusBoard';

function AdsStatusPage() {
  return (
    <AdsStatusPageLayout>
      <S.DashBoardLayout>
        <UserBar />
        <AdsTitle />
        <AdsStatusBoard />
      </S.DashBoardLayout>
    </AdsStatusPageLayout>
  );
}

export default AdsStatusPage;
