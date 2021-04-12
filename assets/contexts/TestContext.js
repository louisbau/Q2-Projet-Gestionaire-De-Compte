import React, {createContext} from 'react';
import axios from "axios";

export const TestContext = createContext();


class TestContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: [],
        };
        this.readListe();
    }
    //create
    createListe(compte) {
        console.log(compte)

        axios.post('/api/test/create', compte)
            .then(response => {

                let data = [...this.state.test];
                data.push(response.data[0]);
                data.sort((a,b) => a.idGame > b.idGame ? 1 : -1);
                console.log(data);
                this.setState({
                    test: data,
                })
                console.log(this.state);


            }).catch(error => {
                console.error(error);
        })


    }


    //read
    readListe() {
        axios.get('/api/test/read/1')
            .then(response => {
                let read = response.data
                read.sort((a,b) => a.idGame > b.idGame ? 1 : -1)

                this.setState({
                    test: read,
                });

            }).catch(error => {
            console.error(error);
        });
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
            <TestContext.Provider value={{
                ...this.state,
                createListe: this.createListe.bind(this),
                readListe: this.readListe.bind(this),
                updateListe: this.updateListe.bind(this),
                //deleteListe: this.deleteListe.bind(this),


            }}>
                {this.props.children}
            </TestContext.Provider>
        );
    }
}



export default TestContextProvider;
