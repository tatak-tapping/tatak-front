import React from 'react';
import styled from '@emotion/styled';
import { useController, UseControllerProps, FieldValues, FieldPath } from 'react-hook-form';

import Pick from 'components/atoms/pick/Pick';

interface PickListProps {
  list: any[];
}

const PickList = ({ list }: PickListProps) => {
  return (
    <StyledPickList>
      {list.map((item) => {
        return (
          <Pick
            id={item.id}
            name={item.name}
            value={item.value}
            selectedValue={item.selectedValue}
            ref={item.ref}
            onChange={item.onChange}
          />
        );
      })}
    </StyledPickList>
  );
};

export default PickList;

const StyledPickList = styled.div`
  > div {
    margin: 5px;
  }
`;
