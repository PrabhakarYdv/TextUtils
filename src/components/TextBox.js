import React, { useState } from 'react'

export default function TextBox(props) {
    const [text, setText] = useState("")
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [isCopy, setIsCopy] = useState(false)
    let totalWord = 0

    const onChangeBox = (event) => {
        setText(event.target.value)
    }


    const returnWordCount = () => {
        if (text) {
            let textArray = text.trim().split(" ").filter((element)=>{
                return element.length!==0
            })
            let count = textArray.length
            totalWord = count
            return count + (count<=1 ? " Word" : " Words")
        }
        return "0 Word"

    }

    const btnHandleSpeech = () => {
        if (text === "" || text === null || text === undefined) {
            alert("Nothing to Raed Here")
        }
        else {
            if (isSpeaking) {
                speechSynthesis.cancel()
                setIsSpeaking(false)
            }
            else {
                let readableText = new SpeechSynthesisUtterance(text)
                readableText.onend = () => setIsSpeaking(false)
                speechSynthesis.speak(readableText)
                setIsSpeaking(true)
            }
        }

    }

    const btnUpperCase = () => {
        if (text === "" || text === null || text === undefined) {
            alert("Enter text first")
        }
        else {
            let newText = text.toUpperCase()
            setText(newText)
        }

    }

    const btnLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const btnClear = () => {
        setText("")
        speechSynthesis.cancel()
        setIsSpeaking(false)
        document.getElementById("exampleFormControlTextarea1").focus()
    }

    const btnRemoveExtraSpace = () => {
        let newText = text.replace(/\s+/g, " ").trim()
        setText(newText)
        console.log(newText)
    }

    const btnCopy = () => {
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                setIsCopy(true)
                setTimeout(() => {
                    setIsCopy(false)
                }, 1500);
            })
        }
        else {
            setIsCopy(false)
        }
    }

    return (
        <>
            <h1 className='mainHeading' style={{ color: props.mode === "light-mode" ? "#c49999" : "white"} }>Welcome To TextUtils Webiste</h1>
            <div className="container my-5">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" style={{ fontSize: "25   px", fontWeight: "bold" }}>Enter text to Analyze</label>
                        <textarea className="form-control" value={text} onChange={onChangeBox} id="exampleFormControlTextarea1" rows="10" autoFocus></textarea>
                    </div>
                </form>
                <button className="btn btn-primary mx-1" onClick={btnHandleSpeech}>{isSpeaking ? "Stop" : "Read"}</button>
                <button className="btn btn-primary mx-1" onClick={btnUpperCase}>UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={btnLowerCase}>LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={btnClear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={btnRemoveExtraSpace}>Remove Extra Space</button>
            </div>

            <div className="container">
                <h3>Text Summary</h3>
                <p>{returnWordCount()}, {((totalWord * 0.6) / 60).toFixed(2)} Minute to Read</p>
                <div className="d-flex justify-content-end mt-1 mx-1">
                    <button onClick={btnCopy} className="btnCopy">📋</button>
                    {isCopy && <div className="snackbar">{isCopy ? "Copied to clipboard!" : "Nothing to Copy!"}</div>}
                </div>
                <h4 style={{ fontWeight: "bold" }}>Preview</h4>
                <div id='line' className="line"></div>
                <p className="preview">{text.trim().length > 0 ? text : "Nothing to priview !"}</p>
            </div>

        </>
    )
}