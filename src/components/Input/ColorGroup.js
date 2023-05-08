import Input from './Input'
import { useState } from 'react'
import { ColorPaletteIcon } from '../../assets/icons/ColorPaletteIcon'
import { ntcName } from '../../helpers/colorHelpers'

export const ColorGroup = ({
  values,
  name = 'missing name',
  legend,
  currVal,
  onChange,
}) => {
  const NTC = ntcName(currVal)
  const [customColor, setcustomColor] = useState('#FFC0CB')

  const handleCustomColor = (e) => {
    setcustomColor(e.target.value)
    console.log(currVal)
    onChange(e)
  }
  console.log(currVal)
  return (
    <div className="radio-step-container">
      <fieldset className="colorgroup ">
        <legend>
          {legend ? legend : name}{' '}
          <div
            style={{
              margin: '10px 0',
              fontSize: 'smaller',
            }}
          >
            Closest name for selected color:{' '}
            <span
              style={{
                textDecoration: `underline ${currVal} 2px`,
                outline: `2px dotted ${currVal}`,
                outlineOffset: 2,
              }}
            >
              {NTC}
            </span>
          </div>
        </legend>
        {values.map((field, index) => (
          <Input
            name={name}
            type="radio"
            key={index}
            value={field.code}
            label={
              <>
                <div
                  style={{ backgroundColor: `${field.code}` }}
                  className="colorgroup-color"
                ></div>
                <div className="colorgroup-label-text">
                  {field.value}
                  <br />
                  {field.code}
                </div>
              </>
            }
            content={field}
            onChange={onChange}
            className={field.code === currVal ? 'colorgroup--selected' : ''}
          />
        ))}
        <Input
          name={name}
          label={
            <>
              <div className="colorgroup-colorpicker">
                <ColorPaletteIcon
                  fill={customColor === currVal ? `${currVal}` : '#ffffff'}
                />
              </div>
              <div className="colorgroup-label-text">
                Custom Color: <br />
                {currVal}
              </div>
            </>
          }
          type="color"
          onChange={handleCustomColor}
          className={`${customColor === currVal ? 'colorgroup--selected' : ''}`}
        />
      </fieldset>
    </div>
  )
}
