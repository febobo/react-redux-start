export const IS_BOOLEAN = 'IS_BOOLEAN';


// ------------------------------------
// Actions
// ------------------------------------

export function isBoolean (boolean){
  return {
    type : IS_BOOLEAN,
    isBoolean : boolean,
  }
}
