export default function Input(props){
    return(
        <input  
            className= "form-control text-center mb-3"
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            >
         </input>
    )
}