import { productConstants } from "../constants";
const initialState = {
  products: [
    {
      productId: 1,
      descriptio: "edited prodlluct",
      amount: 888888,
      qantity: 989898,
    },
    {
      productId: 2,
      descriptio: "edited prodlluct",
      amount: 888888,
      qantity: 989898,
    },
  ],
  count: "",
};

export default function getProducts(state = initialState, action) {
  switch (action.type) {
    case productConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case productConstants.GET_SUCCESS:
      return {
        ...state,
        ...action,
        loaded: true,
      };
    case productConstants.GET_FAILURE:
      return {
        ...state,
        getError: action.error,
        loaded: false,
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
