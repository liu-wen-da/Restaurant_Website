import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Menu from './components/Menu';
import Information from './components/Information';
import Location from './components/Location';

const App = () =>{

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"> 
        <Header />
        <Information />
        <Menu />
        <Location />


      </div>

      <ButtonGradient />

      
    </>

  );
};

export default App
