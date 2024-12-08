import Header from "./_components/Hearder";

function Provider  ({children})  {
    return(
        <div>
            <Header/>
            <div>
            {children}
            </div>
        </div>
    )

}
export default Provider;