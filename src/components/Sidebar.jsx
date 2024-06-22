const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>Photo Name</h2>
        <div>
          <p>Description</p>
          <p>Body Text</p>
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Sidebar