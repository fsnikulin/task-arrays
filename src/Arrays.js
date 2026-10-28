export function arraySorting(data) {
return data.split(',').map(Number).sort((a, b) => a - b).join(',');
}

export function arrayFiltering(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] <= 100) {
      result.push(data[i]);
    }
  }
  return result;
}

export function arrayPushing(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i], array2[i]);
  }
  return result;
}

