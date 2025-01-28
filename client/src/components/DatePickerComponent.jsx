import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { changeDeadline } from "../redux/actions/reduxActions";

export default function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const taskId = "67973a83c5276592ce4714fa";
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(changeDeadline({ taskId, deadline: selectedDate }));
      }}
    >
      <DatePicker
        dateFormat="yyyy-MM-dd"
        placeholderText="Sélectionner une deadline"
        selected={selectedDate}
        onChange={(data) => {
          setSelectedDate(data);
        }}
      />
      <button className="btn btn-primary" type="submit">
        Set
      </button>
    </form>
  );
}
