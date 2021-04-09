import React, {createContext} from 'react';
import axios from "axios";

export const TestContext = createContext();


class TestContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: [],
        };
        this.updateListe();
        this.readListe();
    }
    //create
    //read

    readListe() {
        axios.get('/api/test/1')
            .then(response => {
                this.setState({
                    test: response.data,
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
            <TestContext.Provider value={{
                ...this.state,
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
