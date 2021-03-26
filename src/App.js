import 'bootstrap/dist/css/bootstrap.min.css';
import ImageInScr from "./ImageInScr.png"


function App() {
  return (
    <div className="App">
      
<div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">WELCOME</h1>
    <br />
           <img width={200}  src={ImageInScr}   class="rounded float-start" alt ='imageInScr' />
          <br />
          <img  width={200} src="ImageInPublic.png" class="rounded float-end" alt="myimageInPublic" />
          

  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>



    </div>
  );
}

export default App;
