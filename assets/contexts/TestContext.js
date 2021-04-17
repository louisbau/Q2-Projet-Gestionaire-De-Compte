import React, {createContext} from 'react';
import axios from "axios";

export const TestContext = createContext();


class TestContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: [],
        };
        this.readListe()
    }

    //create
    createListe(compte) {
        let idclientNav = localStorage.getItem('profile')
        if (idclientNav !== undefined) {
            console.log(compte)

            axios.post('/api/test/createCompte', compte)
                .then(response => {

                    let data = [...this.state.test];
                    data.push(response.data[0]);
                    data.sort((a, b) => a.idGame > b.idGame ? 1 : -1);
                    this.setState({
                        test: data,
                    })
                }).catch(error => {
                console.log(error);
            })
        }


    }

    createListeJeux(compte) {
        let idclientNav = localStorage.getItem('profile')
        if (idclientNav !== undefined) {
            console.log(compte)
            axios.post('/api/test/createJeux', compte)
                .then(response => {
                    let data2 = [...this.state.test];
                    data2.push(response.data[0]);
                    data2.sort((a, b) => a.idGame > b.idGame ? 1 : -1);
                    console.log(data2);
                    this.setState({
                        test: data2,
                    })
                    console.log(this.state);
                }).catch(error => {
                console.log(error);
            })
        }

    }


    //read
    readListe() {
        let idclientNav = localStorage.getItem('profile')
        if (idclientNav !== undefined) {
            axios.get('/api/test/read/' + idclientNav)
                .then(response => {
                    let read = response.data
                    if (read.length > 1) {
                        read.sort((a, b) => a.idGame > b.idGame ? 1 : -1);
                    }
                    this.setState({
                        test: read,
                    });


                }).catch(error => {
                console.log(error);
            });
        }

    }

    //update
    updateListe() {
        console.log(this.state)
    }

    //delete
    deleteListe(idDel) {
        console.log(idDel)
        axios.get('/api/del/' + idDel)
            .then(response => {
                let data = [...this.state.test];
                let datas = data.find(datas => {
                    return datas.id === idDel;
                });
                data.splice(data.indexOf(datas), 1);
                if (data.length > 1) {
                    data.sort((a, b) => a.idGame > b.idGame ? 1 : -1);
                }
                this.setState({
                    test: data,
                });
            }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <TestContext.Provider value={{
                ...this.state,
                createListe: this.createListe.bind(this),
                createListeJeux: this.createListeJeux.bind(this),
                readListe: this.readListe.bind(this),
                updateListe: this.updateListe.bind(this),
                deleteListe: this.deleteListe.bind(this),


            }}>
                {this.props.children}
            </TestContext.Provider>
        );
    }
}


export default TestContextProvider;
