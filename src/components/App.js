import LoggedIn from "./LoggedIn";
import Htwo from "./Htwo";

let userLoggedIn = false;
let userIsRegistered = false; 
let currentTime = new Date().getHours()

console.log(currentTime)
function App() {
  return (
    <div className="vh-100 bg-secondary">
    {currentTime > 18 || currentTime < 8 ?
      <div className="card d-flex p-4 justify-content-center position-absolute top-50 start-50 translate-middle border border-1 bg-success">
        <Htwo
          inner="Desligue seu PC e vá ler um livro!"
        />
      </div>:
      <LoggedIn 
        logged={userLoggedIn}
        registered={userIsRegistered}
      />

    }
    </div>

  );
}

export default App;

// Componentize os testes do formulário Form.jsx
// Mude o "Pode entrar" pra um componente variável também