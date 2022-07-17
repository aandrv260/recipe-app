import { addCSSClassName } from '../../assets/ts/generalFunctions';
import scss from './LoadingSpinner.module.scss';

const LoaderSpinner = () => <div className={addCSSClassName(scss, 'spinner', 'text-center')}></div>;

export default LoaderSpinner;
