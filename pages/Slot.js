import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { setReset } from '@/redux/Store'
import { useSelector, useDispatch } from 'react-redux';

function Slot() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);
  const [spin, setSpin] = useState(false);
  const [result, setResult] = useState([]);
  const [buttonCount, setButtonCount] = useState(2);
  const router = useRouter();

  const handleReset = () => {
    dispatch(setReset());
    router.push('/');
  }

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
    <div className='slotGrid'>
      <div className='slotTxt'>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {result[0]}
        </p>
      </div>
      {buttonCount !== 0 ? (
        <Button variant={spin ? 'danger' : 'primary'} onClick={() => { spinSlot() }}>{spin ? '정지' : '시작'}</Button>
      ) : (
        <Button onClick={() => { handleReset() }}>다시하기</Button>
      )}
    </div>
  );
}

export default Slot;