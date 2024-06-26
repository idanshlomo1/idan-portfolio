
const loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Idan Shlomo</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>

    </div>
  )
}

export default loading
