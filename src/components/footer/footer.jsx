import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { mobile } from "../../responseive";
import '../footer/footer.css'

const Container = styled.div`
  display: flex;
  background-color: #414a4c;
  width: 100%
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: red
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  color: white
`;

const SocialContainer = styled.div`
  display: flex;
  color: white;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: red
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: red
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: white
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
`;

// const Payment = styled.img`
//     width: 50%;
// `;

const Footer = () => {
  return (
    <Container>
      <Left className='left'>
        <Logo>React Games</Logo>
        <Desc>
          This page was developed by Clint Rizzo. This website was created was to test my frontend skill 
          with React. I also included testing automation with cypress to practice my unit testing skills.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999" className='socialLinks'>
            <a href="https://github.com/clintrizzo/react-games" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" style={{color: 'white', fontSize: '25px'}}/>
            </a>  
          </SocialIcon>
          <SocialIcon color="E4405F" className='socialLinks'>
            <a href="https://www.youtube.com/channel/UCpARYFoliOIr-UGpIT-4ibQ/videos" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true" style={{color: 'white', fontSize: '25px'}}/>
            </a>            
          </SocialIcon>
          <SocialIcon color="55ACEE" className='socialLinks'>
            <a href="https://www.linkedin.com/in/clinton-rizzo/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" style={{color: 'white', fontSize: '25px'}}/>
            </a>            
          </SocialIcon>
          <SocialIcon color="E60023" className='socialLinks'>
            <a href="https://www.instagram.com/clintrizzo/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" style={{color: 'white', fontSize: '25px'}}/>
            </a>  
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Game Navigations</Title>
        <List>
          <ListItem><Link to="/" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Home</Link></ListItem>
          <ListItem><Link to="/tictactoe" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Tic Tac Toe</Link></ListItem>
          <ListItem><Link to="/connectfour" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Connect Four</Link></ListItem>
          <ListItem><Link to="/memorygame" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Memory Game</Link></ListItem>
          <ListItem><Link to="/snake" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Snake</Link></ListItem>
          <ListItem><Link to="/candycrush" style={{color: 'white', textDecoration: 'none'}} className='gameNav'>Candy Crush</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <i className="fa fa-road" style={{marginRight:"10px"}}/> Corona Ca 92883
        </ContactItem>
        <ContactItem>
        <i className="fa fa-phone" style={{marginRight:"10px"}}/> +1 951 288 2222
        </ContactItem>
        <ContactItem>
          <i className="fa fa-envelope" style={{marginRight:"10px"}} /> clint.r@gamil.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;