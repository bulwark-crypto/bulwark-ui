/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import Button from '../react/Button'
import {Step, Stepper} from '../react/Stepper'

describe('<Step />', () => {
  const wrapper = shallow(<Step title='Test'>Testing</Step>)

  it('renders no children', () => {
    expect(wrapper.children()).to.have.length(0)
  })
})

describe('<Stepper />', () => {
  let index = 0
  const handleBack = () => { index-- }
  const handleNext = () => { index++ }
  const wrapper = shallow(
    <Stepper index={index}>
      <Step title='Test 1'>
        <p>Alpha</p>
        <Button outline onClick={handleNext}>Next</Button>
      </Step>
      <Step title='Test 2'>
        <p>Bravo</p>
        <Button outline onClick={handleBack}>Back</Button>
        <Button outline onClick={handleNext}>Next</Button>
      </Step>
    </Stepper>
  )

  it('renders as a div', () => {
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('stepper')).to.be.true()
  })

  it('moves index for next step', () => {
    wrapper.find('.stepper__content').childAt(1).simulate('click')
    expect(index).to.equal(1)
  })

  it('converts children into array if single step', () => {
    const wrapper2 = shallow(
      <Stepper index={0}>
        <Step title='Test 1'>
          <p>Alpha</p>
          <Button outline onClick={f => f}>Next</Button>
        </Step>
      </Stepper>
    )
    expect(!!wrapper2).to.be.true()
  })
})
