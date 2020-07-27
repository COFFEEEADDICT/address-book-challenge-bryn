import styled from "styled-components";

const UserInput = styled.input`
	width: 500px;
	height: 50px;
	font-size: 18px;
	font-weight: 600;
	background-color: rgb(50, 167, 238);
	::placeholder {
		color: rgb(255, 255, 255);
	}
	outline: none;
	font-family: system-ui;
	color: rgb(255, 255, 255);
	border: 3px solid;
	border-radius: 99px;
	border-color: rgb(255, 220, 0);
	text-align: center;

	:focus {
		border-radius: 99px;
		border: 3px solid;
		border-color: rgb(255, 220, 0);
		text-align: center;
		text-color: rgb(255, 220, 0);
	}
`;

export default UserInput;
