import React, { useState, ChangeEvent, FormEvent } from "react";

interface Answers {
  dandruff: string;
  dandruffType: string[];
  scalpItching: string;
  hairGreying: string;
  hairTreatment: string[];
}

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Answers>({
    dandruff: "",
    dandruffType: [], 
    scalpItching: "",
    hairGreying: "",
    hairTreatment: [],
  });

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    if (name === 'dandruffType' || name === 'hairTreatment') {
      if (checked) {
        // Add the selection to the array
        setAnswers(prevAnswers => ({
          ...prevAnswers,
          [name]: [...prevAnswers[name as keyof Answers], value],
        }));
      } else {
        // Remove the selection from the array
        setAnswers(prevAnswers => ({
          ...prevAnswers,
          [name]: (prevAnswers[name as keyof Answers] as string[]).filter(item => item !== value),
        }));
      }
    } else {
      setAnswers({
        ...answers,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(answers);
    // Here we would typically send the answers to your ML model for analysis
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Scalp and Hair Health Quiz</h2>

      <div>
        <p>1. Do you have Dandruff?</p>
        <label><input type="checkbox" name="dandruff" value="No" onChange={handleOptionChange} /> No</label>
        <label><input type="checkbox" name="dandruff" value="Yes" onChange={handleOptionChange} /> Yes</label>
      </div>

      <div>
        <p>2. Which type of dandruff do you have?</p>
        <label><input type="checkbox" name="dandruffType" value="Powdery" onChange={handleOptionChange} /> Powdery</label>
        <label><input type="checkbox" name="dandruffType" value="Flaky" onChange={handleOptionChange} /> Flaky</label>
        <label><input type="checkbox" name="dandruffType" value="None" onChange={handleOptionChange} /> None</label>
      </div>

      <div>
        <p>3. Do you often notice itching on your scalp?</p>
        <label><input type="checkbox" name="scalpItching" value="Rarely or Never" onChange={handleOptionChange} /> Rarely or Never</label>
        <label><input type="checkbox" name="scalpItching" value="Frequently" onChange={handleOptionChange} /> Frequently</label>
      </div>

      <div>
        <p>4. Do you experience issues with hair greying?</p>
        <label><input type="checkbox" name="hairGreying" value="No" onChange={handleOptionChange} /> No</label>
        <label><input type="checkbox" name="hairGreying" value="Yes" onChange={handleOptionChange} /> Yes</label>
      </div>

      <div>
        <p>5. Have you used any hair colouring products or treatment?</p>
        <label><input type="checkbox" name="hairTreatment" value="Colour or Henna" onChange={handleOptionChange} /> Colour or Henna</label>
        <label><input type="checkbox" name="hairTreatment" value="Keratin" onChange={handleOptionChange} /> Keratin</label>
        <label><input type="checkbox" name="hairTreatment" value="None" onChange={handleOptionChange} /> None</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Quiz;
