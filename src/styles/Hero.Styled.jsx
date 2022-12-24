import styled from 'styled-components'

const StyledHero = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2.5rem;
	.hero-header {
		width: 190px;
		height: 242px;
		display: grid;
		place-items: center;

		img {
			width: 100%;
			height: 100%;
      margin-top: -9rem
		}
	}
  .hero-body{

  }
`

export default StyledHero
