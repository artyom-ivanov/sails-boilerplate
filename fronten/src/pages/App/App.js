import React from 'react';

import './App.scss';
import { firebaseApp } from '../../config/firebase';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // TODO: Send create user request to API
  }

  onLogout() {
    firebaseApp.auth().signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened
        console.error("Error from firebase logout", error);
      });
  }

  render() {
    const { user } = this.props;

    return (
      <div className="layout-column">
        <div id="main" className="layout-row flex">
          <div id="content" className="flex">
            <div className="page-container" id="page-container">
              <div className="padding">
                <div className="card">
                  <div className="card-header bg-dark bg-img p-0 no-border">
                    <div className="bg-dark-overlay r-2x no-r-b">
                      <div className="d-md-flex">
                        <div className="p-4">
                          <div className="d-flex">
                            <a href="#">
                              <span className="avatar w-64">
                                <img src={user.photoURL} alt="Avatar" />
                              </span>
                            </a>
                            <div className="mx-3">
                              <h5 className="mt-2">{user.displayName}</h5>
                              <div className="text-muted">
                                <span className="m-r">{user.email}</span>
                              </div>
                            </div>
                          </div>
                        </div> <span className="flex" />
                        <div className="align-items-center d-flex p-4">
                          <div className="toolbar">
                            <button onClick={() => this.onLogout()} className="btn btn-sm bg-dark-overlay btn-rounded text-white">
                              <span className="d-inline">Logout</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
