import styled from 'styled-components'

const StyledForm = styled.form`
	width: min(100%, 445px);
	display: grid;
	place-items: center;
	padding: 2rem;
	padding-bottom: 5.75rem;
	gap: 2rem;

	.form-group {
		width: 100%;
		display: grid;
		place-items: center;
		justify-items: start;
		gap: 0.25rem;
		transition: var(--transition-2);
		&.error input,
		textarea {
			border-bottom: 1px solid var(--error);
		}
		&.success > input,
		textarea {
			border-bottom: 1px solid var(--accent);
		}

		input,
		textarea {
			width: 100%;
			padding: 1rem;
			outline: none;
			border: none;
			border-bottom: 1px solid var(--bodyColor);
			color: var(--bodyColor);
			background-color: transparent;
			&::placeholder {
				text-transform: uppercase;
			}
		}
		textarea {
			resize: none;
			min-height: 100px;
		}
	}

	.error {
		font-weight: var(--medium);
		font-size: 0.75rem;
		line-height: 1rem;
		justify-self: end;
		color: var(--error);
	}
`

export default StyledForm
