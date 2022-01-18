import './index.scss';

const Input = (props) => {

    const { 
        label,
        name,
        classes,
        placeholder
    } = props;

    return <div className="form-element input">
        { label && <label className="label" htmlFor={name} >{ label }</label> }
        <input
            id={name}
            type='text'
            name={name}
            className={`input-element ${classes}`}
            placeholder={placeholder}
        />
    </div>
}

export default Input;