import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledFilterButton } from '../Theme';

function FilterButton({ onClick, emoji, value, className, text, to }) {
  return (
    <StyledFilterButton className={className} text={text} onClick={onClick} value={value}>
      <NavLink to={to}>
        {emoji} {value}
      </NavLink>
    </StyledFilterButton>
  );
}

export default FilterButton;
