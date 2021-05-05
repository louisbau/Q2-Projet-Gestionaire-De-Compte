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
        axios.get('/api/extension')
            .then(response => {
                this.setState({
                    test: response.data,
                });
            }).catch(error => {
            console.log(error);
        });
    }

    AddExtension(url ,name, playlist) {
        axios.get('/api/extension/' + url + '/' + name + '/' + playlist)
            .then(response => {
                let data = [...this.state.test];
                data.push(response.data[0]);
                this.setState({
                    test: data,
                })
            }).catch(error => {
                console.log(error);
        })
    }

    render() {
        return (
            <TestContext.Provider value={{
                ...this.state,
                AddExtension: this.AddExtension.bind(this),
                readListe: this.readListe.bind(this),
            }}>
                {this.props.children}
            </TestContext.Provider>
        );
    }
}


export default TestContextProvider;
