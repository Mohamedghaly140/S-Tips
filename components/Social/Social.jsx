import SocialItem from './SocialItem';

import instagram from '../../assets/SOCIAL/instagram.png';
import facebook from '../../assets/SOCIAL/facebook.png';
import linkedin from '../../assets/SOCIAL/linkedin.png';
import whatsapp from '../../assets/SOCIAL/whatsapp.png';
import twitter from '../../assets/SOCIAL/twitter.png';
import gmail from '../../assets/SOCIAL/gmail.png';

const socialMedia = [
	{
		id: 1,
		title: 'Linked in',
		icon: linkedin,
		link: 'https://www.linkedin.com/company/visionalization',
	},
	{
		id: 2,
		title: 'Facebook',
		icon: facebook,
		link: 'https://www.facebook.com/visionalization',
	},
	{
		id: 3,
		title: 'Twitter',
		icon: twitter,
		link: 'https://twitter.com/visionalization',
	},
	{
		id: 4,
		title: 'Instagram',
		icon: instagram,
		link: 'https://www.instagram.com/visionalization1/?igshid=111d6rkqzs458',
	},
	{
		id: 5,
		title: "What's App",
		icon: whatsapp,
		link:
			'https://api.whatsapp.com/send?phone=201060909402fbclid=IwAR2MnBUHZnyRSQP3c2Skb_9ORMHjhJwaahT5DuhwBG9JaNoVmueP_7M3-u0',
	},
	{
		id: 6,
		title: 'Mail',
		icon: gmail,
		link: 'mailto:visionalization@mail.com',
	},
];

const Social = () => {
	return (
		<ul className="list-unstyled text-center py-1 mb-0">
			{socialMedia.map(social => (
				<SocialItem
					key={social.id}
					title={social.title}
					icon={social.icon}
					link={social.link}
				/>
			))}
		</ul>
	);
};

export default Social;
