export const IS_BOOLEAN = 'IS_BOOLEAN';


// ------------------------------------
// Actions
// ------------------------------------

export function isBoolean (boolean){
  console.log(111)
  return {
    type : IS_BOOLEAN,
    isBoolean : boolean,
  }
}
