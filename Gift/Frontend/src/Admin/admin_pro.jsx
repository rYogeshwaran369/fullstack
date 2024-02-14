import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Input,
  InputGroup,
  Table,
  Button,
  DOMHelper,
  Progress,
  Checkbox,
  Stack,
  SelectPicker
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import MoreIcon from '@rsuite/icons/legacy/More';
import DrawerView from './drawer';
import AdminNavbars from './data/AdminNav';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const ratingList = Array.from({ length: 5 }).map((_, index) => {
  return {
    value: index + 1,
    label: Array.from({ length: index + 1 })
      .map(() => '⭐️')
      .join('')
  };
});

const DataTable = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [sortColumn, setSortColumn] = useState(undefined);
  const [sortType, setSortType] = useState(undefined);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [rating, setRating] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the authentication token from localStorage or any other storage mechanism
        const authToken = localStorage.getItem("token");
        console.log(authToken) // Example: Retrieve token from localStorage
        // Set the request headers with the authentication token
        const headers = { Authorization: `Bearer ${authToken}` };

        // Make a GET request to the backend API endpoint with the authentication token
        const response = await axios.get("http://localhost:8181/api/v1/users/gift/all", { headers });
        
        // Check if the response contains the expected array of products
        console.log(response.data.data)
        if (Array.isArray(response.data.data)) {
          // Update state with the fetched products
          setData(response.data.data);
        } else {
          console.error("Error: Data received from API is not an array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); 


  let checked = false;
  let indeterminate = false;

  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }

  const handleCheckAll = (_value, checked) => {
    const keys = checked ? data.map(item => item.id) : [];
    setCheckedKeys(keys);
  };

  const handleCheck = (value, checked) => {
    const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
    setCheckedKeys(keys);
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const filteredData = () => {
    const filtered = data.filter(item => {
      if (!item.gift_name.includes(searchKeyword)) {
        return false;
      }

      if (rating && item.gift_rating !== rating) {
        return false;
      }

      return true;
    });

    if (sortColumn && sortType) {
      return filtered.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];

        if (typeof x === 'string') {
          x = x.charCodeAt(0);
        }
        if (typeof y === 'string') {
          y = y.charCodeAt(0);
        }

        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return filtered;
  };

  return (
    <>
    <div style={{backgroundColor:'white'}}>
      <AdminNavbars />
      <br />
      <Stack className="table-toolbar" justifyContent="space-between">
      <Button appearance="primary" onClick={() => setShowDrawer(!showDrawer)} style={{ display: 'block' }}>
  {showDrawer ? "Close Drawer" : "Add Product"}
</Button>
        <Stack spacing={6}>
          <SelectPicker
            label="Rating"
            data={ratingList}
            searchable={false}
            value={rating}
            onChange={setRating}
          />
          <InputGroup inside>
            <Input placeholder="Search" value={searchKeyword} onChange={setSearchKeyword} />
            <InputGroup.Addon>
              <SearchIcon />
            </InputGroup.Addon>
          </InputGroup>
        </Stack>
      </Stack>
      <br />
      <Table
        height={1000}
        data={filteredData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
      >
        <Column width={50} align="center" fixed>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={80}>
          <HeaderCell>Image</HeaderCell>
          <Cell>
            {rowData => (
              <img src={rowData.gift_image} alt="gift_image" style={{ width: '50px', height: '50px' }} />
            )}
          </Cell>
        </Column>
        <Column minWidth={160} flexGrow={1} sortable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="gift_name" />
        </Column>
        <Column minWidth={160} flexGrow={1} sortable>
          <HeaderCell>Price</HeaderCell>
          <Cell dataKey="gift_price" />
        </Column>
        <Column minWidth={160} flexGrow={1} sortable>
          <HeaderCell>Rating</HeaderCell>
          <Cell dataKey="gift_rating" />
        </Column>
        <Column minWidth={160} flexGrow={1} sortable>
          <HeaderCell>Category</HeaderCell>
          <Cell dataKey="gift_category" />
        </Column>
        <Column minWidth={160} flexGrow={1} sortable>
          <HeaderCell>Description</HeaderCell>
          <Cell dataKey="gift_desc" />
        </Column>
      </Table>
      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} />
      </div>
    </>
  );
};

export default DataTable;
