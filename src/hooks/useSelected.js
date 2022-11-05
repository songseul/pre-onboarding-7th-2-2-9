import { useState } from 'react';

export const SERVICE_DATA = [
  { id: 1, value: '매드업' },
  { id: 2, value: '서비스 추가하기' },
];

export const ServiceData = data => {
  if (data) return data;
};

export const useSelectedDropDown = e => {
  const { data } = ServiceData();
  const [selectedDropValue, setSelectedDopValue] = useState(data[0]?.value);
  const { value } = e.target;
  setSelectedDopValue(data?.filter(el => el.value === value)[0].id);
  return selectedDropValue;
};
