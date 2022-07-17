import { addCSSClassName } from '../../assets/ts/generalFunctions';
import scss from './LoaderSpinner.module.scss';

const LoaderSpinner = () => <div className={addCSSClassName(scss, 'spinner')}></div>;

export default LoaderSpinner;
