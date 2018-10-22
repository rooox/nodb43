import React from 'react';
import './AddSet.css';
import axios from 'axios';

class AddSet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titleInput: '',
            songInput: '',
        }
    }

    handleTitleInput(val){
        this.setState({titleInput: val})
      }
    
      handleSongInput(val){
        this.setState({songInput: val})
      }

      handleAdd = () => {
          axios.post('/api/sets', {
                set: this.state.titleInput,
                songs: this.state.songInput} )
            .then(res => {
                console.log(res.data)
                this.props.updateSets(res.data)
            })
        //   this.props.add( this.state);
          //this.setState({titleInput: '', songInput: ''})
      }


    render() {
        return (
            <div className='addset'>
                <div className='addset--container'>
                    <input type="text" placeholder='Set Title' onChange={(e) => this.handleTitleInput(e.target.value)}/>
                    <textarea type="text" placeholder='Song Title  ||  Key  ||  Chords' onChange={(e) => this.handleSongInput(e.target.value)}/>
                    <button onClick={this.handleAdd}>Add Set</button>

                </div>


            </div>

        )
    }

}

export default AddSet;