// import the various components
import './App.css';
import Main from './Components/HeaderComponent/Main'
import Description from './Components/IntroductionComponent/Description';
import Description2 from './Components/TechComponent/Description2';
import Description3 from './Components/SovtechComponent/Description3';
import Socials from './Components/FooterComponent/Socials';

//main parent component
function App() {
  return (
    <div className="App">
      <Main/>
      <Description/>
      <Description2/>
      <Description3/>
      <Socials/>
    </div>
  );
}

export default App;
