import { Button } from 'carbon-components-react';
import './index.scss';

const ChampButton = (props) => {

    const { 
        label,
        classes,
        onClick,
        icon,
        disabled = false
    } = props;

    return <div className="form-element button">
        {icon && <img className='button-icon' src={icon} />}
        <Button className={classes} onClick={onClick} disabled={disabled} >{label}</Button>
    </div>
}

export default ChampButton;