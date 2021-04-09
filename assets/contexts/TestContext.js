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
        axios.get('/api/recept/test/1')
            .then(response => {
                /*
                const dict = {}
                for (let a=0; a<response.data.length; a++) {
                    dict[response.data[a].name_game] = [];
                }

                for (let a=0; a<response.data.length; a++) {
                    dict[response.data[a].name_game].push({username_account: response.data[a].username_account, password_account: response.data[a].password_account, description: response.data[a].description, id: response.data[a].id});
                }

                 */
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
