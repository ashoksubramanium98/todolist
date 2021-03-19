import styled from 'styled-components';
import {AiFillDelete} from 'react-icons/ai';
import {VscAdd} from 'react-icons/vsc';

export const Container = styled.div`
    width: 30%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;
    border: 2px solid red;
    border-radius: 4px;
    position: relative;
`;

export const Header = styled.div`
    font-size: 20px;
    margin: 10px auto;
`;

export const TodoListContainer = styled.div`
    min-height: 400px;
    overflow: scroll;
    width: 90%;
    margin: 20px auto;
    ::-webkit-scrollbar{
        width: 0;
        background: transparent;
    }
`;

export const AddIcon = styled(VscAdd)`
    font-size: 22px;
    padding: 8px;
    border: 2px solid green;
    border-radius: 20px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
`;

export const TodoData = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 13px;
    border: 1px solid #ddd;
    border-radius: 3px;
`;

export const TodoName = styled.p`
    font-size: 18px;
    margin: 0;
`;

export const DeleteIcon = styled(AiFillDelete)`
    font-size: 18px;
    cursor: pointer;
`;
