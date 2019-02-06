import React, {Component} from 'react'


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text_to_translate: "",
            text_translated: "",
        };

        this.handleChangeTextTranslated = this.handleChangeTextTranslated.bind(this);
    }

    handleChangeTextTranslated(e) {
        return this.setState({
            text_to_translate: e.target.value
        })
    }


    render() {
        return (
            <div className={"container-form"}>
                <textarea name="text_to_translated" placeholder={"Digite o texto a ser traduzido"}
                          value={this.state.text_to_translate} onChange={this.handleChangeTextTranslated}/>
                <button className={"btn-success"}>Traduzir</button>
                <br/>
                <br/>
                <p>{this.state.text_translated}</p>
            </div>
        )
    }
}

export default Index
