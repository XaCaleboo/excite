import React from 'react';
import styled from 'styled-components';
import { Typography, Container, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';


const HeroStyled = styled.section`
  display: flex;
  padding-top: 128px;
  padding-bottom: 64px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const FormStyled = styled.div`
  margin: 0 auto;
  width: 50%;
`;

const TextFieldStyled = withStyles(theme => ({
  root: {
    width: '100%',
  }
}))(TextField);

const ButtonStyled = withStyles(theme => ({
  root: {
    display: 'block',
    backgroundColor: pink[400],
    color: theme.palette.getContrastText(pink[400]),
    marginTop: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    '&:hover': {
      backgroundColor: pink[600],
    },
  }
}))(Button);

const Contacts = () => (
  <HeroStyled id="contacts">
    <Container fixed>
      <Typography variant="h2" color="error" align="center" gutterBottom>
        Понравилось? Свяжись с нами!
      </Typography>
      <FormStyled>
          <TextFieldStyled label="E-mail" margin="normal" variant="filled" />
          <TextFieldStyled label="Телефон" margin="normal" variant="filled" />
          <TextFieldStyled
            label="Сообщение"
            multiline
            rows="4"
            margin="normal"
            variant="filled"
          />
          <ButtonStyled size="large" variant="contained" margin="normal">Отправить</ButtonStyled>
      </FormStyled>
    </Container>
  </HeroStyled>
);

export default Contacts;