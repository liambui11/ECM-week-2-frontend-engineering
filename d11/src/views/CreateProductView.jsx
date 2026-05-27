import useProductForm from './useProductForm';
import './CreateProductView.css';

export default function CreateProductView() {
  const { 
    formData, touched, errors, isSubmitting, submitSuccess, hasErrors, 
    handleChange, handleBlur, handleSubmit 
  } = useProductForm();

  return (
    <div className="view-container form-page">
      <h2>Create New Architectural Product</h2>
      
      {submitSuccess && <div className="alert-success">✓ Registered to remote ledger!</div>}
      {hasErrors && <div className="alert-danger">⚠ Validation failed. Check individual field constraints.</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Product Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} className={touched.name && errors.name ? "input-error" : ""} />
          {touched.name && errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea name="desc" value={formData.desc} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} className={touched.desc && errors.desc ? "input-error" : ""} />
          {touched.desc && errors.desc && <span className="error-msg">{errors.desc}</span>}
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Price ($) *</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} className={touched.price && errors.price ? "input-error" : ""} />
            {touched.price && errors.price && <span className="error-msg">{errors.price}</span>}
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select name="category" value={formData.category} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} className={touched.category && errors.category ? "input-error" : ""}>
              <option value="">-- Select Category --</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Stationery">Stationery</option>
            </select>
            {touched.category && errors.category && <span className="error-msg">{errors.category}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>Tags (Comma separated)</label>
          <input type="text" name="tags" value={formData.tags} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} />
        </div>

        <div className="form-group">
          <label>Secured Image URL *</label>
          <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} className={touched.imageUrl && errors.imageUrl ? "input-error" : ""} />
          {touched.imageUrl && errors.imageUrl && <span className="error-msg">{errors.imageUrl}</span>}
        </div>

        <button type="submit" disabled={isSubmitting || hasErrors} className="submit-form-btn">
          {isSubmitting ? "Uploading Specifications (5s)..." : "Register Product"}
        </button>
      </form>
    </div>
  );
}