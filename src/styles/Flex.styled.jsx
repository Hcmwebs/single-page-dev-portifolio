import styled from 'styled-components'

const StyledFlex = styled.div`
	width: ${({ width }) => width};
	display: flex;
	justify-content: ${({ jc }) => jc};
	align-items: ${({ align }) => align};
`
export default StyledFlex
