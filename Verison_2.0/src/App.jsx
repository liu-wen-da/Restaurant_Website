import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';
import Header from './components/Header';
import Menu from './components/Menu';
import Information from './components/Information';
const App = () =>{

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"> 
        <Header />
        <Information />
        <Menu />

      </div>

      <ButtonGradient />

      
    </>

  );
};

export default App
