import { OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import styled from 'styled-components/macro';

const SocialIcon = styled.li`
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: rotate(360deg);
	}
`;

const SocialItem = ({ title, link, icon }) => {
	return (
		<SocialIcon className="list-inline-item mx-2">
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				style={{ width: '42px' }}
				className="d-block"
			>
				<OverlayTrigger overlay={<Tooltip id="tooltip-top">{title}</Tooltip>}>
					<Image src={icon} alt={title} fluid />
				</OverlayTrigger>
			</a>
		</SocialIcon>
	);
};

export default SocialItem;
