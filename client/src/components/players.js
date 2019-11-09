import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    list-style-type:none;
    padding: 0;
    `;

const ListItem = styled.li`
    font-size: 1.62rem;
    `;

const Players = (props) => {
    

  return(

    <div> 
        <div className="char-info">
            <List>
                <ListItem>{"Name: " + props.name}</ListItem>
                <ListItem>{"Country: " + props.country}</ListItem>
            </List>
        </div>
    </div>
  )
}

export default Players;