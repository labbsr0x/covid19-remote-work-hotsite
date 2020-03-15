import React from 'react';
import logo from './logo.png'

function App() {
  return (
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
          <div class="pexels-credit">
            Photo by Huseyn Kamaladdin from Pexels
          </div>
        </div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto mb-5">
                  <img src={logo} alt="Logo BB" style={{ width: "70px" }} />
                </div>
              </div>
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Solicite seu kit de trabalho remoto</h3>
                  <form>
                    <div class="form-label-group">
                      <input type="chave" id="inputChave" class="form-control" placeholder="Chave Funcional (FXXXXXXX)" required autoFocus />
                      <label for="inputChave">Chave Funcional (FXXXXXXX)</label>
                    </div>

                    <div class="form-label-group">
                      <input type="password" id="inputSenha" class="form-control" placeholder="Senha" required />
                      <label for="inputSenha">Senha de portais externos (não é a senha SISBB)</label>
                    </div>

                    <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Solicitar</button>
                    <div class="text-center">
                      <a class="small" href="#">Não tem ou não lembra a senha de portais externos?</a></div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto mt-5">
                  <hr />
                  <ul>
                    <li><a href="#">O que é e como funciona o kit?</a></li>
                    <li><a href="#">Por que trabalhar de casa nesse momento?</a></li>
                    <li><a href="#">Sobre COVID-19</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
