import 'bootstrap/dist/css/bootstrap.min.css';
import ImageInScr from "./ImageInScr.png"
import "./App.css"

function App() {
  return (
    <div className="App">
      
<div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red" class="rounded mx-auto d-block">Learn javascript with Codemycode</h1>
    <br />
           <img width={200}  src={ImageInScr}   class="rounded mx-auto d-block"  alt ='imageInScr' />
          <br />
          <br />
          <img  width={200} src="ImageInPublic.png" class="rounded mx-auto d-block" alt="myimageInPublic" />
      
        </div>
        

        <br />
          <br />
       <iframe width={560} height={315} class="rounded mx-auto d-block" src="https://www.youtube.com/embed/XewKPAClkSw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

 
</div>



    </div>
  );
}

export default App;
