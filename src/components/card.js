import {useEffect, useState} from 'react';
import styled from 'styled-components';
import loremSpit from '../utils/lorem-spit';

const CardContainer = styled.div`
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  background-color: white;
  border: solid 1px #7b7b7b;
  padding: 30px;
  text-align: center;
  box-shadow: 0px 0px 15px 5px #2f2f2fa8;
  height: fit-content;
`;

/**
 * @param {{size: "word" | "small" | "medium" | "large"}} props
 */
const Card = ({size}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    setTitle(loremSpit('word'));
    setDesc(loremSpit(size));
  }, [size]);

  let width = '200px';
  let borderRadius = '10% 20%';

  if (size === 'medium') {
    width = '300px';
    borderRadius = '8% 17%';
  } else if (size === 'large') {
    width = '400px';
    borderRadius = '5% 15%';
  }

  return (
    <CardContainer width={width} borderRadius={borderRadius}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </CardContainer>
  );
};

export default Card;
