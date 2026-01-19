import nerdImage from '../assets/images/illustration.png';
import Button from './ButtonForCard';
import {CardContainer,ContentContainer,ButtonContainer} from './styles/Container.styles';
import {Tag,H1,P,Image} from './styles/Elements';

export default function Card(){
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color='#c025df'>EXCLUSIVE</Tag>
                    <H1> React Styled Components</H1>
                    <P>
                        Exclusive React JS Tutorial on Styled Components where ypu will learn why need this
                    </P>
                    <ButtonContainer>
                        <Button link="https://lwsbd.link/rsc" text ="Watch now"></Button>
                        <Button link="https://lwsbd.link/react" text ="Github repo"></Button>
                    </ButtonContainer>                        
               
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px"/>

        </CardContainer>
    );
}