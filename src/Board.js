import React, {Component} from 'react'
import Note from './Note'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Notes: [
                {
                    id: 0,
                    note: "Make breakfast"
                },
                {
                    id: 1,
                    note: "Email Ahsan"
                },
                {
                    id: 2,
                    note: "Learn React.js"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
    }
    update(newText, i) {
        console.log("updating item at index", i, newText)
        this.setState(prevState => ({
            Notes: prevState.Notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }) )
    }
    eachNote(note, i) {
        return (
            <Note key={i} index={i} onChange={this.update}>
                {note.note}
            </Note>
        )
    }
    render() {
        return(
            <div className="board">
                {this.state.Notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board