import { FaTumblr } from "react-icons/fa"

export const TumblrButton = ({ passedColor, iconSize }) => {

    return (
        <>
            <a id="tumblr-quote" title="Post this quote on tumblr!" style={{ backgroundColor: passedColor }} className="font-sans w-[70px] h-[40px] text-[17px] font-[bold] text-[white] rounded-[10px] border-[none]" href="https://www.tumblr.com/widgets/share/tool%3Fposttype%3Dquote%26tags%3Dquotes%2Cfreecodecamp%26caption%3D%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button&v=2" target="_blank" rel="noreferrer">
                <FaTumblr style={{ marginLeft: "20px", marginTop: "5px", fontSize: iconSize }} />
            </a>

        </>
    )
}