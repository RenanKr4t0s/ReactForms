import LoggedIn from "./LoggedIn";

let userLoggedIn = false;
let userIsRegistered = false; 

function App() {
  return (
    <div className="vh-100 bg-secondary">
      <LoggedIn 
        logged={userLoggedIn}
        registered={userIsRegistered}
      />
    </div>

  );
}

export default App;

// Componentize os testes do formulário Form.jsx
// Mude o "Pode entrar" pra um componente variável também