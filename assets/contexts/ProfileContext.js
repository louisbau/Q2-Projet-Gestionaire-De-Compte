import React, {createContext} from 'react';
import axios from "axios";

export const ProfileContext = createContext();


class ProfileContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: [],
        };
        this.updateLogin()
    }

    //create
    //read

    AddLogin(email, pass) {
        axios.get('/api/profile/email=' + email + '&password=' + pass)
            .then(response => {
                console.log(email)
                console.log(pass)
                if (!response.data.error) {
                    this.setState({
                        profile: response.data,
                    });

                    window.location = '/';
                } else {
                    console.log(response.data.raison);
                }

            }).catch(error => {
            console.error(error);
        })
    }

    //update

    updateLogin() {
        axios.get('/api/profile')
            .then(response => {
                let read = response.data

                this.setState({
                    profile: read,
                });

            }).catch(error => {
            console.error(error);
        });
    }

    //delete
    deleteListe() {

    }

    render() {
        return (
            <ProfileContext.Provider value={{
                ...this.state,
                updateListe: this.updateLogin.bind(this),
                AddLogin: this.AddLogin.bind(this),
                //deleteListe: this.deleteListe.bind(this),
            }}>
                {this.props.children}
            </ProfileContext.Provider>
        );
    }
}


export default ProfileContextProvider;
