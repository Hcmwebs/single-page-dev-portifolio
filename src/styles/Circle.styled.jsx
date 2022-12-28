import styled from 'styled-components'

const StyledCircle = styled.div`
	position: absolute;
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	width: 129px;
	height: 129px;
	background-position: center center;
	background-image: url('/pattern-circle.svg');
	background-repeat: no-repeat;
	background-size: cover;
`
export default StyledCircle
