import React from 'react';
import * as S from '../../styles/components/UserBarCSS';
import { BsBell } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { Text } from '../../styles/Text/Text';
import { Theme } from '../../styles/Theme';

function UserBar() {
  return (
    <S.UserBarLayout>
      <Text value={<BsBell fontSize={Theme.text.bigSz} />} />
      <Text value={<AiOutlineSetting fontSize={Theme.text.bigSz} />} />
      <Text value={<FaUserCircle />} fontSize={Theme.text.bigSz} />
      <Text value={'원티드 님'} />
    </S.UserBarLayout>
  );
}

export default UserBar;
