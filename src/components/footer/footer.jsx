import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { mobile } from "../../responseive";
import '../footer/footer.css'

const Container = styled.div`
  display: flex;
  background-color: #414a4c;
  width: 100%;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
`;

const Logo = styled.h1``;

const Desc = styled.p`
`;

const SocialContainer = styled.div`
`;

const SocialIcon = styled.div`
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  ${mobile({ display: "none" })}
`;

const Title = styled.h2`
`;

const List = styled.ul`
`;

const ListItem = styled.li`
`;

const Right = styled.div`
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
`;

const Footer = () => {
  return (
    <Container className='footerContainer' id='smallScreen'>
      <Left className='left' id='leftColumn'>
        <Logo>React Games</Logo>
        <Desc clasName='desc' id='description'>
          This page was developed by Clint Rizzo. This website was created was to test my frontend skill 
          with React. I also included testing automation with cypress to practice my unit testing skills.
        </Desc>
        <SocialContainer className='icons' id='socialLinks'>
          <SocialIcon color="3B5999" className='socialLink' id='socialDisplay'>
            <a href="https://github.com/clintrizzo/react-games" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" style={{color: 'white', fontSize: '25px'}}/>
            </a>  
          </SocialIcon>
          <SocialIcon color="E4405F" className='socialLink' id='socialDisplay'>
            <a href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ/videos" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true" style={{color: 'white', fontSize: '25px'}}/>
            </a>            
          </SocialIcon>
          <SocialIcon color="55ACEE" className='socialLink' id='socialDisplay'>
            <a href="https://www.linkedin.com/in/clinton-rizzo/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" style={{color: 'white', fontSize: '25px'}}/>
            </a>            
          </SocialIcon>
          <SocialIcon color="E60023" className='socialLink' id='socialDisplay'>
            <a href="https://www.instagram.com/clintrizzo/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" style={{color: 'white', fontSize: '25px'}}/>
            </a>  
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center className='center' id='centerColumn'>
        <Title className='header' id='columnHeader'>Game Navigations</Title>
        <List className='navLinks' id='navExt'>
          <ListItem className='navLink' id='extension'><Link to="/" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Home</Link></ListItem>

          <ListItem className='navLink' id='extension'><Link to="/tictactoe3x3" style={{color: 'white', textDecoration: 'none', textAlign: 'center'}} className='gameNav'>Tic Tac Toe</Link></ListItem>

          <ListItem className='navLink' id='extension'><Link to="/connectfour" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Connect Four</Link></ListItem>

          <ListItem className='navLink' id='extension'><Link to="/memorygame" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Memory Game</Link></ListItem>


          <ListItem className='navLink' id='extension'><Link to="/snake" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Snake</Link></ListItem>

          <ListItem className='navLink' id='extension'><Link to="/candycrush" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Candy Crush</Link></ListItem>

        </List>
      </Center>
      <Right className='right' id='rightColumn'>
        <Title className='header' id='columnHeader'>Contact</Title>
        <ContactItem className='contact' id='contactInfo'>
          <i className="fa fa-road" style={{marginRight:"10px"}}/> Corona Ca 92883
        </ContactItem>
        <ContactItem className='contact' id='contactInfo'>
        <i className="fa fa-phone" style={{marginRight:"10px"}}/> +1 951 288 2247
        </ContactItem>
        <ContactItem className='contact' id='contactInfo'>
          <i className="fa fa-envelope" style={{marginRight:"10px"}} /> clint.rizzo92@gamil.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;