import styled from '@emotion/styled';

export const AppHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #333333;
  border-radius: 8px;
  box-shadow: 0 8px 6px -6px black;
`;

export const AppBar = styled.div`
  display: flex;
  align-items: center;
`;

export const MainSection = styled.main`
  margin-bottom: 20px;
`;
