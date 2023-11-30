import './App.css';
import './components/variables.css'

import Footer from './components/mainPage/Footer';
import Header from './components/mainPage/Header';
import WordList from './components/mainPage/WordList';
import WordCardConteiner from './components/wordCard/WordCardConteiner';

import { Words } from './components/Words.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {Words && Words.length > 0
      ?
      <main>
        <WordList></WordList>
        <WordCardConteiner></WordCardConteiner>
      </main>
      :<main className='errorWordlist'>
        <div>К сожалению, мы не смогли получить список слов</div>
        <div>Попробуйте обновить страницу</div>
        <div>Или напишите нам на почту:</div>
        <div>lalala@mail.ru</div>
      </main>
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
