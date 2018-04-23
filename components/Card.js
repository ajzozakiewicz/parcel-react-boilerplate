import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import image from './../static/john_snow.png'

const CardExampleCard = () => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>
        John Snow
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined 2016
        </span>
      </Card.Meta>
      <Card.Description>
        Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard