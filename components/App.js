import React from 'react'
import { Grid, Segment, Container, Header } from 'semantic-ui-react'
import ExampleCard from './Card'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Game of Thrones React App</Header>
        <Grid columns='equal'>
          <Grid.Column>
            <ExampleCard />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App