import styled, { css, keyframes } from 'styled-components';
import theme from '../theme';

export const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    y-overflow: scroll;
    padding-top: 50px;
`;

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
