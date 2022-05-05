/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {postCommonLogin } from "api/auth";
import TextButton from "components/atoms/button/TextButton";
import Input from "components/atoms/input/Input";
import Label from "components/atoms/label/Label";
import KakaoAccountButton from "components/molecules/button/KakaoAccountButton";
import { useCallback, useState } from "react";
import { Box, Flex, Link } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";

const SignUpModalContent = () => {

  return(
    <Flex flexDirection="column" ml={20} mr={20}>

    </Flex>
  );
};
export default SignUpModalContent;