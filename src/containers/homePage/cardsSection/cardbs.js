import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap'
import styled from '@emotion/styled'

const StyledCard = styled(Card)`
  background-color: #ffffff;
  min-width: 300px;
  box-shadow: 3px 3px 25px 10px rgba(153, 153, 153, 0.33);
`
const StyledDrop = styled(DropdownToggle)`
  background-color: aquamarine;
  border: none;
`

const CardBs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)
  return (
    <div>
      <StyledCard className="w-25 my-5 rounded-3">
        <CardBody>
          <CardTitle className="display-3">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <Dropdown group isOpen={dropdownOpen} size="lg" toggle={toggle}>
          <StyledDrop caret>Dropdown</StyledDrop>
          <DropdownMenu>
            le text to build on the card title and make up the bulk of the car
          </DropdownMenu>
        </Dropdown>

        <img
          width="100%"
          src="https://images.unsplash.com/photo-1607408982589-36efc37f105c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80"
          alt="Card image cap"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            bulk of the card's content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </StyledCard>
    </div>
  )
}

export default CardBs
