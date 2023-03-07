import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e2",
      title: "Car Insurance 2",
      amount: 300.03,
    },
    {
      id: "e3",
      title: "Car Insurance 3",
      amount: 558.78,
    },
    {
      id: "e4",
      title: "Car Insurance 4",
      amount: 156.7,
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses dataBase={expenses}></Expenses>
    </div>
  );
}

export default App;
