import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Players from './components/players';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #c3c3c3;
  display: -webkit-flex; /* Safari */
  -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
  display: flex;
  flex-flow: column wrap;
  `;

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = () => {
      axios
        .get('http://localhost:5000/api/players')
        .then(response => {
          setPlayers(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getPlayers();
  }, []);

  console.log(players)

  return (
    <div className="App">
    <Container>
      {players.map(player => {
        return(
          <Players 
            name={player.name} 
            country={player.country}
          />
        )
      })}
      </Container>
    </div>
  );
}

export default App;
