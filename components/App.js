import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import ExampleCard from './Card'

class App extends React.Component {
  render() {
    return (
      <Grid columns='equal' container>
        <Grid.Column>
          <ExampleCard />
        </Grid.Column>
      </Grid>
    )
  }
}

export default App