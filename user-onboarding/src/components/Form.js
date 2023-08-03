import React from "react";
 





const Form = (props) => {
    const {change, submit,errors} = props
    const {username, email, password, tos} = props.values;
 
const onChange = (event) => {
   const { name, value, checked ,type } = event.target;
   const newValue = type === 'checkbox' ? checked : value;
   change(name,newValue);
}

const onSubmit = (event)=> {
     event.preventDefault();
    submit()
}



    return(
<div>
        <h1> My First Form </h1>
        <div style={{color: 'red'}}>
            <div>{errors.username}</div> <div>{errors.email}</div>  <div>{errors.password}</div> <div>{errors.tos}</div>
            </div>
        <form onSubmit={onSubmit}>
            <label>
                Name: &nbsp;
                <input 
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                />
            </label>
            <label>
                Email: &nbsp;
                <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                />
            </label>
            <label>
                Password: &nbsp;
                <input
                 type="password"
                 name="password"
                 value={password}
                 onChange={onChange}
                />
            </label>
            <label>
                Terms of Services: &nbsp;
                <input
                type="checkbox"
                name="tos"
                checked={tos}
                onChange={onChange}
                />

            </label>
            <input type="submit" value={ "Create a friend!"} />
        </form>
       
       
 </div>
   
    
    )
}

export default Form;