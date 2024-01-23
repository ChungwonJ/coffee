import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Slot() {
  const value = useSelector((state) => state.value);
  const [spin, setSpin] = useState(false);
  const [result, setResult] = useState([]);
  const [buttonCount, setButtonCount] = useState(2);
  const router = useRouter();

  useEffect(() => {
    const initialResult = Array.from({ length: value.length }, () => 'Whose wallet?');

    setResult(initialResult);
  }, [setResult, value.length]);

  const spinSlot = () => {
    setSpin(!spin);
    setButtonCount(buttonCount - 1);
  };

  useEffect(() => {
    let interval;

    if (spin) {
      interval = setInterval(() => {

        const newResult = result.map(() => value[Math.floor(Math.random() * value.length)]);
        console.log('result  : ', result)

        setResult(newResult);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [spin, result, value]);

  return (
    <div>
      <div className='slotTxtTwo'>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {result[0]}
        </p>
      </div>
      {buttonCount !== 0 ? (
        <button onClick={spinSlot}>{spin ? '1번' : '2번'}</button>
      ) : (
        <button onClick={() => { router.push('/') }}>다시하기</button>
      )}
    </div>
  );
}

export default Slot;