import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import AdsManagePage from './pages/AdsManagePage';
import AdsStatusPage from './pages/AdsStatusPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <AppLayout>
      <GlobalStyle />
      <Aside />
      <Routes>
        <Route path="/" element={<AdsStatusPage />} />
        <Route path="/ads-list" element={<AdsManagePage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;

const AppLayout = styled.div`
  width: 100%;
  display: flex;
  background-color: #f6f7f8;
`;
