import React, {createContext} from 'react';
import axios from "axios";

export const ListeCompteContext = createContext();


class ListeCompteContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listeCompte: [],
        };
        this.readListe();
        //this.updateListe();
    }
    //create
    //read

    readListe() {

        axios.get('/api/recept/liste/1/1')
            .then(response => {

                /*
                const dict = {}
                for (let a=0; a<response.data.length; a++) {
                    dict[] = [];
                }

                for (let a=0; a<response.data.length; a++) {
                    dict[response.data[a].name_game].push({'username_account': response.data[a].username_account, 'password_account': response.data[a].password_account, 'description': response.data[a].description});
                }

                 */
                this.setState({
                    listeCompte: response.data,
                });
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
            <ListeCompteContext.Provider value={{
                ...this.state,
                readListe: this.readListe.bind(this),
                updateListe: this.updateListe.bind(this),
                //deleteListe: this.deleteListe.bind(this),


            }}>
                {this.props.children}
            </ListeCompteContext.Provider>
        );
    }
}



export default ListeCompteContextProvider;