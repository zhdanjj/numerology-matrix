import { useState } from 'react';
import './App.css';
import DatepickerScreen from '../DatepickerScreen';
import MatrixScreen from '../MatrixScreen';

function App() {
  const [date, onDateSet] = useState<Date | null>(null)

  return (
    <div className="App">
      <h1 className="App__title">
        Квадрат Пифагора
      </h1>
      <main className="App__content">
        {
          (!date
          &&
            <DatepickerScreen onDateSet={onDateSet} />)
          ||
            <MatrixScreen
              date={date as Date}
              onResetDate={() => { onDateSet(null) }}
            />
        }
      </main>
      <footer className="App__footer">
        Styling by Zagorskaia Anastasiia
        <br />
        inst.: <a href="https://www.instagram.com/anastasia_2206/">@anastasia_2206</a>
      </footer>
    </div>
  );
}

export default App;
