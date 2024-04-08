import { Link } from 'react-router-dom';

interface PostListProps {
  hasNavigation?: boolean;
}

export default function PostList({hasNavigation = true}: PostListProps) {
  return (
    <>
      { hasNavigation && <div className="post__navagiation">
        <div className='post__navagiation--active'>전체글</div>
        <div>나의글</div>
      </div>}
      <div className="post__list">
        {/* 더미데이터를 이런식으로 [...Array(10)] .map(()) 으로 할 수도 있구나 */}
        {[...Array(10)].map((v,i) => {
          return (
            <div key={i+1} className="post__box">
              <Link to={`/posts/${i+1}`}>
                <div className="post__profile-box">
                  <div className='post__profile' />
                  <div className='post__author-name'>패스트캠퍼스</div>
                  <div className='post__date'>2024.04.08. 월요일</div>
                </div>
                <div className="post__title">게시글 {i+1}</div>
                <div className='post__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro unde dignissimos laboriosam temporibus natus sed quis ea voluptas ipsum provident facere, assumenda molestias. Laboriosam beatae placeat incidunt laudantium? Inventore adipisci a recusandae incidunt ipsam cupiditate dolor, tempora odit corrupti commodi reprehenderit, sapiente ducimus maxime quo distinctio! Expedita unde culpa rem, distinctio ex ut quasi harum officia illo totam qui labore fuga libero ipsa iusto esse sunt, accusantium nostrum fugit deserunt nobis repudiandae minus dolorum veritatis. Repudiandae laboriosam eveniet non molestiae minima veritatis, quidem omnis quia nulla cumque illum delectus explicabo assumenda perferendis ex quisquam reprehenderit doloremque repellat, sit nobis?
                </div>
                <div className="post__utils-box">
                  <div className="post__delete">삭제</div>
                  <div className="post__edit">수정</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}