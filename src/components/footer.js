import React from 'react'
import Facebook from '../Facebook.png';
import Twitter from '../Twitter.png';
import Github from '../GitHub.png';
import Instagram from '../Instagram.png';

export default function Footer() {
    return (
        <footer>
            <a href='https://github.com/crypto-dot'><img src = {Github} alt= 'githubIcon'></img></a>
            <a href="https://github.com/crypto-dot"><img src = {Instagram} alt= 'InstagramIcon'></img></a>
            <a href="https://github.com/crypto-dot"><img src = {Twitter} alt= 'TwitterIcon'></img></a>
            <a href="https://github.com/crypto-dot"><img src = {Facebook} alt= 'facebookIcon'></img></a>
        </footer>
    )
}