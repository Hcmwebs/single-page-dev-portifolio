import styled from 'styled-components'

const StyledRings = styled.div`
	content: '';
	position: absolute;
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	width: 530px;
	height: 129px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	background-image: url('/pattern-rings.svg');
	mix-blend-mode: normal;
	opacity: 0.25;
`

export default StyledRings
