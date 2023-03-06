import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const date = new Date(2021, 1, 1);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
