import React, {createContext} from 'react';
import axios from "axios";

export const ListeContext = createContext();


class ListeContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listeJeux: [],
        };
        this.readListe();
    }
    //create
    createListe(event, todo) {
        event.preventDefault();
        let data = [...this.state.listeJeux];
        data.push(todo)
        this.setState({
            listeJeux : data,
        });
    }
    //read

    readListe() {

        axios.get('/api/recept/liste/1')
            .then(response => {
                const dict = {}
                for (let a=0; a<response.data.length; a++) {
                    dict[response.data[a].name_game] = [];
                    console.log(response.data[a].username_account);
                }
                for (let a=0; a<response.data.length; a++) {
                    dict[response.data[a].name_game].push({'username_account': response.data[a].username_account, 'password_account': response.data[a].password_account, 'description': response.data[a].description});
                }
                console.log(dict);
                this.setState({
                    listeJeux: dict,
                });
                console.log(this.state.listeJeux)
            }).catch(error => {
                console.error(error);
        })



    }
    //update
    updateListe() {

    }
    //delete
    deleteListe() {

    }

    render() {
        return (
            <ListeContext.Provider value={{
                ...this.state,
                createListe: this.createListe.bind(this),
                readListe: this.readListe.bind(this),
                //updateListe: this.updateListe.bind(this),
                //deleteListe: this.deleteListe.bind(this),


            }}>
                {this.props.children}
            </ListeContext.Provider>
        );
    }
}



export default ListeContextProvider;
