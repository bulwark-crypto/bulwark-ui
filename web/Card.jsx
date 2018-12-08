import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import { swiftEaseIn } from '../lib/Animations'

import Icon from './Icon'
import { white, borderRadius, cardPadding, gridGutter, fontSecondary, red } from '../lib/Theme'

const CardWrapper = styled.div`
  background-color: ${white};
  border-bottom: 10px;
  border-radius: ${borderRadius};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  transition: ${swiftEaseIn};
  
  :hover {
    box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.2);
  }

  ${props => props.image ? css`
    overflow: hidden;

    ${CardTitle} {
      border: 0;
      color: ${white};
      margin: 0;
      padding: 0;

      ${CardText} {
        bottom: ${cardPadding};
        left: ${cardPadding};
        position: absolute;
      }
    }

    img {
      border-top-left-radius: ${borderRadius};
      border-top-right-radius: ${borderRadius};
      height: min-content;
    }
  ` : ''}
`

// Card
export const Card = ({children, image, ...rest}) => (
  <CardWrapper image={image} {...rest}>
    {!!image && <img alt='' src={image} />}
    {children}
  </CardWrapper>
)

Card.propTypes = {
  children: PropTypes.any.isRequired,
  image: PropTypes.string
}

// Actions
export const CardActions = styled.div`
  padding: 0 ${cardPadding} ${cardPadding} ${cardPadding};
  position: relative;

  .row div:first {
    margin-left: 0;
    padding-left: 0;
  }

  button { margin: 0 ${gridGutter} 0 0; }
`

CardActions.propTypes = {
  children: PropTypes.any.isRequired
}

// Body
export const CardBody = styled.div`
  padding: ${cardPadding};

  ${props => props.nopadding ? 'padding: 0;' : ''}
`

CardBody.propTypes = {
  children: PropTypes.any.isRequired,
  nopadding: PropTypes.bool
}

const CardTitleWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-family: ${fontSecondary};
  font-size: 24px;
  font-weight: bold;
  padding: ${cardPadding};
  position: relative;

  i {
    color: ${red};
    font-size: 24px;
    position: absolute;
    right: ${cardPadding};
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
  }
`
const CardText = styled.span``

// styled() factory here to use on line 23
// Title
export const CardTitle = styled(({icon, title, ...rest}) => (
  <CardTitleWrapper {...rest}>
    <CardText>{title}</CardText>
    {icon && <Icon k={icon} />}
  </CardTitleWrapper>
))``

CardTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default {Card, CardActions, CardBody, CardTitle}
