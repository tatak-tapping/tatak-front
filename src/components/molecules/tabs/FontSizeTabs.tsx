import React from 'react';
import styled from '@emotion/styled';
import { useController, UseControllerProps, FieldValues, FieldPath } from 'react-hook-form';

import { BASE, PRIMARY } from 'styles/colors';
import CheckboxTab from 'components/atoms/tab/CheckboxTab';
import RadioTab from 'components/atoms/tab/RadioTab';
import { FontSize } from 'utils/types/img-down';

interface FontSizeTabsProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {}

const FontSizeTabs = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FontSizeTabsProps<TFieldValues, TName>
) => {
  const keySize = Object.keys(FontSize);
  const valueSize = Object.values(FontSize);

  const { name, control } = props;
  const { field } = useController({
    name,
    control,
  });

  return (
    <>
      {keySize.map((size, index) => {
        return (
          <RadioTab
            width="80px"
            id={size}
            name={name}
            value={size}
            label={valueSize[index]}
            selectedValue={field.value}
            ref={field.ref}
            onChange={field.onChange}
          />
        );
      })}
    </>
  );
};

export default FontSizeTabs;
