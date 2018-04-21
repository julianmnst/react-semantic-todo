import React from 'react';
import { 
  Button,
  Select, 
  Input,
  Card,
  Grid,
  Checkbox
} from 'semantic-ui-react';
import './App.css';
import { data } from './config/data';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});

const TodoItem = ({ id, title, detail, complete }) => (
  <Card key={id}>
    <Card.Content>
      <Card.Header>
        { title }
      </Card.Header>
      <Card.Meta>
        Todo # {id}
      </Card.Meta>
      <Card.Description>
        { detail }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5} floated='left'>
              <Checkbox label='Complete' checked={complete} readOnly={false} />
            </Grid.Column>
            <Grid.Column width={6} floated='right'>
              <Button negative floated='right' size='tiny'>Delete</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Card.Content>
  </Card>
);

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <Input type='text' placeholder='Search...' icon='search' action >
                <input />
                <Select  options={data.filters} defaultValue='all' />
                <Button type='submit'>Search</Button>
              </Input>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button positive >Create Todo</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Card.Group centered itemsPerRow={2}>
               {data.todos.map(todo => (
                  <TodoItem {...todo} />
                ))} 
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
