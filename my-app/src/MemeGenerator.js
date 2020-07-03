import React, {Component} from "react"

class MemeGenerator extends Component{
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[1])
                this.setState({allMemeImgs: memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return(
            <div className="backgroundColor">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control"  
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2"
                            name="topText"
                            placeholder="Top text"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                        <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2"
                            name="bottomText"
                            placeholder="Bottom text"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary">Gen</button>
                        </div>
                    </div>
                </form>
                <div className="meme">
                    <h2 className="top">{this.state.topText}</h2>
                    <img src={this.state.randomImg} className="memeImg" alt="meme" />
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }        
}

export default MemeGenerator