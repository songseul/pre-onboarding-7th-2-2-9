import React from 'react';
import { SERVICE_DATA, useSelectedDropDown, ServiceData } from '../../hooks/useSelected';
import * as S from '../../styles/components/AsideCSS';
import { DropDownButton } from '../../styles/buttons/DropDownButton';
import { Text } from '../../styles/Text/Text';
import { Theme } from '../../styles/Theme';

function AdsServiceDropBox() {
  const { selectedDropValue } = useSelectedDropDown;
  const { color } = Theme;
  const data = ServiceData(SERVICE_DATA);

  return (
    <S.AdsServiceDropBoxLayout>
      <S.AdsServiceDropText>
        <Text value={'서비스'} color={color.gray} fontSize={Theme.text.smallSz} />
      </S.AdsServiceDropText>
      <DropDownButton onClick={useSelectedDropDown} value={selectedDropValue} data={data} />
    </S.AdsServiceDropBoxLayout>
  );
}

export default AdsServiceDropBox;
