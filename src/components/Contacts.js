import React from 'react';
import styled from 'styled-components';
import { Typography, Container, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import ScrollAnimation from 'react-animate-on-scroll';


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
      <ScrollAnimation
        animateIn="swing"
        initiallyVisible={true}
        duration={1}
        animateOnce
      >
        <Typography variant="h2" color="error" align="center" gutterBottom>
          Понравилось? Свяжись с нами!
        </Typography>
      </ScrollAnimation>
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
          <ScrollAnimation
            animateIn="shake"
            initiallyVisible={true}
            delay={1500}
            duration={1}
            animateOnce
          >
            <ButtonStyled size="large" variant="contained" margin="normal">Отправить</ButtonStyled>
          </ScrollAnimation>
      </FormStyled>
    </Container>
  </HeroStyled>
);

export default Contacts;