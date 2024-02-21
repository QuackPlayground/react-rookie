

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
  return(
    <div>

      <button className="close">
        &times;
      </button>
      
      <div className="steps">

        <div className="numbers">
          <div className="active">1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <p className="message">
          Step: halo this is step 
        </p>

        <div className="buttons">
          <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
            Previous 
          </button>
          <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
            Next
          </button>
        </div>

      </div>


    </div>
  )
}