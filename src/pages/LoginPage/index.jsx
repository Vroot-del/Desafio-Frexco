import React from "react";

import "./style.css";

const LoginPage = () => {
    
    return (

    <div id="login">
        <div class="card mb-3 w-auto h-75 shadow p-3 mb-5 bg-white rounded">
            <div class="card-body">
                <h2 class="card-title text-muted">Faça seu login</h2>
                <form className="form">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password"/>
                    </div>
                    <div className="actions">
                        <button type="submit" class="btn btn-success w-100 px-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    );
}

export default LoginPage;