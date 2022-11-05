import React from 'react';
import { BsClipboardData } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import * as S from '../../styles/components/AsideCSS';
import FilterButton from '../../styles/buttons/FilterButton';
import { Text } from '../../styles/Text/Text';
import { Theme } from '../../styles/Theme';
import { useState } from 'react';

function AdsCenter() {
  const [buttonActive, setButtonActive] = useState('대시보드');
  const { color } = Theme;

  const onClickButton = e => {
    e.preventDefault();
    setButtonActive(e.target.value);
  };
  console.log(buttonActive);

  return (
    <S.AdsCenterLayout>
      <S.AdsServiceDropText>
        <Text value={'광고센터'} color={color.gray} fontSize={Theme.text.smallSz} />
      </S.AdsServiceDropText>

      <FilterButton
        to={'/'}
        onClick={onClickButton}
        emoji={<BsClipboardData />}
        value={'대시보드'}
        className={'대시보드' === buttonActive ? 'active' : ''}
      />
      <FilterButton
        to={'/ads-detail'}
        onClick={onClickButton}
        emoji={<VscGraph />}
        value={'광고관리'}
        className={'광고관리' === buttonActive ? 'active' : ''}
      />
    </S.AdsCenterLayout>
  );
}

export default AdsCenter;
