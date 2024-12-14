export default function App() {
  return (
    <div className="main-container">
      <div>
        <ResultsTab />
        <BMIForm />
      </div>
      <BMIList />
    </div>
  );
}

function BMIForm() {
  return (
    <>
      <div className="bmi-form__container">
        <p className="bmi-form__header">Enter your data & see your BMI!</p>
        <form className="bmi-form">
          <input
            type="text"
            placeholder="Name (e.g., Peter)"
            className="bmi-form__element"
          />

          <input
            type="text"
            placeholder="Height (e.g., 1.75)"
            className="bmi-form__element"
          />

          <input
            type="text"
            placeholder="Weight (e.g., 75)"
            className="bmi-form__element"
          />

          <button type="submit" className="bmi-form__element">
            Calculate BMI
          </button>
        </form>
      </div>
      <button className="clear">Clear Fields</button>
    </>
  );
}

function ResultsTab() {
  return (
    <div className="results-tab">
      <p className="results-tab__header">Your BMI Results</p>
      <div className="results-tab__results">
        <p>
          Your BMI: <strong>28.3</strong>
        </p>
        <p>
          Your situation: <strong>Normal weight</strong>
        </p>
      </div>
    </div>
  );
}

function BMIList() {
  return (
    <div className="bmi-list__container">
      <p className="bmi-list__header">
        <strong>Recent calculated BMIs</strong>
      </p>
      <ul className="bmi-list">
        <li className="bmi-list__item">
          <p className="bmi-list__name">Amirabas</p>
          <br />
          <p className="bmi-list__data">
            BMI: <strong>27.55</strong>
          </p>
          <p className="bmi-list__data">
            Situation: <strong>Overweight</strong>
          </p>
        </li>
        <li className="bmi-list__item">
          <p className="bmi-list__name">Amirabas</p>
          <br />
          <p className="bmi-list__data">
            BMI: <strong>27.55</strong>
          </p>
          <p className="bmi-list__data">
            Situation: <strong>Overweight</strong>
          </p>
        </li>
        <li className="bmi-list__item">
          <p className="bmi-list__name">Amirabas</p>
          <br />
          <p className="bmi-list__data">
            BMI: <strong>27.55</strong>
          </p>
          <p className="bmi-list__data">
            Situation: <strong>Overweight</strong>
          </p>
        </li>
        <li className="bmi-list__item">
          <p className="bmi-list__name">Amirabas</p>
          <br />
          <p className="bmi-list__data">
            BMI: <strong>27.55</strong>
          </p>
          <p className="bmi-list__data">
            Situation: <strong>Overweight</strong>
          </p>
        </li>
        <li className="bmi-list__item">
          <p className="bmi-list__name">Amirabas</p>
          <br />
          <p className="bmi-list__data">
            BMI: <strong>27.55</strong>
          </p>
          <p className="bmi-list__data">
            Situation: <strong>Overweight</strong>
          </p>
        </li>
        <li className="bmi-list__item">
          <p className="bmi-list__name">Amirabas</p>
          <br />
          <p className="bmi-list__data">
            BMI: <strong>27.55</strong>
          </p>
          <p className="bmi-list__data">
            Situation: <strong>Overweight</strong>
          </p>
        </li>
        <li className="bmi-list__item">
          <p className="bmi-list__name">Amirabas</p>
          <br />
          <p className="bmi-list__data">
            BMI: <strong>27.55</strong>
          </p>
          <p className="bmi-list__data">
            Situation: <strong>Overweight</strong>
          </p>
        </li>
      </ul>
    </div>
  );
}
