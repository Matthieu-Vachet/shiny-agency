import Card from '../../components/Card'
import DefaultPicture from './../../assets/profile.png'
import styled from 'styled-components'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Designer',
        picture: DefaultPicture
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur',
        picture: DefaultPicture
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Fullstack',
        picture: DefaultPicture
    },
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 350px 350px;
`

function Freelances() {
    return (
        <div>
            <h1>Freelance</h1>
            <CardsContainer>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances