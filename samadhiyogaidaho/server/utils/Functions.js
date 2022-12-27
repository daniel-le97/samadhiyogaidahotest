/**
 * @param {Object} newData data to replace existing fields
 * @param {object} originalData old data to update
 */
export async function update(newData, originalData) {
  for (const key in newData) {
    if (originalData[key]) {
      originalData[key] = newData[key] ? newData[key] : originalData[key];
    }
  }
  return originalData;
}
