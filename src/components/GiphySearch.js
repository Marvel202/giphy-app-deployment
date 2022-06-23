import { useState, useEffect } from 'react'
import GifViewer from './GifViewer';


function GiphySearch() {
    // const APIKEYGOESHERE = 'hsMHyWDh9XPAm9e0lPW9wX2TNhcPxSOl'
    const [gifs, setGifs] = useState([]);
    const [input, setInputs] = useState('')
    const [saveGifs, setSaveGifs] = useState([])

    useEffect(() => {
        search()},[])

    const search = async (event) => {
        if(event) event.preventDefault()
        let response; 

        if(input) {

            response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=hsMHyWDh9XPAm9e0lPW9wX2TNhcPxSOl&q=${input}&limit=25&offset=0&rating=g&lang=en`)
         const json = await response.json()
         setGifs(json.data)
        } else {
           response=await fetch('https://api.giphy.com/v1/gifs/trending?api_key=hsMHyWDh9XPAm9e0lPW9wX2TNhcPxSOl&limit=25&rating=g')
           const json = await response.json()
           setGifs(json.data)
        }
    
      
    };
    const save = (gif) => {
        const newArray = [...saveGifs, gif]
        setSaveGifs([...saveGifs, gif])
        // console.log(gif)
    }
    const remove = (index) => {
        const newArray = saveGifs.filter((gif, key)=> key !== index)
        setSaveGifs(newArray)
    }
    return (

        <div>
            <h4> Saved Gifs </h4>
            <GifViewer gifs = {saveGifs} buttonAction={remove} buttonText='remove' />        
            <form onSubmit={search}>
                <input value={input} onChange={(event) => setInputs(event.target.value)}/>
                    <button>Search</button>
            </form>
    
            <GifViewer gifs = {gifs} buttonAction={save} buttonText='save' />        
        </div>
    
    )

}

export default GiphySearch;