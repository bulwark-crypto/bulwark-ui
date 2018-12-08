import {keyframes, css} from 'styled-components'
import {rgba} from 'polished'

export const pulse = color => keyframes`
  0% { box-shadow: 0 0 0 0 ${rgba(color, 0.4)}; }
  70% { box-shadow: 0 0 0 10px ${rgba(color, 0)}; }
  100% { box-shadow: 0 0 0 0 ${rgba(color, 0)}; }
`

export const ripple = keyframes`
  0% {
    opacity: 1;
    transform: scale(0, 0);
  }
  20% {
    opacity: 1;
    transform: scale(25, 25);
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
`

export const easeOutQuad = css`cubic-bezier(0.250, 0.460, 0.450, 0.940);`
export const bounce = css`cubic-bezier(0.175, 0.885, 0.32, 1.275);`

const swiftEaseOutDuration = css`0.4s`
const swiftEaseOutTimingFunction = css`cubic-bezier(0.25, 0.8, 0.25, 1);`
export const swiftEaseOut = css`all ${swiftEaseOutDuration} ${swiftEaseOutTimingFunction};`

const swiftEaseInDuration = css`0.3s;`
const swiftEaseInTimingFunction = css`cubic-bezier(0.55, 0, 0.55, 0.2);`
export const swiftEaseIn = css`all ${swiftEaseInDuration} ${swiftEaseInTimingFunction};`

const swiftEaseInOutDuration = css`0.5s;`
const swiftEaseInOutTimingFunction = css`cubic-bezier(0.35, 0, 0.25, 1);`
export const swiftEaseInOut = css`all ${swiftEaseInOutDuration} ${swiftEaseInOutTimingFunction};`

const swiftLinearDuration = css`0.08s;`
const swiftLinearTimingFunction = css`linear;`
export const swiftLinear = css`all ${swiftLinearDuration} ${swiftLinearTimingFunction};`

const materialEnterDuration = css`0.3s;`
const materialEnterTimingFunction = css`cubic-bezier(0.0, 0.0, 0.2, 1);`
export const materialEnter = css`all ${materialEnterDuration} ${materialEnterTimingFunction};`

const materialLeaveDuration = css`0.3s;`
const materialLeaveTimingFunction = css`cubic-bezier(0.4, 0.0, 1, 1);`
export const materialLeave = css`all ${materialLeaveDuration} ${materialLeaveTimingFunction};`

export const animationProgressbar = css`all 1s ${swiftEaseInTimingFunction} .1s;`

export const animationSelectItem = css`opacity .15s ${swiftEaseInTimingFunction} .4s;`

export const animationModalContainer = css`all ${swiftEaseInOutDuration} ${swiftEaseInOutTimingFunction} .1s;`

export const animationStepper = css`background-color ${swiftEaseInDuration} ${swiftEaseInTimingFunction} 0s;`
