import Form from "./Form";

export default function LoggedIn(props){
    if (props.logged){
        return <h2 className="card d-flex p-4 justify-content-center position-absolute top-50 start-50 translate-middle border border-1 bg-success">Bem Vindo ao site</h2>
    }else{
        return <Form
            test={props.registered}/>
    }
}