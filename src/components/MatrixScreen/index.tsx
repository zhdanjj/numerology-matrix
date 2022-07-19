import './MatrixScreen.css';
import Button from '../Button';

type Matrix = {
  [key: string]: string,
}

function getDateString(date: Date) {
  const d = date.getDate().toString().padStart(2, '0')
  const m = (date.getMonth() + 1).toString().padStart(2, '0')
  const y = date.getFullYear().toString()
  return `${d}.${m}.${y}`
}

function getDigitsSum(num: number) {
  const str = num.toString()
  return str.split('').reduce((acc, v) => parseInt(v, 10) + acc, 0)
}

function getSectorDigits(digits: string, sector: string): string {
  let out = ''
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === sector) out += sector
  }
  return out
}

function getLineCount(m: Matrix, indicies: number[]) {
  let count = 0
  for (let idx of indicies) {
    count += m[idx].length
  }
  return count ? String(count) : '—'
}

function MatrixScreen(props: { date: Date, onResetDate: () => void }) {
  const dateString = getDateString(props.date)
  const dateDigits: number[] = dateString.split('').filter(v => parseInt(v, 10) > 0).map(v => parseInt(v, 10))

  const extraFirst = dateDigits.reduce((acc, v) => acc + v, 0)
  const extraSecond = getDigitsSum(extraFirst)
  const extraThird = extraFirst - (dateDigits[0] * 2)
  const extraFourth = getDigitsSum(extraThird)

  const destiny = getDigitsSum(extraSecond)

  const digits = [...dateDigits, extraFirst, extraSecond, extraThird, extraFourth].join('')

  const m: Matrix = {}

  for (let i = 1; i <= 9; i++) {
    m[i] = getSectorDigits(digits, String(i))
  }

  const mi = (i: number) => m[i] || '—'

  return (
    <div className="MatrixScreen">
      <div className="MatrixScreen__inner">
        <div className="MatrixScreen__tableWrap">
          <table className="MatrixScreen__table">
            <tbody>
              <tr>
                <td colSpan={3} className="MatrixScreen__highlightedCell MatrixScreen__mainCell" align="left">
                  <span className="MatrixScreen__boldLabel">
                    Дата рождения: {dateString}
                    <br />
                    Доп. числа: {extraFirst}, {extraSecond}, {extraThird}, {extraFourth}
                    <br />
                    Число судьбы: {destiny}
                  </span>
                </td>
                <td className="MatrixScreen__highlightedCell">
                  <span className="MatrixScreen__boldLabel">Темперамент</span>
                  <br />
                  {getLineCount(m, [7, 5, 3])}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="MatrixScreen__boldLabel">Характер</span>
                  <br />
                  {mi(1)}
                </td>
                <td>
                  <span className="MatrixScreen__boldLabel">Здоровье</span>
                  <br />
                  {mi(4)}
                </td>
                <td>
                  <span className="MatrixScreen__boldLabel">Удача</span>
                  <br />
                  {mi(7)}
                </td>
                <td className="MatrixScreen__highlightedCell">
                  <span className="MatrixScreen__boldLabel">Цель</span>
                  <br />
                  {getLineCount(m, [1, 4, 7])}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="MatrixScreen__boldLabel">Энергия</span>
                  <br />
                  {mi(2)}
                </td>
                <td>
                  <span className="MatrixScreen__boldLabel">Логика</span>
                  <br />
                  {mi(5)}
                </td>
                <td>
                  <span className="MatrixScreen__boldLabel">Долг</span>
                  <br />
                  {mi(8)}
                </td>
                <td className="MatrixScreen__highlightedCell">
                  <span className="MatrixScreen__boldLabel">Семья</span>
                  <br />
                  {getLineCount(m, [2, 5, 8])}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="MatrixScreen__boldLabel">Интерес</span>
                  <br />
                  {mi(3)}
                </td>
                <td>
                  <span className="MatrixScreen__boldLabel">Труд</span>
                  <br />
                  {mi(6)}
                </td>
                <td>
                  <span className="MatrixScreen__boldLabel">Память</span>
                  <br />
                  {mi(9)}
                </td>
                <td className="MatrixScreen__highlightedCell">
                  <span className="MatrixScreen__boldLabel">Привычки</span>
                  <br />
                  {getLineCount(m, [3, 6, 9])}
                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td className="MatrixScreen__highlightedCell">
                  <span className="MatrixScreen__boldLabel">Быт</span>
                  <br />
                  {getLineCount(m, [4, 5, 6])}
                </td>
                <td>
                  Талант*
                  <br />
                  {getLineCount(m, [7, 8, 9])}
                </td>
                <td>
                  Духовность*
                  <br />
                  {getLineCount(m, [1, 5, 9])}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button onClick={props.onResetDate} className="MatrixScreen__btnBack">
          Выбрать другую дату
        </Button>
      </div>
    </div>
  );
}

export default MatrixScreen;