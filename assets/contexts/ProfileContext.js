import React, {createContext} from 'react';
import axios from "axios";

export const ProfileContext = createContext();


class ProfileContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: [],
        };
        this.updateListe();
        this.readListe();
    }
    //create
    //read

    readListe() {
        axios.get('/api/profile/1')
            .then(response => {
                this.setState({
                    profile: response.data,
                });
                console.log(this.state)

            }).catch(error => {
            console.error(error);
        })


    }
    //update
    updateListe() {
        console.log(this.state)
    }
    //delete
    deleteListe() {

    }

    render() {
        return (
            <ProfileContext.Provider value={{
                ...this.state,
                readListe: this.readListe.bind(this),
                updateListe: this.updateListe.bind(this),
                //deleteListe: this.deleteListe.bind(this),


            }}>
                {this.props.children}
            </ProfileContext.Provider>
        );
    }
}



export default ProfileContextProvider;
