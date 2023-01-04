import styled from 'styled-components'

const StyledForm = styled.form`
	width: min(100%, 445px);
	display: grid;
	place-items: center;
	gap: 2rem;
	padding-bottom: 5.75rem;

	.form-group {
		width: 100%;
		display: grid;
		place-items: center;
		justify-items: start;
		border-bottom: 1px solid var(--bodyColor);

		input,
		textarea {
			width: 100%;
			padding: 1rem;
			outline: none;
			border: none;
			color: var(--bodyColor);
			background-color: transparent;
			&::placeholder {
				text-transform: uppercase;
			}
		}
		textarea {
			resize: none;
			min-height: 100px;
			&::placeholder {
				text-transform: uppercase;
			}
		}
	}
`

export default StyledForm
