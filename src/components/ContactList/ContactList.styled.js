import styled from 'styled-components'

export const ContactItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactName = styled.span`
  
  margin-right: 10px;
`;

export const ContactNumber = styled.span`
  /* flex: 1; */
`;

export const Button = styled.button`
  padding: 5px 20px;
  margin-left: 20px;  
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
    :hover {
    background-color: #e0e0e0;
  }
`;