import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Header, Segment, Image, Icon, Button, Card,
} from 'semantic-ui-react';
import { fetchFavorites, removeFromFavorites } from '../Redux/favoritesSlice';
import './Favorites.css'

const Favorites = () => {

const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites(favorites));
  }, [dispatch, favorites]);

  const removeFavorite = item => {
    dispatch(removeFromFavorites(item));
  };

  const noFavorites = favorites.length === 0 ? (
    <Header as="h3" textAlign='center'>You have no favorites...yet</Header>
  ) : null;

  
    return(
    <Container>
      <Header as="h1" color="blue" textAlign="center" className="main-header">Favorites</Header>
      <Segment raised className='favorites'>
        {noFavorites}
        {favorites.map(({
          name, sprites,
        }) => (
          <Card key={name}>
            <Image src={sprites?.other?.dream_world?.front_default} wrapped ui={false} />
            <Card.Content>
              <Card.Header textAlign='center'>{name}</Card.Header>
              
            </Card.Content>
            <Card.Content extra>
            <Button color="red" className="segment-btn" onClick={() => removeFavorite(name)}>
                  <Icon name="heart" />
                  Remove from Favorite
                  </Button>
            </Card.Content>
          </Card>))}
      </Segment>
    </Container>
    )
}

export default Favorites