/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import { Box, Button, Flex, Text } from 'rebass';

import { BASE, GRAY, PRIMARY } from 'styles/colors';
import * as Term from 'components/atoms/term/Term';

interface TatakTermProps {}

const TatakTerm = () => {
  return (
    <Flex flexDirection="column" width="736px" mt="20px" ml="20px" mr="20px">
      <Text fontSize="24px" fontWeight="600" color={GRAY[1]}>
        타닥 이용약관
      </Text>
      <hr
        css={css`
          width: 100%;
          margin-top: 24px;
          margin-bottom: 32px;
          border: none;
          border-top: 1px solid ${GRAY[2]};
        `}
      />
      <Box sx={{ overflowY: 'auto', height: '651px', marginBottom: '20px' }}>
        <Term.StyledTermText>
          타닥 서비스 이용약관(이하 "본 약관")은 단체(이하 "비상구")가 운영하는(타닥사이트URL)를
          통하여 제공하는 관련 모든 “서비스”(이하 '서비스')에 대하여 와 단체와 회원 간의 권리⋅의무
          및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
        </Term.StyledTermText>
        <Term.StyledTermText>
          본 약관은 이용자의 “타닥” 서비스 이용에 적용되며, 아래의 내용에 동의하는 이용자에 한하여
          “타닥” 서비스를 이용할 수 있습니다.
        </Term.StyledTermText>
        <Term.StyledTermBox>
          <Term.StyledTermTitle1>제 1 장 총칙</Term.StyledTermTitle1>
          <Term.StyledTermTitle2>제 1 조 (목적)</Term.StyledTermTitle2>
          <Term.StyledText>
            본 약관은 “타닥”이 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와
            “타닥”의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 2 조 (용어의 정의)</Term.StyledTermTitle2>
          <Term.StyledText>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</Term.StyledText>
          <Term.StyledText>
            1. 이용자: 이 약관에 따라 사이트에 접속하여 “타닥”이 제공하는 서비스를 이용하는 회원 및
            비회원을 말합니다.
          </Term.StyledText>
          <Term.StyledText>
            2. 가입: “타닥”이 제공하는 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스
            이용계약을 완료시키는 행위.
          </Term.StyledText>
          <Term.StyledText>
            3. 회원: “타닥”과 이용계약을 체결하고 개인 정보를 제공하여 회원 등록을 한 자로서
            “타닥”이 제공하는 서비스를 이용할 수 있는 자.
          </Term.StyledText>
          <Term.StyledText>
            4. 비회원: “회원”이 아니면서 “타닥”이 제공하는 서비스를 이용하는 자.
          </Term.StyledText>
          <Term.StyledText>
            5. 아이디(ID) : “회원”의 식별과 서비스이용을 위하여 “회원”이 정하고 “타닥”이 승인하는
            문자 또는 숫자의 조합.
          </Term.StyledText>
          <Term.StyledText>
            6. 비밀번호: 이용자와 회원 ID가 일치하는지를 확인하고 통신상의 자신의 비밀보호를 위하여
            이용자 자신이 선정한 문자와 숫자의 조합.
          </Term.StyledText>
          <Term.StyledText>7. 탈퇴: 회원이 이용계약을 종료시키는 행위.</Term.StyledText>

          <Term.StyledTermTitle2>제 3 조 (신원정보 등의 제공)</Term.StyledTermTitle2>
          <Term.StyledText>
            “타닥”은 이 약관의 내용, 상호, 대표자 성명, 전화번호, 모사전송번호, 전자우편주소,
            개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 온라인 서비스 초기 화면에 게시합니다.
            다만, 약관은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 4 조 (약관의 게시 등)</Term.StyledTermTitle2>

          <Term.StyledText>
            1. “타닥”은 이 약관을 “회원”이 그 전부를 인쇄할 수 있고, 거래과정에서 해당 약관의 내용을
            확인할 수 있도록 기술적 조치를 취합니다.
          </Term.StyledText>
          <Term.StyledText>
            2. “타닥”은 “이용자”가 "타닥"과 이 약관의 내용에 관하여 질의 및 응답할 수 있도록 기술적
            장치를 설치합니다.
          </Term.StyledText>
          <Term.StyledText>
            3. “타닥”은 “이용자”가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회,
            환불조건 등과 같은 중요한 내용을 이용자가 쉽게 이해할 수 있도록 별도의 연결화면 또는
            팝업화면 등을 제공하여 “이용자”의 확인을 구합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 5 조 (약관의 개정 등)</Term.StyledTermTitle2>

          <Term.StyledText>
            1. “타닥”은 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률,
            약관의 규제에 관한 법률 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            2. “타닥”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께
            서비스초기화면에 그 적용일자 7일 이전부터 적용일 후 상당한 기간동안 공지하고,
            기존회원에게는 개정약관을 전자우편주소로 발송합니다.
          </Term.StyledText>
          <Term.StyledText>
            3. “타닥”이 약관을 개정한 경우에는 개정약관 공지 후 개정약관의 적용에 대한 “이용자”의
            동의 여부를 확인합니다.“회원”이 개정약관의 적용에 동의 하지 않는 경우 "타닥" 또는
            “회원”은 콘텐츠 이용계약을 해지할 수 있습니다. 이때, “타닥”은 계약해지로 인하여
            “이용자”가 입은 손해를 배상합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 6 조 (약관의 해석 및 약관 외 준칙)</Term.StyledTermTitle2>

          <Term.StyledText>
            이 약관의 해석과 약관에서 정하지 아니한 사항에 관하여는 온라인 디지털콘텐츠산업 발전법,
            전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률,
            문화체육관광부장관이 정하는 디지털콘텐츠이용자보호지침, 기타 관계법령 또는 상관례에
            따릅니다.
          </Term.StyledText>
          <Term.StyledTermTitle1>제 2 장 이용계약 및 서비스제공</Term.StyledTermTitle1>
          <Term.StyledTermTitle2>제 7 조 (이용계약의 성립)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. 이용계약은 신청자가 온라인으로 "타닥"에서 제공하는 소정의 가입신청 양식에서 요구하는
            사항을 기록하여 가입을 완료하는 것으로 성립됩니다.
          </Term.StyledText>
          <Term.StyledText>
            2. “타닥”은 다음 각 호에 해당하는 이용계약에 대하여는 가입을 취소할 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>① 다른 사람의 명의를 사용하여 신청하였을 때</Term.StyledText>
          <Term.StyledText>
            ② 이용계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때
          </Term.StyledText>
          <Term.StyledText>
            ③ 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때
          </Term.StyledText>
          <Term.StyledText>
            ④ ‘타닥’을 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우
          </Term.StyledText>
          <Term.StyledText>⑤ 기타 ‘타닥’이 정한 이용신청요건이 미비 되었을 때</Term.StyledText>
          <Term.StyledTermTitle2>제 8 조 (회원정보 사용에 대한 동의)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. 회원의 개인정보는 공공기관의 개인정보보호에 관한 법률에 의해 보호됩니다.
          </Term.StyledText>
          <Term.StyledText>
            2. “타닥”의 회원 정보는 다음과 같이 사용, 관리, 보호됩니다.
          </Term.StyledText>
          <Term.StyledText>
            ① 개인정보의 사용 :“타닥”은 서비스 제공과 관련해서 수집된 회원의 신상정보를 본인의 승낙
            없이 제3자에게 누설, 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해
            국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의
            요청이 있는 경우 또는 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우, 귀하가
            "타닥"에 제공한 개인정보를 스스로 공개한 경우에는 그러하지 않습니다.
          </Term.StyledText>
          <Term.StyledText>
            ② 개인정보의 관리 : 귀하는 개인정보의 보호 및 관리를 위하여 서비스의 개인정보관리에서
            수시로 귀하의 개인정보를 수정/삭제할 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            ③ 개인정보의 보호 : 귀하의 개인정보는 오직 귀하만이 열람/수정/삭제 할 수 있으며, 이는
            전적으로 귀하의 ID와 비밀번호에 의해 관리되고 있습니다. 따라서 타인에게 본인의 ID와
            비밀번호를 알려주어서는 안되며, 작업 종료 시에는 반드시 로그아웃 해 주시기 바랍니다.
          </Term.StyledText>
          <Term.StyledText>
            3. 회원이 본 약관에 따라 이용신청을 하는 것은, “타닥”이 신청서에 기재된 회원정보를 수집,
            이용하는 것에 동의하는 것으로 간주됩니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 9 조 (사용자의 정보 보안)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. 가입 신청자가 "타닥" 서비스 가입 절차를 완료하는 순간부터 귀하는 입력한 정보의 비밀을
            유지할 책임이 있으며, 회원의 ID와 비밀번호를 사용하여 발생하는 모든 결과에 대한 책임은
            회원 본인에게 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            2. ID와 비밀번호에 관한 모든 관리의 책임은 회원에게 있으며, 회원의 ID나 비밀번호가
            부정하게 사용 되었다는 사실을 발견한 경우에는 즉시 "타닥"에 신고하여야 합니다. 신고를
            하지 않음으로 인한 모든 책임은 회원 본인에게 있습니다. 종료하지 아니함으로써 제3자가
            귀하에 관한 정보를 이용하게 되는 등의 결과로 인해 발생하는 손해 및 손실에 대하여
            “타닥”은 책임을 부담하지 아니합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 10 조 (서비스의 중지)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. “타닥”은 이용자가 본 약관의 내용에 위배되는 행동을 한 경우, 임의로 서비스 사용을 제한
            및 중지할 수 있습니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 11 조 (서비스의 변경 및 해지)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. “타닥”은 귀하가 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인한
            손해에 관하여 책임을 지지 않으며, 회원이 본 서비스에 게재한 정보, 자료, 사실의 신뢰도,
            정확성 등 내용에 관하여는 책임을 지지 않습니다. 의한 손해에 대하여 책임을 부담하지
            아니합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 12 조 (‘게시물’의 권리와 책임)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. 귀하가 서비스에 게시한 게시물에 대한 모든 권리는 귀하에게 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            2. “타닥”은 게시된 내용을 사전 통지 없이 편집, 이동할 수 있는 권리를 보유하며, 게시판
            운영 원칙에 따라 사전 통지 없이 삭제할 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            3. 귀하의 게시물 또는 저작물이 단체 또는 제3자의 저작권 등 타인의 지적재산권을
            침해함으로써 발생하는 민∙형사상의 책임은 전적으로 회원이나 비회원이 부담하여야 합니다.
          </Term.StyledText>
          <Term.StyledText>
            4. 귀하는 불법적이거나, 오해의 소지가 있거나, 사기적인 행위 ,욕설 및 음란물과 관련된
            허가받지 않은 목적을 위한 어떠한 콘텐츠도 게시하면 하면 안 됩니다.
          </Term.StyledText>
          <Term.StyledText>
            5. “타닥”는 4번 조항에 따른 게시물 삭제(대체로 콘텐츠 생성 후 24시간 이내)를 회원의
            동의없이 수시로 진행할 수 있고 이용약관을 위배하는 회원을 강제 탈퇴 조치할 수 있습니다.
          </Term.StyledText>

          <Term.StyledTermTitle1>제 3 장 의무 및 책임</Term.StyledTermTitle1>

          <Term.StyledTermTitle2>제 13 조 (“타닥”의 의무)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. “타닥”은 회원의 개인 신상 정보를 본인의 승낙없이 타인에게 누설, 배포하지 않습니다.
            다만, 전기통신관련법령 등 관계법령에 의하여 관계 국가기관 등의 요구가 있는 경우에는
            그러하지 아니합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 14 조 (회원의 의무)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. 회원 가입 시에 요구되는 정보는 정확하게 기입하여야 합니다. 또한 이미 제공된 귀하에
            대한 정보가 정확한 정보가 되도록 유지, 갱신하여야 하며, 회원은 자신의 ID 및 비밀번호를
            제3자에게 이용하게 해서는 안됩니다.
          </Term.StyledText>
          <Term.StyledText>
            2. 회원은 “타닥”의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다.
          </Term.StyledText>
          <Term.StyledTermTitle1>제 4 장 기타</Term.StyledTermTitle1>
          <Term.StyledTermTitle2>제 15 조 (양도금지)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. 회원은 서비스의 이용권한, 기타 이용계약 상 지위를 타인에게 양도, 증여할 수 없습니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 16 조 (손해배상)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. “타닥”은 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도
            “타닥”이 고의로 행한 범죄행위를 제외하고 이에 대하여 책임을 부담하지 아니합니다.
          </Term.StyledText>
          <Term.StyledText>
            2. 회사가 고의 또는 중과실로 회원에게 손해를 끼친경우 손해에 대해 배상할 책임이
            있습니다.*. 단, 회사에 고의 또는 과실이 없는 경우에는 그 책임을 지지 않습니다.
          </Term.StyledText>
          <Term.StyledText>
            3. 회원이 본 약관을 위반하여 회사에 손해를 끼친 경우 회원은 회사에 대하여 그 손해에 대해
            배상할 책임이 있습니다.*
          </Term.StyledText>
          <Term.StyledTermTitle2>제 17 조 (면책조항)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. “타닥”은 회원이나 제3자에 의해 표출된 의견을 승인하거나 반대하거나 수정하지 않습니다.
            “타닥”은 어떠한 경우라도 회원이 서비스에 담긴 정보에 의존해 얻은 이득이나 입은 손해에
            대해 책임이 없습니다. 금전적 거래등과 관련하여 어떠한 책임도 부담하지 아니하고, 회원이
            서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>제 18 조 (재판관할)</Term.StyledTermTitle2>
          <Term.StyledText>
            1. "타닥"과 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국 법을
            적용하며, 본 분쟁으로 인한 소는 대한민국의 법원에 제기합니다.
          </Term.StyledText>
          <Term.StyledTermTitle1>본 약관 업데이트</Term.StyledTermTitle1>
          <Term.StyledTermText>
            당사는 타닥 서비스 및 정책을 변경할 수 있고, 타닥 서비스 및 정책이 정확하게 반영되도록
            하기 위해 본 약관을 변경해야 할 경우가 있습니다. 법적으로 달리 요구되지 않는 한 당사는
            본 약관을 변경하기 전에 회원님에게 알리고, 변경된 약관의 효력이 발생되기 최소 30일 전에
            회원님에게 이를 검토할 기회를 제공합니다. 변경 발효일 이후에도 회원님이 계속 타닥
            서비스를 이용하실 경우, 회원님은 변경된 약관의 적용을 받게 됩니다. 본 약관 또는
            업데이트된 약관에 동의하지 않을 경우에는 회원탈퇴 후 회원님의 계정을 삭제하면 됩니다.
          </Term.StyledTermText>

          <Term.StyledTermText>본 이용약관은 2022년 6월 22일부터 적용됩니다.</Term.StyledTermText>
        </Term.StyledTermBox>
      </Box>
    </Flex>
  );
};

export default TatakTerm;
