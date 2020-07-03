// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// Solution 1
function validate(node, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  if (!left && !right) return true;
  
  let isLeftValid = true;
  let isRightValid = true;
  if (left && left >= min && left <= max) isLeftValid = validate(left, min, node.value);
  if (right && right >= min && right <= max) isRightValid = validate(right, node.value, max);
  return isRightValid && isLeftValid;
}

//Solution 2
function validate(node, min = null, max = null) {
  if (min !== null && node.value < min) return false;
  if (max !== null && node.value > max) return false;
  if (left && !validate(left, min, node.value)) return false;
  if (right && !validate(right, node.value, max)) return false;
  return true;
}

module.exports = validate;
