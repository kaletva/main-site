import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.footer`
    padding: 20px;
    border-top: 0.5px solid $primary-color;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 20px;
    li{
        list-style-type: none;
    }
`

interface FooterI {
    mouseEnter: () => void
    mouseLeave: () => void
}

const Footer: React.FC<FooterI> = ({ mouseEnter, mouseLeave }) => {
    return (
        <FooterContainer >
            <li>
                <a onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()} href='https://github.com/kaletva'>Git</a>
            </li>
            <li>
                <a onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()} href='https://t.me/kaletva'>Telegram</a>
            </li>
            <li>
                <a onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()} href='https://www.linkedin.com/in/kaletva/'>Linkedn</a>
            </li>
        </FooterContainer>
    );
}

export default Footer;