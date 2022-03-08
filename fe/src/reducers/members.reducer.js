import { membersConstants } from "../constants";
const initialState = [];

const membersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case membersConstants.GET_ALL_MEMBER_SUCCESS:
      return {
        ...state,
        members: payload.members,
      };
    case membersConstants.GET_ALL_MEMBER_FAILURE:
      return {
        ...state,
        members: null,
      };

    default:
      return {
        ...state,
        members: null,
      };
  }
};

export default membersReducer;
