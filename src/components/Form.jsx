import Input from "./Input"

function testForTitle(test){
   if (!test){
     return <h2 className="text-bg-success text-center mb-3">Usuário não cadastrado</h2>
   }else{
     return <></>
   }
}

function testForPassword(test){
    if (!test){
        return<Input
            id="confPassword"
            type="password"
            placeholder="Confirme sua Senha"
            key="checkSenha"
       />
    }else{
        return <></>
    }
}

function testForSubmit (test){
    if (!test){
        return "Registre-se"
    }else{
        return "Login"
    }
}


export default function Form(props){
     return(
        <form className="card d-flex p-4 justify-content-center position-absolute top-50 start-50 translate-middle border border-1 bg-success">
            <h2 className="text-bg-success text-center mb-2">
                Pode entrar!
            </h2>
            {testForTitle(props.test)}
            <Input
                id="username"
                type="password"
                placeholder="Nome de usuário"
                key="username"
            />
            <Input
             id="password"
             type="password"
             placeholder="Senha"
             key="senha"
            />
            {testForPassword(props.test)}
            <button type="submit" className="btn btn-dark">{testForSubmit(props.test)}</button>
      </form>
    )
}