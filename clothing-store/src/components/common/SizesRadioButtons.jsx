import { useState} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { useSelectedProductContext } from '../SelectedProductContext';

import './SizesRadioButtons.css';

function SizesRadioButtons() {
  const { updateSelectedProductSize } = useSelectedProductContext();
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'XS', value: '1' },
    { name: 'S', value: '2' },
    { name: 'M', value: '3' },
    { name: 'L', value: '4' },
    { name: 'XL', value: '5' },
    { name: 'XXL', value: '6' }
  ];

  const handleSizeChange = (sizeValue, sizeName) => {
    setRadioValue(sizeValue);
    updateSelectedProductSize(sizeName);
  };

  return (
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            className='size-button'
            id={`radio-${idx}`}
            type="radio"
            variant="light"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => handleSizeChange(radio.value, radio.name)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
  );
}

export default SizesRadioButtons;