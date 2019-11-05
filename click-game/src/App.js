import React, { Component } from 'react';
import Nav from './components/NavBar';
import Header from './components/Header';
import Card from './components/Card';
import friends from './assets/images/friends.json'

class App extends Component {
    state = {
        score: 0,
        topScore: 0,
        friends,
        selected: [],
        gameOver: false
    }

    // shuffleImages = () => {

    // }

    chosenFriend = id => {
       
        // if the clicked image is in the selected array, lose game and reset
        if(this.state.selected.includes(id)){
            this.setState({
                gameOver:true
            })
            
        // else increase score, shuffle images, add that id to the selected array
        } else {
            const nowSelected = this.state.friends.filter(friend => friend.id === id)
            this.setState({
                selected: this.state.selected.push(nowSelected),
                score: this.state.score + 1,
            })  
            // this.shuffleImages()
        }
    }

    render() {
        return (
            <>
            <Nav 
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.gameOver}/>
            <Header />
            {this.state.friends.map(friend => (
            <Card 
            chosenFriend={this.chosenFriend}
            id={friend.id}
            clicked={friend.clicked}
            image={friend.image}
            name={friend.name}
            />
            ))}
            </>
        )
    }
}

export default App;