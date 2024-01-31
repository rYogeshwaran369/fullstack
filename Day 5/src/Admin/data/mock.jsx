import React from 'react';
import { faker } from '@faker-js/faker/locale/en';

export function mockUsers(length) {
    const mockData = [
        {
            id: 1,
            name: 'John Doe',
            firstName: 'John',
            lastName: 'Doe',
            avatar: 'https://example.com/avatar1.png',
            city: 'New York',
            street: '123 Main St',
            postcode: '10001',
            email: 'john@example.com',
            phone: '123-456-7890',
            age: 30,
            stars: 5000,
            followers: 2000,
            rating: 4,
            progress: 80,
            amount: 50000
        },
        {
            id: 2,
            name: 'Jane Smith',
            firstName: 'Jane',
            lastName: 'Smith',
            avatar: 'https://example.com/avatar2.png',
            city: 'Los Angeles',
            street: '456 Elm St',
            postcode: '90001',
            email: 'jane@example.com',
            phone: '987-654-3210',
            age: 25,
            stars: 3000,
            followers: 1500,
            rating: 3,
            progress: 70,
            amount: 40000
        },
        {
            id: 2,
            name: 'Jane Smith',
            firstName: 'Jane',
            lastName: 'Smith',
            avatar: 'https://example.com/avatar2.png',
            city: 'Los Angeles',
            street: '456 Elm St',
            postcode: '90001',
            email: 'jane@example.com',
            phone: '987-654-3210',
            age: 25,
            stars: 3000,
            followers: 1500,
            rating: 3,
            progress: 70,
            amount: 40000
        },
        {
            id: 2,
            name: 'Jane Smith',
            firstName: 'Jane',
            lastName: 'Smith',
            avatar: 'https://example.com/avatar2.png',
            city: 'Los Angeles',
            street: '456 Elm St',
            postcode: '90001',
            email: 'jane@example.com',
            phone: '987-654-3210',
            age: 25,
            stars: 3000,
            followers: 1500,
            rating: 3,
            progress: 70,
            amount: 40000
        },
        {
            id: 2,
            name: 'Jane Smith',
            firstName: 'Jane',
            lastName: 'Smith',
            avatar: 'https://example.com/avatar2.png',
            city: 'Los Angeles',
            street: '456 Elm St',
            postcode: '90001',
            email: 'jane@example.com',
            phone: '987-654-3210',
            age: 25,
            stars: 3000,
            followers: 1500,
            rating: 3,
            progress: 70,
            amount: 40000
        },
        {
            id: 2,
            name: 'Jane Smith',
            firstName: 'Jane',
            lastName: 'Smith',
            avatar: 'https://example.com/avatar2.png',
            city: 'Los Angeles',
            street: '456 Elm St',
            postcode: '90001',
            email: 'jane@example.com',
            phone: '987-654-3210',
            age: 25,
            stars: 3000,
            followers: 1500,
            rating: 3,
            progress: 70,
            amount: 40000
        },
        {
            id: 2,
            name: 'Jane Smith',
            firstName: 'Jane',
            lastName: 'Smith',
            avatar: 'https://example.com/avatar2.png',
            city: 'Los Angeles',
            street: '456 Elm St',
            postcode: '90001',
            email: 'jane@example.com',
            phone: '987-654-3210',
            age: 25,
            stars: 3000,
            followers: 1500,
            rating: 3,
            progress: 70,
            amount: 40000
        },
    ];
    return length ? mockData.slice(0, length) : mockData;
}

export function mockTreeData(options) {
  const { limits, labels, getRowData } = options;
  const depth = limits.length;

  const data = [];
  const mock = (list, parentValue, layer = 0) => {
    const length = limits[layer];

    Array.from({ length }).forEach((_, index) => {
      const value = parentValue ? parentValue + '-' + (index + 1) : index + 1 + '';
      const children = [];
      const label = Array.isArray(labels) ? labels[layer] : labels;

      let row = {
        label: typeof label === 'function' ? label(layer, value, faker) : label + ' ' + value,
        value,
      };

      if (getRowData) {
        row = {
          ...row,
          ...getRowData(layer, value),
        };
      }

      list.push(row);

      if (layer < depth - 1) {
        row.children = children;
        mock(children, value, layer + 1);
      }
    });
  };

  mock(data);

  return data;
}
