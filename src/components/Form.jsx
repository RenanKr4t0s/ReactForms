import Input from "./Input"
import Htwo from "./Htwo"

export default function Form(props){
     return(
        <form className="card d-flex p-4 justify-content-center position-absolute top-50 start-50 translate-middle border border-1 bg-success">
            <Htwo
                inner={!props.test ? "Usuário não cadastrado" : "Bem vindo!" }
            />
            {!props.test && <Htwo inner= "Preencha seus dados" />}

            <Input
                id="username"
                type="text"
                placeholder="Nome de usuário"
                key="username"
            />
            <Input
             id="password"
             type="password"
             placeholder="Senha"
             key="senha"
            />

            { !props.test && 
                <Input
                    id="confPassword"
                    type="password"
                    placeholder="Confirme sua Senha"
                    key="checkSenha"
                />
            }            
            <button type="submit" className="btn btn-dark">
                {!props.test? "Registre-se" : "Login"}
            </button>
      </form>
    )
}