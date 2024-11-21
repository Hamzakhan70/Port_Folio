import  { useState } from 'react';
import './index.css'; // Import the CSS file

const FormWithMappedSelects = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    terms: false,
    file: null,
    category: '',
    tags: []
  });

  const [categoryOptions] = useState([
    'Technology', 'Science', 'Health', 'Business', 'Sports'
  ]);
  
  const [tagOptions] = useState([
    'React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Frontend', 'Backend'
  ]);

  const handleChange = (e:any) => {
    const { name, value, type, checked, files } = e.target;
    console.log('this is form data==',formData);
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'select-multiple') {
      const selectedOptions = Array.from(e.target.selectedOptions, (option:any) => option.value);
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Terms and Conditions:</label>
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          className="checkbox"
        />
      </div>

      <div className="form-group">
        <label>Upload File:</label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option  value="">Select a category</option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Tags (Select multiple):</label>
        <select
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="form-select"
          multiple
          required
        >
          {tagOptions.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default FormWithMappedSelects;
