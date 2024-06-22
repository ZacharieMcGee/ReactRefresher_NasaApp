const Sidebar = ({ handleToggleModal, data }) => {

  return (
    <div className="sidebar">
      <div 
        className="bgOverlay" 
        onClick={handleToggleModal}>
      </div>
      <div className="sidebarContent">
        <h2>{data?.title}</h2>
        <div className="descContainer">
          <p className='descTitle'>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Sidebar