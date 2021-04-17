import React, {createContext} from 'react';
import axios from "axios";

export const ProfileContext = createContext();


class ProfileContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: [],
        };
    }

    //create
    //read

    checkLogin(email, pass) {
        axios.get('api/email/' + email + '/password/' + pass)
            .then(response => {
                console.log(response.data)
                if (!response.data.error) {
                    this.setState({
                        profile: response.data,
                    });
                    window.location = '/index';
                } else {
                    console.log(response.data.raison);
                }

            })
    }

    AddLogin(email, username, pass) {
        axios.get('api/addemail/' + email + '/addusername/' + username + '/addpassword/' + pass)
            .then(response => {
                console.log(email)
                console.log(pass)
                if (!response.data.error) {
                    this.setState({
                        profile: response.data,
                    });

                    window.location = '/index';
                } else {
                    console.log(response.data.raison);
                }

            }).catch(error => {
            console.error(error);
        })
    }

    //update

    updateListe(idNav) {
        axios.get('/api/profile/' + idNav)
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
                checkLogin: this.checkLogin.bind(this),
                updateListe: this.updateListe.bind(this),
                AddLogin: this.AddLogin.bind(this),
                //deleteListe: this.deleteListe.bind(this),
            }}>
                {this.props.children}
            </ProfileContext.Provider>
        );
    }
}


export default ProfileContextProvider;
