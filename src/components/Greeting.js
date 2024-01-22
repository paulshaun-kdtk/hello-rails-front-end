import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting, selectGreeting } from '../redux/slices/GreetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingMessage = useSelector(selectGreeting);
  const status = useSelector((state) => state.greetings.status);
  const error = useSelector((state) => state.greetings.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Greeting from Backend:</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && (
      <p>
        Error:
        {error}
      </p>
      )}
      {status === 'succeeded' && greetingMessage && <p>{greetingMessage}</p>}
    </div>
  );
};

export default Greeting;
