import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { CircularProgress } from '@material-ui/core';
import { Text } from "@geist-ui/react";
import "./App.css";


const GET_TODOS = gql`
  query getLangs {
      languages {
          id
          name
          hex
      }
  } 
`

function App() {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 50
        }}>
            <CircularProgress/>
            <Text h4>Fetching data from API...</Text>
        </div>
    );
  } 
  if (error) return <div>Error fetching colors</div>


  return (
    <>
    <div>
    {data.languages.map(language => (
      <>
      <h1>{language.name}</h1>
      <div style={{ backgroundColor: `${language.hex}`, width: "5rem" }}>Hello World</div>
       </>))}
    </div>
    </>
    
  );
}

export default App;