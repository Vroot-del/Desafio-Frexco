import React from "react";

import "./style.css";
import "./script"

const HomePage = () => {
    
    return(

        <div id="estoque">
        <div class="card mb-3 w-auto shadow p-3 mb-5 bg-white rounded">
            <div class="card-body">
                <form className="form">
                    <div className="field">
                        <label htmlFor="Produto">Produto</label>
                        <input type="text" name="produto" id="produto"/>
                    </div>
                    <div className="field">
                        <label htmlFor="ID">ID</label>
                        <input type="text" name="ID" id="ID" />
                    </div>
                    <div className="field">
                        <label htmlFor="Quantidade">Quantidade</label>
                        <input type="text" name="quantidade" id="quantidade" />
                    </div>
                    <div className="actions">
                        <button type="submit" onclick="validarProduto('produto','ID','quantidade')" class="btn btn-success w-100 px-2">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}

export default HomePage;