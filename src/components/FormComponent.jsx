import { useFormHook } from "../hooks/useFormHook";

export const FormComponent = () => {  
    const initialForm = {
        username: '', 
        email: '', 
        password: ''
    }
    
    const {formState, username, email, password, onInputChange } = useFormHook(initialForm)

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
    }
    
    return (
    <>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    className="form-control" 
                    name="username" 
                    placeholder="Enter Username"
                    value={username}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                    type="email"
                    className="form-control" 
                    name="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    className="form-control" 
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button 
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    </>
  )
}
