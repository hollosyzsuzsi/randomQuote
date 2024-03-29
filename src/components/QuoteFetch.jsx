import { useEffect, useState } from "react";
import { randomColor } from "./utils";
import { TwitterButton } from "./TwitterButton";
import { TumblrButton } from "./TumblrButton";




export const RandomQuote = () => {

    const [quoteData, setQuoteData] = useState(null);
    let color = randomColor()

    const fetchNewQuote = () => {
        fetch("https://api.quotable.io/quotes/random")
            .then((response) => response.json())
            .then((data) => {
                setQuoteData(data[0]);
            })
            .catch((error) => {
                console.error('Error fetching quote:', error);
            });
    };

    const handleClick = () => {
        fetchNewQuote()
        color = randomColor()
    }

    useEffect(() => {
        fetchNewQuote();
    }, [])

    const boxStyle = "font-sans w-2/5 max-h-80 bg-[white] text-center text-2xl font-semibold mx-auto my-[100px] px-2.5 py-10 rounded-[20px]"

    return (
        <div style={{ backgroundColor: color }} className="w-screen h-[100vw] pt-[50px] transition-colors duration-700" >
            <div className={boxStyle} id="quote-box">
                <div className="mb-[30px] p-[10px]" id="text">

                    <h1 style={{ color: color }}>{quoteData ? quoteData.content : 'loading'}</h1>
                </div>
                <div className="font-medium text-right text-xl p-[10px]" id="author">
                    <h2 style={{ color: color }}>{quoteData ? quoteData.author : 'loading'}</h2>
                </div>
                <div className="flex flex-row justify-around mt-[30px] py-1.5 space-x-20" id="buttons">
                    <TumblrButton passedColor={color} iconSize={"30px"} />
                    <TwitterButton passedColor={color} iconSize={"30px"} />
                    <button style={{ backgroundColor: color }} className="font-sans w-[100px] h-[40px] text-[16px] font-[bold] text-[white] rounded-[10px] border-[none] px-0.5" id="new-quote" onClick={handleClick}>New quote</button>
                </div>
            </div>
        </div >

    )
}