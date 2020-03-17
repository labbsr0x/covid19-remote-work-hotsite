import React from 'react';
import logo from './logo.png'
import RequestForm from './routes/RequestForm';

function App() {
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
          <div className="pexels-credit">
            Photo by Huseyn Kamaladdin from Pexels
          </div>
        </div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto mb-5">
                  <img src={logo} alt="Logo BB" style={{ width: "70px" }} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <RequestForm />
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto mt-5">
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
