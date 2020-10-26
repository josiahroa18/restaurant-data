import styled, { css, keyframes } from 'styled-components';
import theme from '../theme';

export const AppWrapper = styled.div`
    width: 100%;
    margin-left: 400px;
    height: 100vh;
    display: flex;
    y-overflow: scroll;
    padding-top: 50px;
`;

// SideBar Styles
export const SideBar = styled.div`
    width: 350px;
    height: 100%;
    background-color: ${theme.colors.neutral.grey};
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OptionsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Option = styled.div`
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    color: ${theme.colors.neutral.white};
    background-color: ${props => props.selected ? theme.colors.primary.blue : theme.colors.primary.lightBlue};
    border-radius: 10px;
    cursor: pointer;
    transition: .5s ease;
    &:hover {
        background-color: ${theme.colors.primary.blue};
        transition: .5s ease;
    }
`;

export const Search = styled.div`
    
`;

// Table Styles
export const Table = styled.div`
    width: 1000px;
`;

export const Row = styled.div`
    width: 100%;
    background-color: ${theme.colors.neutral.white};
    display: flex;
    justify-content: space-around;
    padding: ${props => props.isHeader ? '10px 20px' : '15px 20px'};
    ${props => !props.isHeader && css`
        transition: .5s ease;
        border-top: 1px solid ${theme.colors.neutral.grey};
        &:hover {
            background-color: ${theme.colors.neutral.grey};
            transition: .5s ease;
        }
    `}
`;

export const Col = styled.div`
    width: ${props => props.width};
    color: ${theme.colors.neutral.black};
    a {
        text-decoration: none;
        color: ${theme.colors.primary.lightBlue};
        transition: .5s ease;
        &:hover {
            color: ${theme.colors.primary.blue};
            transition: .5s ease;
        }
    }
`;

export const TagContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const Tag = styled.div`
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    color: ${theme.colors.neutral.white};
    background-color: ${theme.colors.primary.lightBlue};
    border-radius: 10px;
`;

export const PageNavigator = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`;

export const PageChanger = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid ${theme.colors.neutral.grey};
    border-radius: 5px;
    margin-right: 10px;
    background-color: ${props => props.currentPage && theme.colors.neutral.grey};
    transition: .5s ease;
    &:hover{
        background-color:${theme.colors.neutral.grey};
        transition: .5s ease;
    }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid ${theme.colors.primary.lightBlue};
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${spin} 2s linear infinite;
    margin-left: 10px;
`;
