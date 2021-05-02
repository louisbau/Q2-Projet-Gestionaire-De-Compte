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

    AddExtension(name ,url, playlist) {
        axios.get('/api/extension/' + name + '/' + url + '/' + playlist)
            .then(response => {
                if (!response.data.error) {
                    this.setState({
                        test: response.data,
                    });
                }

            }).catch(error => {
            console.error(error);
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
