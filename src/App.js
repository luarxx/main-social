import './App.css';
import { CardHeader } from './components/cardheader/cardheader';
import { CardsLink } from './components/cardslink/cardslink';
import { CardTitle } from './components/cardtitle/cardtitle';
import { MainCard } from './components/maincard/maincard';

function App() {
  return (
      <MainCard>
        <CardHeader/>
        <CardTitle/>
        <CardsLink/>
      </MainCard>
  );
}

export default App;
