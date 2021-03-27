import styled, { createGlobalStyle } from 'styled-components';

// background image
//@ts-ignore
import BGImage from './images/quiz_bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 20%;
        padding: 0 20%;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`

