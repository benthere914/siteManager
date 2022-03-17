import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Tab = ({data}) => {
    const [title, icon] = data
	return (
		<>
			<div>
				<p>{title}</p>
				<FontAwesomeIcon icon={icon} />
			</div>
		</>
	);
};

export default Tab;
