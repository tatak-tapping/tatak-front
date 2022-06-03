/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "components/atoms/icon/Icon";
import CheckboxTab from "components/atoms/tab/CheckboxTab";
import LinkTab from "components/atoms/tab/LinkTab";
import { fontOptionAtom, tempfontOptionAtom } from "modules/atom";
import { useEffect, useState } from "react";
import { Box, Flex } from "rebass";
import { useRecoilState, useSetRecoilState } from "recoil";
import { BASE, PRIMARY } from "styles/colors";
import { FontAlign, FontWeight, TypoLanguage } from "utils/types";

const FontAlignTabs = () => {
  const [tempFontOption, SetTempFontOption] = useRecoilState(tempfontOptionAtom);
  const [ selected , setSeleted ] = useState(FontAlign.CENTER);

  const alignArray = Object.values(FontAlign);

  const handleCheckboxChange = (value:string) => {
    setSeleted(value === "center" ? FontAlign.CENTER
      : value === "left" ? FontAlign.LEFT : FontAlign.RIGHT);
  }

  useEffect(() => {
    SetTempFontOption({
      ...tempFontOption,
      align: selected
    });
  }, [selected]);

  return (
    <>
    {
      alignArray.map((value, index) => (
        <RadioTabStyled 
          key={index}
          weight={value} 
          onClick={() => handleCheckboxChange(value)} className={selected === value ? 'checked' : undefined}>
          <input type="checkbox" name={value} checked={selected === value} readOnly />
          <span>
            {value === "center" ? <AlignCenterIcon />
              : value === "left" ? <AlignLeftIcon /> : <AlignRightIcon />
            }
          </span>
        </RadioTabStyled>
      ))
    }
    </>
  );
}

export default FontAlignTabs;

const RadioTabStyled = styled.div<{weight:string}>`
  font-weight: ${props => props.weight};  
  width: 32px;
  height: 36px;
  font-size: 20px;
  color: ${PRIMARY[20]};
  background-color: ${BASE[3]};
  border: 1px solid ${PRIMARY[40]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  input[type='checkbox'] {
    display: none;
  }
  span{
    line-height: 0%;color: ${PRIMARY[20]};
    svg{
      background-color:${BASE[3]};
      fill:currentColor;
    }
  }
  &.checked {
    background-color: ${PRIMARY[80]};
    border: 1px solid ${PRIMARY[40]};
  }
  &.checked span {
    background-color: ${PRIMARY[80]};
    color: ${BASE[3]};
    svg{
      background-color:${PRIMARY[80]};
      fill:currentColor;
    }
  }
  :not(:last-child){
    border-right: none;
  }
`;
