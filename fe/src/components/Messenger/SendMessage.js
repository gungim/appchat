import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../redux/actions/message.actions";
import { ImCancelCircle } from "react-icons/im";

const SendMessage = ({ replyMessage, setReplyMessage }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { guildId, channelId } = useParams();
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");
  const sendMess = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      dispatch(
        sendMessage({
          user: currentUser.user.id,
          text: newMessage,
          channel: channelId,
          replyId: replyMessage,
        })
      );
    }
  };

  const handleChangeText = (e) => {
    if (e) setNewMessage(e.target.value);
  };

  return (
    <div className="px-4">
      {replyMessage && (
        <div className="py-4 px-4 bg-gray-800 flex items-center justify-between border-t border-l border-r border-t-slate-600 border-r-slate-600 border-l-slate-600">
          <div className="text-white flex">
            <p className="mr-2">Đang trả lời: </p>
            {replyMessage.text}
          </div>
          <div className="text-red-400">
            <ImCancelCircle  onClick={()=>setReplyMessage(null)}/>
          </div>
        </div>
      )}
      <form onSubmit={sendMess} className="flex w-full">
        <textarea
          onChange={handleChangeText}
          placeholder="Bạn muốn nói gì?"
          className="outline-none w-full min-h-[100px] px-4 py-2 bg-gray-900 border-none rounded-lg text-white"
        />
        <button type="submit" className="ml-3 text-white">
          send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
