import React, {Component} from 'react'
import Note from './Note'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Notes: [
                {
                    id: 33,
                    note: "Make breakfast"
                },
                {
                    id: 34,
                    note: "Email Ahsan"
                },
                {
                    id: 35,
                    note: "Learn React.js"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
    }
    eachNote(note, i) {
        return (
            <Note key={i} index={i}>
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