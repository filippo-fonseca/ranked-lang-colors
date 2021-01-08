import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { CircularProgress } from '@material-ui/core';
import "./App.css";
import {
  Card,
  Text,
  Button,
  GeistProvider,
  CssBaseline
} from "@geist-ui/react";
import { ArrowUp } from "@geist-ui/react-icons";
import { Container, ColorCircle, RankArea, LangArea } from "../src/styles";


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
    <GeistProvider theme={{ type: "dark" }}>
    <div style={{ textAlign: "center" }}>
      <Text h1 style={{ marginTop: "2rem" }}>Ranked GitHub Language Colors</Text>
      <Text h4 style={{ marginTop: "-0.5rem" }}>Tap the arrow next to your favorite color to upvote a language!</Text>
    {data.languages.map(language => (
      <>
      <CssBaseline />
      <div
        className="App"
        style={{
          display: "flex",
          padding: "0 2rem 0 2rem",
        }}
      >
        <Card
          style={{
            display: "flex",
  
            margin: "15px",
            marginRight: "15px",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Container>
            <LangArea>
              <ColorCircle style={{ backgroundColor: `${language.hex}` }} />
              <Text size={17}>{language.name}</Text>
            </LangArea>
            <RankArea>
              <Button icon={<ArrowUp />} auto></Button>
            </RankArea>
          </Container>
        </Card>
      </div>
      </>
      ))}

    </div>
    </GeistProvider>
    </>
    
    
  );
}

export default App;