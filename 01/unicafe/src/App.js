import { useState } from "react";
const Header = (props) => <h1>{props.header}</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatLine = ({ option, total }) => (
  <tr>
    <td>{option}</td>
    <td>{total}</td>
  </tr>
);

const Statistics = ({ totalGood, totalNeutral, totalBad }) => {
  const totalAll = totalGood + totalNeutral + totalBad;

  if (totalAll)
    return (
      <div>
        <Header header="statistics" />
        <table>
          <StatLine option="good" total={totalGood} />
          <StatLine option="neutral" total={totalNeutral} />
          <StatLine option="bad" total={totalBad} />
          <StatLine option="all" total={totalAll} />
          <StatLine
            option="average"
            total={(totalGood + totalNeutral + totalBad) / 3}
          />
          <StatLine option="positive" total={totalGood / totalAll} />
        </table>
      </div>
    );
  return <div>No feedback given</div>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="good" />
      <Statistics totalGood={good} totalNeutral={neutral} totalBad={bad} />
    </div>
  );
};

export default App;
