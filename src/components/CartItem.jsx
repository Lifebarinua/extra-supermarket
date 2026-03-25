import PropTypes from "prop-types";   // 👈 TOP of the file

function CartItem({ item, onRemove }) {
  return (
    <button onClick={() => onRemove(item.id)}>
      Remove
    </button>
  );
}

// 👇 AFTER the component function
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;   // 👈 BOTTOM of the file