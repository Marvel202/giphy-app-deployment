

function GifViewer({gifs, buttonAction, buttonText}){
console.log(buttonAction)
return (

    <div id="gifs-container">
    {gifs.map((gif, key) => {
        return (
            <div key={key} className="img-container" >
            <img src={gif.images.original.url}/>
            <button onClick={()=> buttonAction(buttonText === 'save' ? gif : key)}>{buttonText}</button>
        </div>    
        ) 
    })}
    </div>
)

}

export default GifViewer;