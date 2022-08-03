/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import { Box, Button, Flex, Text } from 'rebass';

import { BASE, GRAY, PRIMARY } from 'styles/colors';
import * as Term from 'components/atoms/term/Term';

interface PrivacyTermProps {}

const PrivacyTerm = () => {
  return (
    <Flex flexDirection="column" width="736px" mt="20px" ml="20px" mr="20px">
      <Text fontSize="24px" fontWeight="600" color={GRAY[1]}>
        타닥 개인정보처리방침
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
          {'<'} 타닥 {'>'}('www.ddddd'이하 '타닥')은(는) 「개인정보 보호법」 제30조에 따라
          정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
          위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </Term.StyledTermText>
        <Term.StyledTermText>
          이 개인정보처리방침은 2022년 n월 n일부터 적용됩니다.
        </Term.StyledTermText>
        <Term.StyledTermBox>
          <Term.StyledTermTitle1>제1조(개인정보의 처리 목적)</Term.StyledTermTitle1>
          <Term.StyledText>
            {'<'} 타닥 {'>'}('www.ddddd'이하 '타닥')은(는) 다음의 목적을 위하여 개인정보를
            처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용
            목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한
            조치를 이행할 예정입니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>1. 홈페이지 회원가입 및 관리</Term.StyledTermTitle2>
          <Term.StyledText>
            회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스
            부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>2. 재화 또는 서비스 제공</Term.StyledTermTitle2>
          <Term.StyledText>
            서비스 제공, 콘텐츠 제공을 목적으로 개인정보를 처리합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>3. 마케팅 및 광고에의 활용</Term.StyledTermTitle2>
          <Term.StyledText>
            인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 서비스의 유효성 확인, 접속빈도 파악
            또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
          </Term.StyledText>
          <Term.StyledTermTitle1>제2조(개인정보의 처리 및 보유 기간)</Term.StyledTermTitle1>
          <Term.StyledText>
            ① {'<'} 타닥 {'>'}은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
            개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </Term.StyledText>
          <Term.StyledText>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</Term.StyledText>
          <Term.StyledTermTitle2>
            {'<'}홈페이지 회원가입 및 관리{'>'}
          </Term.StyledTermTitle2>

          <Term.StyledText>
            {'<'}홈페이지 회원가입 및 관리{'>'}와 관련한 개인정보는 수집.이용에 관한 동의일로부터
            {'<'}서비스 이용 계약 및 회원가입 해지시까지{'>'}까지 위 이용목적을 위하여
            보유.이용됩니다.
          </Term.StyledText>
          <Term.StyledText>
            - ID,비밀번호,이메일,서비스이용기록,접속로그,쿠키,접속IP정보
          </Term.StyledText>
          <Term.StyledText>보존 이유 : 전자상거래등에서의 소비자보호에 관한 법률</Term.StyledText>
          <Term.StyledText>보존 기간 : 5년</Term.StyledText>
          <Term.StyledText>- 표시/광고에 관한 기록 </Term.StyledText>
          <Term.StyledText>보존 이유 : 전자상거래등에서의 소비자보호에 관한 법률</Term.StyledText>
          <Term.StyledText> 보존 기간 : 6개월</Term.StyledText>
          <Term.StyledText>- 계약또는청약철회등에관한기록 </Term.StyledText>
          <Term.StyledText>보존 이유 : 전자상거래등에서의 소비자보호에 관한 법률 </Term.StyledText>
          <Term.StyledText>보존 기간 : 5년</Term.StyledText>
          <Term.StyledText>- 소비자의 불만 또는 분쟁처리에 관한 기록 </Term.StyledText>
          <Term.StyledText>보존 이유 : 전자상거래등에서의 소비자보호에 관한 법률 </Term.StyledText>
          <Term.StyledText>보존 기간 : 3년</Term.StyledText>
          <Term.StyledText>- 방문에 관한 기록</Term.StyledText>
          <Term.StyledText> 보존 이유 : 통신비밀보호법 </Term.StyledText>
          <Term.StyledText>보존 기간 : 3개월</Term.StyledText>
          <Term.StyledTermTitle1>제3조(처리하는 개인정보의 항목)</Term.StyledTermTitle1>
          <Term.StyledText>
            ① {'<'} 타닥 {'>'}은(는) 다음의 개인정보 항목을 처리하고 있습니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>
            {'<'} 홈페이지 회원가입 및 관리 {'>'}
          </Term.StyledTermTitle2>
          <Term.StyledText>
            - 이메일, 닉네임, 비밀번호, 서비스이용기록, 접속로그, 쿠키, 접속 IP 정보
          </Term.StyledText>
          <Term.StyledText>- 카카오 로그인 정보 : ID, 비밀번호, 이메일</Term.StyledText>
          <Term.StyledTermTitle1>제3조(개인정보의 파기절차 및 파기방법)</Term.StyledTermTitle1>
          <Term.StyledText>
            ① {'<'} 타닥 {'>'} 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </Term.StyledText>
          <Term.StyledText>
            ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도
            불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를
            별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
          </Term.StyledText>
          <Term.StyledText>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</Term.StyledText>
          <Term.StyledTermTitle2>1. 파기절차</Term.StyledTermTitle2>
          <Term.StyledText>
            {'<'} 타닥 {'>'} 은(는) 파기 사유가 발생한 개인정보를 선정하고, {'<'} 타닥 {'>'} 의
            개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
          </Term.StyledText>
          <Term.StyledTermTitle2>2. 파기방법</Term.StyledTermTitle2>
          <Term.StyledText>
            전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다
          </Term.StyledText>
          <Term.StyledTermTitle1>
            제4조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)
          </Term.StyledTermTitle1>

          <Term.StyledText>
            ① 정보주체는 타닥에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를
            행사할 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            ② 제1항에 따른 권리 행사는타닥에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라
            서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 타닥은(는) 이에 대해 지체 없이
            조치하겠습니다.
          </Term.StyledText>
          <Term.StyledText>
            ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여
            하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에
            따른 위임장을 제출하셔야 합니다.
          </Term.StyledText>
          <Term.StyledText>
            ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에
            의하여 정보주체의 권리가 제한 될 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는
            경우에는 그 삭제를 요구할 수 없습니다.
          </Term.StyledText>
          <Term.StyledText>
            ⑥ 타닥은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람
            등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
          </Term.StyledText>
          <Term.StyledTermTitle1>
            제5조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)
          </Term.StyledTermTitle1>
          <Term.StyledText>
            ① 타닥 은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로
            불러오는 ‘쿠키(cookie)’를 사용합니다.
          </Term.StyledText>
          <Term.StyledText>
            ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는
            소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
          </Term.StyledText>
          <Term.StyledText>
            가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태,
            인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해
            사용됩니다.
          </Term.StyledText>
          <Term.StyledText>
            나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구{'>'}인터넷 옵션{'>'}개인정보
            메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
          </Term.StyledText>
          <Term.StyledTermTitle1>
            제10조(행태정보의 수집·이용·제공 및 거부 등에 관한 사항)
          </Term.StyledTermTitle1>
          <Term.StyledText>행태정보의 수집·이용·제공 및 거부등에 관한 사항</Term.StyledText>
          <Term.StyledText>
            {'<'}타닥{'>'}은(는) 온라인 맞춤형 광고 등을 위한 행태정보를 수집·이용·제공하지
            않습니다.
          </Term.StyledText>
          <Term.StyledTermTitle1>제6조(추가적인 이용·제공 판단기준)</Term.StyledTermTitle1>
          <Term.StyledText>
            {'<'} 타닥 {'>'} 은(는) ｢개인정보 보호법｣ 제15조제3항 및 제17조제4항에 따라 ｢개인정보
            보호법 시행령｣ 제14조의2에 따른 사항을 고려하여 정보주체의 동의 없이 개인정보를
            추가적으로 이용·제공할 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            이에 따라 {'<'} 타닥 {'>'} 가(이) 정보주체의 동의 없이 추가적인 이용·제공을 하기 위해서
            다음과 같은 사항을 고려하였습니다.
          </Term.StyledText>
          <Term.StyledText>
            ▶ 개인정보를 추가적으로 이용·제공하려는 목적이 당초 수집 목적과 관련성이 있는지 여부
          </Term.StyledText>
          <Term.StyledText>
            ▶ 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 추가적인 이용·제공에 대한 예측
            가능성이 있는지 여부
          </Term.StyledText>
          <Term.StyledText>
            ▶ 개인정보의 추가적인 이용·제공이 정보주체의 이익을 부당하게 침해하는지 여부
          </Term.StyledText>
          <Term.StyledText>
            ▶ 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부
          </Term.StyledText>
          <Term.StyledText>
            ※ 추가적인 이용·제공 시 고려사항에 대한 판단기준은 사업자/단체 스스로 자율적으로
            판단하여 작성·공개함
          </Term.StyledText>

          <Term.StyledTermTitle1>제7조 (개인정보 보호책임자에 관한 사항)</Term.StyledTermTitle1>
          <Term.StyledText>
            ① 타닥 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
            정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
            있습니다.
          </Term.StyledText>
          <Term.StyledText>▶ 개인정보 보호책임자</Term.StyledText>
          <Term.StyledText>성명 :김은서</Term.StyledText>
          <Term.StyledText>직책 :프로젝트매니저</Term.StyledText>
          <Term.StyledText>직급 :프로젝트매니저</Term.StyledText>
          <Term.StyledText>연락처 :</Term.StyledText>
          <Term.StyledText>
            ② 정보주체께서는 타닥 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
            문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수
            있습니다. 타닥 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
          </Term.StyledText>

          <Term.StyledTermTitle1>제8조(개인정보 처리방침 변경)</Term.StyledTermTitle1>

          <Term.StyledText>① 이 개인정보처리방침은 2022년 N월 N부터 적용됩니다.</Term.StyledText>

          <Term.StyledText>
            ② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
          </Term.StyledText>
          <Term.StyledText>
            2. 회원은 “타닥”의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다.
          </Term.StyledText>
          <Term.StyledTermTitle1>제 9조 (고지의 의무)</Term.StyledTermTitle1>
          <Term.StyledText>
            현 개인정보취급방침의 내용 추가, 삭제 및 수정이 있을 시에는 시행일자 최소 7일전부터
            서비스 내 공지사항을 통해 공고할 것입니다.
          </Term.StyledText>
        </Term.StyledTermBox>
      </Box>
    </Flex>
  );
};

export default PrivacyTerm;
