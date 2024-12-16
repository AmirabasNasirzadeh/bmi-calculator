import { useState } from "react";

export default function App() {
  const [bmis, setBmis] = useState([]);
  const [currBmi, setCurrBmi] = useState(null);

  function handleClear() {
    setBmis([]);
    setCurrBmi(null);
  }

  return (
    <div className="main-container">
      <div>
        <ResultsTab currBmi={currBmi} />
        <BMIForm
          bmis={bmis}
          onSetBmis={setBmis}
          setCurrBmi={setCurrBmi}
          handleClear={handleClear}
        />
      </div>
      <BMIList bmiList={bmis} />
    </div>
  );
}

function BMIForm({ bmis, onSetBmis, setCurrBmi, handleClear }) {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function handleSetName(name) {
    setName(name);
  }

  function handleSetHeight(height) {
    setHeight(height);
  }

  function handleSetWeight(weight) {
    setWeight(weight);
  }

  function calculateBMI(height, weight) {
    return (weight / ((height / 100) * (height / 100))).toFixed(2);
  }

  function setSituation(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const bmi = calculateBMI(height, weight);
    const situation = setSituation(bmi);
    const currentBmi = { name, bmi, situation };

    setCurrBmi(currentBmi);

    onSetBmis([...bmis, currentBmi]);
    setName("");
    setHeight("");
    setWeight("");
  }

  return (
    <>
      <div className="bmi-form__container">
        <p className="bmi-form__header">Enter your data & see your BMI!</p>
        <form className="bmi-form" onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Name (e.g., Peter)"
            className="bmi-form__element"
            value={name}
            onChange={(e) => handleSetName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Height (e.g., 175)"
            className="bmi-form__element"
            value={height}
            onChange={(e) => handleSetHeight(+e.target.value)}
          />

          <input
            type="text"
            placeholder="Weight (e.g., 80)"
            className="bmi-form__element"
            value={weight}
            onChange={(e) =>
              handleSetWeight(
                +e.target.value < 1
                  ? 1
                  : +e.target.value > 200
                  ? weight
                  : +e.target.value
              )
            }
          />

          <button type="submit" className="bmi-form__element">
            Calculate BMI
          </button>
        </form>
      </div>
      <button className="clear" onClick={handleClear}>
        Clear Recent BMIs
      </button>
    </>
  );
}

function ResultsTab({ currBmi }) {
  return (
    <div className="results-tab">
      <p className="results-tab__header">Your BMI Results</p>
      <div className="results-tab__results">
        <p>
          Your BMI: <strong>{currBmi?.bmi ? currBmi.bmi : "???"}</strong>
        </p>
        <p>
          Your situation:{" "}
          <strong>{currBmi?.situation ? currBmi.situation : "???"}</strong>
        </p>
      </div>
    </div>
  );
}

function BMIList({ bmiList }) {
  return (
    <div className="bmi-list__container">
      <p className="bmi-list__header">
        <strong>Recent calculated BMIs</strong>
      </p>
      <ul className="bmi-list">
        {bmiList &&
          bmiList.map((bmi, i) => (
            <li className="bmi-list__item" key={i}>
              <p className="bmi-list__name">{bmi.name}</p>
              <br />
              <p className="bmi-list__data">
                BMI: <strong>{bmi.bmi}</strong>
              </p>
              <p className="bmi-list__data">
                Situation: <strong>{bmi.situation}</strong>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
