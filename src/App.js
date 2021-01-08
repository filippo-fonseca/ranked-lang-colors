import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { CircularProgress } from '@material-ui/core';
import { Card, Text } from "@geist-ui/react";
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

const App = () => {
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
      <Card width="330px" style={{ backgroundColor: `${language.hex}`}}>
    <h4>{language.name}</h4>
    </Card>
       </>))}

    </div>
    </>
    
  );
}

export default App;