import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OverLay = styled.div`
	inset: 0;
	z-index: 8;
	width: 100vw;
	height: 100vh;
	position: fixed;
	transition: all 0.4s ease-in;
	background-color: rgba(0, 0, 0, 0.6);
	display: ${({ open }) => (open ? 'block' : 'none')};
`;

const Backdrop = ({ open, onOpenMenu }) => {
	return <OverLay onClick={onOpenMenu} open={open} />;
};

const BackdropContainer = ({ open, onOpenMenu }) => {
	return ReactDOM.createPortal(
		<Backdrop open={open} onOpenMenu={onOpenMenu} />,
		document.getElementById('backdrop')
	);
};

export default BackdropContainer;
