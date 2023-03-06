import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.dataBase.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
      
    </div>
  );
};

export default Expenses;
