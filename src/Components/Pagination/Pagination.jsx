import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentPage, getPokeList, calculateTotalPages } from '../../Redux/pokeSlice';
import './Pagination.css'
import { Button } from 'semantic-ui-react';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pokemon.currentPage);
  const totalItems = useSelector((state) => state.pokemon.totalItems);

  const totalPages = calculateTotalPages(totalItems, 20);
  const hasNext = currentPage < totalPages - 1;
  const hasPrevious = currentPage > 0;

  useEffect(() => {
    if (currentPage * 20 <= totalItems) {
      dispatch(getPokeList(currentPage));
    }
  }, [currentPage, dispatch, totalItems]);

  const handlePreviousPage = () => {
    if (hasPrevious) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (hasNext) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <nav>
      <Button color="blue" onClick={handlePreviousPage} disabled={!hasPrevious}>
        Previous
      </Button>
      <Button color="blue" onClick={handleNextPage} disabled={!hasNext}>
        Next
      </Button>
    </nav>
  );
};

export default Pagination;
