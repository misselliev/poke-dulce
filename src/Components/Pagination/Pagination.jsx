import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentPage, getPokeList, calculateTotalPages } from '../../Redux/pokeSlice';
import './Pagination.css'

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
      <button onClick={handlePreviousPage} disabled={!hasPrevious}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={!hasNext}>
        Next
      </button>
    </nav>
  );
};

export default Pagination;
