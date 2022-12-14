import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&family=Montserrat:wght@200;400;700;800;900&display=swap');


    body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;

    }




    *{
        cursor: none !important;
        margin: 0;
        box-sizing: border-box;
        color: rgb(84, 84, 84);
        
        &::selection {
            color: white;
            background-color: rgba(84, 84, 84, 0.632);
        }
    }
    h1, h2, h3, h4, h5, h6, p{
        cursor: default;
        color: rgb(84, 84, 84);
    }
    h1{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 50px;
    }
    h2{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 30px;
    }

    p{
        font-size: 25px;
        font-weight: 400;
    }

    a{
    font-size: 20px;
    text-decoration: none;
    }

    @media  screen and (max-width: 850px) {
    h1{
        text-transform: uppercase;
        font-weight: 600;
        font-size: 40px;
    }
    h2{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 25px;
    }
    
    p{
        font-size: 20px;
        font-weight: 400;
    }
    }
`
