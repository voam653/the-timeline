import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color: #f5f5f5;
        margin: 0px;
    }
`

export const BasicContainerStyle = styled.div`
    width: 992px;
    margin: auto;
    max-width: 100%;
`;

export const Container = styled.div`
  background-color: rgba(0,0,0,0.05);
`;

export const HeaderConatiner = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    background-color: #3f51b5;
    padding: 0px 16px;
    top: 0px;
    position: sticky;
`;

export const Header = styled(BasicContainerStyle)``;

export const Section = styled(BasicContainerStyle)`
    min-height: calc(100vh - 122px);
`;

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    background-color: #eee;
    padding: 16px;
    margin-top: 16px;
    position: relative;
`;

export const Footer = styled(BasicContainerStyle)``;
