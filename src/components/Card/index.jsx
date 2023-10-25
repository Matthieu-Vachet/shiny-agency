import PropType from 'prop-types'
import DefaultPicture from './../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    `
const CardImage = styled.img`
    border-radius: 50%;
    height: 80px;
    width: 100px;
    `

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms ease-in;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
function Card({label, title, picture}) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span>{title}</span>
        </CardWrapper>
    )
}

Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture,
}

Card.propTypes = {
    label: PropType.string.isRequired,
    title: PropType.string.isRequired,
    picture: PropType.string.isRequired
}

export default Card