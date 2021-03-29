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
        margin: 10%;
        padding: 0 10%;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #ffffff;
    }

    .score{
        color: #000;
        font-size: 2rem;
        margin: 0;

    }

    h1 {
        
        background-size: 100%;
        background-clip: text;

        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        
        --moz-background-clip: text;
        --moz-text-fill-color: transparent;

        filter: drop-shadow(2px 2px ##0085a3);

        font-size: 40px;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg,#ffffff,#f5f5f5);
        border-radius: 5px;
        border: 2 px solid #d3558;
        box shadow: 0px 5px 10px rgba(0,0,0,.25);
        height: 40px;
        margin: 10px;
        margin-left: 15%;
        padding: 0 40px;
    }

    .start {
        max-width:200px;
    }
`

