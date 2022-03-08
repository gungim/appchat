import React, { useState, useEffect } from "react";
import { Container, SideBar, SideBarContainer } from "../../styled/styled";
import {
  HeaderContent,
  HeaderContentWrapper,
  HeaderImg,
  PageWrap,
  Scroller,
  SearchHeader,
  SearchTitle,
  SearchSubTitle,
  SearchBox,
  SearchBoxInputWrapper,
  Input,
  GuildListSection,
  GuildList,
  Loaded,
  Card,
  CardHeader,
  Splash,
  GuildIcon,
  GuildInfo,
} from "./styled";
import headerImg from "../../images/colorful-3256055.jpg";
import { useDispatch, useSelector } from "react-redux";
import { searchDiscover } from "../../actions/searchDiscover.actions";
import ReactPaginate from "react-paginate";
import "./style.css";
import { Link } from "react-router-dom";

function Discover({}) {
  const [searchKey, setSearchKey] = useState("");
  const [offset, setOffSet] = useState(0);
  const { discover: discover } = useSelector((state) => state.discover);
  const dispatch = useDispatch();
  const limit = 12;
  const totalPage = Math.ceil(discover?.count / limit);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDiscover(searchKey, offset, limit));
  };

  useEffect(() => {
    dispatch(searchDiscover(searchKey, offset, limit));
  }, [offset]);
  const handlePageClick = (p) => {
    const page = parseInt(p.selected);
    setOffSet(page * 12);
  };
  return (
    <SideBar>
      <SideBarContainer>
        <header>
          <h1>Kham pha</h1>
        </header>
      </SideBarContainer>
      <PageWrap>
        <Scroller>
          <SearchHeader>
            <HeaderImg src={headerImg} alt="" />
            <HeaderContentWrapper>
              <HeaderContent>
                <SearchTitle>
                  Tìm những cộng đồng dành cho bạn trên Discord
                </SearchTitle>
                <SearchSubTitle>
                  Từ game cho đến âm nhạc và giáo dục, sẽ luôn có một nơi phù
                  hợp với bạn trên Discord.
                </SearchSubTitle>
                <Container>
                  <SearchBox>
                    <SearchBoxInputWrapper>
                      <form onSubmit={handleSubmit}>
                        <Input
                          placeholder="Khám phá các cộng đồng"
                          onChange={(e) => setSearchKey(e.target.value)}
                        />
                      </form>
                    </SearchBoxInputWrapper>
                  </SearchBox>
                </Container>
              </HeaderContent>
            </HeaderContentWrapper>
          </SearchHeader>
          <GuildListSection>
            <SearchTitle>Cộng đồng nổi bật</SearchTitle>
            <GuildList>
              {discover?.conversations.map((d) => (
                <Link to={`/channels/${d._id}`}>
                  <Loaded key={d._id}>
                    <Card>
                      <CardHeader>
                        <Splash>
                          <img
                            src={`http://localhost:8080/api/v1/conversations/avatar/${d._id}`}
                            alt=""
                          />
                        </Splash>
                        <GuildIcon>
                          <img
                            src={`http://localhost:8080/api/v1/conversations/avatar/${d._id}`}
                            alt=""
                          />
                        </GuildIcon>
                      </CardHeader>
                      <GuildInfo>
                        <div className="title">{d.name}</div>
                      </GuildInfo>
                    </Card>
                  </Loaded>
                </Link>
              ))}
            </GuildList>
          </GuildListSection>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </Scroller>
      </PageWrap>
    </SideBar>
  );
}

export default Discover;
