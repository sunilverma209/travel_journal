import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Data from './API/Data';
import './App.css';

function App() {

  //console.log(Data);

  /* Map Syntax 

  arr.map(function(element, index, array){  }, this);

  let arr = [3, 4, 5, 6];

  let modifiedArr = arr.map(function(element , index , array){
      return element *3;
  });


  Eg: 
    const getAirBnbData = Data.map(
    (airbnbData) => {
        return <AirbnbCard 
                  key = {airbnbData.id}
                  item = {airbnbData}
                />
    }
  );

   End of Map Syntax */

  const getJournerListing = Data.map(
    (getJournerlData) => {
      return <Cards 
                key={getJournerlData.id}
                item={getJournerlData} 
              />
    }
  )




  return (
    <div className="App">
        <Header />
        <div className='App__container'>
            <Navbar />
            <div className="Journel_Lisiting">
              {getJournerListing}
            </div>
        </div>
    </div>
  );
}

export default App;
