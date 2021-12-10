import React, { useEffect, useState, useRef, useCallback } from 'react';

//component

import MarketListCard from './MarketListCard';
import './infinity.scss';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const Market = () => {
  const [page, setPage] = useState(0);
  const { users } = useFetch(page);
  const loader = useRef(null);

  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      <div className="centered top-224">
        <div className="grid centerd">
          {users &&
            users.map((user, index) => {
              return <MarketListCard key={index} />;
            })}
        </div>
      </div>
      <div
        ref={loader}
        style={{ background: 'red', width: '20px', height: '20px' }}
      />
    </>
  );
};

export default Market;

// const LIMIT = 10;

function useFetch(page) {
  const url = `/data/marketlist.json`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    // const query = `limit=${LIMIT}&offset=${LIMIT * page}`;
    setLoading(true);
    setError(false);

    fetch(`${url}`)
      .then(res => res.json())
      .then(res => {
        if (users === []) {
          setUsers(res.list);
          setLoading(false);
        } else {
          setUsers(prevUsers => [...prevUsers, ...res.list]);
          setLoading(false);
        }
      })
      .catch(error => {
        setError(error);
      });
  }, [page]);

  return { loading, error, users };
}
