import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css"

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.dataBase.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
      
    </Card>
  );
};

export default Expenses;
