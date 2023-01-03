import styled from 'styled-components'

const StyledRings = styled.div`
	content: '';
	position: absolute;
	width: 530px;
	height: 129px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	background-image: url('/pattern-rings.svg');
	mix-blend-mode: normal;
	opacity: 0.25;

	&.header {
		top: 125px;
		left: -311px;
		@media (min-width: 768px) {
			top: 50px;
			left: -287px;
		}
		@media (min-width: 1440px) {
			top: 100px;
			left: -200px;
		}
	}
	&.main {
		top: 705px;
		left: 189px;
		@media (min-width: 768px) {
			top: 450px;
			left: 550px;
		}
		@media (min-width: 1440px) {
			top: 375px;
			left: 1080px;
		}
	}
`

export default StyledRings
