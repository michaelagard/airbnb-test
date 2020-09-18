import React from 'react';
import styled from 'styled-components';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Dropdown from '../../components/Dropdown/Dropdown';
const TestViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
  margin: 1%;
`;
const ComponentContainer = styled.div`
  padding: 2%;
  width: fit-content;
`;

const menuArr = [
  { key: 0, title: 'Log in', route: '/login' },
  { key: 1, title: 'Sign up', route: '/signup' },
  { key: 2, title: null, route: '/', linebreak: true },
  { key: 3, title: 'Host your home', route: '/hosthome' },
  { key: 4, title: 'Host your experience', route: '/hostexperience' },
  { key: 5, title: 'Help', route: '/help' },
];
function TestView() {
  return (
    <TestViewContainer>
      <ComponentContainer>
        <DefaultButton content={'Test Button'} />
      </ComponentContainer>
      <ComponentContainer>
        <Dropdown
          title={'Default Dropdown'}
          // right={}
          menuArray={menuArr}
          // menuFontSize={'14px'}
        />
      </ComponentContainer>
    </TestViewContainer>
  );
}

export default TestView;
