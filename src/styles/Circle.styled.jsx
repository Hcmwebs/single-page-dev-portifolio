import styled from 'styled-components'

const StyledCircle = styled.div`
	position: absolute;
	width: 129px;
	height: 129px;
	background-position: center center;
	background-image: url('/pattern-circle.svg');
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 9;

	&.header {
		top: 254px;
		left: 311px;
		@media (min-width: 768px) {
			top: 470px;
			left: 320px;
		}
		@media (min-width: 1440px) {
			top: 521px;
			left: 750px;
		}
	}
`
export default StyledCircle
