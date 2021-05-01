import React, {createContext} from 'react';
import axios from "axios";

export const AppContext = createContext();


class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            app: [],
            app_account: [],
        };
        this.readAppListe()
        this.readAppAccountListe()
    }

    //read
    readAppListe() {
        axios.get('/api/list/read/app')
            .then(response => {
                let read = response.data
                if (read.length > 1) {
                    read.sort((a, b) => a.idApp > b.idApp ? 1 : -1);
                }
                this.setState({
                    app: read,
                });
            }).catch(error => {
            console.log(error);
        });


    }
    readAppAccountListe() {
        axios.get('/api/list/read/')
            .then(response => {
                let read = response.data
                if (read.length > 1) {
                    read.sort((a, b) => a.idApp > b.idApp ? 1 : -1);
                }
                this.setState({
                    app_account: read,
                });
            }).catch(error => {
            console.log(error);
        });


    }

    //create
    createListe(compte) {
        axios.post('/api/list/account', compte)
            .then(response => {
                let data = [...this.state.app_account];
                data.push(response.data[0]);
                data.sort((a, b) => a.idApp > b.idApp ? 1 : -1);
                this.setState({
                    app_account: data,
                })
                this.readAppListe();
            }).catch(error => {
            console.log(error);
        })


    }

    createListeJeux(compte) {
        console.log(compte)
        axios.post('/api/list/app', compte)
            .then(response => {
                let data2 = [...this.state.app_account];
                data2.push(response.data[0]);
                data2.sort((a, b) => a.idApp > b.idApp ? 1 : -1);
                console.log(data2);
                this.setState({
                    app_account: data2,
                })
                this.readAppListe();
            }).catch(error => {
            console.log(error);
        })


    }
    //update
    updateListe() {
        console.log(this.state)
    }

    //delete
    deleteListe(idDel) {
        console.log(idDel)
        axios.get('/api/list/remove/' + idDel)
            .then(response => {
                let data = [...this.state.app_account];
                let datas = data.find(datas => {
                    return datas.id === idDel;
                });
                data.splice(data.indexOf(datas), 1);
                if (data.length > 1) {
                    data.sort((a, b) => a.idApp > b.idApp ? 1 : -1);
                }
                this.setState({
                    app_account: data,
                });
                this.readAppListe();
            }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                createListe: this.createListe.bind(this),
                createListeJeux: this.createListeJeux.bind(this),
                readAppListe: this.readAppListe.bind(this),
                readAppAccountListe: this.readAppAccountListe.bind(this),
                updateListe: this.updateListe.bind(this),
                deleteListe: this.deleteListe.bind(this),


            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}


export default AppContextProvider;
