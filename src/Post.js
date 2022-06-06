import useState from 'react';

function Post({ handleSaveData }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSaveData(form);
    console.log(form);
    setForm({
      name: '',
      email: '',
      phone: '',
      website: '',
    });
  };
  return (
    <>
      <div>고객 추가</div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={onChange}
              required
              placeholder='이름을 입력하세요'
            ></input>
          </label>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={onChange}
              required
              placeholder='이메일을 입력하세요'
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor='phone'>
            Phone
            <input
              type='text'
              name='phone'
              value={form.phone}
              onChange={onChange}
              required
              placeholder='휴대폰 번호를 입력하세요'
            ></input>
          </label>
          <label htmlFor='website'>
            Website
            <input
              type='text'
              name='website'
              value={form.website}
              onChange={onChange}
              required
              placeholder='사이트 주소를 입력하세요'
            ></input>
          </label>
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </>
  );
}
export default Post;
