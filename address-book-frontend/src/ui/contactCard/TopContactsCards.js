import styled from "styled-components";

const TopContactsCards = styled.div`
	padding-top: 10px;
	padding-bottom: 10px;

	font-size: 18px;
	font-weight: 600;

	align-items: center;
	justify-content: center;
	display: flex;
	color: rgb(50, 167, 238);

	border: 3px solid rgb(50, 167, 238);
	width: 200px;
	flex: 1;

	:hover {
		color: rgb(255, 255, 255);
		background: rgb(50, 167, 238, 0.6);
	}
`;

export default TopContactsCards;
