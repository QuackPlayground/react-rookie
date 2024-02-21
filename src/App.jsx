/* eslint-disable react/prop-types */
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑"
]

export default function App() {
  return(
    <div>
      <Steps />
    </div>
  )
}


function Steps() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if(step > 1) setStep((curStep) => curStep - 1)
  }

  function handleNext() {
    if(step < 3) {
      setStep((curStep) => curStep + 1)
    }
  }

  return(
    <div>

      <button className="close" onClick={() => setIsOpen(isOpen => !isOpen)}>
        &times;
      </button>
      
      {
        isOpen && (
          <div className="steps">

            <div className="numbers">
              <div className={step >= 1 ? 'active': ''}>1</div>
              <div className={step >= 2 ? 'active': ''}>2</div>
              <div className={step >= 3 ? 'active': ''}>3</div>
            </div>

            <StepMessage step={step}>

              <div className="buttons" style={{ marginTop: '20px' }}>
                <Button bgColor='#e7e7e7' textColor='#333' onClick={() => alert(`Learn How to ${messages[step - 1]}`)}>
                  Learn How
                </Button>
              </div>

            </StepMessage>

            <div className="buttons">
              <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
                Previous
              </Button>
              <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
                Next
              </Button>
            </div>

          </div>
        )
      }


    </div>
  )
}


function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  )
}


function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}