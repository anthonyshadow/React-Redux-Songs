import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

//Class Component

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    
    render () {
        
        return <div className="ui divided list">{this.renderList()}</div>
    }
};


//Refactored to a functional Component

// const SongList = ({songs}) => {

    
//     const renderedList = songs.map((song) => {
//         console.log(song)
//         console.log(selectSong(song))

//             return (
//                 <div className='item' key={song.title}>
//                     <div className="right floated content">
//                         <button 
//                         className="ui button primary"
//                         onClick={(song) => selectSong(song)}>
//                             Select
//                         </button>
//                     </div>
//                     <div className="content">{song.title}</div>
//                 </div>
//             );
//         });
//     return <div className="ui divided list">{renderedList}</div>
// };

const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
};

export default connect(mapStateToProps, {
    selectSong
})(SongList);