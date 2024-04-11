export default function PostForm() {
  return (
    <form action="/post" method='POST' className='form'>
      <div className="form__block">
        <div className="form__title">
          <label htmlFor="title">제목</label>
          <input type="text" id='title' />
        </div>
        <div className="form__summary">
          <label htmlFor="summary">요약</label>
          <input type="text" id='summary' />
        </div>
        <div className="form__content">
          <label htmlFor="content">내용</label>
          <textarea id='content' />
        </div>
        <div className="form__btn">
          <input type="button" value="제출" />
        </div>
      </div>
    </form>
  );
}