import "./Cart.css";
import React, { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdDelete, MdPhotoSizeSelectActual, MdPhotoSizeSelectLarge } from "react-icons/md";
import { colors, responsiveFontSizes } from "@mui/material";


const ShoppingCart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Canon EOS R5 Camera",
      price: 3899,
      quantity: 1,
      imageUrl: "https://www.canon.com.au/-/media/images/canon/products/mirrorless-cameras/eos-r5-temp/1400x960-eos-r5-body-front.ashx",
    },
    {
      id: 2,
      name: "Nikon Z6 II Camera",
      price: 1999,
      quantity: 2,
      imageUrl: "https://www.jbhifi.com.au/cdn/shop/products/636758-Product-0-I-638209261848324417_029184b6-20c9-43c8-9f4e-61f4775826db.jpg?v=1685329517",
    },
  ]);

  // Function to update quantity
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove an item
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((row) => row.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ##############################

  const TAX_RATE = 0.10;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}


function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

function ItemSum(qty, unit){
  return qty * unit;  
}

function subtotal(items) {
  return items.reduce((sum, i) => sum + i, 0);
}


const invoiceSubtotal = subtotal(cartItems.map(item => ItemSum(item.quantity, item.price)));
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;


  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <TableContainer component={Paper} className = "itemsTable">
            <Table  aria-label="spanning table">
            <TableHead>
              <TableRow>
              <TableCell sx={{ width: "20%" }}></TableCell> {/* Image Column */}
              <TableCell sx={{ width: "20%" }}>Desc</TableCell>
              <TableCell sx={{ width: "15%" }} align="right">Unit</TableCell>
              <TableCell sx={{ width: "10%" }} align="right">Qty.</TableCell>
              <TableCell sx={{ width: "10%" }}></TableCell>
              <TableCell sx={{ width: "5%" }} align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <img className="cart-item-image"
                      src={row.imageUrl} 
                      alt={row.name} 
                      // style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 5 }}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.price.toFixed(2)}</TableCell>
                  <TableCell align="right">
                    <input className="qtyInput"
                      type="number"
                      min="1"
                      value={row.quantity}
                      onChange={(e) =>
                        handleQuantityChange(row.id, parseInt(e.target.value))
                      }
                    />
                  </TableCell>
                  <TableCell sx={{textAlign: "center"}}   >
                    <button className="remove-button" onClick={() => handleRemoveItem(row.id)}>
                    <MdDelete size={20} style={{ color: "black", transition: "color 0.2s ease" }} className="delete-icon" />
                    </button>
                  </TableCell>
                  <TableCell align="right">{ccyFormat(ItemSum(row.quantity, row.price))}</TableCell>
                </TableRow>
                ))}
                {/* <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="amtTable">
            <Table aria-label="amount table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align="left"><strong>Order Summary</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2} align="left">Subtotal</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} align="left">Tax ({`${(TAX_RATE * 100).toFixed(0)}%`})</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} align="left"><strong>Total</strong></TableCell>
                  <TableCell align="right"><strong>{ccyFormat(invoiceTotal)}</strong></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>



        </>
      )}
    </div>
  );
};

export default ShoppingCart;



          {/* <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <div className="cart-item-price">
                    <p>Price:</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="quantity-container">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div> */}