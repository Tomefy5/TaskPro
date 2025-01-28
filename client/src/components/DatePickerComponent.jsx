import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComponent() {
  return (
    <form>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        placeholderText="Sélectionner une deadline"
      />
    </form>
  );
}
