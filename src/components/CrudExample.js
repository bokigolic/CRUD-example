const CrudExample = () => {
  return (
    <div>
      <form id="form">
        <label for="name">Name </label>
        <input
          name="name"
          type="text"
        />&nbsp;
        <label>Quantity </label>
        <input
          name="quantity"
          type="number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};
export default CrudExample;