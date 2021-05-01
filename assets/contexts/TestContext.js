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

    //read
    readListe() {
        axios.get('/api/session')
            .then(response => {
                this.setState({
                    test: response.data.roles[0],
                });
            }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <TestContext.Provider value={{
                ...this.state,
                readListe: this.readListe.bind(this),
            }}>
                {this.props.children}
            </TestContext.Provider>
        );
    }
}


export default TestContextProvider;
