import { useState } from 'react';
import DatePicker from 'react-date-picker';
import './DatepickerScreen.css';
import Button from '../Button';

interface DatepickerScreenProps {
  onDateSet: React.Dispatch<React.SetStateAction<Date | null>>,
}

function DatepickerScreen(props: DatepickerScreenProps) {
  const [value, onChange] = useState<Date | null>(null)

  return (
    <div className="DatepickerScreen">
      <div className="DatepickerScreen__inner">
        <div>
          <span className="DatepickerScreen__labelText">
            Введите дату рождения:
          </span>
          <DatePicker
            className="DatepickerScreen__datepicker"
            calendarClassName="DatepickerScreen__calendar"
            value={value}
            onChange={onChange}
            calendarIcon={null}
          />
        </div>
        {
          !!value
          &&
            <Button
              className="DatepickerScreen__btnCalc"
              onClick={() => { props.onDateSet(value) }}
            >
              рассчитать
            </Button>
        }
      </div>
    </div>
  );
}

export default DatepickerScreen;
