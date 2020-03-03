import { productConstants } from "redux/constants";
const initialState = {
  products: [],
  page: 0,
};

export default function getProducts(state = initialState, action) {
  switch (action.type) {
    case productConstants.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.GET_SUCCESS:
      return {
        ...state,
        products: action.payload.productResponseDtoList.filter(elem => Object.values(elem)),
        count: action.payload.totalElements,
        loaded: true,
      };
    case productConstants.GET_FAILURE:
      return {
        ...state,
        getError: action.error,
        loaded: false,
      };
    case productConstants.GET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case productConstants.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.ADD_SUCCESS:
      return {
        ...state,
        products: action.payload.productResponseDtoList.filter(elem => Object.values(elem)),
        count: action.payload.totalElements,
        loaded: true,
      };
    case productConstants.ADD_FAILURE:
      return {
        ...state,
        getError: action.error,
        loaded: false,
      };
    case productConstants.EDIT_REQUEST:
      return {
        ...state,
        editing: true,
      };
    case productConstants.EDIT_SUCCESS:
      return {
        ...state,
        products: action.payload.productResponseDtoList.filter(elem => Object.values(elem)),
        count: action.payload.totalElements,
        edited: true,
        loaded: true,
      };
    case productConstants.EDIT_FAILURE:
      return {
        ...state,
        edited: false,
      };
    case productConstants.DELETE_REQUEST:
      return {
        ...state,
        deleting: true,
      };
    case productConstants.DELETE_SUCCESS:
      return {
        ...state,
        products: state.products.filter((elem, index) => index !== action.payload.id),
        loaded: true,
      };
    case productConstants.DELETE_FAILURE:
      return {
        ...state,
        deleteError: action.error,
        deleted: false,
      };

    case productConstants.FILTER_REQUEST:
      return {
        ...state,
        filtering: true,
      };
    case productConstants.FILTER_SUCCESS:
      return {
        ...action.payload,
        filtered: true,
      };
    case productConstants.FILTER_FAILURE:
      return {
        ...state,
        filtered: false,
      };
    default:
      return {
        ...state,
      };
  }
}
