import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
    border: 1px solid #666;
    border-radius: 2px;
    margin: 10px 0 20px 0;
    min-height: 100px;
    padding: 5px;
`;

const TextArea = ({onChange, value}) => (
    <>
        <Textarea onChange={e => onChange(e.target.value)} value={value} />
    </>
);

export default TextArea;