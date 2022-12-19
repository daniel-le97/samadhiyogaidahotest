export function addOrSkip(arr, item) {
  let found = arr.find(i => i.id == item.id)
  if (!found) {
    arr.push(item)
  }
}
export function addOne(array, item){
  array = [item, ...array]
  return array
}
export function addMany(array, adding ,type){
  array =  adding.map(element => new type(element));
}
export function getDate(date) {
  return new Date(date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
export function getDateTime(date) {
  return new Date(date).toLocaleTimeString("en-Us", {
  
    hour: "2-digit",
    minute: "2-digit",
  });
}
