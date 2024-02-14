import React, { useState } from 'react';
import { Drawer, Button, Form, Stack, InputGroup, Input, InputNumber, Slider, Rate } from 'rsuite';
import axios from 'axios';

const DrawerView = ({ onClose, ...rest }) => {
  const [giftData, setGiftData] = useState({
    gift_name: '',
    gift_price: '',
    gift_image: '',
    gift_rating: 0, // Assuming gift_rating will be a number (like 1, 2, 3, etc.) based on the Rating component usage
    gift_category: '',
    gift_desc: ''
  });

  const handleChange = (value, name) => {
    setGiftData({
      ...giftData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const authToken = localStorage.getItem("token");
      if (!authToken) {
        // Handle the case where the user is not authenticated
        console.error("User is not authenticated. Redirecting to login page...");
        // Perform redirection or display an error message to the user
        return;
      }
      
      // Set the request headers with the authentication token
      const headers = { Authorization: `Bearer ${authToken}` };
      console.log(giftData)
      // Send a POST request to your backend API endpoint
      const response = await axios.post('http://localhost:8181/api/v1/users/gift/add', giftData, headers);
      console.log('Gift added successfully:', response.data);
      onClose(); // Close the drawer after successful submission
    } catch (error) {
      console.error('Error adding gift:', error);
    }
  };
  

  return (
    <Drawer backdrop="static" size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Add a new gift</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={handleSubmit} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid onSubmit={handleSubmit}>
          <Stack justifyContent="space-between" style={{ marginBottom: 20 }}>
            <Form.Group>
              <Form.ControlLabel>Gift Name</Form.ControlLabel>
              <Input name="gift_name" value={giftData.gift_name} onChange={value => handleChange(value, 'gift_name')} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Gift Image URL</Form.ControlLabel>
              <Input name="gift_image" value={giftData.gift_image} onChange={value => handleChange(value, 'gift_image')} />
            </Form.Group>
          </Stack>
          <Form.Group>
            <Form.ControlLabel>Gift Price</Form.ControlLabel>
            <InputGroup style={{ width: '100%' }}>
              <InputGroup.Addon>$</InputGroup.Addon>
              <Input name="gift_price" value={giftData.gift_price} onChange={value => handleChange(value, 'gift_price')} style={{ width: '100%' }} />
            </InputGroup>
          </Form.Group>
          {/* <Form.Group>
            <Form.ControlLabel>Gift Rating</Form.ControlLabel>
            <Rate name="gift_rating" value={giftData.gift_rating} onChange={value => handleChange(value, 'gift_rating')} />
          </Form.Group> */}
          <Form.Group>
            <Form.ControlLabel>Gift Category</Form.ControlLabel>
            <Input name="gift_category" value={giftData.gift_category} onChange={value => handleChange(value, 'gift_category')} />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Gift Description</Form.ControlLabel>
            <Input name="gift_desc" value={giftData.gift_desc} onChange={value => handleChange(value, 'gift_desc')} componentClass="textarea" />
          </Form.Group>
          <h1 onClick={handleSubmit}>Submit</h1>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
