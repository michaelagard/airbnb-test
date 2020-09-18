import React from 'react';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import MainContent from '../../components/Content/MainContent/MainContent';
import Footer from '../../components/Footer/Footer';
import {
  FrontPageContainer,
  CommunityMessage,
  MessageDivider,
} from './FrontPage.styled';

function FrontPage() {
  return (
    <FrontPageContainer>
      <CommunityMessage>Wow, COVID-19 still runs rampant.</CommunityMessage>
      <MessageDivider>
        <Header />
        <Search />
        <MainContent />
      </MessageDivider>
      <Footer></Footer>
    </FrontPageContainer>
  );
}

export default FrontPage;
