// import { productConstants } from "../constants";
// const initialState = {};

// export default function products(action, state = initialState) {
//   switch (action.type) {
//     case productConstants.ADD_REQUEST:
//       return {
//         loading: true,
//       };
//     case productConstants.ADD_SUCCESS:
//       return {
//         ...state,
//         ...action.payload,
//         loaded: true,
//       };
//     case productConstants.ADD_FAILURE:
//       return {
//         ...state,
//         getError: action.error,
//         loaded: false,
//       };
//     case productConstants.EDIT_REQUEST:
//       return {
//         ...state,
//         editing: true,
//       };
//     case productConstants.EDIT_SUCCESS:
//       return {
//         ...state,
//         ...action.payload,
//         edited: true,
//       };
//     case productConstants.EDIT_FAILURE:
//       return {
//         ...state,
//         edited: false,
//       };
//     case productConstants.DELETE_REQUEST:
//       return {
//         ...state,
//         deleting: true,
//       };
//     case productConstants.DELETE_SUCCESS:
//       return {
//         products: action.payload,
//         deleted: true,
//       };
//     case productConstants.DELETE_FAILURE:
//       return {
//         ...state,
//         deleteError: action.error,
//         deleted: false,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// }
