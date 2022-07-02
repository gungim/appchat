import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllFriend } from '../../redux/actions/friends.actions';
import { BiMessageAdd } from 'react-icons/bi';
import { Scroll } from '../../styled';
import Search from './Search';

function Home() {
  const ref = useRef(null);
  const [searchKey, setSearchKey] = useState('');
  const [isShowSearch, setIsShowSearch] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const { friends, error, loading } = useSelector((state) => state.friends);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getAllFriend());
  }, [currentUser]);

  return (
    <div className="bg-slate-800 h-screen border-r border-r-gray-700">
      <div className="min-w-[235px]">
        <div className="flex flex-col min-h-screen h-full">
          <div className="w-full p-2 border-b border-b-gray-700">
            <input
              type="text"
              className="outline-none p-1 w-full bg-gray-900 placeholder:text-neutral-200 text-neutral-300 text-sm"
              placeholder="Bạn muốn tìm gì ?"
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
          <div className="flex-1 h-full w-full">
            <Scroll>
              <div
                className="ml-2 hover:bg-gray-600 p-1 rounded-md relative "
                ref={ref}
              >
                <div className="flex items-center">
                  <p className="text-white flex-1 cursor-default">
                    Tin nhắn trực tiếp
                  </p>
                  <BiMessageAdd
                    className="text-white text-xl cursor-pointer"
                    onClick={() => setIsShowSearch(true)}
                  />
                </div>
              </div>
              {friends?.map((f) => (
                <div
                  key={f._id}
                  className="ml-2 p-1 hover:bg-gray-600 rounded-md"
                >
                  <div className="flex items-center w-full ">
                    <Link
                      to="#"
                      className="whitespace-normal overflow-hidden flex items-center w-full"
                    >
                      <div className="w-8 h-8 mr-3">
                        <img
                          src="https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg"
                          alt=""
                          className="rounded-half "
                        />
                      </div>
                      <div>
                        <p className="text-white">{f.username}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Scroll>
          </div>
          <div className="p-3 border-t border-t-gray-700">
            <div>
              <p>User</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
          <Search
            onClickOutside={() => setIsShowSearch(false)}
            isShowSearch={isShowSearch}
            top={ref.current?.offsetTop}
            left={ref.current?.offsetLeft}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
