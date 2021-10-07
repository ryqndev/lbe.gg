import clsx from 'clsx';
import { ReactComponent as TwitterLogo } from '../../../assets/icons/twitter.svg';
import cn from './Home.module.scss';

const Home = () => {
	return (
		<div className={cn.container}>
			<div className={cn.socials}>
				<p>SOCIALS</p>
				<span>{'//'}</span>
				<a
					href='https://twitter.com/labibesports'
					target='_blank'
					rel='noopener noreferrer'
				>
					<TwitterLogo />
				</a>
			</div>
			<div className={cn.splash}>
				<div className={cn.left}>La Biblioteca Esports</div>
				<div className={cn.right}>
					<aside className='gradient_text__component'>LBE</aside>
				</div>
				<div className={cn.overlay}></div>
			</div>
			<div className={clsx(cn.diagonal, cn.top)}></div>
			<div className={cn.post}></div>
			<div className={clsx(cn.diagonal, cn.bottom)}></div>
		</div>
	);
};

export default Home;
