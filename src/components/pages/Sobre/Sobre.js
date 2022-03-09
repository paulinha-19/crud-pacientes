import React from 'react'
import './Sobre.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 3rem;
i.fa-solid.fa-flag,
i.fa-solid.fa-eye{
  color: #005F5D;
}
`
const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  media: {
    height: 140,
  },
  content: {
    maxWidth: 320,
    display: 'flex',
    margin: '0 auto',
    textAlign: 'center',
  }
});
const Sobre = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <h1>Sobre</h1>
        <Typography component="p" className={classes.content}>A Clínica ACME conta com uma estrutura completa e equipamentos modernos para que você possa ser atendido com muito conforto e rapidez. Contamos com várias especialidades com valores que cabem no seu bolso. Venha conhecer e agendar a sua consulta ou exame</Typography>
      </div>
      <Container>
        <Card className={classes.root}>
          <CardActionArea className='controls'>
            <CardContent>
              <IconButton><i class="fa-solid fa-flag"></i></IconButton>
              <Typography gutterBottom variant="h5" component="h2">
                Missão
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tratar da saúde de nossos clientes oferecendo serviços médicos de qualidade com preços acessíveis, tendo como diferencial o atendimento ético, humano e personalizado.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root}>
          <CardActionArea className='controls'>
            <CardContent>
              <IconButton><i class="fa-solid fa-eye"></i></IconButton>
              <Typography gutterBottom variant="h5" component="h2">
                Visão
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tratar da saúde de nossos clientes oferecendo serviços médicos de qualidade com preços acessíveis, tendo como diferencial o atendimento ético, humano e personalizado.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  )
}

export default Sobre