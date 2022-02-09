import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { Card } from 'react-bootstrap'

const Menu = () => {
  return (
      <div className='wrapper'>
      <h2>Burger Menu</h2>
    <div className='menu-wrapper'>    
      <div className='card-container'>
      <Card>
          <Card.Title >The Full Monty</Card.Title>
          <Card.Subtitle>Devonshire home cooked Beef Burger</Card.Subtitle>
          <Card.Text>
                  <FaPlusCircle fontSize='25px' color='#ef7631' />
          </Card.Text>
              <ul>
                  <li> Smokey Bacon</li>
                  <li> Kerry-maid Irish Cheese</li>
                  <li> Sizzling Spanish Onions</li>
              </ul>
          <Card.Text className='text-bottom'>Served in a fresh baked seedy Bap</Card.Text>
      </Card>
      <Card>
          <Card.Title>Big Bang Wallop</Card.Title>
          <Card.Subtitle>Griddled Brimsdown Jumbo Sausage</Card.Subtitle>
          <Card.Text>
                <FaPlusCircle fontSize='25px' color='#ef7631'/>
          </Card.Text>
              <ul>
                  <li> Smokey Bacon</li>
                  <li> Kerry-maid Irish Cheese</li>
                  <li> Sizzling Spanish Onions</li>
              </ul>
          <Card.Text className='text-bottom'>Served in a fresh baked Baguette</Card.Text>
      </Card>
      <Card>
          <Card.Title>The Kibosh</Card.Title>
          <Card.Subtitle>Devonshire home cooked Beef Burger</Card.Subtitle>
          <Card.Text>
              <FaPlusCircle fontSize='25px' color='#ef7631'/>
          </Card.Text>
              <ul>
                  <li> Smokey Bacon</li>
                  <li> Kerry-maid Irish Cheese</li>
                  <li> Sizzling Spanish Onions</li>
                  <li> Hot Chips</li>
              </ul>
          <Card.Text className='text-bottom'>Served in a fresh baked seedy Bap</Card.Text>
      </Card>
      <Card>
          <Card.Title>The Kaboodle</Card.Title>
          <Card.Subtitle>Devonshire home cooked Double Beef Burger</Card.Subtitle>
          <Card.Text>
              <FaPlusCircle fontSize='25px' color='#ef7631'/>
          </Card.Text>
              <ul>
                  <li> Smokey Bacon</li>
                  <li> Kerry-maid Irish Cheese</li>
                  <li> Sizzling Spanish Onions</li>
                  <li> Golden Hash Brown</li>
              </ul>
          <Card.Text className='text-bottom'>Served in a fresh baked seedy Bap</Card.Text>
      </Card>
      <Card>
          <Card.Title>Chicken Caesar</Card.Title>
          <Card.Subtitle>Golden Bite Chicken Steak</Card.Subtitle>
          <Card.Text>
              <FaPlusCircle fontSize='25px' color='#ef7631' />
          </Card.Text>
              <ul>
                  <li> Smokey Bacon</li>
                  <li> Kerry-maid Irish Cheese</li>
                  <li> Sizzling Spanish Onions</li>
              </ul>
          <Card.Text className='text-bottom'>Served in a fresh baked seedy Bap</Card.Text>
      </Card>
      <Card>
          <Card.Title>Veggie Stack</Card.Title>
          <Card.Subtitle>Crispy Crumb Coated Veggie Burger</Card.Subtitle>
          <Card.Text>
              <FaPlusCircle fontSize='25px' color='#ef7631' />
          </Card.Text>
              <ul>
                  <li>Golden Hash Brown</li>
                  <li> Battered Onion Rings</li>
                  <li> Sizzling Spanish Onions</li>
              </ul>
          <Card.Text className='text-bottom'>Served in a fresh baked seedy Bap</Card.Text>
      </Card>
      </div>


  </div>
  </div>
  )
};

export default Menu;
