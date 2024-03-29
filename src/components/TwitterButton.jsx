import React from 'react';
import { FaTwitter } from 'react-icons/fa';


export const TwitterButton = ({ passedColor, iconSize }) => {

    return (
        <>

            <a id="tweet-quote" title="Tweet this quote!" style={{ backgroundColor: passedColor }} className="font-sans w-[70px] h-[40px] text-[17px] font-[bold] text-[white] rounded-[10px] border-[none]" href="https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text" target="_blank" rel="noreferrer">
                <FaTwitter style={{ marginLeft: "20px", marginTop: "5px", fontSize: iconSize }} />
            </a>
        </>
    )
}