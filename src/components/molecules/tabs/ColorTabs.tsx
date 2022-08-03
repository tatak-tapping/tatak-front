import React from 'react';
import styled from '@emotion/styled';
import { useController, UseControllerProps, FieldValues, FieldPath } from 'react-hook-form';

import { BASE, PRIMARY } from 'styles/colors';
import colorStyle from 'components/atoms/pick/colorStyle';
import PickList from 'components/atoms/pick/PickList';
import { FontSize } from 'utils/types/img-down';

interface ColorTabsProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {}

const ColorTabs = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: ColorTabsProps<TFieldValues, TName>
) => {
  const { name, control } = props;

  const { field } = useController({
    name,
    control,
  });

  return (
    <PickList
      list={colorStyle.map((color, index) => ({
        id: index,
        name: name,
        value: index,
        selectedValue: field.value,
        ref: field.ref,
        onChange: field.onChange,
      }))}
    />
  );
};

export default ColorTabs;
