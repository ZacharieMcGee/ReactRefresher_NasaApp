const Sidebar = (props) => {
  const { handleToggleModal } = props
  return (
    <div className="sidebar">
      <div 
        className="bgOverlay" 
        onClick={handleToggleModal}>
      </div>
      <div className="sidebarContent">
        <h2>Photo Name</h2>
        <div>
          <p>Description</p>
          <p>Body Text</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Sidebar