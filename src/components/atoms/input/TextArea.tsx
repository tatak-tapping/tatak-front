import styled from "@emotion/styled";
import { BASE, ERROR, GRAY } from "styles/colors";
import { useController, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { Flex, Text } from "rebass";

interface TextAreaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName>{
  width?: string;
  height?: string;
  comment?:string;
  counter?:string;
  placeholder?: string;
}

function TextArea<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props:TextAreaProps<TFieldValues, TName>) {
  const name = props.name;
  const control = props.control;
  const {field, fieldState} = useController({
    name,
    control,
    rules: props?.rules
  });

  return (
    <Wrapper error={fieldState.error && true}>
      <Flex mt="10px" mb="24px" flexDirection="inherit">
        <Text fontSize="14px" width={2/3} color={fieldState.error ? ERROR : GRAY[5]}>
          {props.comment}
        </Text>
        <Text textAlign="right" width={1/3}  fontFamily='Noto Sans KR' fontSize="14px" color={fieldState.error ? ERROR : GRAY[5]}>
          <span>{props.counter}</span>
        </Text>
      </Flex>
      <StyledTextArea 
        width={props.width}
        height={props.height}
        error={fieldState.error && true}
        name={name} 
        ref={field.ref} 
        onChange={field.onChange} onBlur={field.onBlur} {...field} />
    </Wrapper>
  );

};

export default TextArea;


const Wrapper = styled.div<{error?:boolean}>`

`;

const StyledTextArea = styled.textarea<{
  width?: string;
  height?: string;
  error?:boolean;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 20px;
  background-color: ${BASE[3]};
  border: ${props => props.error ? `1px solid ${ERROR}` : `1px solid ${GRAY[7]}` };
  font-size: 16px;
  line-height: 160%;
  color: ${GRAY[6]};
  resize: none;
  outline:none;
  &input:focus{
    color:${GRAY[2]};
  }
`;
