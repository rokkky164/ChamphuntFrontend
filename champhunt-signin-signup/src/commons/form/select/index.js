import { Dropdown, Select, SelectItem } from "carbon-components-react";

import './index.scss';

const ChampSelect = (props) => {

    const { 
        options = [],
        name,
        titleText,
        label 
    } = props;

    return <div className="form-element select">
        <Select
            id={name}
            className="select-container"
            text={label}
            labelText={titleText}
        >
            <SelectItem value='' text={label} /> 
            { options.map( option => {

                const { id, label } = option;

                return <SelectItem value={id} text={label} />
            } ) }
        </Select>
    </div>
}

export default ChampSelect;