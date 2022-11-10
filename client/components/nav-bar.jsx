import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(props) {
  return (
    <section className="mb-3">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                className="navbar-toggler second-button"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarToggleExternalContent10"
                aria-controls="navbarToggleExternalContent10"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <div className="animated-icon2">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <h3 className='text-white text-center'>The Check-in</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='timer bg-light rounded-circle d-inline p-2'>0</div>
            </div>
          </div>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent10">
        <div className="bg-light shadow-3 p-4">
          <button className="btn btn-link btn-block border-bottom m-0">
            Link 1
          </button>
          <button className="btn btn-link btn-block border-bottom m-0">
            Link 2
          </button>
          <button className="btn btn-link btn-block m-0">Link 3</button>
        </div>
      </div>
    </section>
  );
}
