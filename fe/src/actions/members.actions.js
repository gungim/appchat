import { membersConstants } from "../constants/";
import memberServices from "../services/members.services";

export const getAllMember = (conversationId) => async (dispatch) => {
  return memberServices.getAllMember(conversationId).then(
    (data) => {
      dispatch({
        type: membersConstants.GET_ALL_MEMBER_SUCCESS,
        payload: { members: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: membersConstants.GET_ALL_MEMBER_FAILURE });

      return Promise.reject();
    }
  );
};
