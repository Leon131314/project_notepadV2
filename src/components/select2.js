import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'code', label: 'Code' },
    { value: 'link', label: 'Link' },
];

export default class Select2 extends React.Component {
    render(){
        return (
            <Select options = {options} />
        );
    }
}
