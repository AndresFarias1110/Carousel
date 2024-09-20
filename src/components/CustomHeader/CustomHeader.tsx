import iconLeftCalendar from "../../assets/icons/icon_left_calendar.svg";
import iconRightCalendar from "../../assets/icons/icon_right_calendar.svg";
import { months } from "../../const";
import { customRange } from "../../utils";

export const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: any) => {
  const years = customRange(
    new Date().getFullYear() - 10,
    new Date().getFullYear() + 10,
  );
  return (
    <div className="custom-header mx-3 my-1 rounded-1 px-2 pt-1">
      <button
        type="button"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <img src={iconLeftCalendar} alt="icon_left_calendar" />
      </button>
      <select
        value={months[date.getMonth()]}
        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
        className="select-date text-primary"
      >
        {months.map((month) => (
          <option key={month} className="text-dark" value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        value={date.getFullYear()}
        onChange={({ target: { value } }) => changeYear(value)}
        className="select-date text-primary"
      >
        {years.map((year) => (
          <option key={year} className="text-dark" value={year}>
            {year}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <img src={iconRightCalendar} alt="icon_right_calendar" />
      </button>
    </div>
  );
};
