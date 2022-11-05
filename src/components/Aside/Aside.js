import React from 'react';
import { AsideLayout, AsideLogoBox, AsideLogoImg } from '../../styles/components/AsideCSS';
import LeverLogo from '../../assets/lever_logo.png';
import AdsServiceDropBox from './AdsServiceDropBox';
import AdsCenter from './AdsCenter';

function Aside() {
  return (
    <AsideLayout>
      <AsideLogoBox>
        <AsideLogoImg src={LeverLogo} alt="" />
      </AsideLogoBox>
      <AdsServiceDropBox />
      <AdsCenter />
    </AsideLayout>
  );
}

export default Aside;
