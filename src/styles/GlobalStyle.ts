import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
      * {
        box-sizing: border-box;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        word-break: keep-all;
        word-wrap: break-word;
        font-family: 'Nunito', sans-serif;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }

    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }
    
    menu, ol, ul {
        list-style: none;
    }
    
    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    

    a {
        text-decoration:none;
        color: inherit;
    }


    textarea{
        resize: none;
        font-size : 16px;
        font-weight: normal;
        color: #3b3b3b;;
        word-break: keep-all;
        word-wrap: break-word;
        -webkit-appearance: none;
    }

    i,address {
        font-style: normal;
    }

    img {
        vertical-align: middle;
        border: 0;
        image-rendering: -webkit-optimize-contrast;
        transform: translateZ(0);
        backface-visibility: hidden;
        max-width: 100%;
    }

    button {
        background-color: transparent;
    }

    button:focus {
        outline: none;
    }

    input {
        -webkit-appearance: none;
        border-radius: 0;
        -webkit-border-radius: 0;
    }



`;

export default GlobalStyle;
