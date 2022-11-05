import React from 'react';
import { StyleDropSelectBox } from '../Theme';

export const DropDownButton = ({ onClick, data }) => {
  return (
    <StyleDropSelectBox onClick={onClick}>
      {data.map(el => {
        return <option key={el.id}>{el.value} </option>;
      })}
    </StyleDropSelectBox>
  );
};
